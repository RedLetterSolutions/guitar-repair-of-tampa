import { Zap, DollarSign } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import SupplierGrid from "@/components/common/SupplierGrid";

const supplierCategories = [
  {
    name: "Hardware & Bridges",
    description: "Premium hardware components for optimal performance and reliability",
    brands: ["Floyd Rose", "TonePros", "Babicz", "Graph Tech", "ALLPARTS", "WD Music"]
  },
  {
    name: "Guitar Manufacturers",
    description: "Authorized parts and service for major guitar brands",
    brands: ["Fender", "Taylor", "PRS", "Dean", "Gretsch", "Guild"]
  },
  {
    name: "Electronics & Pickups",
    description: "Professional-grade electronics and pickup systems",
    brands: ["Seymour Duncan", "EMG", "L.R. Baggs", "Lollar", "Bartolini", "Lace", "Aguilar"]
  },
  {
    name: "Custom & Specialty",
    description: "Specialty builders and unique component suppliers",
    brands: ["Chafin Custom", "Bedell", "Stellartone", "Moe Colors", "Wilkins"]
  },
  {
    name: "Tools & Supplies",
    description: "Professional luthiery tools and workshop supplies", 
    brands: ["Stewart-MacDonald", "Luthiers Supply"]
  }
];

const allSuppliers = [
  "Floyd Rose", "Fender", "Taylor", "PRS", "Dean", "Gretsch", "Guild",
  "Chafin Custom", "Bedell", "Babicz", "Graph Tech", "L.R. Baggs", 
  "Seymour Duncan", "EMG", "ALLPARTS", "Lollar", "Bartolini", "Lace",
  "TonePros", "Luthiers Supply", "Aguilar", "Stewart-MacDonald",
  "Stellartone", "Moe Colors", "Wilkins", "WD Music"
];

export default function Suppliers() {
  return (
    <>
      <SEOHead
        title="Our Trusted Suppliers & Partners - Quality Guitar Parts"
        description="We work with the industry's leading suppliers including Floyd Rose, Fender, Seymour Duncan, and more to ensure quality repairs and custom builds."
      />

      <div className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Trusted Suppliers & Partners
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work exclusively with the industry's leading brands and suppliers to ensure every repair 
              and custom build meets the highest standards of quality and reliability.
            </p>
          </div>

          {/* Quality Promise */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-soft mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Quality Promise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every component we use in repairs and custom builds comes from authorized dealers and 
                trusted suppliers who share our commitment to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🎯</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Authentic Parts</h3>
                <p className="text-muted-foreground">
                  All components are genuine parts from authorized dealers, ensuring authenticity and warranty coverage.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fast Sourcing</h3>
                <p className="text-muted-foreground">
                  Our established relationships allow us to quickly source even hard-to-find components for your repairs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">✅</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  We stand behind every part we install with our comprehensive workmanship guarantee.
                </p>
              </div>
            </div>
          </div>

          {/* Supplier Categories */}
          <div className="space-y-16 mb-16">
            {supplierCategories.map((category, index) => (
              <div key={category.name} className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{category.name}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {category.brands.map((brand) => (
                    <div
                      key={brand}
                      className="flex items-center justify-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors min-h-[80px]"
                    >
                      <span className="text-foreground font-semibold text-sm text-center">
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* All Suppliers Grid */}
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">All Our Partners</h2>
              <p className="text-muted-foreground">
                Complete list of trusted suppliers and manufacturing partners
              </p>
            </div>
            
            <SupplierGrid brands={allSuppliers} />
          </div>

          {/* Special Partnerships */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Special Partnerships</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our long-standing relationships with key suppliers enable us to offer exclusive services and priority access to specialty components.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6">
                <h4 className="text-xl font-bold text-foreground mb-3">Authorized Service Center</h4>
                <p className="text-muted-foreground mb-4">
                  We are an authorized service center for several major brands, enabling us to perform 
                  warranty work and access technical support directly from manufacturers.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Warranty-covered repairs</li>
                  <li>• Access to service manuals</li>
                  <li>• Direct technical support</li>
                  <li>• Genuine replacement parts</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="text-xl font-bold text-foreground mb-3">Custom Component Access</h4>
                <p className="text-muted-foreground mb-4">
                  Our relationships with specialty suppliers allow us to source unique components 
                  for custom builds and rare vintage restorations.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Rare vintage parts</li>
                  <li>• Custom hardware options</li>
                  <li>• Specialty electronics</li>
                  <li>• Unique wood selections</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Specific Part or Component?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our extensive supplier network means we can source almost any guitar component you need. 
              Contact us to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="/quote" className="btn-secondary">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
