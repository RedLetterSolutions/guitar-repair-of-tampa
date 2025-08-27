import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Guitar, Music2 } from "lucide-react";
import { siteConfig } from "@shared/config";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Repairs", href: "/guitar-repairs" },
    { name: "Custom", href: "/custom-guitars" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-card shadow-strong sticky top-0 z-40 border-b-2 border-brass">
      <nav className="container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Main logo container with gradient and shadows */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary to-primary-foreground/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-strong border border-brass/30">
                <Guitar className="w-7 h-7 text-primary-foreground drop-shadow-sm" />
                {/* Accent music note */}
                <Music2 className="w-3 h-3 text-brass absolute -top-1 -right-1 opacity-75" />
              </div>
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 w-12 h-12 bg-brass/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                Guitar Repair
              </span>
              <span className="text-sm lg:text-base font-medium text-brass group-hover:text-primary transition-colors -mt-1">
                of Tampa Bay
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors text-sm ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-brass text-brass-foreground px-4 py-2 rounded-lg font-semibold hover:bg-brass-dark transition-all duration-200 shadow-soft hover:shadow-lg text-sm whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>
          
          {/* Tablet Navigation - Condensed */}
          <div className="hidden lg:xl:hidden lg:flex items-center space-x-4">
            {navigation.slice(0, 5).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors text-xs ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-brass text-brass-foreground px-3 py-1.5 rounded-lg font-semibold hover:bg-brass-dark transition-all duration-200 shadow-soft text-xs whitespace-nowrap"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t-2 border-brass bg-wood-light/50">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-medium transition-colors px-4 py-2 rounded ${
                    isActive(item.href)
                      ? "text-primary bg-brass/10"
                      : "text-muted-foreground hover:text-primary hover:bg-brass/5"
                  }`}
                >
                  {item.name === "Repairs" ? "Guitar Repairs" : item.name === "Custom" ? "Custom Guitars" : item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-brass text-brass-foreground px-6 py-2 rounded-lg font-semibold hover:bg-brass-dark transition-all duration-200 shadow-soft inline-block text-center w-full"
                >
                  Contact / Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
