import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/clinicData";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
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

function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-primary" data-ocid="testimonials-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white/75 text-sm font-semibold uppercase tracking-wider">
            Patient Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mt-2">
            Testimonials
          </h1>
          <p className="text-white/85 mt-4 max-w-xl mx-auto text-lg">
            Hear from the patients who trust Dent Care with their smiles.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "98%", label: "Patient Satisfaction" },
              { value: "2000+", label: "Happy Patients" },
              { value: "5.0", label: "Average Rating" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-primary font-display">
                  {s.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-20 bg-background" data-ocid="all-reviews-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.id}
                className="bg-card border border-border rounded-2xl p-6 shadow-medical hover:shadow-elevated transition-smooth fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
                data-ocid={`review-card-${t.id}`}
              >
                <StarRating rating={t.rating} />
                <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-6 italic">
                  "{t.review}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary text-sm font-bold">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Verified Patient
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section
        className="py-16 bg-muted/30 border-t border-border"
        data-ocid="review-cta-section"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground font-display mb-3">
            Share Your Experience
          </h2>
          <p className="text-muted-foreground mb-6">
            Had a great experience at Dent Care? We'd love to hear your story
            and share your smile journey.
          </p>
          <a
            href="https://wa.me/911234567890?text=Hello%2C%20I%20would%20like%20to%20share%20my%20feedback%20about%20Dent%20Care."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-smooth shadow-medical"
            data-ocid="share-review-btn"
          >
            💬 Share on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
