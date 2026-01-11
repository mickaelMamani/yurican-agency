# Yurican — Charte Graphique Complète

## Document de Référence v1.0

---

## 1. Identité de Marque

### 1.1 Positionnement

**Yurican** est la première agence RevOps technique française, combinant expertise en automatisation avancée et maîtrise des données légales B2B françaises.

**Tagline principale** :
> "Data française. Revenue global."

**Taglines alternatives** :
- "L'agence RevOps qui code vos workflows"
- "RevOps. Engineered in France."
- "Vos données légales, votre avantage commercial"

### 1.2 Personnalité de Marque

| Trait | Description |
|-------|-------------|
| **Expert** | Maîtrise technique profonde, prouve par les résultats |
| **Pragmatique** | Orienté action, pas de blabla corporate |
| **Innovant** | Tech utile, pas gadget |
| **Direct** | Communication claire, sans jargon |
| **Français** | Ancré localement, ambition internationale |

### 1.3 Origine du Nom

**Yurican** évoque "Hurricane" (ouragan) — la force de transformation qui canalise le chaos des données en énergie productive. Le calme au centre de la tempête représente la clarté que Yurican apporte dans la complexité des process commerciaux.

---

## 2. Logo

### 2.1 Logo Principal (Logo Mark)

Le logo Yurican est composé d'un **Y stylisé** formant un entonnoir (funnel) avec des courbes orbitales, symbolisant :

- **Le Y** : Initiale de Yurican
- **L'entonnoir** : Le pipeline commercial, la conversion
- **Les orbites** : Les données en mouvement, l'écosystème connecté
- **Le dégradé** : La transformation du chaos vers l'ordre

### 2.2 Versions du Logo

| Version | Usage | Fichier |
|---------|-------|---------|
| **Couleur (gradient)** | Usage principal, fonds clairs | `logo-color.svg` |
| **Monochrome Dark Blue** | Documents officiels | `logo-mono-dark.svg` |
| **Monochrome Blanc** | Fonds sombres, hero sections | `logo-mono-white.svg` |
| **Favicon** | Navigateur, app | `favicon.svg` (32x32, 16x16) |

### 2.3 Zone de Protection (Clearspace)

La zone de protection minimum autour du logo est égale à **1x la hauteur** du logo mark (la partie "Y"). Aucun élément graphique ou texte ne doit empiéter sur cette zone.

```
        ┌───────────────────────┐
        │                       │
        │   ┌───────────────┐   │
        │   │               │   │
        │   │     LOGO      │   │  ← Zone de protection = 1x hauteur
        │   │               │   │
        │   └───────────────┘   │
        │                       │
        └───────────────────────┘
```

### 2.4 Taille Minimum

- **Print** : 20mm de hauteur minimum
- **Digital** : 40px de hauteur minimum
- **Favicon** : Version simplifiée sans orbites

### 2.5 Interdits

❌ Ne jamais :
- Déformer ou étirer le logo
- Changer les couleurs du gradient
- Ajouter des effets (ombre, brillance, contour)
- Placer sur un fond qui réduit la lisibilité
- Utiliser une version basse résolution
- Faire pivoter le logo

---

## 3. Palette de Couleurs

### 3.1 Couleurs Primaires

Ces couleurs constituent l'identité fondamentale de Yurican.

#### Dark Blue (Principal)
```
┌────────────────────────────────────────┐
│                                        │
│           ██████████████████           │
│                #080092                 │
│                                        │
└────────────────────────────────────────┘

Hex     : #080092
RGB     : 8, 0, 146
CMYK    : 95, 100, 0, 43
Pantone : 2736 C (approx.)

Usage   : Titres, headers, fonds hero, éléments principaux
```

#### Light Blue (Accent)
```
┌────────────────────────────────────────┐
│                                        │
│           ██████████████████           │
│                #2F6AE8                 │
│                                        │
└────────────────────────────────────────┘

Hex     : #2F6AE8
RGB     : 47, 106, 232
CMYK    : 80, 54, 0, 9
Pantone : 2727 C (approx.)

Usage   : CTAs, liens, accents, éléments interactifs
```

### 3.2 Gradient Principal — "Storm"

```
┌────────────────────────────────────────┐
│ ████████████████████████████████████   │
│ #080092 ─────────────────────► #2F6AE8 │
└────────────────────────────────────────┘

CSS : linear-gradient(180deg, #080092 0%, #2F6AE8 100%)
      linear-gradient(135deg, #080092 0%, #2F6AE8 100%)

Usage : Logo, hero backgrounds, éléments de marque forts
```

### 3.3 Couleurs Neutres

Pour les fonds, textes et éléments d'interface.

| Nom | Hex | RGB | Usage |
|-----|-----|-----|-------|
| **Deep Navy** | `#0A0A1A` | 10, 10, 26 | Fonds très sombres, texte sur clair |
| **Slate 700** | `#334155` | 51, 65, 85 | Texte principal (alternative) |
| **Slate 500** | `#64748B` | 100, 116, 139 | Texte secondaire |
| **Slate 300** | `#CBD5E1` | 203, 213, 225 | Bordures, séparateurs |
| **Light Gray** | `#F1F5F9` | 241, 245, 249 | Fonds de sections |
| **Off White** | `#F8FAFC` | 248, 250, 252 | Fonds de cards |
| **White** | `#FFFFFF` | 255, 255, 255 | Fond principal, texte sur foncé |

### 3.4 Couleurs Fonctionnelles

Pour les états et feedback utilisateur.

| Nom | Hex | RGB | Usage |
|-----|-----|-----|-------|
| **Success** | `#10B981` | 16, 185, 129 | Validations, croissance positive |
| **Success Light** | `#D1FAE5` | 209, 250, 229 | Fond success |
| **Warning** | `#F59E0B` | 245, 158, 11 | Alertes, attention |
| **Warning Light** | `#FEF3C7` | 254, 243, 199 | Fond warning |
| **Error** | `#EF4444` | 239, 68, 68 | Erreurs, décroissance |
| **Error Light** | `#FEE2E2` | 254, 226, 226 | Fond error |
| **Info** | `#6366F1` | 99, 102, 241 | Informations, tips |
| **Info Light** | `#E0E7FF` | 224, 231, 255 | Fond info |

### 3.5 Gradients Additionnels

```css
/* Hero Gradient (Deep Storm) */
.gradient-hero {
  background: linear-gradient(135deg, #0A0A1A 0%, #080092 50%, #2F6AE8 100%);
}

/* Subtle Gradient (pour sections) */
.gradient-subtle {
  background: linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%);
}

/* CTA Gradient */
.gradient-cta {
  background: linear-gradient(90deg, #080092 0%, #2F6AE8 100%);
}

/* Data Visualization */
.gradient-data {
  background: linear-gradient(90deg, #080092 0%, #2F6AE8 50%, #10B981 100%);
}
```

### 3.6 Règles d'Application des Couleurs

| Contexte | Couleur |
|----------|---------|
| Fond de page principal | White (#FFFFFF) |
| Fond de section alternée | Light Gray (#F1F5F9) |
| Fond hero / header | Gradient Storm ou Deep Navy |
| Titres H1, H2 | Dark Blue (#080092) |
| Texte body | Deep Navy (#0A0A1A) ou Slate 700 |
| Texte secondaire | Slate 500 (#64748B) |
| Liens | Light Blue (#2F6AE8) |
| Boutons primaires | Gradient CTA ou Light Blue |
| Boutons secondaires | White avec bordure Slate 300 |

---

## 4. Typographie

### 4.1 Polices Officielles

#### Police Titres : Plus Jakarta Sans

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789

Poids utilisés : Bold (700), SemiBold (600), Medium (500)
Source : Google Fonts
```

**Caractéristiques** : Géométrique, moderne, professionnelle. Les courbes douces complètent le logo.

#### Police Corps : Inter

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789

Poids utilisés : Regular (400), Medium (500), SemiBold (600)
Source : Google Fonts
```

**Caractéristiques** : Optimisée pour les écrans, excellente lisibilité, neutre et professionnelle.

#### Police Technique : JetBrains Mono

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789

Poids utilisés : Regular (400), Medium (500)
Source : Google Fonts
```

**Caractéristiques** : Monospace moderne, parfaite pour le code et les données chiffrées.

### 4.2 Hiérarchie Typographique

| Élément | Police | Poids | Taille | Line Height | Couleur |
|---------|--------|-------|--------|-------------|---------|
| **H1** | Plus Jakarta Sans | Bold | 56px / 3.5rem | 1.1 | #080092 |
| **H2** | Plus Jakarta Sans | Bold | 40px / 2.5rem | 1.2 | #080092 |
| **H3** | Plus Jakarta Sans | SemiBold | 28px / 1.75rem | 1.3 | #080092 |
| **H4** | Plus Jakarta Sans | SemiBold | 24px / 1.5rem | 1.3 | #0A0A1A |
| **H5** | Plus Jakarta Sans | Medium | 20px / 1.25rem | 1.4 | #0A0A1A |
| **Body Large** | Inter | Regular | 18px / 1.125rem | 1.6 | #0A0A1A |
| **Body** | Inter | Regular | 16px / 1rem | 1.6 | #0A0A1A |
| **Body Small** | Inter | Regular | 14px / 0.875rem | 1.5 | #64748B |
| **Caption** | Inter | Medium | 12px / 0.75rem | 1.4 | #64748B |
| **Code** | JetBrains Mono | Regular | 14px / 0.875rem | 1.5 | #080092 |
| **Metric** | JetBrains Mono | Medium | Variable | 1.2 | #080092 |

### 4.3 CSS Variables

```css
:root {
  /* Fonts */
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.75rem;    /* 28px */
  --text-4xl: 2.5rem;     /* 40px */
  --text-5xl: 3.5rem;     /* 56px */
  
  /* Colors */
  --color-primary: #080092;
  --color-accent: #2F6AE8;
  --color-dark: #0A0A1A;
  --color-text: #0A0A1A;
  --color-text-secondary: #64748B;
  --color-border: #CBD5E1;
  --color-bg-light: #F1F5F9;
  --color-white: #FFFFFF;
  
  /* Functional */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #6366F1;
}
```

---

## 5. Iconographie

### 5.1 Bibliothèque Recommandée

**Lucide Icons** (lucide.dev)

- Style : Linéaire, cohérent
- Stroke width : 1.5px (par défaut) ou 2px
- Taille standard : 24px
- Licence : ISC (libre d'utilisation)

Alternative : **Phosphor Icons** (phosphoricons.com)

### 5.2 Couleurs des Icônes

| Contexte | Couleur |
|----------|---------|
| Icône sur fond clair | Light Blue (#2F6AE8) ou Slate 500 |
| Icône sur fond sombre | White (#FFFFFF) |
| Icône dans texte | Couleur du texte adjacent |
| Icône interactive (hover) | Dark Blue (#080092) |

### 5.3 Tailles Standards

| Usage | Taille |
|-------|--------|
| Inline (dans texte) | 16px |
| UI standard | 20px |
| Cards / Features | 24px |
| Hero / Large | 32px - 48px |

---

## 6. Composants UI

### 6.1 Boutons

#### Bouton Primaire
```
┌─────────────────────────────────────┐
│                                     │
│        Réserver un audit            │
│                                     │
└─────────────────────────────────────┘

Background : linear-gradient(90deg, #080092, #2F6AE8)
Text       : #FFFFFF
Padding    : 16px 32px
Radius     : 8px
Font       : Plus Jakarta Sans, SemiBold, 16px
Shadow     : 0 4px 14px rgba(8, 0, 146, 0.25)

Hover      : brightness(1.1), shadow intensifié
Active     : brightness(0.95)
```

#### Bouton Secondaire
```
┌─────────────────────────────────────┐
│                                     │
│        Découvrir nos services       │
│                                     │
└─────────────────────────────────────┘

Background : #FFFFFF
Border     : 1px solid #CBD5E1
Text       : #080092
Padding    : 16px 32px
Radius     : 8px
Font       : Plus Jakarta Sans, SemiBold, 16px

Hover      : Background #F1F5F9, Border #080092
```

#### Bouton Ghost
```
Text       : #2F6AE8
Font       : Inter, Medium, 16px
Underline  : on hover
```

### 6.2 Cards

```
┌─────────────────────────────────────┐
│                                     │
│  [Icône]                            │
│                                     │
│  Titre du service                   │
│                                     │
│  Description courte sur deux        │
│  ou trois lignes maximum.           │
│                                     │
│  En savoir plus →                   │
│                                     │
└─────────────────────────────────────┘

Background : #FFFFFF
Border     : 1px solid #E2E8F0
Radius     : 12px
Padding    : 24px
Shadow     : 0 1px 3px rgba(0,0,0,0.1)

Hover      : Shadow 0 10px 40px rgba(8,0,146,0.1)
             Border #2F6AE8
             Transform translateY(-4px)
```

### 6.3 Inputs

```
┌─────────────────────────────────────┐
│  Email professionnel                │
│  ┌─────────────────────────────────┐│
│  │ votre@email.com                 ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘

Label      : Inter, Medium, 14px, #334155
Input      : Inter, Regular, 16px, #0A0A1A
Background : #FFFFFF
Border     : 1px solid #CBD5E1
Radius     : 8px
Padding    : 12px 16px

Focus      : Border #2F6AE8, Ring 2px rgba(47,106,232,0.2)
Error      : Border #EF4444
```

### 6.4 Badges / Tags

```
┌──────────────┐
│  HubSpot     │
└──────────────┘

Background : #E0E7FF (ou couleur fonctionnelle light)
Text       : #080092 (ou couleur fonctionnelle)
Font       : Inter, Medium, 12px
Padding    : 4px 12px
Radius     : 9999px (pill)
```

---

## 7. Imagerie

### 7.1 Style Photographique

**Autorisé** :
- Photos de tempêtes/ouragans vus de l'espace (imagerie satellite)
- Visualisations de données abstraites
- Photos d'équipe authentiques (pas posées artificiellement)
- Captures d'écran de dashboards/outils (stylisées)

**Interdit** :
- Photos stock génériques (poignées de main, open spaces génériques)
- Photos avec filtre bleu/violet excessif
- Illustrations cartoon ou enfantines
- Photos de banques d'images reconnaissables

### 7.2 Traitement des Images

- **Superposition** : Gradient Storm en overlay (opacity 60-80%)
- **Température** : Légèrement froide (vers les bleus)
- **Contraste** : Élevé pour les images hero
- **Format** : WebP prioritaire, fallback JPG

### 7.3 Motif "Data Storm"

Motif abstrait utilisable en arrière-plan subtil :

```css
.pattern-storm {
  background-image: 
    radial-gradient(
      ellipse at 30% 50%, 
      rgba(47, 106, 232, 0.08) 0%, 
      transparent 50%
    ),
    radial-gradient(
      ellipse at 70% 30%, 
      rgba(8, 0, 146, 0.06) 0%, 
      transparent 40%
    );
}

.pattern-grid {
  background-image: 
    linear-gradient(rgba(203, 213, 225, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(203, 213, 225, 0.3) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

---

## 8. Espacement et Grille

### 8.1 Système d'Espacement (8px base)

| Token | Valeur | Usage |
|-------|--------|-------|
| `space-1` | 4px | Micro-espacement |
| `space-2` | 8px | Espacement inline |
| `space-3` | 12px | Padding small |
| `space-4` | 16px | Padding standard |
| `space-5` | 20px | — |
| `space-6` | 24px | Padding large |
| `space-8` | 32px | Gap sections |
| `space-10` | 40px | — |
| `space-12` | 48px | Margin sections |
| `space-16` | 64px | Margin large |
| `space-20` | 80px | Section padding |
| `space-24` | 96px | Hero padding |

### 8.2 Grille

- **Container max-width** : 1280px
- **Padding horizontal** : 24px (mobile) → 48px (desktop)
- **Colonnes** : 12 colonnes
- **Gutter** : 24px (mobile) → 32px (desktop)

### 8.3 Breakpoints

| Nom | Valeur | Usage |
|-----|--------|-------|
| `sm` | 640px | Mobile large |
| `md` | 768px | Tablette |
| `lg` | 1024px | Desktop small |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large screens |

---

## 9. Animation et Motion

### 9.1 Principes

- **Subtilité** : Les animations renforcent, ne distraient pas
- **Performance** : Préférer `transform` et `opacity`
- **Cohérence** : Même easing partout

### 9.2 Timing Functions

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### 9.3 Durées

| Type | Durée |
|------|-------|
| Micro (hover, focus) | 150ms |
| Standard (apparition) | 300ms |
| Complexe (modals, menus) | 400ms |
| Page transitions | 500ms |

### 9.4 Animations Types

```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

## 10. Applications

### 10.1 Signatures Email

```
──────────────────────────────────
Paul Dussart
RevOps Lead

📧 paul@yurican.fr
📞 +33 X XX XX XX XX
🔗 linkedin.com/in/pauldussart

[Logo Yurican]
yurican.fr — Data française. Revenue global.
──────────────────────────────────
```

### 10.2 Cartes de Visite

**Recto** :
- Logo centré
- Fond blanc ou gradient subtil

**Verso** :
- Nom (Plus Jakarta Sans Bold)
- Titre (Inter Regular)
- Coordonnées (Inter Regular)
- Fond Dark Blue, texte blanc

### 10.3 Présentations

- **Slide titre** : Fond Gradient Storm, logo blanc, titre blanc
- **Slides contenu** : Fond blanc, titres Dark Blue
- **Slides impact** : Fond Dark Blue, chiffre en Light Blue
- **Dernière slide** : Coordonnées, CTA

### 10.4 Réseaux Sociaux

**LinkedIn Banner** (1584 × 396px) :
- Fond Gradient Hero
- Logo à gauche
- Tagline centrée
- Pattern Data Storm subtil

**Post Template** (1080 × 1080px) :
- Fond Dark Blue ou Gradient
- Titre en blanc (Plus Jakarta Sans)
- Accent Light Blue pour les highlights

---

## 11. Interdits et Garde-fous

### 11.1 Ce qu'il ne faut JAMAIS faire

| ❌ Interdit | Raison |
|-------------|--------|
| Utiliser du violet ou rose | Confusion avec d'autres marques |
| Photos stock génériques | Manque d'authenticité |
| Gradient multicolore | Hors identité |
| Texte sur fond Light Blue | Contraste insuffisant |
| Illustrations cartoon | Hors positionnement expert |
| Emojis dans les titres | Pas professionnel |
| Plus de 2 polices par page | Incohérence |
| Logo déformé | Identité compromise |

### 11.2 Contraste et Accessibilité

- Ratio minimum texte/fond : **4.5:1** (WCAG AA)
- Ratio minimum titres/fond : **3:1**
- Ne jamais utiliser la couleur seule pour transmettre une information
- Toujours prévoir des états focus visibles

---

## 12. Fichiers et Ressources

### 12.1 Structure des Assets

```
/brand/
├── logo/
│   ├── logo-color.svg
│   ├── logo-color.png (2x)
│   ├── logo-mono-dark.svg
│   ├── logo-mono-white.svg
│   ├── favicon.svg
│   └── favicon.ico
├── fonts/
│   ├── PlusJakartaSans/
│   ├── Inter/
│   └── JetBrainsMono/
├── icons/
│   └── (Lucide icons sélectionnés)
├── images/
│   ├── hero/
│   ├── team/
│   └── patterns/
└── templates/
    ├── presentation.pptx
    ├── document.docx
    └── email-signature.html
```

### 12.2 Liens Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap" rel="stylesheet">
```

---

*Charte Graphique Yurican — v1.0*
*Dernière mise à jour : Janvier 2025*
