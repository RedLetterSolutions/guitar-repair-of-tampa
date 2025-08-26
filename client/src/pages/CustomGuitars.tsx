import SEOHead from "@/components/common/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Custom Guitars",
  "description": "Professional custom guitar building services with handcrafted premium instruments tailored to your specifications.",
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


export default function CustomGuitars() {

  return (
    <>
      <SEOHead
        title="Custom Guitars - Professional Guitar Building Services"
        description="Professional custom guitar building services. Handcrafted instruments with exceptional craftsmanship tailored to your specifications. Request a custom build quote."
        structuredData={structuredData}
      />

      <div className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Custom Guitars
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the unique tone and beauty of custom guitars built to your exact specifications. 
              Each instrument is crafted with unparalleled attention to detail and premium materials.
            </p>
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
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">Request a Custom Guitar Quote</h2>
              

  <form
    data-rls-contact="guitar_repair_of_tampa_bay"
    method="post"
    noValidate
    className="space-y-6"
    onSubmit={(e) => {
      const form = e.currentTarget as HTMLFormElement & { __submitting?: boolean };
      if (form.__submitting) {
        e.preventDefault();
        return;
      }
      form.__submitting = true;
      const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
      if (btn) {
        btn.disabled = true;
        const original = btn.textContent;
        btn.dataset.originalText = original || '';
        btn.textContent = 'Submitting...';
      }
      setTimeout(() => {
        // Safety unlock after 12s if backend doesn't respond (avoids permanent lock)
        if (form.__submitting) {
          form.__submitting = false;
          const btn2 = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
          if (btn2 && btn2.dataset.originalText) {
            btn2.disabled = false;
            btn2.textContent = btn2.dataset.originalText;
          }
        }
      }, 12000);
    }}
  >
        <input type="text" name="_hp" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
        <input type="hidden" name="formType" value="custom-guitar-inquiry" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-name">Name *</Label>
        <Input id="inquiry-name" name="name" required className="form-input" placeholder="Your full name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-email">Email *</Label>
                    <Input id="inquiry-email" name="email" type="email" required className="form-input" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-phone">Phone</Label>
                    <Input id="inquiry-phone" name="phone" type="tel" className="form-input" placeholder="(813) 555-0123" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="model-type">Model Interest</Label>
                    <Select onValueChange={(value) => { const hidden = document.getElementById('modelTypeHidden') as HTMLInputElement | null; if (hidden) hidden.value = value; }}>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electric-guitar">Electric Guitar</SelectItem>
                        <SelectItem value="acoustic-guitar">Acoustic Guitar</SelectItem>
                        <SelectItem value="bass-guitar">Bass Guitar</SelectItem>
                        <SelectItem value="custom-design">Custom Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget-range">Budget Range</Label>
                  <Select onValueChange={(value) => { const hidden = document.getElementById('budgetRangeHidden') as HTMLInputElement | null; if (hidden) hidden.value = value; }}>
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
                    name="message"
                    required
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Tell us about your dream guitar - playing style, tonal preferences, visual inspiration, etc."
                  />
                </div>
                <input type="hidden" id="modelTypeHidden" name="modelType" />
                <input type="hidden" id="budgetRangeHidden" name="budgetRange" />
                <div className="space-y-2">
                  <Label htmlFor="inquiry-attachments">Reference Photos (optional)</Label>
                  <Input id="inquiry-attachments" name="attachments" type="file" accept="image/*" multiple className="form-input" />
                  <p className="text-xs text-muted-foreground">Attach inspiration or instrument photos (images only).</p>
                </div>

                <div className="text-sm text-muted-foreground">We'll contact you about your inquiry. By submitting, you consent to communication via email/phone.</div>

                <div className="text-center">
                  <Button type="submit" className="btn-primary w-full md:w-auto">Submit Inquiry</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
