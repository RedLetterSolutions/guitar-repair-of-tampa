import { Link } from "wouter";
import SEOHead from "@/components/common/SEOHead";
import PriceTable from "@/components/common/PriceTable";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Guitar Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Guitar Repair of Tampa Bay",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7705 Ann Ballard Road",
      "addressLocality": "Tampa",
      "addressRegion": "FL",
      "postalCode": "33634"
    },
    "telephone": "(813) 304-2560"
  },
  "areaServed": "Tampa Bay, Florida",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Guitar Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Guitar Setup",
          "description": "Complete guitar setup and optimization"
        },
        "price": "60",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Fretwork",
          "description": "Fret leveling, crowning, and complete refrets"
        },
        "price": "120",
        "priceCurrency": "USD"
      }
    ]
  }
};

export default function GuitarRepairs() {
  return (
    <>
      <SEOHead
        title="Guitar Repair Services & Pricing"
        description="Professional guitar repair services in Tampa Bay. Setups, fretwork, electronics, structural repairs. Transparent pricing, 30+ years experience."
        structuredData={structuredData}
      />

      <div className="section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Guitar Repair Services
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Professional repair services for all types of guitars. From simple setups to complex structural repairs, 
              we have the expertise to restore your instrument to perfect playing condition.
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-soft p-8 border border-wood-light">
              <h3 className="text-xl font-bold text-primary mb-4">Setups & Maintenance</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Complete instrument optimization including action adjustment, intonation, and general maintenance 
                to ensure optimal playability.
              </p>
              <ul className="text-sm text-secondary space-y-2">
                <li>• String height adjustment</li>
                <li>• Intonation setup</li>
                <li>• Pickup height adjustment</li>
                <li>• Restring and polish</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-8 border border-wood-light">
              <h3 className="text-xl font-bold text-primary mb-4">Electronics</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Full electronics services including pickup installation, wiring, shielding, and preamp systems 
                for enhanced tone and functionality.
              </p>
              <ul className="text-sm text-secondary space-y-2">
                <li>• Pickup installation</li>
                <li>• Complete rewiring</li>
                <li>• Shielding installation</li>
                <li>• Preamp systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-soft p-8 border border-wood-light">
              <h3 className="text-xl font-bold text-primary mb-4">Structural Repairs</h3>
              <p className="text-secondary mb-4 leading-relaxed">
                Expert structural repair services for serious damage including headstock repairs, neck resets, 
                and crack repairs.
              </p>
              <ul className="text-sm text-secondary space-y-2">
                <li>• Headstock repairs</li>
                <li>• Neck resets</li>
                <li>• Crack repairs</li>
                <li>• Bridge work</li>
              </ul>
            </div>
          </div>

          {/* Price Tables */}
          <div className="bg-white rounded-2xl shadow-strong overflow-hidden">
            <div className="bg-primary text-cream p-8">
              <h2 className="text-3xl font-bold mb-4">Service Pricing</h2>
              <p className="text-cream/90 text-lg">
                Transparent pricing for all our repair services. Labor only - parts are additional.
              </p>
            </div>

            <div className="p-8">
              <PriceTable />

              <div className="text-center mt-8">
                <Link href="/quote" className="btn-primary">
                  Request a Quote for Your Repair
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
