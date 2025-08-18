import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Upload, X } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  instrumentType: z.string().optional(),
  serviceType: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  consent: z.boolean().refine(val => val === true, "You must consent to be contacted"),
  // honeypot field
  website: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  formType?: "contact" | "quote";
  title?: string;
  showFileUpload?: boolean;
}

export default function ContactForm({ 
  formType = "contact", 
  title,
  showFileUpload = true 
}: ContactFormProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      instrumentType: "",
      serviceType: "",
      description: "",
      consent: false,
      website: "", // honeypot
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      // Check honeypot
      if (data.website) {
        throw new Error("Spam detected");
      }

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key !== "website" && value !== undefined) {
          formData.append(key, value.toString());
        }
      });

      // Add files
      selectedFiles.forEach((file, index) => {
        formData.append(`images`, file);
      });

      const endpoint = formType === "quote" ? "/api/quotes" : "/api/contact";
      return apiRequest("POST", endpoint, formData);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });
      form.reset();
      setSelectedFiles([]);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      const isValidType = file.type.startsWith('image/');
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
      return isValidType && isValidSize;
    });

    if (validFiles.length !== files.length) {
      toast({
        title: "Invalid files",
        description: "Some files were rejected. Only images under 10MB are allowed.",
        variant: "destructive",
      });
    }

    setSelectedFiles(prev => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  const defaultTitle = formType === "quote" ? "Get Your Quote" : "Contact Us";

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title || defaultTitle}
        </h2>
        <p className="text-xl text-muted-foreground">
          Tell us about your instrument and we'll provide a detailed estimate
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-muted/50 rounded-2xl p-8 space-y-6">
        {/* Honeypot field */}
        <input
          type="text"
          {...form.register("website")}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              {...form.register("name")}
              className="form-input"
              placeholder="Your full name"
            />
            {form.formState.errors.name && (
              <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              className="form-input"
              placeholder="your.email@example.com"
            />
            {form.formState.errors.email && (
              <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              {...form.register("phone")}
              className="form-input"
              placeholder="(813) 555-0123"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instrument-type">Instrument Type</Label>
            <Select onValueChange={(value) => form.setValue("instrumentType", value)}>
              <SelectTrigger className="form-input">
                <SelectValue placeholder="Select instrument type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="acoustic-guitar">Acoustic Guitar</SelectItem>
                <SelectItem value="electric-guitar">Electric Guitar</SelectItem>
                <SelectItem value="bass">Bass</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="service-type">Service Type</Label>
          <Select onValueChange={(value) => form.setValue("serviceType", value)}>
            <SelectTrigger className="form-input">
              <SelectValue placeholder="Select service needed" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="setup">Setup</SelectItem>
              <SelectItem value="fretwork">Fretwork</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="structural">Structural Repair</SelectItem>
              <SelectItem value="custom">Custom Guitar</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description *</Label>
          <Textarea
            id="description"
            {...form.register("description")}
            rows={4}
            className="form-input resize-none"
            placeholder="Please describe the issue, desired work, or any specific details about your instrument..."
          />
          {form.formState.errors.description && (
            <p className="text-destructive text-sm">{form.formState.errors.description.message}</p>
          )}
        </div>

        {showFileUpload && (
          <div className="space-y-2">
            <Label htmlFor="images">Upload Images (Optional)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <input
                type="file"
                id="images"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="images" className="cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-muted-foreground mb-2">Click to upload photos of your instrument</p>
                <p className="text-sm text-muted-foreground">JPG, PNG, or WEBP (Max 10MB each, 5 files max)</p>
              </label>
            </div>

            {selectedFiles.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium">Selected files:</p>
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-background p-2 rounded border">
                    <span className="text-sm truncate">{file.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="h-8 w-8 p-0"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex items-start space-x-2">
          <Checkbox
            id="consent"
            checked={form.watch("consent")}
            onCheckedChange={(checked) => form.setValue("consent", checked as boolean)}
          />
          <Label htmlFor="consent" className="text-sm leading-relaxed">
            I consent to Guitar Repair of Tampa Bay contacting me about my repair inquiry via email or phone. *
          </Label>
        </div>
        {form.formState.errors.consent && (
          <p className="text-destructive text-sm">{form.formState.errors.consent.message}</p>
        )}

        <div className="text-center">
          <Button
            type="submit"
            disabled={submitMutation.isPending}
            className="btn-primary w-full md:w-auto"
          >
            {submitMutation.isPending ? "Sending..." : "Send Quote Request"}
          </Button>
        </div>
      </form>
    </div>
  );
}
