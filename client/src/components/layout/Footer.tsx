import { Link } from "wouter";
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
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <div className="space-y-2 text-gray-300">
              <p>{siteConfig.contact.address.street}</p>
              <p>{siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}</p>
              <p>
                <a 
                  href={`tel:${siteConfig.contact.phoneRaw}`} 
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <div className="space-y-1 text-gray-300 text-sm">
              <p>Mon - Fri: {siteConfig.hours.monday}</p>
              <p>Saturday: {siteConfig.hours.saturday}</p>
              <p>Sunday: {siteConfig.hours.sunday}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <Link
              href="/quote"
              className="btn-primary inline-block mb-4"
            >
              Request Quote
            </Link>
            <div className="text-gray-300 text-sm">
              <p>The best guitar shop in South Florida</p>
            </div>
          </div>
        </div>

        {/* Brand Strip */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-2 opacity-40 text-xs">
            {suppliers.map((supplier, index) => (
              <span key={supplier}>
                {supplier}
                {index < suppliers.length - 1 && <span className="mx-2">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 text-sm">Professional guitar repair services in Tampa, Florida</p>
        </div>
      </div>
    </footer>
  );
}
