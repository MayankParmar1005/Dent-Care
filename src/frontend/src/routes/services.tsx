import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle, ChevronRight } from "lucide-react";
import { SERVICES } from "../data/clinicData";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-16 bg-primary" data-ocid="services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white/75 text-sm font-semibold uppercase tracking-wider">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mt-2">
            Our Dental Services
          </h1>
          <p className="text-white/85 mt-4 max-w-2xl mx-auto text-lg">
            Comprehensive dental care using the latest technology, delivered
            with a gentle touch.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background" data-ocid="services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-medical hover:shadow-elevated transition-smooth fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
                data-ocid={`service-detail-${service.id}`}
              >
                <div className="p-6 border-b border-border bg-muted/20">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{service.icon}</div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground font-display">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Benefits
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-smooth"
                    data-ocid={`book-service-${service.id}`}
                  >
                    Book This Service <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary" data-ocid="services-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-display mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/85 mb-8">
            Book a consultation and Dr. Akash Solanki will guide you to the
            right treatment.
          </p>
          <Link
            to="/appointment"
            className="btn-primary bg-white text-primary hover:bg-white/90 inline-flex items-center gap-2"
            data-ocid="services-book-btn"
          >
            Book Consultation <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
