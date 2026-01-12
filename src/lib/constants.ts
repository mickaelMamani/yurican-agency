export const team = [
  {
    name: 'Jean-Philippe Roncari',
    role: 'Expert Data B2B',
    background: '7+ ans Data B2B @ Intescia',
    skills: ['Ciblage', 'Qualification', "Signaux d'affaires"],
    initials: 'JPR',
    linkedin: 'https://linkedin.com/in/jean-philippe-roncari-a8757215b/',
    image: '/jean_phillipe_profile.jpg',
  },
  {
    name: 'Mickael Mamani Cardona',
    role: 'CTO',
    background: 'Ex-Natixis, Ex-SG Front-Office',
    skills: ['C#/.NET', 'Python', 'Trading Tools', 'API'],
    initials: 'MM',
    linkedin: 'https://linkedin.com/in/mickael-mamani-cardona',
    image: '/mickael_profile.jpg',
  },
]

export const services = [
  {
    id: 'audit-revops',
    icon: '🔍',
    title: 'Audit RevOps',
    desc: 'Diagnostic complet de votre stack, process et data quality',
    price: 'À partir de 5 000€',
  },
  {
    id: 'implementation-crm',
    icon: '⚙️',
    title: 'Implémentation CRM',
    desc: 'Déploiement HubSpot, Salesforce ou Pipedrive sur mesure',
    price: 'À partir de 8 000€',
  },
  {
    id: 'automatisation',
    icon: '🤖',
    title: 'Automatisation',
    desc: 'Workflows N8N, Make. Séquences, routing, enrichissement',
    price: 'À partir de 3 000€',
  },
  {
    id: 'data-france',
    icon: '🇫🇷',
    title: 'Data France',
    desc: 'Enrichissement BODACC, SIRENE, BOAMP dans votre CRM',
    price: '500€/mois',
  },
  {
    id: 'integration',
    icon: '🔗',
    title: 'Intégrations',
    desc: 'Connecteurs API custom, ERP français, systèmes legacy',
    price: 'Sur devis',
  },
  {
    id: 'formation',
    icon: '🎓',
    title: 'Formation',
    desc: 'Coaching équipes sur CRM, process RevOps, data quality',
    price: '1 500€/jour',
  },
]

export const painPoints = [
  {
    icon: '📊',
    title: '91% de vos données CRM sont fausses',
    desc: 'Vos commerciaux passent 27% de leur temps à nettoyer des données au lieu de vendre.',
  },
  {
    icon: '🔗',
    title: 'Vos outils ne se parlent pas',
    desc: "Les leads se perdent entre marketing et sales. Personne n'a la même version de la vérité.",
  },
  {
    icon: '🤷',
    title: 'Impossible de tracer le revenue',
    desc: 'Vous ne savez pas quel canal, quelle campagne génère vraiment des deals.',
  },
]

export const differentiators = [
  {
    icon: '🔧',
    title: 'Expertise Technique',
    desc: 'On code, on ne fait pas que conseiller',
    points: ['Développeurs Python/.NET', 'N8N self-hosted', 'Intégrations API custom'],
  },
  {
    icon: '🇫🇷',
    title: 'Data France',
    desc: 'Seule agence avec expertise BODACC, SIRENE, BOAMP',
    points: ['Équipe ex-Corporama, ex-SocieteInfo', 'Pipelines data temps réel', "Signaux d'affaires uniques"],
  },
  {
    icon: '📊',
    title: 'Pragmatisme',
    desc: 'Résultats mesurables, pas de slides',
    points: ['KPIs orientés revenue', 'ROI prouvé', 'Quick wins dès J+30'],
  },
  {
    icon: '🔒',
    title: 'Souveraineté',
    desc: 'Vos données restent en France',
    points: ['Options OVH, Scaleway', 'RGPD-native', 'Expertise CNIL'],
  },
]

export const metrics = [
  { value: 50, suffix: '+', label: 'Projets livrés' },
  { value: 47, suffix: '%', label: 'Pipeline moyen' },
  { value: 30, suffix: 'j', label: 'Time to Value' },
  { value: 100, suffix: '%', label: 'Données France' },
]

export const testimonials = [
  {
    quote:
      "Yurican a transformé notre approche commerciale. En 3 mois, notre pipeline a augmenté de 47% et nos commerciaux passent enfin leur temps à vendre plutôt qu'à nettoyer des données.",
    name: 'Marie Dupont',
    role: 'VP Sales',
    company: 'TechScale SaaS',
    initials: 'MD',
  },
  {
    quote:
      "L'intégration des données BODACC dans notre CRM nous a permis de détecter des opportunités que nous manquions systématiquement. ROI visible dès le premier mois.",
    name: 'Thomas Martin',
    role: 'Head of RevOps',
    company: 'FinTech Pro',
    initials: 'TM',
  },
  {
    quote:
      "Une équipe qui comprend vraiment les enjeux data B2B français. Pas de blabla, que du concret.",
    name: 'Sophie Bernard',
    role: 'CEO',
    company: 'LegalStart',
    initials: 'SB',
  },
]

export const clientLogos = [
  { name: 'Client A' },
  { name: 'Client B' },
  { name: 'Client C' },
  { name: 'Client D' },
]

export const caseStudies = [
  {
    logo: null,
    company: 'TechScale SaaS',
    headline: 'De 0 à 500 leads qualifiés/mois en 3 mois',
    industry: 'SaaS B2B',
  },
  {
    logo: null,
    company: 'FinTech Pro',
    headline: '+65% de conversion MQL→SQL',
    industry: 'FinTech',
  },
  {
    logo: null,
    company: 'LegalStart',
    headline: 'Migration CRM en 6 semaines',
    industry: 'LegalTech',
  },
]

export const processSteps = [
  {
    step: 1,
    title: 'Audit',
    desc: 'Diagnostic complet de votre stack RevOps, process et data quality',
    icon: '🔍',
  },
  {
    step: 2,
    title: 'Design',
    desc: 'Architecture de la solution adaptée à vos enjeux métier',
    icon: '📐',
  },
  {
    step: 3,
    title: 'Build',
    desc: 'Implémentation technique et intégrations sur mesure',
    icon: '🔧',
  },
  {
    step: 4,
    title: 'Scale',
    desc: 'Formation équipes et optimisation continue des performances',
    icon: '🚀',
  },
]

export const values = [
  {
    icon: '🎯',
    title: 'Pragmatisme',
    desc: 'Des solutions qui marchent, pas des slides. On mesure tout, on optimise en continu.',
  },
  {
    icon: '🔧',
    title: 'Technique',
    desc: 'On code, on ne fait pas que conseiller. Notre équipe maîtrise Python, .NET, N8N, APIs.',
  },
  {
    icon: '🤝',
    title: 'Transparence',
    desc: "Vous savez exactement ce qu'on fait, pourquoi et combien ça coûte. Pas de surprises.",
  },
  {
    icon: '🇫🇷',
    title: 'Expertise France',
    desc: 'Données françaises (BODACC, SIRENE, BOAMP), réglementations locales, équipe basée à Paris.',
  },
]
