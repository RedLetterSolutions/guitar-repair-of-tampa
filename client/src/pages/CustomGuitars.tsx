import { useState } from "react";
import SEOHead from "@/components/common/SEOHead";
import ModelCard from "@/components/common/ModelCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";


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
    imageUrl: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
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
    imageUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
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
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

export default function CustomGuitars() {
  const [selectedModel, setSelectedModel] = useState<string>("");

  const handleModelInquiry = (modelName: string) => {
    setSelectedModel(modelName);
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
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
                src="https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
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
