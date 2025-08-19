import { Link } from "wouter";
import { Settings, Music, Zap, Wrench } from "lucide-react";
import { siteConfig } from "@shared/config";

interface ServicesGridProps {
  showPricing?: boolean;
  showLearnMore?: boolean;
}

const iconMap = {
  Settings: Settings,
  Music: Music,
  Zap: Zap,
  Wrench: Wrench,
};

export default function ServicesGrid({ 
  showPricing = true, 
  showLearnMore = true 
}: ServicesGridProps) {
  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Expert Services
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Professional guitar repair with 30+ years of industry experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.name}
                className="bg-background rounded-xl p-6 text-center hover:shadow-strong transition-all duration-200 hover:-translate-y-1 animate-slide-up border border-wood-light"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-brass/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-brass" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-mahogany">
                  {service.name}
                </h3>
                <p className="text-secondary mb-4">
                  {service.description}
                </p>
                {showPricing && (
                  <div className="text-brass font-bold mb-4 text-lg">
                    Starting at {service.startingPrice}
                  </div>
                )}
                {showLearnMore && (
                  <Link
                    href="/guitar-repairs"
                    className="text-primary hover:text-brass font-medium text-sm inline-flex items-center gap-1 transition-colors"
                  >
                    Learn more →
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
