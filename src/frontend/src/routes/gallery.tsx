import { createFileRoute } from "@tanstack/react-router";
import { X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import { GALLERY_IMAGES } from "../data/clinicData";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

const categories = [
  "All",
  "Clinic",
  "Team",
  "Treatment",
  "Results",
  "Equipment",
];

interface GalleryImage {
  id: string | number;
  src: string;
  alt: string;
  category: string;
}

function Lightbox({
  image,
  onClose,
}: {
  image: GalleryImage;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 fade-in"
      data-ocid="lightbox-overlay"
      style={{ background: "oklch(0 0 0 / 0.85)" }}
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      role="presentation"
    >
      <dialog
        open
        className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-2xl overflow-hidden shadow-elevated fade-in-up m-0 p-0 border-0"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        aria-label={image.alt}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-foreground/80 text-background hover:bg-foreground transition-smooth"
          data-ocid="lightbox-close"
        >
          <X className="w-5 h-5" />
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="w-full max-h-[75vh] object-contain bg-muted"
        />
        <div className="px-5 py-3 flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">{image.alt}</p>
          <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1">
            {image.category}
          </span>
        </div>
      </dialog>
    </div>
  );
}

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filtered =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-primary" data-ocid="gallery-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white/75 text-sm font-semibold uppercase tracking-wider">
            Our Clinic
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mt-2">
            Gallery
          </h1>
          <p className="text-white/85 mt-4 max-w-xl mx-auto text-lg">
            Take a look at our modern facilities, equipment, and the smiles
            we've transformed.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background" data-ocid="gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div
            className="flex flex-wrap gap-2 justify-center mb-10"
            data-ocid="gallery-filter"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-medical"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
                data-ocid={`gallery-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <button
                key={img.id}
                type="button"
                className="group relative overflow-hidden rounded-2xl shadow-medical hover:shadow-elevated transition-smooth fade-in-up aspect-[4/3] text-left w-full"
                style={{ animationDelay: `${i * 0.1}s` }}
                data-ocid={`gallery-image-${img.id}`}
                onClick={() => setLightboxImage(img)}
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
                  <span className="text-xs font-medium bg-primary/80 rounded-full px-2.5 py-1">
                    {img.category}
                  </span>
                  <p className="text-sm font-medium mt-2">{img.alt}</p>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p>No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}
