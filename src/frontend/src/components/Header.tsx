import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CLINIC } from "../data/clinicData";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/appointment", label: "Appointment" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      data-ocid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card shadow-medical border-b border-border"
          : "bg-card/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-medical">
              <span className="text-primary-foreground text-lg font-bold leading-none">
                D
              </span>
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold text-primary font-display tracking-tight">
                Dent Care
              </span>
              <p className="text-[10px] text-muted-foreground hidden sm:block">
                Dental Clinic, Ahmedabad
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            data-ocid="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth relative ${
                  isActive(link.href)
                    ? "text-primary bg-primary/8"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC.phone}`}
              className="hidden md:flex items-center gap-1.5 btn-small btn-secondary text-xs"
              data-ocid="header-call-btn"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
            <Link
              to="/appointment"
              className="hidden md:inline-flex btn-small btn-primary text-xs"
              data-ocid="header-book-btn"
            >
              Book Appointment
            </Link>
            <button
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="Toggle menu"
              data-ocid="mobile-menu-toggle"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden bg-card border-t border-border shadow-elevated fade-in"
          data-ocid="mobile-nav"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-smooth ${
                  isActive(link.href)
                    ? "text-primary bg-primary/8 font-semibold"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1 flex flex-col gap-2">
              <a
                href={`tel:${CLINIC.phone}`}
                className="btn-secondary text-center text-sm py-2.5"
                data-ocid="mobile-call-btn"
              >
                📞 Call Now
              </a>
              <Link
                to="/appointment"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center text-sm py-2.5"
                data-ocid="mobile-book-btn"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
