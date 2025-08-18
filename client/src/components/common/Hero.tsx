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
    <section className={`relative gradient-hero text-white section-padding ${className}`}>
      {/* Background image overlay */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 bg-black/40"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </>
      )}
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            {title || defaultTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed animate-slide-up">
            {subtitle || defaultSubtitle}
          </p>
          
          {showCTAs && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: {siteConfig.contact.phone}
              </a>
              <Link
                href="/quote"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
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
