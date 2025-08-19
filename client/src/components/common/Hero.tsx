import { Link } from "wouter";
import { Phone } from "lucide-react";
import { siteConfig } from "@shared/config";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCTAs?: boolean;
  backgroundImage?: string;
  className?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  showCTAs = true,
  backgroundImage,
  className = ""
}: HeroProps) {
  const defaultTitle = (
    <>
      The Best Guitar Shop in <span className="text-accent">South Florida</span>
    </>
  );

  const defaultSubtitle = (
    <>
      {siteConfig.tagline}
      <br />
      <span className="font-semibold">{siteConfig.ethos}</span>
    </>
  );

  return (
    <section className={`relative gradient-hero text-cream section-padding ${className}`}>
      {/* Background image overlay */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Enhanced dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-mahogany/80 via-ebony/70 to-mahogany/90"></div>
          {/* Additional subtle texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </>
      )}
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in text-white drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
            {title || defaultTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream leading-relaxed animate-slide-up drop-shadow-xl [text-shadow:_1px_1px_3px_rgb(0_0_0_/_70%)]">
            {subtitle || defaultSubtitle}
          </p>
          
          {showCTAs && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="bg-brass text-mahogany px-8 py-4 rounded-lg font-bold text-lg hover:bg-brass-light transition-all duration-200 transform hover:scale-105 shadow-2xl border-2 border-brass-light/30 backdrop-blur-sm inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: {siteConfig.contact.phone}
              </a>
              <Link
                href="/quote"
                className="bg-white/95 text-mahogany px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-2xl border-2 border-white/50 backdrop-blur-sm"
              >
                Request a Quote →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
