# Yurican — Landing Page (Spécifications Détaillées)

## Vue d'ensemble

Ce document spécifie en détail chaque section de la landing page Yurican, avec le contenu exact, les specs visuelles, et les interactions.

**Objectif de la page** : Convertir les visiteurs en leads qualifiés (prise de RDV audit gratuit)
**Cible principale** : Directeurs commerciaux, VP Sales, Founders de scale-ups B2B françaises
**Temps de lecture estimé** : 3-4 minutes pour un scroll complet

---

## Structure des Sections

| # | Section | Hauteur estimée | Objectif |
|---|---------|-----------------|----------|
| 1 | **Navigation** | 80px fixe | Orienter, CTA visible |
| 2 | **Hero** | 100vh | Capturer, qualifier |
| 3 | **Pain Points** | ~400px | Créer l'identification |
| 4 | **Services** | ~600px | Présenter l'offre |
| 5 | **Différenciateurs** | ~500px | Établir la différence |
| 6 | **Chiffres clés** | ~300px | Crédibiliser |
| 7 | **Cas clients** | ~600px | Prouver |
| 8 | **Équipe** | ~700px | Humaniser, rassurer |
| 9 | **Témoignages** | ~400px | Social proof |
| 10 | **CTA Final** | ~500px | Convertir |
| 11 | **Footer** | ~300px | Navigation secondaire |

---

## SECTION 1 : Navigation (Header)

### Specs Visuelles

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  [Logo]    Services ▼   Solutions ▼   Cas Clients   Ressources   [CTA]  │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘

Hauteur     : 80px
Position    : Fixed top
Background  : Transparent → White (on scroll, avec shadow)
Padding     : 0 48px
z-index     : 1000
```

### Comportement au Scroll

| État | Background | Shadow | Logo |
|------|------------|--------|------|
| Top (transparent) | `transparent` | Aucune | Blanc (si hero sombre) |
| Scrolled (>100px) | `#FFFFFF` | `0 2px 20px rgba(0,0,0,0.1)` | Couleur |

### Éléments

**Logo** : Logo mark + "Yurican" texte (optionnel)
**Navigation** :
- Services (dropdown)
- Solutions (dropdown)
- Cas Clients (lien direct)
- Ressources (dropdown)

**CTA Header** :
```
┌─────────────────────┐
│   Prendre RDV       │
└─────────────────────┘

Style   : Bouton secondaire (outline) en mode transparent
          Bouton primaire (filled) en mode scrolled
Taille  : Padding 12px 24px
```

---

## SECTION 2 : Hero (100vh)

### Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │                                                                     │ │
│  │                                                                     │ │
│  │           Transformez vos données                                   │ │
│  │           en machine à revenus                                      │ │
│  │                                                                     │ │
│  │     L'agence RevOps technique qui maîtrise les données             │ │
│  │     légales françaises et l'automatisation avancée.                │ │
│  │                                                                     │ │
│  │     ┌──────────────────────┐  ┌────────────────────────┐          │ │
│  │     │  Réserver un audit   │  │  Découvrir nos services │          │ │
│  │     │       gratuit        │  │                        │          │ │
│  │     └──────────────────────┘  └────────────────────────┘          │ │
│  │                                                                     │ │
│  │     ✓ Audit de 30 min offert   ✓ Sans engagement                  │ │
│  │                                                                     │ │
│  │                                                                     │ │
│  │  ─────────────────────────────────────────────────────────────────  │ │
│  │                                                                     │ │
│  │     [Logo Client 1]  [Logo 2]  [Logo 3]  [Logo 4]  [Logo 5]       │ │
│  │     "Ils nous font confiance"                                      │ │
│  │                                                                     │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│                              ↓ Scroll                                    │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### Specs Visuelles Hero

```css
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 120px 48px 80px;
  position: relative;
  overflow: hidden;
}

.hero-background {
  /* Option 1 : Gradient Storm */
  background: linear-gradient(135deg, #0A0A1A 0%, #080092 50%, #2F6AE8 100%);
  
  /* Option 2 : Image satellite tempête + overlay */
  background-image: 
    linear-gradient(135deg, rgba(10,10,26,0.9) 0%, rgba(8,0,146,0.8) 50%, rgba(47,106,232,0.7) 100%),
    url('/images/hero-storm.webp');
  background-size: cover;
  background-position: center;
}
```

### Contenu Hero

#### Headline (H1)

**Texte** :
> "Transformez vos données en machine à revenus"

**Alternatives à tester (A/B)** :
- "Vos données françaises. Votre avantage commercial."
- "Le RevOps technique qui accélère votre croissance"
- "De la data brute aux deals signés"

**Specs** :
```css
.hero-headline {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4rem); /* 40px → 64px */
  line-height: 1.1;
  color: #FFFFFF;
  max-width: 800px;
  margin-bottom: 24px;
}
```

#### Sous-titre

**Texte** :
> "L'agence RevOps technique qui maîtrise les données légales françaises et l'automatisation avancée. Nous transformons votre CRM en générateur de revenus."

**Specs** :
```css
.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: clamp(1.125rem, 2vw, 1.375rem); /* 18px → 22px */
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 640px;
  margin-bottom: 40px;
}
```

#### CTAs Hero

**CTA Primaire** :
```
┌─────────────────────────────┐
│   Réserver un audit gratuit │
└─────────────────────────────┘

Background  : #FFFFFF
Text        : #080092
Font        : Plus Jakarta Sans, SemiBold, 18px
Padding     : 18px 36px
Radius      : 8px
Shadow      : 0 4px 20px rgba(0,0,0,0.3)

Hover       : Background #F1F5F9, transform scale(1.02)
```

**CTA Secondaire** :
```
┌─────────────────────────────┐
│  Découvrir nos services →   │
└─────────────────────────────┘

Background  : transparent
Border      : 2px solid rgba(255,255,255,0.5)
Text        : #FFFFFF
Font        : Plus Jakarta Sans, Medium, 16px
Padding     : 16px 32px
Radius      : 8px

Hover       : Border white, background rgba(255,255,255,0.1)
```

#### Éléments de Réassurance

```
✓ Audit de 30 min offert     ✓ Sans engagement     ✓ Experts data France
```

**Specs** :
```css
.hero-reassurance {
  display: flex;
  gap: 32px;
  margin-top: 24px;
}

.hero-reassurance-item {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-reassurance-item::before {
  content: '✓';
  color: #10B981;
  font-weight: 600;
}
```

#### Logos Clients (Social Proof)

**Texte** : "Ils nous font confiance" (optionnel si logos parlants)

**Specs** :
```css
.hero-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  margin-top: 64px;
  padding-top: 48px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.hero-logo {
  height: 32px;
  opacity: 0.6;
  filter: brightness(0) invert(1); /* Logos en blanc */
  transition: opacity 0.3s;
}

.hero-logo:hover {
  opacity: 1;
}
```

#### Scroll Indicator

```css
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}
```

### Animation Hero (au chargement)

```css
/* Staggered reveal */
.hero-headline {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-subtitle {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-ctas {
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.hero-logos {
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Éléments Visuels Additionnels (Optionnel)

**Option A : Particules animées**
- Points lumineux flottants évoquant des données
- Utiliser particles.js ou trois.js (léger)

**Option B : Lignes de connexion**
- Réseau de points connectés en arrière-plan
- Animation subtile de "flux de données"

**Option C : Orbe lumineux**
- Halo de lumière animé derrière le texte
- Évoque le calme au centre de la tempête

---

## SECTION 3 : Pain Points

### Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│               Ces problèmes vous parlent ?                               │
│                                                                          │
│  ┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐ │
│  │                     │ │                     │ │                     │ │
│  │   📊               │ │   🔗               │ │   🤷               │ │
│  │                     │ │                     │ │                     │ │
│  │   91% de vos       │ │   Vos outils ne    │ │   Personne ne sait  │ │
│  │   données CRM      │ │   se parlent pas   │ │   d'où viennent     │ │
│  │   sont fausses     │ │                     │ │   les deals         │ │
│  │                     │ │                     │ │                     │ │
│  │   Vos commerciaux  │ │   Les leads se     │ │   Impossible de     │ │
│  │   passent 27% de   │ │   perdent entre    │ │   savoir quel       │ │
│  │   leur temps à     │ │   marketing et     │ │   canal génère      │ │
│  │   nettoyer des     │ │   sales.           │ │   du revenue.       │ │
│  │   données.         │ │                     │ │                     │ │
│  │                     │ │                     │ │                     │ │
│  └─────────────────────┘ └─────────────────────┘ └─────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### Specs

```css
.pain-points {
  padding: 96px 48px;
  background: #FFFFFF;
}

.pain-points-title {
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 2.5rem;
  color: #080092;
  margin-bottom: 64px;
}

.pain-points-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.pain-point-card {
  text-align: center;
  padding: 40px 32px;
  border-radius: 16px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
}
```

### Contenu

| # | Icône | Titre | Description |
|---|-------|-------|-------------|
| 1 | 📊 | "91% de vos données CRM sont fausses" | "Vos commerciaux passent 27% de leur temps à nettoyer des données au lieu de vendre." |
| 2 | 🔗 | "Vos outils ne se parlent pas" | "Les leads se perdent entre marketing et sales. Personne n'a la même version de la vérité." |
| 3 | 🤷 | "Impossible de tracer le revenue" | "Vous ne savez pas quel canal, quelle campagne ou quel contenu génère vraiment des deals." |

---

## SECTION 4 : Services

### Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                    Ce qu'on fait (vraiment bien)                         │
│                                                                          │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐            │
│  │  🔍 Audit       │ │  ⚙️ CRM         │ │  🤖 Automation  │            │
│  │  RevOps         │ │  Implementation │ │                 │            │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘            │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐            │
│  │  🇫🇷 Data       │ │  🔗 Intégration │ │  🎓 Formation   │            │
│  │  France         │ │  API            │ │                 │            │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘            │
│                                                                          │
│                      [ Voir tous les services → ]                        │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### Contenu des 6 Services

| Service | Icône | Titre | Description | Prix indicatif |
|---------|-------|-------|-------------|----------------|
| Audit | 🔍 | Audit RevOps | Diagnostic complet de votre stack, process et data quality | À partir de 5 000€ |
| CRM | ⚙️ | Implémentation CRM | Déploiement HubSpot, Salesforce ou Pipedrive sur mesure | À partir de 8 000€ |
| Automation | 🤖 | Automatisation | Workflows N8N, Make. Séquences, routing, enrichissement auto | À partir de 3 000€ |
| Data France | 🇫🇷 | Data France | Enrichissement BODACC, SIRENE, BOAMP directement dans votre CRM | 500€/mois |
| Intégration | 🔗 | Intégrations | Connecteurs API custom, ERP français, systèmes legacy | Sur devis |
| Formation | 🎓 | Formation | Coaching équipes sur CRM, process RevOps, data quality | 1 500€/jour |

---

## SECTION 5 : Différenciateurs

### Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                    Pourquoi Yurican ?                                    │
│                                                                          │
│     "Les agences RevOps déploient des CRM.                              │
│      Nous y intégrons l'intelligence data France."                       │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │                                                                     │ │
│  │  🔧 EXPERTISE TECHNIQUE       │  🇫🇷 DATA FRANCE                   │ │
│  │  On code, on ne fait pas      │  Seule agence avec expertise       │ │
│  │  que conseiller               │  BODACC, SIRENE, BOAMP             │ │
│  │                               │                                     │ │
│  │  → Développeurs Python/.NET   │  → Équipe ex-Corporama,            │ │
│  │  → N8N self-hosted            │    ex-SocieteInfo                  │ │
│  │  → Intégrations API custom    │  → Pipelines data temps réel       │ │
│  │                               │                                     │ │
│  ├───────────────────────────────┼─────────────────────────────────────┤ │
│  │                               │                                     │ │
│  │  📊 PRAGMATISME               │  🔒 SOUVERAINETÉ                   │ │
│  │  Résultats mesurables,        │  Vos données restent               │ │
│  │  pas de slides                │  en France                         │ │
│  │                               │                                     │ │
│  │  → KPIs orientés revenue      │  → Options OVH, Scaleway           │ │
│  │  → ROI prouvé                 │  → RGPD-native                     │ │
│  │  → Quick wins dès J+30        │  → Expertise CNIL                  │ │
│  │                               │                                     │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## SECTION 6 : Chiffres Clés

### Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                          (Fond Dark Blue)                                │
│                                                                          │
│    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐        │
│    │          │    │          │    │          │    │          │        │
│    │   50+    │    │   +47%   │    │   30j    │    │   100%   │        │
│    │          │    │          │    │          │    │          │        │
│    │ Projets  │    │ Pipeline │    │ Time to  │    │ Données  │        │
│    │ livrés   │    │ moyen    │    │ Value    │    │ France   │        │
│    │          │    │          │    │          │    │          │        │
│    └──────────┘    └──────────┘    └──────────┘    └──────────┘        │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### Contenu

| Chiffre | Label | Note |
|---------|-------|------|
| **50+** | Projets livrés | (ou ajuster selon réalité) |
| **+47%** | Pipeline moyen | Augmentation constatée |
| **30j** | Time to Value | Premier ROI visible |
| **100%** | Données France | Hébergement souverain disponible |

### Animation

Compteur animé au scroll (count-up animation)

```javascript
// Intersection Observer pour trigger
// Count from 0 to target en 2 secondes
```

---

## SECTION 7 : Cas Clients

### Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                    Ils ont transformé leur RevOps                        │
│                                                                          │
│  ┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐ │
│  │                     │ │                     │ │                     │ │
│  │  [Logo Client A]    │ │  [Logo Client B]    │ │  [Logo Client C]    │ │
│  │                     │ │                     │ │                     │ │
│  │  "De 0 à 500 leads  │ │  "+65% de conver-   │ │  "Migration CRM     │ │
│  │  qualifiés/mois     │ │  sion MQL→SQL"      │ │  en 6 semaines"     │ │
│  │  en 3 mois"         │ │                     │ │                     │ │
│  │                     │ │                     │ │                     │ │
│  │  → Lire le cas      │ │  → Lire le cas      │ │  → Lire le cas      │ │
│  │                     │ │                     │ │                     │ │
│  └─────────────────────┘ └─────────────────────┘ └─────────────────────┘ │
│                                                                          │
│                      [ Voir tous les cas clients ]                       │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## SECTION 8 : L'Équipe

### Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                 4 experts. 50+ ans d'expérience cumulée.                 │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │                                                                     │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐           │ │
│  │  │  Photo   │  │  Photo   │  │  Photo   │  │  Photo   │           │ │
│  │  │  Paul    │  │  J-P     │  │ Guillaume│  │ Mickael  │           │ │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘           │ │
│  │                                                                     │ │
│  │  Paul Dussart   Jean-Philippe   Guillaume      Mickael Mamani      │ │
│  │  RevOps Lead    Expert Data     COO            CTO                 │ │
│  │                                                                     │ │
│  │  Ex-Intescia    7+ ans Data B2B  Ex-SG CIB     Ex-Natixis          │ │
│  │  Salesforce     Corporama        SocieteInfo   Front-Office        │ │
│  │  HubSpot        Intescia                       Trading             │ │
│  │  N8N, Make                                                         │ │
│  │                                                                     │ │
│  │  [LinkedIn]     [LinkedIn]      [LinkedIn]     [LinkedIn]          │ │
│  │                                                                     │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### Contenu Équipe (basé sur les CV)

#### Paul Dussart — RevOps Lead
- **Background** : RevOps @ Intescia Group (8 marques : Corporama, Doubletrade...)
- **Expertise** : Salesforce, HubSpot, N8N, Make, PowerBI
- **Formation** : IPAG Business School + Master PSL
- **Accroche** : "J'ai unifié les process de 8 marques data B2B."

#### Jean-Philippe Roncari — Expert Data B2B
- **Background** : 7+ ans Data B2B, Directeur clientèle @ Intescia
- **Expertise** : Ciblage, Qualification, Signaux d'affaires
- **Formation** : École Supérieure de la Banque
- **Accroche** : "J'accompagne les directions commerciales depuis 7 ans."

#### Guillaume Clavier — COO
- **Background** : COO @ SocieteInfo.com, M&A (SG CIB, DC Advisory, Inspirit)
- **Expertise** : Corporate Finance, Operations, Scale-up
- **Formation** : Magistère Banque Finance Paris II Assas
- **Accroche** : "Du M&A chez SG CIB à la direction de SocieteInfo."

#### Mickael Mamani Cardona — CTO
- **Background** : Dev .NET Front-Office @ Natixis, Edenred, Société Générale
- **Expertise** : C#/.NET, Python, Trading Tools, API
- **Formation** : Telecom ParisTech + Master Finance Paris II Assas
- **Accroche** : "8 ans de dev front-office en finance."

---

## SECTION 9 : Témoignages

### Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                          (Fond Light Gray)                               │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │                                                                     │ │
│  │     "Yurican a transformé notre approche commerciale. En 3 mois,   │ │
│  │     notre pipeline a augmenté de 47% et nos commerciaux passent    │ │
│  │     enfin leur temps à vendre plutôt qu'à nettoyer des données."   │ │
│  │                                                                     │ │
│  │     [Photo]  Prénom Nom                                             │ │
│  │              VP Sales @ Entreprise                                  │ │
│  │                                                                     │ │
│  │     ●  ○  ○  (pagination slider)                                   │ │
│  │                                                                     │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## SECTION 10 : CTA Final

### Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                          (Fond Gradient Storm)                           │
│                                                                          │
│                                                                          │
│                   Prêt à transformer votre RevOps ?                      │
│                                                                          │
│           30 minutes pour comprendre vos enjeux et voir                  │
│           comment on peut accélérer votre croissance.                    │
│                                                                          │
│                   ┌────────────────────────────┐                         │
│                   │   Réserver mon audit       │                         │
│                   │        gratuit             │                         │
│                   └────────────────────────────┘                         │
│                                                                          │
│            ✓ Gratuit     ✓ 30 min     ✓ Sans engagement                 │
│                                                                          │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### Specs

```css
.cta-final {
  padding: 120px 48px;
  background: linear-gradient(135deg, #0A0A1A 0%, #080092 50%, #2F6AE8 100%);
  text-align: center;
}

.cta-final-title {
  font-family: 'Plus Jakarta Sans';
  font-size: 3rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 24px;
}

.cta-final-subtitle {
  font-family: 'Inter';
  font-size: 1.25rem;
  color: rgba(255,255,255,0.8);
  max-width: 500px;
  margin: 0 auto 40px;
}

.cta-final-button {
  /* Bouton blanc, texte Dark Blue */
  background: #FFFFFF;
  color: #080092;
  font-family: 'Plus Jakarta Sans';
  font-weight: 600;
  font-size: 1.125rem;
  padding: 20px 48px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}
```

---

## SECTION 11 : Footer

### Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  [Logo Yurican]                                                          │
│  L'agence RevOps technique française                                     │
│                                                                          │
│  SERVICES           RESSOURCES        ENTREPRISE       LÉGAL            │
│  Audit RevOps       Blog              À propos         Mentions légales │
│  CRM                Guides            Équipe           Confidentialité  │
│  Automatisation     Outils            Contact          CGV              │
│  Data France                          Carrières                         │
│  Intégrations                                                           │
│  Formation                                                              │
│                                                                          │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                          │
│  © 2025 Yurican · Paris, France       [LinkedIn] [Twitter] [GitHub]     │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Responsive Design

### Breakpoints

| Breakpoint | Adaptations Hero |
|------------|------------------|
| **Desktop** (>1024px) | Layout comme décrit |
| **Tablet** (768-1024px) | H1 réduit, CTAs stack vertical si nécessaire |
| **Mobile** (<768px) | H1 32px, sous-titre 16px, CTAs full-width, logos 2 lignes |

### Mobile Hero

```css
@media (max-width: 768px) {
  .hero {
    padding: 100px 24px 60px;
    min-height: auto;
  }
  
  .hero-headline {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-ctas {
    flex-direction: column;
    gap: 16px;
  }
  
  .hero-ctas button {
    width: 100%;
  }
  
  .hero-logos {
    flex-wrap: wrap;
    gap: 24px;
  }
}
```

---

## Performance

### Optimisations Recommandées

| Élément | Optimisation |
|---------|--------------|
| **Hero Image** | WebP, lazy loading, srcset pour différentes tailles |
| **Fonts** | Preload des fonts critiques, font-display: swap |
| **Animations** | CSS transforms uniquement, IntersectionObserver |
| **CLS** | Réserver l'espace pour les images/fonts |
| **LCP** | Hero image en priority, above-the-fold optimisé |

### Target Metrics

- **LCP** : < 2.5s
- **FID** : < 100ms
- **CLS** : < 0.1

---

## Tracking & Analytics

### Events à Tracker

| Event | Trigger | Importance |
|-------|---------|------------|
| `hero_cta_click` | Click CTA primaire hero | 🔴 Critique |
| `scroll_depth` | 25%, 50%, 75%, 100% | 🟡 Important |
| `section_view` | Chaque section visible | 🟡 Important |
| `service_card_click` | Click sur service | 🟢 Nice to have |
| `team_linkedin_click` | Click LinkedIn équipe | 🟢 Nice to have |
| `calendly_open` | Ouverture Calendly | 🔴 Critique |
| `form_submit` | Soumission formulaire | 🔴 Critique |

---

*Spécifications Landing Page Yurican — v1.0*
*Dernière mise à jour : Janvier 2025*
