import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Award,
  ChevronRight,
  Clock,
  Heart,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import { CLINIC, DOCTOR, SERVICES, TESTIMONIALS } from "../data/clinicData";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => i).map((i) => (
        <Star
          key={`star-${i}`}
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
        />
      ))}
    </div>
  );
}

function HomePage() {
  const featuredServices = SERVICES.slice(0, 6);
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary"
        data-ocid="hero-section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('/assets/generated/banquet-birthday.dim_800x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-white/90 text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>10+ Years of Trusted Dental Care</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display leading-tight mb-6">
              {CLINIC.tagline}
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed max-w-xl">
              Expert dental care by{" "}
              <strong className="text-white">{DOCTOR.name}</strong> in the heart
              of Ahmedabad. From routine cleanings to advanced implants — your
              smile is in the best hands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="btn-primary bg-white text-primary hover:bg-white/90 inline-flex items-center gap-2"
                data-ocid="hero-book-btn"
              >
                Book Appointment
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${CLINIC.phone}`}
                className="inline-flex items-center gap-2 btn-secondary border-white/60 text-white hover:bg-white/15"
                data-ocid="hero-call-btn"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "2000+", label: "Happy Patients" },
                { value: "6", label: "Services Offered" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-white font-display">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/75 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-end fade-in">
            <div className="relative">
              <img
                src="/assets/generated/doctor-hero.dim_1200x700.jpg"
                alt="Dr. Akash Solanki at Dent Care"
                className="w-[480px] h-[360px] object-cover rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-elevated">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      Patient Satisfaction
                    </p>
                    <p className="text-lg font-bold text-primary">
                      98%+ Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timings Bar */}
      <section className="bg-muted/40 border-y border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">Clinic Hours:</span>
            </div>
            {CLINIC.timings.map((t) => (
              <div
                key={t.day}
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <span className="font-medium text-foreground">{t.day}:</span>
                <span>{t.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background" data-ocid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-2 mb-4">
              Our Dental Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care using the latest technology and
              techniques, delivered with a gentle, patient-first approach.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <Link
                key={service.id}
                to="/services"
                className="group bg-card border border-border rounded-xl p-6 shadow-medical hover:shadow-elevated hover:border-primary/30 transition-smooth fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
                data-ocid={`service-card-${service.id}`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-1 mt-4 text-primary text-sm font-medium">
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="btn-secondary inline-flex items-center gap-2"
              data-ocid="view-all-services-btn"
            >
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30" data-ocid="why-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Why Dent Care
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-2 mb-6">
                Your Comfort Is Our Priority
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At Dent Care, we combine clinical excellence with genuine care.
                Our state-of-the-art facility and experienced team ensure you
                always leave with a healthier, happier smile.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Pain-Free Treatments",
                    desc: "Advanced anesthesia and gentle techniques for a completely comfortable experience.",
                  },
                  {
                    icon: Award,
                    title: "Expert Specialist",
                    desc: "10+ years of experience with over 2,000 successful procedures performed.",
                  },
                  {
                    icon: Heart,
                    title: "Patient-Centered Care",
                    desc: "We take time to understand your concerns and explain every step of treatment.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-4 bg-card rounded-xl border border-border shadow-medical"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in">
              <img
                src="/assets/generated/clinic-interior.dim_800x600.jpg"
                alt="Modern Dent Care clinic"
                className="rounded-2xl shadow-elevated w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background" data-ocid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Patient Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mt-2 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real experiences from real patients who trust Dent Care with their
              smiles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t, i) => (
              <div
                key={t.id}
                className="bg-card border border-border rounded-xl p-6 shadow-medical fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
                data-ocid={`testimonial-${t.id}`}
              >
                <StarRating rating={t.rating} />
                <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-5 italic">
                  "{t.review}"
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">
                      {t.initials}
                    </span>
                  </div>
                  <span className="font-semibold text-foreground text-sm">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/testimonials"
              className="btn-secondary inline-flex items-center gap-2"
              data-ocid="view-all-testimonials-btn"
            >
              Read More Reviews <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary" data-ocid="cta-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-white/85 mb-8 text-lg">
            Book your appointment today. {CLINIC.name} — where every smile
            matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/appointment"
              className="btn-primary bg-white text-primary hover:bg-white/90 inline-flex items-center gap-2"
              data-ocid="cta-book-btn"
            >
              Book Appointment
            </Link>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/60 text-white hover:bg-white/15 font-medium transition-smooth"
              data-ocid="cta-whatsapp-btn"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Summary */}
      <section
        className="py-12 bg-muted/30 border-t border-border"
        data-ocid="contact-summary-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <a
              href={`tel:${CLINIC.phone}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-card transition-smooth"
              data-ocid="contact-phone-link"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Call Us
              </span>
              <span className="text-xs text-muted-foreground">
                {CLINIC.phone}
              </span>
            </a>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Open 7 Days
              </span>
              <span className="text-xs text-muted-foreground">
                Mon–Fri: 9AM–8PM
              </span>
            </div>
            <Link
              to="/contact"
              className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-card transition-smooth"
              data-ocid="find-us-link"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                <span className="text-xl">📍</span>
              </div>
              <span className="text-sm font-medium text-foreground">
                Find Us
              </span>
              <span className="text-xs text-muted-foreground text-center">
                {CLINIC.address}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
