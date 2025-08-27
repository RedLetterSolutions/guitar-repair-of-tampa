import SEOHead from "@/components/common/SEOHead";
import { siteConfig } from "@shared/config";
import { MapPin, Car, Navigation, Clock, Phone, AlertTriangle } from "lucide-react";

export default function Directions() {
  const address = siteConfig.contact.address;
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address.full)}`;
  const appleMapsUrl = `http://maps.apple.com/?q=${encodeURIComponent(address.full)}`;

  return (
    <>
      <SEOHead
        title="Directions to Our Shop - Guitar Repair of Tampa Bay"
        description={`Find Guitar Repair of Tampa Bay at ${address.full}. Get detailed directions, parking information, and nearby landmarks.`}
      />

      <div className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Directions to Our Shop
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at our conveniently located Tampa Bay shop. We're easily accessible with plenty of parking available.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Address & Quick Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">Our Address</h2>
                    <div className="text-muted-foreground space-y-1">
                      <p className="font-medium text-foreground">{siteConfig.name}</p>
                      <p>{address.street}</p>
                      <p>{address.city}, {address.state} {address.zip}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center"
                  >
                    Open in Google Maps
                  </a>
                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 text-center"
                  >
                    Open in Apple Maps
                  </a>
                </div>
              </div>

              {/* Hours & Contact */}
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Shop Hours</h3>
                    <div className="text-muted-foreground space-y-1 text-sm">
                      <p>Tuesday - Saturday: {siteConfig.hours.tuesday}</p>
                      <p>Sunday - Monday: {siteConfig.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Call Before Visiting:</span>
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">
                    Call ahead to ensure availability and schedule your visit
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="relative h-96">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing location of ${siteConfig.name} at ${address.full}`}
                  className="w-full h-full"
                />
                {/* Overlay with link to full Google Maps */}
                <div className="absolute top-4 left-4 z-10">
                  <a
                    href={googleMapsUrl}
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

          {/* Detailed Directions */}
          <div className="mt-16 space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">Detailed Directions</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* From Major Areas */}
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">From Downtown Tampa</h3>
                </div>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full mt-1">1</span>
                    <span>Head north on I-275 N from downtown Tampa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full mt-1">2</span>
                    <span>Take Exit 51 for Bearss Avenue and head west</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full mt-1">3</span>
                    <span>Turn right on Ann Ballard Road</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full mt-1">4</span>
                    <span>We'll be on your right at {address.street}</span>
                  </li>
                </ol>
              </div>

              {/* From St. Petersburg */}
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">From St. Petersburg</h3>
                </div>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded-full mt-1">1</span>
                    <span>Take I-275 N across the Howard Frankland Bridge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded-full mt-1">2</span>
                    <span>Continue north on I-275 for about 20 miles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded-full mt-1">3</span>
                    <span>Take Exit 51 for Bearss Avenue and head west</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded-full mt-1">4</span>
                    <span>Turn right on Ann Ballard Road to reach our shop</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Parking & Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Car className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Free Parking</h3>
              <p className="text-muted-foreground text-sm">
                Ample parking available right in front of our shop. No need to worry about meters or restrictions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Easy to Find</h3>
              <p className="text-muted-foreground text-sm">
                Look for our guitar repair sign. We're located in a standalone building with excellent visibility from the road.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Call Ahead</h3>
              <p className="text-muted-foreground text-sm">
                While walk-ins are welcome, calling ahead ensures we have time dedicated to your specific needs.
              </p>
            </div>
          </div>

          {/* Nearby Landmarks */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground text-center mb-6">Nearby Landmarks</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="text-muted-foreground">
                <div className="font-medium text-foreground mb-1">Carrollwood Village</div>
                <div className="text-sm">3 minutes east</div>
              </div>
              <div className="text-muted-foreground">
                <div className="font-medium text-foreground mb-1">Bearss Avenue</div>
                <div className="text-sm">Main cross street</div>
              </div>
              <div className="text-muted-foreground">
                <div className="font-medium text-foreground mb-1">Veterans Expressway</div>
                <div className="text-sm">5 minutes west</div>
              </div>
              <div className="text-muted-foreground">
                <div className="font-medium text-foreground mb-1">Tampa Bay</div>
                <div className="text-sm">15 minutes south</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
