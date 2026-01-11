# Yurican — Structure du Site Web

## Vue d'ensemble

Ce document définit l'architecture complète du site web de l'agence RevOps Yurican, incluant la hiérarchie des pages, le contenu de chaque section, et les objectifs de conversion.

**Objectif principal** : Convertir les visiteurs en leads qualifiés (prise de RDV)
**Cible principale** : Directeurs commerciaux, VP Sales, Head of RevOps de scale-ups B2B françaises

---

## 1. Architecture Globale (Sitemap)

```
yurican.fr/
│
├── 🏠 ACCUEIL (Landing Page)
│   └── Hero + Services + Différenciateurs + Social Proof + Équipe + CTA
│
├── 📋 SERVICES/
│   ├── /services/                        → Vue d'ensemble
│   ├── /services/audit-revops            → Audit & Diagnostic
│   ├── /services/implementation-crm      → Implémentation CRM
│   ├── /services/automatisation          → Automatisation N8N/Make
│   ├── /services/data-france             → Enrichissement Data France
│   ├── /services/integration             → Intégrations & API
│   └── /services/formation               → Formation & Coaching
│
├── 💡 SOLUTIONS/ (par persona)
│   ├── /solutions/scale-ups              → Pour Scale-ups B2B SaaS
│   ├── /solutions/pme                    → Pour PME en croissance
│   └── /solutions/legaltech-fintech      → Pour LegalTech & Fintech
│
├── 📊 CAS CLIENTS/
│   ├── /cas-clients/                     → Galerie études de cas
│   └── /cas-clients/[slug]               → Page cas individuel
│
├── 🧠 RESSOURCES/
│   ├── /blog/                            → Articles & Insights
│   ├── /blog/[slug]                      → Article individuel
│   ├── /ressources/guides                → Guides téléchargeables (gated)
│   └── /ressources/outils                → Templates & Calculateurs
│
├── 👥 À PROPOS/
│   ├── /a-propos/                        → L'agence & Vision
│   └── /equipe/                          → Les fondateurs
│
├── 📞 CONTACT/
│   └── /contact/                         → Formulaire + Calendly
│
└── ⚖️ LÉGAL/
    ├── /mentions-legales
    ├── /politique-confidentialite
    └── /cgv
```

---

## 2. Pages Détaillées

### 2.1 PAGE ACCUEIL (Landing Page)

**URL** : `/`
**Objectif** : Présenter Yurican, créer la confiance, convertir en RDV

**Sections** (dans l'ordre) :

| # | Section | Contenu | CTA |
|---|---------|---------|-----|
| 1 | **Hero** | Headline + Sous-titre + Vidéo/Animation | "Réserver un audit gratuit" |
| 2 | **Pain Points** | 3 problèmes que résolvent Yurican | — |
| 3 | **Services** | 6 cards services avec icônes | "Découvrir nos services" |
| 4 | **Différenciateurs** | 4 piliers (Tech, Data France, Pragmatisme, Souveraineté) | — |
| 5 | **Chiffres clés** | Métriques animées (clients, intégrations, ROI moyen) | — |
| 6 | **Cas clients** | 3 mini-études de cas avec logos | "Voir tous les cas" |
| 7 | **Équipe** | 4 fondateurs avec photos + credentials | "En savoir plus" |
| 8 | **Témoignages** | Slider citations clients | — |
| 9 | **CTA Final** | Formulaire simplifié ou Calendly embed | "Parlons de votre projet" |
| 10 | **Footer** | Navigation, légal, réseaux sociaux | — |

*(Détail complet de la Landing Page dans le document dédié)*

---

### 2.2 PAGES SERVICES

#### /services/ (Vue d'ensemble)

**Layout** : Hero + Grille 6 services + CTA

**Contenu Hero** :
- Titre : "Des services RevOps de bout en bout"
- Sous-titre : "De l'audit à l'automatisation, nous couvrons l'ensemble de votre chaîne de revenus"

**Les 6 services** :

| Service | Icône | Description courte |
|---------|-------|-------------------|
| Audit RevOps | 🔍 | Diagnostic complet de votre stack et processus |
| Implémentation CRM | ⚙️ | Déploiement HubSpot, Salesforce, Pipedrive |
| Automatisation | 🤖 | Workflows N8N, Make, scripts custom |
| Data France | 🇫🇷 | Enrichissement BODACC, SIRENE, BOAMP |
| Intégrations | 🔗 | Connecteurs API, ERP, systèmes legacy |
| Formation | 🎓 | Coaching équipes, certifications |

#### /services/audit-revops

**Structure** :
```
Hero (titre + accroche)
├── Le problème
│   "91% des données CRM sont incomplètes..."
├── Notre approche
│   Méthodologie en 4 étapes (Discovery, Analyse, Recommandations, Roadmap)
├── Livrables
│   - Rapport d'audit (50+ pages)
│   - Matrice de maturité RevOps
│   - Roadmap priorisée
│   - Quick wins identifiés
├── Pour qui ?
│   Personas cibles
├── Tarification
│   À partir de 5 000€
└── CTA
    "Demander un audit"
```

#### /services/implementation-crm

**Contenu clé** :
- CRM supportés : HubSpot (Partner), Salesforce, Pipedrive
- Approche : Migration + Configuration + Formation
- Durée moyenne : 4-12 semaines
- Tarif : À partir de 8 000€

#### /services/automatisation

**Contenu clé** :
- Outils : N8N (self-hosted), Make, Zapier, scripts Python
- Cas d'usage : Lead routing, enrichissement auto, nurturing, alertes
- Différenciateur : N8N self-hosted = souveraineté des données
- Tarif : À partir de 3 000€ par workflow

#### /services/data-france

**⭐ PAGE DIFFÉRENCIANTE**

**Contenu clé** :
- Sources : BODACC, SIRENE, BOAMP, BALO
- Intégration directe dans CRM
- Signaux détectés : Créations, Nominations, Levées, Défaillances
- Veille automatisée
- Tarif : À partir de 500€/mois

**Exemples concrets** :
- "Détectez les nouvelles entreprises de votre ICP dans les 24h"
- "Soyez alerté quand un prospect change de dirigeant"
- "Identifiez les entreprises en procédure collective avant vos concurrents"

#### /services/integration

**Contenu clé** :
- Types : API natives, connecteurs custom, middleware
- ERP français : Cegid, Sage, Divalto
- Systèmes legacy : Solutions sur mesure
- Tarif : Sur devis

#### /services/formation

**Contenu clé** :
- Formats : Sur site, distanciel, e-learning
- Sujets : CRM, Process RevOps, Data Quality, Automation
- Durée : 1 jour à 5 jours
- Tarif : À partir de 1 500€/jour

---

### 2.3 PAGES SOLUTIONS (par persona)

#### /solutions/scale-ups

**Persona** : Scale-up B2B SaaS, 20-200 employés, Série A/B

**Pain points adressés** :
- Stack fragmenté post-croissance rapide
- Données sales non fiables pour le board
- Process non scalables

**Message clé** : "Structurez votre RevOps pour passer de 10 à 100 commerciaux"

#### /solutions/pme

**Persona** : PME B2B, 10-50 employés, pas de RevOps interne

**Pain points adressés** :
- CRM sous-utilisé ou inexistant
- Prospection manuelle chronophage
- Pas de visibilité sur le pipeline

**Message clé** : "Un CRM qui travaille pour vous, pas l'inverse"

#### /solutions/legaltech-fintech

**Persona** : LegalTech, RegTech, Fintech françaises

**Pain points adressés** :
- Besoin de données légales françaises (KYC, compliance)
- Contraintes réglementaires (RGPD, CNIL)
- Intégration données BODACC/SIRENE

**Message clé** : "L'expertise data légale au cœur de votre produit"

---

### 2.4 PAGE CAS CLIENTS

#### /cas-clients/

**Layout** : Grille filtrable par industrie/service

**Chaque card** :
- Logo client
- Industrie
- Problématique (1 ligne)
- Résultat clé (+X% pipeline, -X% temps, etc.)
- CTA "Lire le cas"

#### /cas-clients/[slug]

**Structure type** :

```
Hero (Logo + Nom + Industrie + Chiffre clé)
├── Le contexte
│   Présentation client, situation initiale
├── Les défis
│   3 problèmes identifiés
├── La solution Yurican
│   Approche, outils déployés, timeline
├── Les résultats
│   Métriques avant/après avec visualisations
├── Témoignage
│   Citation du client avec photo
└── CTA
    "Vous avez un défi similaire ?"
```

---

### 2.5 PAGE À PROPOS

#### /a-propos/

**Sections** :

1. **Notre mission**
   "Transformer les données en revenus pour les entreprises françaises"

2. **Notre histoire**
   Comment 4 experts de la data B2B et du développement se sont réunis

3. **Nos valeurs**
   - Expertise technique (on code, on ne fait pas que conseiller)
   - Pragmatisme (résultats > slides)
   - Souveraineté (données en France)
   - Transparence (pas de bullshit)

4. **Pourquoi Yurican ?**
   Origine du nom (Hurricane → force de transformation)

#### /equipe/

**Les 4 fondateurs** :

---

**Paul Dussart** — *RevOps Lead*

| | |
|---|---|
| **Photo** | Portrait professionnel |
| **Rôle** | Expert CRM & Automatisation |
| **Background** | RevOps @ Intescia Group (Corporama, Doubletrade...) |
| **Expertise** | Salesforce, HubSpot, N8N, Make, PowerBI |
| **Formation** | IPAG Business School, Master PSL |
| **LinkedIn** | linkedin.com/in/pauldussart |

**Accroche** : "J'ai unifié les process de 8 marques data B2B. Je sais ce qui fonctionne à l'échelle."

---

**Jean-Philippe Roncari** — *Expert Data B2B*

| | |
|---|---|
| **Photo** | Portrait professionnel |
| **Rôle** | Stratégie commerciale & Data |
| **Background** | 7+ ans Data B2B, Directeur clientèle @ Intescia |
| **Expertise** | Ciblage, Qualification, Signaux d'affaires, Risk Management |
| **Formation** | BTS Banque, École Supérieure de la Banque |
| **LinkedIn** | linkedin.com/in/jean-philipperoncari |

**Accroche** : "J'accompagne les directions commerciales depuis 7 ans. Je connais leurs vrais problèmes."

---

**Guillaume Clavier** — *COO & Stratégie*

| | |
|---|---|
| **Photo** | Portrait professionnel |
| **Rôle** | Operations & Business Development |
| **Background** | COO @ SocieteInfo.com, M&A (SG CIB, DC Advisory) |
| **Expertise** | Corporate Finance, Operations, Data B2B |
| **Formation** | Magistère Banque Finance, Paris II Assas |
| **LinkedIn** | linkedin.com/in/guillaumeclavier |

**Accroche** : "Du M&A chez SG CIB à la direction de SocieteInfo. Je scale les opérations data."

---

**Mickael Mamani Cardona** — *CTO & Développement*

| | |
|---|---|
| **Photo** | Portrait professionnel |
| **Rôle** | Architecture technique & Développement |
| **Background** | Dev .NET Front-Office @ Natixis, Edenred, Société Générale |
| **Expertise** | C#/.NET, Python, Trading Tools, Intégrations API |
| **Formation** | Telecom ParisTech, Master Finance Paris II Assas |
| **LinkedIn** | linkedin.com/in/mickaelmamani-cardona |

**Accroche** : "8 ans de dev front-office en finance. Je construis des outils qui tiennent la charge."

---

### 2.6 PAGE CONTACT

#### /contact/

**Layout** : Split screen

**Côté gauche** :
- Titre : "Parlons de votre projet"
- Sous-titre : "30 minutes pour comprendre vos enjeux et voir si on peut vous aider"
- Coordonnées : Email, Téléphone
- Adresse (si applicable)

**Côté droit** :
- Embed Calendly (ou formulaire)
- Champs : Nom, Email, Entreprise, Taille équipe sales, Message

**Éléments de réassurance** :
- "Réponse sous 24h"
- "Audit gratuit de 30 min"
- "Sans engagement"

---

### 2.7 PAGES RESSOURCES

#### /blog/

**Catégories** :
- RevOps & Process
- CRM & Outils
- Data France (BODACC, SIRENE...)
- Automatisation
- Cas pratiques

**Format articles** :
- Guides pratiques (2000+ mots, SEO)
- Tutoriels (pas à pas avec captures)
- Analyses (tendances marché)
- Templates (téléchargeables)

#### /ressources/guides (Gated content)

**Lead magnets** :
1. "Guide : Connecter BODACC à HubSpot en 5 étapes"
2. "Template : Audit RevOps - 50 questions clés"
3. "Checklist : Migration CRM sans perdre de données"
4. "Calculateur : ROI de l'automatisation sales"

---

## 3. Navigation

### Header (Navigation principale)

```
[Logo Yurican]     Services ▼    Solutions ▼    Cas Clients    Ressources ▼    À Propos ▼    [CTA: Prendre RDV]
```

**Mega menu Services** :
```
┌─────────────────────────────────────────────────────────────┐
│  SERVICES                                                   │
│                                                             │
│  🔍 Audit RevOps          🤖 Automatisation                │
│  ⚙️ Implémentation CRM    🇫🇷 Data France                  │
│  🔗 Intégrations          🎓 Formation                     │
│                                                             │
│  → Voir tous les services                                   │
└─────────────────────────────────────────────────────────────┘
```

### Footer

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]                                                     │
│  L'agence RevOps technique française                        │
│                                                             │
│  SERVICES          RESSOURCES       ENTREPRISE    LÉGAL    │
│  Audit RevOps      Blog             À propos      Mentions │
│  CRM               Guides           Équipe        RGPD     │
│  Automatisation    Outils           Contact       CGV      │
│  Data France                                               │
│  Intégrations                                              │
│  Formation                                                  │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│  © 2025 Yurican · Paris, France · [LinkedIn] [Twitter]     │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Parcours Utilisateur (User Flows)

### Flow 1 : Visiteur Découverte → Lead

```
Google/LinkedIn → Landing Page → Services → Cas Client → Contact → RDV
```

### Flow 2 : Visiteur Informé → Lead

```
Recherche "audit revops" → /services/audit-revops → CTA → Calendly → RDV
```

### Flow 3 : Nurturing Content → Lead

```
LinkedIn Post → Article Blog → Guide (email) → Séquence email → RDV
```

---

## 5. Éléments Transversaux

### CTAs Principaux

| Contexte | CTA Primary | CTA Secondary |
|----------|-------------|---------------|
| Hero | "Réserver un audit gratuit" | "Découvrir nos services" |
| Services | "Demander un devis" | "Voir un cas client" |
| Cas clients | "Discuter d'un projet similaire" | — |
| Blog | "Télécharger le guide" | "S'abonner à la newsletter" |

### Éléments de Confiance (Trust signals)

- Logos clients (si autorisés)
- Badges partenaires (HubSpot, etc.)
- Chiffres clés animés
- Témoignages avec photos
- Mentions presse (si applicable)

### SEO - Pages Prioritaires

| Page | Mot-clé cible | Volume estimé |
|------|---------------|---------------|
| /services/audit-revops | "audit revops" | Faible mais qualifié |
| /services/implementation-crm | "agence hubspot france" | Moyen |
| /services/data-france | "enrichissement données entreprises" | Moyen |
| /blog/[guides] | Long tail RevOps | Variable |

---

## 6. Stack Technique Recommandé

| Composant | Recommandation | Raison |
|-----------|----------------|--------|
| **Framework** | Next.js 14+ | SEO, performance, React |
| **Styling** | Tailwind CSS | Cohérence, rapidité |
| **CMS Blog** | Notion + Super.so OU Sanity | Facilité édition |
| **Formulaires** | Typeform ou HubSpot Forms | UX, intégration CRM |
| **RDV** | Calendly | Standard, intégrations |
| **Analytics** | Plausible ou Fathom | RGPD-friendly |
| **Hosting** | Vercel | Performance, DX |

---

## 7. Prochaines Étapes

### Phase 1 : MVP (Semaines 1-4)
- [ ] Landing page complète
- [ ] Page Services (vue d'ensemble)
- [ ] Page Contact avec Calendly
- [ ] Page Équipe

### Phase 2 : Contenu (Semaines 5-8)
- [ ] Pages services détaillées (6 pages)
- [ ] 3 premiers cas clients
- [ ] 5 premiers articles blog

### Phase 3 : Optimisation (Semaines 9-12)
- [ ] Pages Solutions par persona
- [ ] Lead magnets et formulaires
- [ ] Intégration CRM (HubSpot)
- [ ] Analytics et tracking

---

*Document de structure web Yurican — v1.0*
