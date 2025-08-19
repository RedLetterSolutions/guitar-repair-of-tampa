import SEOHead from "@/components/common/SEOHead";
import ContactForm from "@/components/common/ContactForm";
import { CheckCircle } from "lucide-react";

export default function Quote() {
  return (
    <>
      <SEOHead
        title="Request a Quote - Guitar Repair of Tampa Bay"
        description="Get a detailed quote for your guitar repair needs. Fast, professional service with transparent pricing from Tampa Bay's premier guitar repair shop."
      />

      <div className="section-padding bg-muted/50">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Request Your Free Quote
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get a detailed estimate for your guitar repair or custom build. Our expert technicians will 
              provide honest assessments and transparent pricing for all your guitar service needs.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Free Estimates</h3>
              <p className="text-muted-foreground">
                No charge for repair estimates. We'll assess your instrument and provide detailed pricing before any work begins.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Fast Response</h3>
              <p className="text-muted-foreground">
                We respond to all quote requests within 24 hours. Rush estimates available for urgent repairs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">No Obligations</h3>
              <p className="text-muted-foreground">
                Get your quote with no pressure to proceed. We want you to be completely satisfied with our service.
              </p>
            </div>
          </div>

          {/* Quote Form */}
          <div className="max-w-4xl mx-auto">
            <ContactForm 
              formType="quote"
              title="Tell Us About Your Guitar"
              showFileUpload={true}
            />
          </div>

          {/* What Happens Next */}
          <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-soft">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">What Happens Next?</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Submit Request</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out our detailed form with information about your instrument and desired services.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Expert Review</h3>
                <p className="text-sm text-muted-foreground">
                  Our experienced technicians review your request and may contact you for additional details.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Detailed Quote</h3>
                <p className="text-sm text-muted-foreground">
                  Receive a comprehensive quote with labor costs, parts needed, and estimated timeline.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Schedule Service</h3>
                <p className="text-sm text-muted-foreground">
                  If you approve the quote, we'll schedule your repair at your convenience.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Information */}
          <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-6">Our Pricing Policy</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">What's Included in Quotes:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Detailed labor cost breakdown</li>
                  <li>• Parts and materials needed</li>
                  <li>• Estimated completion timeline</li>
                  <li>• Any additional recommendations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Important Notes:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• All prices are labor-only; parts are additional</li>
                  <li>• Estimates may change if hidden issues are found</li>
                  <li>• $40 minimum rush fee for expedited service</li>
                  <li>• Final pricing confirmed before work begins</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Prefer to Speak with Someone Directly?
            </h3>
            <p className="text-muted-foreground mb-6">
              Call us for immediate assistance or to discuss your repair needs over the phone.
            </p>
            <a
              href="tel:8133042560"
              className="btn-accent text-lg px-8 py-4"
            >
              Call (813) 304-2560
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
