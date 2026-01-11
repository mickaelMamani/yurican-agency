# Yurican Website

## Project Overview

Yurican is a French RevOps agency website. The site serves as the primary marketing and lead generation platform for the agency.

**Primary Goal**: Convert visitors into qualified leads (book a free audit)
**Target Audience**: VP Sales, Heads of RevOps, Founders of French B2B scale-ups

> **Design Reference**: See `context/yurican-charte-graphique.md` for the complete brand guidelines including logo usage, color specifications (CMYK/Pantone), and detailed design rules.

### Brand Personality

| Trait | Description |
|-------|-------------|
| **Expert** | Deep technical mastery, proves through results |
| **Pragmatique** | Action-oriented, no corporate blabla |
| **Innovant** | Useful tech, not gadgets |
| **Direct** | Clear communication, no jargon |
| **Français** | Locally anchored, international ambition |

### Taglines

- **Primary**: "Data française. Revenue global."
- **Alternative**: "L'agence RevOps qui code vos workflows"
- **Alternative**: "RevOps. Engineered in France."

## Tech Stack

- **Framework**: Vite + React 18
- **Styling**: Tailwind CSS v3
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Plus Jakarta Sans, Inter, JetBrains Mono (Google Fonts)

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── layout/          # Header, Footer, Navigation
│   ├── sections/        # Landing page sections (Hero, Services, Team, etc.)
│   └── common/          # Reusable components (CTAButton, ServiceCard, etc.)
├── pages/               # Page components
├── lib/                 # Utilities, cn(), constants
├── hooks/               # Custom React hooks
├── assets/              # Images, SVGs
└── styles/              # Global styles, Tailwind config
```

## Brand Identity

### Color Palette

```css
/* Primary Colors */
--color-primary: #080092;        /* Dark Blue - titles, hero backgrounds */
--color-accent: #2F6AE8;         /* Light Blue - CTAs, links, accents */

/* Neutrals */
--color-dark: #0A0A1A;           /* Deep Navy - dark backgrounds */
--color-text: #0A0A1A;           /* Body text */
--color-text-secondary: #64748B; /* Slate 500 - secondary text */
--color-border: #CBD5E1;         /* Slate 300 - borders */
--color-bg-light: #F1F5F9;       /* Light Gray - section backgrounds */
--color-bg-card: #F8FAFC;        /* Off White - card backgrounds */

/* Functional */
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #6366F1;
```

### Color Application Rules

| Context | Color |
|---------|-------|
| Page background | White (#FFFFFF) |
| Alternate section background | Light Gray (#F1F5F9) |
| Hero / header background | Gradient Storm or Deep Navy |
| H1, H2 titles | Dark Blue (#080092) |
| Body text | Deep Navy (#0A0A1A) |
| Secondary text | Slate 500 (#64748B) |
| Links | Light Blue (#2F6AE8) |
| Primary buttons | Gradient CTA or Light Blue |
| Secondary buttons | White with Slate 300 border |

### Tailwind Config Additions

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#080092',
          light: '#2F6AE8',
        },
        dark: '#0A0A1A',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-storm': 'linear-gradient(135deg, #0A0A1A 0%, #080092 50%, #2F6AE8 100%)',
        'gradient-cta': 'linear-gradient(90deg, #080092 0%, #2F6AE8 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
      },
    },
  },
}
```

### Typography Rules

| Element | Font | Weight | Size | Line Height | Color |
|---------|------|--------|------|-------------|-------|
| H1 | Plus Jakarta Sans | 700 | 3.5rem (56px) | 1.1 | #080092 |
| H2 | Plus Jakarta Sans | 700 | 2.5rem (40px) | 1.2 | #080092 |
| H3 | Plus Jakarta Sans | 600 | 1.75rem (28px) | 1.3 | #080092 |
| H4 | Plus Jakarta Sans | 600 | 1.5rem (24px) | 1.3 | #0A0A1A |
| H5 | Plus Jakarta Sans | 500 | 1.25rem (20px) | 1.4 | #0A0A1A |
| Body Large | Inter | 400 | 1.125rem (18px) | 1.6 | #0A0A1A |
| Body | Inter | 400 | 1rem (16px) | 1.6 | #0A0A1A |
| Body Small | Inter | 400 | 0.875rem (14px) | 1.5 | #64748B |
| Caption | Inter | 500 | 0.75rem (12px) | 1.4 | #64748B |
| Code/Metrics | JetBrains Mono | 500 | varies | 1.2 | #080092 |

## Component Guidelines

### Buttons

Use shadcn/ui Button with custom variants:

```tsx
// Primary CTA (gradient)
<Button className="bg-gradient-cta text-white hover:opacity-90">
  Réserver un audit gratuit
</Button>

// Secondary (outline)
<Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
  Découvrir nos services
</Button>

// Ghost (on dark backgrounds)
<Button variant="ghost" className="text-white border-white/50 hover:bg-white/10">
  En savoir plus →
</Button>
```

### Cards

Use shadcn/ui Card with hover effects:

```tsx
<Card className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm
                hover:shadow-[0_10px_40px_rgba(8,0,146,0.1)]
                hover:border-primary-light hover:-translate-y-1 transition-all">
  <CardHeader>
    <span className="text-3xl mb-2">{icon}</span>
    <CardTitle className="text-primary font-display">{title}</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">{description}</p>
  </CardContent>
</Card>
```

### Inputs

```tsx
<div className="space-y-2">
  <Label className="font-medium text-sm text-slate-700">Email professionnel</Label>
  <Input
    className="bg-white border-slate-300 rounded-lg px-4 py-3
               focus:border-primary-light focus:ring-2 focus:ring-primary-light/20"
    placeholder="votre@email.com"
  />
</div>
```

### Badges / Tags

```tsx
<Badge className="bg-indigo-100 text-primary font-medium text-xs px-3 py-1 rounded-full">
  HubSpot
</Badge>
```

### Section Layout

Standard section padding and max-width:

```tsx
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Section content */}
  </div>
</section>
```

## Coding Conventions

### Naming

- Components: PascalCase (`HeroSection.tsx`)
- Hooks: camelCase with `use` prefix (`useScrollPosition.ts`)
- Utils: camelCase (`formatPrice.ts`)
- CSS classes: Use Tailwind, avoid custom CSS when possible

### Component Structure

```tsx
// components/sections/HeroSection.tsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn("min-h-screen bg-gradient-storm", className)}>
      {/* Content */}
    </section>
  )
}
```

### File Organization

- One component per file
- Co-locate tests with components (`Component.test.tsx`)
- Export from index files for cleaner imports

## Key Pages

| Route | Page | Priority |
|-------|------|----------|
| `/` | Landing Page (Home) | MVP |
| `/services` | Services Overview | MVP |
| `/services/[slug]` | Individual Service | Phase 2 |
| `/equipe` | Team Page | MVP |
| `/contact` | Contact / Calendly | MVP |
| `/cas-clients` | Case Studies | Phase 2 |
| `/blog` | Blog Index | Phase 3 |

## Content Guidelines

### Tone of Voice

- **Clear**: No unnecessary jargon
- **Confident**: "We know how to do this" not "We are the best"
- **Concrete**: Always provide value, no corporate fluff
- **French**: Correct French, common anglicisms OK (RevOps, pipeline, lead)

### CTAs

- Primary: "Réserver un audit gratuit"
- Secondary: "Découvrir nos services"
- Tertiary: "En savoir plus →"

### Reassurance Elements

Always include near CTAs:
- ✓ Audit de 30 min offert
- ✓ Sans engagement
- ✓ Experts data France

## Team Data

```ts
const team = [
  {
    name: 'Paul Dussart',
    role: 'RevOps Lead',
    background: 'Ex-Intescia (Corporama, Doubletrade...)',
    skills: ['Salesforce', 'HubSpot', 'N8N', 'Make', 'PowerBI'],
    linkedin: 'https://linkedin.com/in/pauldussart',
  },
  {
    name: 'Jean-Philippe Roncari',
    role: 'Expert Data B2B',
    background: '7+ ans Data B2B @ Intescia',
    skills: ['Ciblage', 'Qualification', 'Signaux d\'affaires'],
    linkedin: 'https://linkedin.com/in/jean-philipperoncari-a8757215b',
  },
  {
    name: 'Guillaume Clavier',
    role: 'COO',
    background: 'COO SocieteInfo, Ex-SG CIB M&A',
    skills: ['Corporate Finance', 'Operations', 'Scale-up'],
    linkedin: 'https://linkedin.com/in/guillaumeclavier-36b0463b',
  },
  {
    name: 'Mickael Mamani Cardona',
    role: 'CTO',
    background: 'Ex-Natixis, Ex-SG Front-Office',
    skills: ['C#/.NET', 'Python', 'Trading Tools', 'API'],
    linkedin: 'https://linkedin.com/in/mickaelmamani-cardona',
  },
]
```

## Services Data

```ts
const services = [
  { id: 'audit-revops', icon: '🔍', title: 'Audit RevOps', price: 'À partir de 5 000€' },
  { id: 'implementation-crm', icon: '⚙️', title: 'Implémentation CRM', price: 'À partir de 8 000€' },
  { id: 'automatisation', icon: '🤖', title: 'Automatisation', price: 'À partir de 3 000€' },
  { id: 'data-france', icon: '🇫🇷', title: 'Data France', price: '500€/mois' },
  { id: 'integration', icon: '🔗', title: 'Intégrations', price: 'Sur devis' },
  { id: 'formation', icon: '🎓', title: 'Formation', price: '1 500€/jour' },
]
```

## Spacing System (8px base)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro-spacing |
| `space-2` | 8px | Inline spacing |
| `space-3` | 12px | Small padding |
| `space-4` | 16px | Standard padding |
| `space-6` | 24px | Large padding |
| `space-8` | 32px | Section gaps |
| `space-12` | 48px | Section margins |
| `space-16` | 64px | Large margins |
| `space-20` | 80px | Section padding |
| `space-24` | 96px | Hero padding |

### Grid & Container

- **Container max-width**: 1280px (max-w-6xl)
- **Horizontal padding**: 24px mobile → 48px desktop
- **Columns**: 12 columns
- **Gutter**: 24px mobile → 32px desktop

### Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| `sm` | 640px | Large mobile |
| `md` | 768px | Tablet |
| `lg` | 1024px | Small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large screens |

## Animation Guidelines

### Principles

- **Subtlety**: Animations reinforce, don't distract
- **Performance**: Prefer `transform` and `opacity`
- **Consistency**: Same easing everywhere

### Timing Functions

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Durations

| Type | Duration |
|------|----------|
| Micro (hover, focus) | 150ms |
| Standard (appearance) | 300ms |
| Complex (modals, menus) | 400ms |
| Page transitions | 500ms |

### Tailwind Examples

```tsx
// Fade in up on scroll (use Intersection Observer)
className="animate-in fade-in slide-in-from-bottom-4 duration-500"

// Hover effects on cards
className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1"

// Button hover
className="transition-all hover:scale-105"
```

### Background Patterns

```css
/* Data Storm pattern (subtle background) */
.pattern-storm {
  background-image:
    radial-gradient(ellipse at 30% 50%, rgba(47, 106, 232, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 30%, rgba(8, 0, 146, 0.06) 0%, transparent 40%);
}

/* Grid pattern */
.pattern-grid {
  background-image:
    linear-gradient(rgba(203, 213, 225, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(203, 213, 225, 0.3) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

## Iconography

**Library**: Lucide Icons (lucide.dev)
- Stroke width: 1.5px (default) or 2px
- Standard size: 24px

### Icon Sizes

| Usage | Size |
|-------|------|
| Inline (in text) | 16px |
| UI standard | 20px |
| Cards / Features | 24px |
| Hero / Large | 32px - 48px |

### Icon Colors

| Context | Color |
|---------|-------|
| On light background | Light Blue (#2F6AE8) or Slate 500 |
| On dark background | White (#FFFFFF) |
| In text | Same as adjacent text |
| Interactive (hover) | Dark Blue (#080092) |

## Performance Targets

- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Lighthouse Score: > 90

## Environment Variables

```env
VITE_CALENDLY_URL=https://calendly.com/yurican
VITE_CONTACT_EMAIL=contact@yurican.fr
VITE_GA_ID=G-XXXXXXXXXX
```

## Dependencies to Install

```bash
# Core
npm create vite@latest yurican-website -- --template react-ts
cd yurican-website

# Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# shadcn/ui
npx shadcn@latest init

# Additional
npm install lucide-react
npm install @fontsource/plus-jakarta-sans @fontsource/inter @fontsource-variable/jetbrains-mono
```

## Accessibility Requirements

- **Contrast ratio text/background**: minimum 4.5:1 (WCAG AA)
- **Contrast ratio titles/background**: minimum 3:1
- Never use color alone to convey information
- Always provide visible focus states
- All interactive elements must be keyboard accessible

## Design Constraints (Do NOT)

| Forbidden | Reason |
|-----------|--------|
| Purple or pink colors | Brand confusion |
| Generic stock photos | Lack of authenticity |
| Multi-color gradients | Off-brand |
| Text on Light Blue background | Insufficient contrast |
| Cartoon illustrations | Doesn't match expert positioning |
| Emojis in titles | Unprofessional |
| More than 2 fonts per page | Inconsistency |
| Deformed/rotated logo | Brand integrity |

## Notes for Development

1. **Mobile-first**: Design for mobile, enhance for desktop
2. **French content**: All UI text in French
3. **Accessibility**: Maintain WCAG AA contrast ratios
4. **SEO**: Add meta tags, Open Graph, structured data
5. **Analytics**: Plausible or Fathom (RGPD-friendly)
6. **Images**: WebP priority, JPG fallback, cold temperature, high contrast for hero
