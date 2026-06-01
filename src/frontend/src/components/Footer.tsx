import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CLINIC } from "../data/clinicData";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/appointment", label: "Book Appointment" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-ocid="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-medical">
                <span className="text-primary-foreground text-lg font-bold">
                  D
                </span>
              </div>
              <span className="text-xl font-bold text-primary font-display">
                Dent Care
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Your trusted dental care partner in Ahmedabad. Providing
              compassionate, expert dental treatment since 2014.
            </p>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-smooth"
              data-ocid="footer-whatsapp-btn"
            >
              <span>💬</span> WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {CLINIC.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  {CLINIC.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  {CLINIC.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Clinic Hours
            </h3>
            <ul className="space-y-2">
              {CLINIC.timings.map((t) => (
                <li key={t.day} className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-foreground">
                      {t.day}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} Dent Care. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
