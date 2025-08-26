import SEOHead from "@/components/common/SEOHead";
import ContactForm from "@/components/common/ContactForm";
import { siteConfig } from "@shared/config";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.name,
  "description": siteConfig.description,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.contact.address.street,
    "addressLocality": siteConfig.contact.address.city,
    "addressRegion": siteConfig.contact.address.state,
    "postalCode": siteConfig.contact.address.zip,
    "addressCountry": "US"
  },
  "telephone": siteConfig.contact.phone,
  "openingHours": [
    "Mo-Fr 10:00-18:00",
    "Sa 10:00-16:00"
  ]
};

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us - Guitar Repair of Tampa Bay"
        description="Get in touch with Tampa Bay's premier guitar repair shop. Request a quote, ask questions, or schedule your guitar repair service."
        structuredData={structuredData}
      />

      <div className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to restore your guitar to perfect playing condition? Get in touch with Tampa Bay's 
              premier guitar repair specialists. We're here to help with all your repair and maintenance needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you need a simple setup or complex restoration work, our experienced technicians 
                  are ready to help. Contact us today to discuss your guitar repair needs.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <div className="text-muted-foreground">
                      <p>{siteConfig.contact.address.street}</p>
                      <p>{siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                    <div className="text-muted-foreground space-y-1 text-sm">
                      <p>Tuesday - Saturday: {siteConfig.hours.tuesday}</p>
                      <p>Sunday - Monday: {siteConfig.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm 
                formType="contact"
                title="Send Us a Message"
                showFileUpload={true}
              />
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground">Visit Our Shop</h2>
              <p className="text-muted-foreground mt-2">
                Located in the heart of Tampa Bay, easily accessible with plenty of parking.
              </p>
            </div>
            <div className="relative bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="relative h-96">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing location of ${siteConfig.name} at ${siteConfig.contact.address.full}`}
                  className="w-full h-full"
                />
                {/* Overlay with link to full Google Maps */}
                <div className="absolute top-4 left-4 z-10">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/95 backdrop-blur-sm text-primary hover:text-primary/80 px-3 py-2 rounded-lg shadow-lg text-sm font-medium transition-colors inline-flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    View Larger Map
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-4">What to Expect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Free estimates on all repair work</li>
                <li>• Honest assessment of your instrument's needs</li>
                <li>• Transparent pricing with no hidden fees</li>
                <li>• Expert advice on maintenance and care</li>
                <li>• Quick turnaround times with rush service available</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-4">Before You Visit</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bring your guitar in a case or gig bag</li>
                <li>• Note any specific issues or concerns</li>
                <li>• Consider your playing style and preferences</li>
                <li>• Ask about our maintenance programs</li>
                <li>• Schedule ahead during busy seasons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
