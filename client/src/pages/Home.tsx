import { Link } from "wouter";
import SEOHead from "@/components/common/SEOHead";
import Hero from "@/components/common/Hero";
import ServicesGrid from "@/components/common/ServicesGrid";
import TestimonialCarousel from "@/components/common/TestimonialCarousel";
import { siteConfig } from "@shared/config";
import { MapPin, Clock, Phone } from "lucide-react";

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
  ],
  "priceRange": "$25-$450",
  "hasMap": `https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address.full)}`
};

export default function Home() {
  return (
    <>
      <SEOHead structuredData={structuredData} />
      
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
      />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Guitar Repair of Tampa Bay?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🏆</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">30+ Years Experience</h3>
              <p className="text-muted-foreground">Industry veterans from Washburn, Gibson, Peavey, Parker, and Dean Guitars</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
              <p className="text-muted-foreground">Most repairs completed within 7-10 business days with rush service available</p>
            </div>

            <div className="text-center">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💰</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fair Pricing</h3>
              <p className="text-muted-foreground">Competitive rates with no hidden fees. Labor only pricing, parts extra</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🎻</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Vintage Expertise</h3>
              <p className="text-muted-foreground">Specialized knowledge in vintage and rare instrument restoration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crackercaster Highlight */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Introducing the <span className="text-accent">Crackercaster</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Custom guitars featuring woods indigenous to Florida. Each instrument is handcrafted with premium local materials for a truly unique sound and aesthetic.
                </p>
                <Link href="/custom-guitars" className="btn-accent inline-flex items-center gap-2">
                  Explore Custom Guitars →
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
                  alt="Crackercaster custom guitar with Florida wood"
                  className="rounded-xl shadow-lg w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Location & Hours */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Address</h3>
              <div className="text-muted-foreground">
                <p>{siteConfig.contact.address.street}</p>
                <p>{siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}</p>
              </div>
            </div>

            <div>
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Hours</h3>
              <div className="text-muted-foreground space-y-1">
                <p>Mon - Fri: {siteConfig.hours.monday}</p>
                <p>Saturday: {siteConfig.hours.saturday}</p>
                <p>Sunday: {siteConfig.hours.sunday}</p>
              </div>
            </div>

            <div>
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">Contact</h3>
              <div className="text-muted-foreground">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12">
            <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">{siteConfig.contact.address.full}</p>
                <p className="text-xs mt-2">TODO: Implement Google Maps embed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
