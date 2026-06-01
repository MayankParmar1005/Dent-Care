import { Link, createFileRoute } from "@tanstack/react-router";
import { Award, BookOpen, CheckCircle, ChevronRight, Star } from "lucide-react";
import { CLINIC, DOCTOR } from "../data/clinicData";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-16 bg-primary" data-ocid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white/75 text-sm font-semibold uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mt-2">
            Meet Dr. Akash Solanki
          </h1>
          <p className="text-white/85 mt-4 max-w-2xl mx-auto text-lg">
            A decade of dedication to transforming smiles and lives through
            expert dental care.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 bg-background" data-ocid="doctor-profile">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="fade-in">
              <div className="relative">
                <img
                  src="/assets/generated/doctor-portrait.dim_600x700.jpg"
                  alt="Dr. Akash Solanki"
                  className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-elevated object-cover aspect-[3/4]"
                />
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-elevated">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Experience
                      </p>
                      <p className="text-base font-bold text-primary">
                        {DOCTOR.experience}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in-up">
              <h2 className="text-3xl font-bold text-foreground font-display mb-2">
                {DOCTOR.name}
              </h2>
              <p className="text-primary font-medium mb-6">{DOCTOR.title}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {DOCTOR.bio}
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Qualifications
                </h3>
                <ul className="space-y-2">
                  {DOCTOR.qualifications.map((q) => (
                    <li
                      key={q}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {DOCTOR.specializations.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium border border-primary/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/appointment"
                className="btn-primary inline-flex items-center gap-2"
                data-ocid="about-book-btn"
              >
                Book an Appointment <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30" data-ocid="achievements-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Achievements
            </span>
            <h2 className="text-3xl font-bold text-foreground font-display mt-2">
              Recognition & Milestones
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DOCTOR.achievements.map((a, i) => (
              <div
                key={a}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 shadow-medical fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed pt-1">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Mission */}
      <section className="py-20 bg-background" data-ocid="mission-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Mission
          </span>
          <h2 className="text-3xl font-bold text-foreground font-display mt-2 mb-6">
            Our Story & Values
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {CLINIC.name} was founded with the belief that quality dental care
            should be accessible, comfortable, and patient-focused. Located in
            the heart of Maninagar, Ahmedabad, we have grown into a trusted
            dental home for thousands of families.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is simple: to provide exceptional dental care in a warm,
            welcoming environment. We invest in the latest technology, stay
            updated with modern dental practices, and ensure every patient
            leaves with a smile — literally.
          </p>
        </div>
      </section>
    </>
  );
}
