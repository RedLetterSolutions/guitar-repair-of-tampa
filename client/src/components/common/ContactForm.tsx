import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useCallback, useRef, useState } from "react";

interface ContactFormProps {
  title?: string;
  formType?: "contact" | "quote" | string;
  showFileUpload?: boolean;
}

export default function ContactForm({ title, formType, showFileUpload }: ContactFormProps) {
  const heading = title || "Contact Us";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitRef = useRef<HTMLButtonElement | null>(null);

  // Client-side guard to prevent accidental multiple submissions (e.g., double click, Enter key repeat)
  const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>((e) => {
    const form = e.currentTarget;
    if (isSubmitting) {
      // Already submitting - block duplicate
      e.preventDefault();
      return;
    }
    setIsSubmitting(true);
    // Let the native submit proceed; external script will handle AJAX / redirect.
    // Add a safety timeout to re-enable after 10s in case network script fails.
    setTimeout(() => { setIsSubmitting(false); }, 10000);
  }, [isSubmitting]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{heading}</h2>
        <p className="text-xl text-secondary">Tell us about your instrument and we'll provide a detailed estimate</p>
      </div>
      <form
        data-rls-contact="guitar_repair_of_tampa_bay"
        method="post"
        noValidate
        onSubmit={handleSubmit}
        className="bg-background rounded-2xl p-8 space-y-6 shadow-strong border border-wood-light"
      >
        {/* Honeypot field */}
        <input type="text" name="_hp" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
        {/* Form type (helps backend categorize) */}
        {formType && <input type="hidden" name="formType" value={formType} />}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" name="name" required className="form-input" placeholder="Your full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required className="form-input" placeholder="your.email@example.com" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" className="form-input" placeholder="(813) 555-0123" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="instrumentType">Instrument Type</Label>
            <Input id="instrumentType" name="instrumentType" className="form-input" placeholder="(e.g. Electric Guitar)" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type</Label>
          <Input id="serviceType" name="serviceType" className="form-input" placeholder="Setup, Fretwork, Electronics..." />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Description *</Label>
          <Textarea id="message" name="message" required rows={4} className="form-input resize-none" placeholder="Please describe the issue, desired work, or any specific details about your instrument..." />
        </div>
        {showFileUpload && (
          <div className="space-y-2">
            <Label htmlFor="attachment">Attach Photos (optional)</Label>
            <Input id="attachment" name="attachments" type="file" multiple accept="image/*" className="form-input" />
            <p className="text-xs text-muted-foreground">You can attach reference or issue photos (images only).</p>
          </div>
        )}
        <div className="text-center">
          <Button
            ref={submitRef}
            type="submit"
            className="btn-primary w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </Button>
        </div>
      </form>
    </div>
  );
}
