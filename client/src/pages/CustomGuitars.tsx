import { useState } from "react";
import SEOHead from "@/components/common/SEOHead";
import ModelCard from "@/components/common/ModelCard";
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
import { CheckCircle } from "lucide-react";

const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  modelType: z.string().optional(),
  budgetRange: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  consent: z.boolean().refine(val => val === true, "You must consent to be contacted"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Crackercaster Custom Guitars",
  "description": "Custom guitars featuring woods indigenous to Florida, handcrafted with premium local materials.",
  "brand": {
    "@type": "Organization",
    "name": "Guitar Repair of Tampa Bay"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/PreOrder",
    "priceRange": "$2000-$5000",
    "priceCurrency": "USD"
  }
};

const models = [
  {
    name: "Crackercaster T",
    description: "Classic T-style design featuring Florida cypress body with rich, warm tones perfect for country, rock, and blues.",
    features: [
      "Florida cypress body",
      "Maple neck",
      "Custom pickup configuration", 
      "Professional setup included"
    ],
    imageUrl: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Crackercaster S",
    description: "Modern S-style design with Florida pine body delivering bright, articulate tones ideal for rock, pop, and funk.",
    features: [
      "Florida pine body",
      "Maple neck with rosewood board",
      "Three single-coil pickups",
      "Tremolo bridge system"
    ],
    imageUrl: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Crackercaster 5-String Bass",
    description: "Extended range bass featuring Florida oak body with deep, resonant tones perfect for modern music styles.",
    features: [
      "Florida oak body",
      "5-string configuration",
      "Active electronics",
      "35\" scale length"
    ],
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

export default function CustomGuitars() {
  const [selectedModel, setSelectedModel] = useState<string>("");
  const { toast } = useToast();

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      modelType: "",
      budgetRange: "",
      description: "",
      consent: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InquiryFormData) => {
      return apiRequest("POST", "/api/custom-guitar-inquiries", data);
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent!",
        description: "We'll review your custom guitar inquiry and get back to you soon.",
      });
      form.reset();
      setSelectedModel("");
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleModelInquiry = (modelName: string) => {
    setSelectedModel(modelName);
    form.setValue("modelType", modelName.toLowerCase().replace(/\s+/g, "-"));
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = (data: InquiryFormData) => {
    submitMutation.mutate(data);
  };

  return (
    <>
      <SEOHead
        title="Crackercaster Custom Guitars - Florida Wood Instruments"
        description="Custom guitars featuring woods indigenous to Florida. Handcrafted instruments with unique tone and exceptional craftsmanship. Request a custom build quote."
        structuredData={structuredData}
      />

      <div className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Crackercaster Custom Guitars
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the unique tone and beauty of custom guitars crafted from woods indigenous to Florida. 
              Each Crackercaster is built to your specifications with unparalleled attention to detail.
            </p>
          </div>

          {/* Florida Woods Concept */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Florida Indigenous Woods</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our Crackercaster guitars showcase the natural beauty and unique tonal characteristics of woods native to Florida. 
                Each piece of wood tells a story of the Sunshine State's rich biodiversity.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Sustainable Sourcing", desc: "Responsibly harvested from local Florida sources" },
                  { title: "Unique Tonal Properties", desc: "Each wood species contributes distinct sonic characteristics" },
                  { title: "Visual Beauty", desc: "Natural grain patterns and coloration unique to Florida" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://pixabay.com/get/g2911f417ef66e257a108439a8ee0d45bf20a12902693982b1ee559e25375eb450fd667d6e801de9926910b885e3136a9c06a1ce2357db146213b60235293c9eb_1280.jpg"
                alt="Beautiful wood grain patterns on custom guitar"
                className="rounded-xl shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Model Cards */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Crackercaster Models</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {models.map((model) => (
                <ModelCard
                  key={model.name}
                  {...model}
                  onInquire={() => handleModelInquiry(model.name)}
                />
              ))}
            </div>
          </div>

          {/* Build Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Build Process</h2>
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Consultation", desc: "Discuss your vision, playing style, and tonal preferences with our master builders." },
                { step: "2", title: "Specification", desc: "Design the perfect instrument with custom specifications tailored to your needs." },
                { step: "3", title: "Build", desc: "Expert craftsmanship brings your custom guitar to life using finest materials." },
                { step: "4", title: "Setup", desc: "Professional setup ensures optimal playability and intonation for your instrument." },
                { step: "5", title: "Delivery", desc: "Receive your completed custom guitar with full documentation and care instructions." }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div id="inquiry-form" className="bg-muted/50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">Start Your Custom Build</h2>
              
              {selectedModel && (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                  <p className="text-accent font-medium">Selected Model: {selectedModel}</p>
                </div>
              )}

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-name">Name *</Label>
                    <Input
                      id="inquiry-name"
                      {...form.register("name")}
                      className="form-input"
                      placeholder="Your full name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-email">Email *</Label>
                    <Input
                      id="inquiry-email"
                      type="email"
                      {...form.register("email")}
                      className="form-input"
                      placeholder="your@email.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-phone">Phone</Label>
                    <Input
                      id="inquiry-phone"
                      type="tel"
                      {...form.register("phone")}
                      className="form-input"
                      placeholder="(813) 555-0123"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="model-type">Model Interest</Label>
                    <Select onValueChange={(value) => form.setValue("modelType", value)}>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="crackercaster-t">Crackercaster T</SelectItem>
                        <SelectItem value="crackercaster-s">Crackercaster S</SelectItem>
                        <SelectItem value="crackercaster-bass">5-String Bass</SelectItem>
                        <SelectItem value="custom">Custom Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget-range">Budget Range</Label>
                  <Select onValueChange={(value) => form.setValue("budgetRange", value)}>
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
                      <SelectItem value="3000-4000">$3,000 - $4,000</SelectItem>
                      <SelectItem value="4000-5000">$4,000 - $5,000</SelectItem>
                      <SelectItem value="5000+">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry-description">Describe Your Vision *</Label>
                  <Textarea
                    id="inquiry-description"
                    {...form.register("description")}
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Tell us about your dream guitar - playing style, tonal preferences, visual inspiration, etc."
                  />
                  {form.formState.errors.description && (
                    <p className="text-destructive text-sm">{form.formState.errors.description.message}</p>
                  )}
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="inquiry-consent"
                    checked={form.watch("consent")}
                    onCheckedChange={(checked) => form.setValue("consent", checked as boolean)}
                  />
                  <Label htmlFor="inquiry-consent" className="text-sm leading-relaxed">
                    I agree to be contacted regarding my custom guitar inquiry *
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
                    {submitMutation.isPending ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
