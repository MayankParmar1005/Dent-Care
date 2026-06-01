import { Link, createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CLINIC } from "../data/clinicData";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const mapsDirectUrl = `https://maps.google.com/?q=${encodeURIComponent(CLINIC.address)}`;

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-primary" data-ocid="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white/75 text-sm font-semibold uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mt-2">
            Contact Us
          </h1>
          <p className="text-white/85 mt-4 max-w-xl mx-auto text-lg">
            We're here to help. Reach out to book your appointment or ask any
            questions.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section
        className="py-20 bg-background"
        data-ocid="contact-details-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {/* Address */}
            <a
              href={mapsDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-2xl p-6 shadow-medical hover:shadow-elevated hover:border-primary/30 transition-smooth text-center fade-in-up"
              data-ocid="contact-address-card"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Address</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {CLINIC.address}
              </p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${CLINIC.phone}`}
              className="group bg-card border border-border rounded-2xl p-6 shadow-medical hover:shadow-elevated hover:border-primary/30 transition-smooth text-center fade-in-up"
              style={{ animationDelay: "0.1s" }}
              data-ocid="contact-phone-card"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">{CLINIC.phone}</p>
              <p className="text-xs text-primary mt-1">Tap to call</p>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-2xl p-6 shadow-medical hover:shadow-elevated hover:border-green-500/30 transition-smooth text-center fade-in-up"
              style={{ animationDelay: "0.2s" }}
              data-ocid="contact-whatsapp-card"
            >
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-smooth">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">
                Chat with us directly
              </p>
              <p className="text-xs text-green-600 mt-1">Tap to open</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CLINIC.email}`}
              className="group bg-card border border-border rounded-2xl p-6 shadow-medical hover:shadow-elevated hover:border-primary/30 transition-smooth text-center fade-in-up"
              style={{ animationDelay: "0.3s" }}
              data-ocid="contact-email-card"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground break-all">
                {CLINIC.email}
              </p>
            </a>
          </div>

          {/* Map + Hours */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Map */}
            <div className="lg:col-span-2 fade-in-up">
              <h2 className="text-xl font-bold text-foreground font-display mb-4">
                Find Us on the Map
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-border h-[380px] bg-muted/30">
                <iframe
                  title="Dent Care Location Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(CLINIC.address)}&output=embed`}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={mapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-3 hover:underline"
                data-ocid="directions-link"
              >
                <MapPin className="w-4 h-4" />
                Get Directions on Google Maps
              </a>
            </div>

            {/* Hours */}
            <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-xl font-bold text-foreground font-display mb-4">
                Clinic Hours
              </h2>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-medical">
                {CLINIC.timings.map((t, i) => (
                  <div
                    key={t.day}
                    className={`flex items-start gap-3 py-3 ${i < CLINIC.timings.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {t.day}
                      </p>
                      <p className="text-sm text-muted-foreground">{t.hours}</p>
                    </div>
                    <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                      Open
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-primary/5 border border-primary/15 rounded-xl p-5">
                <p className="text-sm font-semibold text-foreground mb-1">
                  Emergency Dental Care
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  Dental emergencies? Call us anytime.
                </p>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="btn-primary w-full text-center block text-sm"
                  data-ocid="emergency-call-btn"
                >
                  📞 Call Now: {CLINIC.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
