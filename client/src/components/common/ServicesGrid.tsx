import { Link } from "wouter";
import { siteConfig } from "@shared/config";

interface ServicesGridProps {
  showPricing?: boolean;
  showLearnMore?: boolean;
}

export default function ServicesGrid({ 
  showPricing = true, 
  showLearnMore = true 
}: ServicesGridProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Expert Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional guitar repair with 30+ years of industry experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.name}
              className="bg-muted/50 rounded-xl p-6 text-center hover:shadow-soft transition-all duration-200 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4" role="img" aria-label={service.name}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              {showPricing && (
                <div className="text-primary font-bold mb-4">
                  Starting at {service.startingPrice}
                </div>
              )}
              {showLearnMore && (
                <Link
                  href="/guitar-repairs"
                  className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-1 transition-colors"
                >
                  Learn more →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
