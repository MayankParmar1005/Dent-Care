import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  FileText,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";
import { CLINIC } from "../data/clinicData";
import type { AppointmentFormData } from "../types";

export const Route = createFileRoute("/appointment")({
  component: AppointmentPage,
});

const TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "7:00 PM",
];

const initialForm: AppointmentFormData = {
  name: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

function AppointmentPage() {
  const [form, setForm] = useState<AppointmentFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Dent Care!%0A%0AI'd like to book an appointment.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ADate: ${encodeURIComponent(form.preferredDate)}%0ATime: ${encodeURIComponent(form.preferredTime)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${CLINIC.whatsapp}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  const whatsappDirectLink = `https://wa.me/${CLINIC.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dent%20Care.`;

  if (submitted) {
    return (
      <div className="py-32 text-center" data-ocid="appointment-success">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✅</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground font-display mb-3">
          Appointment Request Sent!
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Thank you, {form.name}! We've received your request and will confirm
          your appointment via WhatsApp shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="btn-secondary"
          data-ocid="book-another-btn"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-primary" data-ocid="appointment-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white/75 text-sm font-semibold uppercase tracking-wider">
            Get Started
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mt-2">
            Book an Appointment
          </h1>
          <p className="text-white/85 mt-4 max-w-xl mx-auto text-lg">
            Schedule your visit with Dr. Akash Solanki. We'll confirm your slot
            promptly.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section
        className="py-20 bg-background"
        data-ocid="appointment-form-section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar Info */}
            <div className="space-y-6 fade-in-up">
              <div className="bg-card border border-border rounded-xl p-6 shadow-medical">
                <h3 className="font-semibold text-foreground mb-4">
                  Clinic Hours
                </h3>
                {CLINIC.timings.map((t) => (
                  <div
                    key={t.day}
                    className="flex items-start gap-2 mb-3 last:mb-0"
                  >
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-foreground">
                        {t.day}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.hours}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-medical">
                <h3 className="font-semibold text-foreground mb-4">
                  Quick Contact
                </h3>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-muted transition-smooth mb-2"
                  data-ocid="appointment-call-link"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Call Us</p>
                    <p className="text-sm font-medium text-foreground">
                      {CLINIC.phone}
                    </p>
                  </div>
                </a>
                <a
                  href={whatsappDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-muted transition-smooth"
                  data-ocid="appointment-whatsapp-link"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <p className="text-sm font-medium text-foreground">
                      Chat Now
                    </p>
                  </div>
                </a>
              </div>

              <a
                href={whatsappDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition-smooth shadow-medical"
                data-ocid="whatsapp-book-btn"
              >
                💬 Book via WhatsApp
              </a>
            </div>

            {/* Appointment Form */}
            <div className="lg:col-span-2 fade-in-up">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-medical">
                <h2 className="text-2xl font-bold text-foreground font-display mb-6">
                  Fill Appointment Form
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="appointment-form"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        <User className="w-4 h-4 inline mr-1.5 text-primary" />
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-smooth"
                        data-ocid="form-name-input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        <Phone className="w-4 h-4 inline mr-1.5 text-primary" />
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Your mobile number"
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-smooth"
                        data-ocid="form-phone-input"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        <Calendar className="w-4 h-4 inline mr-1.5 text-primary" />
                        Preferred Date *
                      </label>
                      <input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        required
                        value={form.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-smooth"
                        data-ocid="form-date-input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="preferredTime"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        <Clock className="w-4 h-4 inline mr-1.5 text-primary" />
                        Preferred Time *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        required
                        value={form.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-smooth"
                        data-ocid="form-time-select"
                      >
                        <option value="">Select a time slot</option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      <FileText className="w-4 h-4 inline mr-1.5 text-primary" />
                      Problem / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your dental concern or any specific treatment you need..."
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-smooth resize-none"
                      data-ocid="form-message-input"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    disabled={
                      !form.name ||
                      !form.phone ||
                      !form.preferredDate ||
                      !form.preferredTime
                    }
                    data-ocid="form-submit-btn"
                  >
                    💬 Send via WhatsApp
                  </button>
                  <p className="text-xs text-center text-muted-foreground">
                    Submitting will open WhatsApp to confirm your appointment
                    with our team.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
