import { Link } from "wouter";
import SEOHead from "@/components/common/SEOHead";
import { CheckCircle, Home, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@shared/config";

export default function FormSent() {
  return (
    <>
      <SEOHead
        title="Message Sent - Guitar Repair of Tampa Bay"
        description="Thank you for contacting Guitar Repair of Tampa Bay. We'll get back to you soon!"
      />

      <div className="section-padding bg-muted/50 min-h-screen flex items-center">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Message Sent Successfully!
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Thank you for reaching out to Guitar Repair of Tampa Bay. We've received your message 
                and will get back to you within 24 hours during business hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Our expert technicians will review your message and any details about your instrument.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Contact</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll reach out to discuss your needs and provide a detailed estimate.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Schedule</h3>
                  <p className="text-sm text-muted-foreground">
                    Once approved, we'll schedule a convenient time for your repair service.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Need Immediate Assistance?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <Link href="/">
                <Button className="btn-primary inline-flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              
              <div className="text-center">
                <Link href="/guitar-repairs">
                  <Button variant="outline" className="mx-2">
                    View Our Services
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" className="mx-2">
                    See Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}