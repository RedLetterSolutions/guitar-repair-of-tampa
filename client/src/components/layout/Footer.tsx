import { Link } from "wouter";
import { Guitar, MapPin, Phone, Clock, Mail } from "lucide-react";
import { siteConfig } from "@shared/config";

export default function Footer() {
  const quickLinks = [
    { name: "Guitar Repairs", href: "/guitar-repairs" },
    { name: "Custom Guitars", href: "/custom-guitars" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Directions", href: "/directions" },
    { name: "Suppliers", href: "/suppliers" },
  ];

  const suppliers = [
    "Floyd Rose", "Fender", "Taylor", "PRS", "Dean", "Seymour Duncan", "EMG", "Graph Tech", 
    "L.R. Baggs", "Chafin Custom", "Guild", "Gretsch", "TonePros", "ALLPARTS"
  ];

  return (
    <footer className="bg-gradient-to-b from-wood-dark to-mahogany text-cream relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brass-light via-brass to-brass-dark"></div>
      
      {/* Main footer content */}
      <div className="container py-16 relative">
        {/* Top section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Business Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-brass rounded-lg flex items-center justify-center">
                <Guitar className="w-7 h-7 text-mahogany" />
              </div>
              <h3 className="text-2xl font-bold text-brass">{siteConfig.name}</h3>
            </div>
            
            <p className="text-cream/90 mb-6 text-lg leading-relaxed">
              {siteConfig.description}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-cream/80 hover:text-brass transition-colors">
                <MapPin className="w-5 h-5 text-brass" />
                <span>{siteConfig.contact.address.full}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brass" />
                <a 
                  href={`tel:${siteConfig.contact.phoneRaw}`} 
                  className="text-cream/80 hover:text-brass transition-colors text-lg font-semibold"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-cream/80">
                <Mail className="w-5 h-5 text-brass" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brass transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="w-5 h-5 text-brass" />
              <h4 className="text-lg font-semibold text-brass">Hours</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-cream/80">
                <span>Tuesday - Saturday</span>
                <span className="font-medium">{siteConfig.hours.tuesday}</span>
              </div>
              <div className="flex justify-between text-cream/80">
                <span>Sunday - Monday</span>
                <span className="font-medium text-brass">{siteConfig.hours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Quick Links & CTA */}
          <div>
            <h4 className="text-lg font-semibold text-brass mb-6">Quick Links</h4>
            <div className="grid grid-cols-1 gap-2 mb-8">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-cream/80 hover:text-brass transition-all duration-200 hover:translate-x-1 text-sm py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link
              href="/quote"
              className="bg-brass text-mahogany px-6 py-3 rounded-lg font-bold hover:bg-brass-light transition-all duration-200 shadow-strong hover:shadow-lg hover:scale-105 inline-block text-center w-full"
            >
              Request Quote
            </Link>
          </div>
        </div>

        {/* Brand Strip */}
        <div className="border-t border-brass/20 pt-8 mb-8">
          <h5 className="text-center text-brass font-semibold mb-4">Authorized Suppliers & Brands</h5>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {suppliers.map((supplier, index) => (
              <span 
                key={supplier} 
                className="text-cream/60 hover:text-brass transition-colors text-sm px-2 py-1 rounded hover:bg-brass/10"
              >
                {supplier}
                {index < suppliers.length - 1 && <span className="ml-3 text-brass/40">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brass/20 pt-6 text-center">
          <p className="text-cream/70 mb-2">
            &copy; 2024 {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-cream/60 text-sm">
            Professional guitar repair services in Tampa, Florida • {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
