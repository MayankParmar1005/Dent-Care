# Design Brief — Dent Care Dental Clinic

**Purpose**: Professional healthcare showcase website for dental clinic; builds patient trust through clean medical aesthetics and accessibility-first design.

**Tone**: Professional + Caring — clinical authority with human warmth; medical blue + white palette conveys expertise and safety.

**Category**: Showcase/Landing — visual richness through layering and depth, subtle animations on scroll, card-based service & testimonial displays.

## Palette

| Token | Light OKLCH | Purpose | Dark OKLCH |
|-------|------------|---------|-----------|
| `--primary` | 0.55 0.1 260 | Medical blue CTA, active states | 0.70 0.12 260 |
| `--accent` | 0.60 0.12 205 | Clinical teal secondary actions | 0.75 0.15 205 |
| `--background` | 0.99 0 0 | Pristine white canvas | 0.145 0 0 |
| `--foreground` | 0.20 0.02 250 | Dark slate readable text | 0.95 0 0 |
| `--muted` | 0.92 0.01 240 | Light gray card backgrounds | 0.22 0 0 |
| `--success` | 0.65 0.1 140 | Green for testimonials, positive actions | — |
| `--destructive` | 0.55 0.15 25 | Alert red for warnings/cancellations | 0.65 0.19 22 |

## Typography

- **Display & Body**: General Sans (modern, friendly, medical-appropriate sans-serif)
- **Mono**: Geist Mono (code/data display)
- **Scale**: 12/14/16/18/20/24/28/32/40/48px
- **Hierarchy**: Headlines bold (600), body regular (400), captions medium (500)

## Structural Zones

| Zone | Light Treatment | Dark Adaptation |
|------|-----------------|-----------------|
| **Header** | Sticky white `bg-background` with `border-b` in `border-muted` | Dark slate background |
| **Hero** | Blue-tinted gradient with white text overlay; high visual impact | Adjusted blue with reduced contrast gradient |
| **Content Sections** | Alternating `bg-white` and `bg-secondary/20` for rhythm and breathing room | Maintained hierarchy with dark bg-card |
| **Cards** (Services, Testimonials) | Elevated `shadow-medical`, `bg-card`, subtle `border` | Darker card with adjusted shadow |
| **CTA Buttons** | `btn-primary` (solid blue), `btn-secondary` (outlined) | Lighter blue, maintained contrast |
| **Footer** | Dark slate `bg-sidebar`, white text | Maintained dark footer |

## Shape Language

- **Border Radius**: 10px (softer than clinical brutalism, warmer minimalism)
- **Spacing Density**: Open breathing room between sections (generous vertical rhythm)
- **Shadows**: Medical subtle `shadow-medical` (0.08 opacity) + elevated `shadow-elevated` (0.08 opacity)
- **Borders**: Minimal use; 1px on cards/input in `border-muted`

## Animations & Motion

- **Entrance**: `fade-in-up` on scroll for section cards (0.6s ease-out)
- **Interactive**: `transition-smooth` (0.3s cubic-bezier) on hover/focus states
- **Button Feedback**: Hover opacity-90, active scale-95
- **Choreography**: Staggered fade-in for service cards; testimonial cards cascade entrance

## Component Patterns

- **Buttons**: Three variants (`btn-primary`, `btn-secondary`, `btn-small`) with smooth transitions
- **Cards**: Service/testimonial cards with `shadow-medical`, open spacing, icon + text hierarchy
- **Forms**: Input fields with `border-input`, accessible labels, blue focus ring
- **Icons**: Healthcare-themed (stethoscope, tooth, smile, checkmark) in blue accent color
- **Testimonial Layout**: 2–3 per row on desktop (md breakpoint), 1 on mobile, card-based with star rating

## Responsive Design

- **Mobile-first**: 320px base, optimized touch targets (48px minimum)
- **Tablet**: 768px (`md:`), 2-column layouts for cards
- **Desktop**: 1024px (`lg:`), 3-column service grid, full horizontal layout
- **Sticky Header**: Navigation visible on all breakpoints; hamburger menu on mobile

## Constraints & Guardrails

- No generic purple gradients; medical blue only
- No rainbow palettes; 4-color system (blue, teal, white, gray, + success/destructive)
- No bouncy animations; smooth, professional motion
- No sans-serif serif mixing; consistent General Sans throughout
- No transparent text over images; white text with dark overlay on hero

## Signature Detail

**Patient comfort messaging** integrated into copy: "Your comfort is our priority," "Gentle care, expert results," "Pain-free procedures" — copywriting pairs with visual calm (open spacing, soft shadows, warm blue).

## Fonts & Assets

- `GeneralSans.woff2`: Display + body font
- `GeistMono.woff2`: Monospace fallback
- Clinic images (doctor, clinic interior, equipment) placed in hero and gallery sections
- Healthcare icons (SVG or icon library) for service cards

## Accessibility

- WCAG AA contrast ratios maintained (text on primary/muted backgrounds)
- Focus rings visible (blue outline, `--ring` token)
- Semantic HTML structure with ARIA labels on icons
- Form inputs with associated labels and error messaging
