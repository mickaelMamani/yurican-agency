import React, { useState, useEffect } from 'react';

const YuricanLandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      if (window.scrollY > 600) {
        setCountersVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Counter = ({ end, suffix = '', label }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (countersVisible) {
        const duration = 2000;
        const steps = 60;
        const increment = end / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
        return () => clearInterval(timer);
      }
    }, [countersVisible, end]);

    return (
      <div className="text-center">
        <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          {suffix === '+' && '+'}{count}{suffix !== '+' && suffix}
        </div>
        <div className="text-blue-200 text-sm">{label}</div>
      </div>
    );
  };

  const services = [
    { icon: '🔍', title: 'Audit RevOps', desc: 'Diagnostic complet de votre stack, process et data quality', price: 'À partir de 5 000€' },
    { icon: '⚙️', title: 'Implémentation CRM', desc: 'Déploiement HubSpot, Salesforce ou Pipedrive sur mesure', price: 'À partir de 8 000€' },
    { icon: '🤖', title: 'Automatisation', desc: 'Workflows N8N, Make. Séquences, routing, enrichissement', price: 'À partir de 3 000€' },
    { icon: '🇫🇷', title: 'Data France', desc: 'Enrichissement BODACC, SIRENE, BOAMP dans votre CRM', price: '500€/mois' },
    { icon: '🔗', title: 'Intégrations', desc: 'Connecteurs API custom, ERP français, systèmes legacy', price: 'Sur devis' },
    { icon: '🎓', title: 'Formation', desc: 'Coaching équipes sur CRM, process RevOps, data quality', price: '1 500€/jour' },
  ];

  const team = [
    { name: 'Paul Dussart', role: 'RevOps Lead', bg: 'Ex-Intescia (Corporama)', skills: 'Salesforce, HubSpot, N8N', initials: 'PD' },
    { name: 'Jean-Philippe Roncari', role: 'Expert Data B2B', bg: '7+ ans Data B2B @ Intescia', skills: 'Signaux d\'affaires, Ciblage', initials: 'JPR' },
    { name: 'Guillaume Clavier', role: 'COO', bg: 'COO SocieteInfo, Ex-SG CIB', skills: 'M&A, Operations, Scale', initials: 'GC' },
    { name: 'Mickael Mamani', role: 'CTO', bg: 'Ex-Natixis, Ex-SG Front-Office', skills: '.NET, Python, Trading Tools', initials: 'MM' },
  ];

  const painPoints = [
    { icon: '📊', title: '91% de vos données CRM sont fausses', desc: 'Vos commerciaux passent 27% de leur temps à nettoyer des données au lieu de vendre.' },
    { icon: '🔗', title: 'Vos outils ne se parlent pas', desc: 'Les leads se perdent entre marketing et sales. Personne n\'a la même version de la vérité.' },
    { icon: '🤷', title: 'Impossible de tracer le revenue', desc: 'Vous ne savez pas quel canal, quelle campagne génère vraiment des deals.' },
  ];

  const differentiators = [
    { icon: '🔧', title: 'Expertise Technique', desc: 'On code, on ne fait pas que conseiller', points: ['Développeurs Python/.NET', 'N8N self-hosted', 'Intégrations API custom'] },
    { icon: '🇫🇷', title: 'Data France', desc: 'Seule agence avec expertise BODACC, SIRENE, BOAMP', points: ['Équipe ex-Corporama, ex-SocieteInfo', 'Pipelines data temps réel', 'Signaux d\'affaires uniques'] },
    { icon: '📊', title: 'Pragmatisme', desc: 'Résultats mesurables, pas de slides', points: ['KPIs orientés revenue', 'ROI prouvé', 'Quick wins dès J+30'] },
    { icon: '🔒', title: 'Souveraineté', desc: 'Vos données restent en France', points: ['Options OVH, Scaleway', 'RGPD-native', 'Expertise CNIL'] },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 40 48" className="w-8 h-10">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#080092" />
                  <stop offset="100%" stopColor="#2F6AE8" />
                </linearGradient>
              </defs>
              <path d="M20 4 L8 20 Q20 28 20 40 Q20 28 32 20 Z" fill="url(#logoGrad)" />
              <ellipse cx="20" cy="24" rx="14" ry="5" fill="none" stroke="#2F6AE8" strokeWidth="1.5" opacity="0.7" />
            </svg>
            <span className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Yurican
            </span>
          </div>
          
          <div className={`hidden md:flex items-center gap-8 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
            <a href="#services" className="hover:opacity-80 transition-opacity">Services</a>
            <a href="#equipe" className="hover:opacity-80 transition-opacity">Équipe</a>
            <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
          </div>
          
          <button className={`px-5 py-2.5 rounded-lg font-semibold transition-all ${
            scrolled 
              ? 'bg-gradient-to-r from-blue-900 to-blue-600 text-white' 
              : 'bg-white text-blue-900'
          }`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Prendre RDV
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A0A1A 0%, #080092 50%, #2F6AE8 100%)' }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full opacity-10 animate-pulse" 
               style={{ background: 'radial-gradient(circle, #2F6AE8 0%, transparent 70%)', top: '10%', left: '10%' }} />
          <div className="absolute w-64 h-64 rounded-full opacity-10 animate-pulse" 
               style={{ background: 'radial-gradient(circle, #080092 0%, transparent 70%)', bottom: '20%', right: '15%', animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", animationDelay: '0.2s' }}
          >
            Transformez vos données<br />en machine à revenus
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            L'agence RevOps technique qui maîtrise les données légales françaises et l'automatisation avancée. 
            Nous transformons votre CRM en générateur de revenus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button 
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg shadow-2xl hover:bg-blue-50 transition-all hover:scale-105"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Réserver un audit gratuit
            </button>
            <button 
              className="px-8 py-4 border-2 border-white/50 text-white rounded-lg font-medium hover:bg-white/10 hover:border-white transition-all"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Découvrir nos services →
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200/70 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Audit de 30 min offert
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Sans engagement
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Experts data France
            </span>
          </div>
        </div>

        {/* Logos */}
        <div className="relative z-10 mt-16 pt-12 border-t border-white/10 w-full max-w-4xl animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <p className="text-blue-200/50 text-sm mb-6">Ils nous font confiance</p>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-50">
            {['Client A', 'Client B', 'Client C', 'Client D'].map((client, i) => (
              <div key={i} className="text-white/60 text-sm font-medium px-4 py-2 border border-white/20 rounded">
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#080092' }}>
            Ces problèmes vous parlent ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all hover:-translate-y-1">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#080092', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {point.title}
                </h3>
                <p className="text-slate-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#080092' }}>
            Ce qu'on fait (vraiment bien)
          </h2>
          <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            De l'audit à l'automatisation, nous couvrons l'ensemble de votre chaîne de revenus
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#080092' }}>
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{service.desc}</p>
                <p className="text-blue-600 font-semibold text-sm">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#080092' }}>
            Pourquoi Yurican ?
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto italic">
            "Les agences RevOps déploient des CRM. Nous y intégrons l'intelligence data France."
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((diff, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{diff.icon}</span>
                  <h3 className="text-xl font-bold" style={{ color: '#080092', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {diff.title}
                  </h3>
                </div>
                <p className="text-slate-700 font-medium mb-4">{diff.desc}</p>
                <ul className="space-y-2">
                  {diff.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                      <span className="text-blue-500">→</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #0A0A1A 0%, #080092 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={50} suffix="+" label="Projets livrés" />
            <Counter end={47} suffix="%" label="Pipeline moyen" />
            <Counter end={30} suffix="j" label="Time to Value" />
            <Counter end={100} suffix="%" label="Données France" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#080092' }}>
            4 experts. 50+ ans d'expérience cumulée.
          </h2>
          <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Une équipe qui a fait ses preuves chez les leaders de la data B2B française
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div 
                  className="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-105 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #080092 0%, #2F6AE8 100%)' }}
                >
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#080092', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm mb-1">{member.bg}</p>
                <p className="text-slate-500 text-xs">{member.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        id="contact"
        className="py-24 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #0A0A1A 0%, #080092 50%, #2F6AE8 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Prêt à transformer votre RevOps ?
          </h2>
          <p className="text-blue-100/80 text-lg mb-10">
            30 minutes pour comprendre vos enjeux et voir comment on peut accélérer votre croissance.
          </p>
          <button 
            className="px-10 py-5 bg-white text-blue-900 rounded-lg font-bold text-lg shadow-2xl hover:bg-blue-50 transition-all hover:scale-105"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Réserver mon audit gratuit
          </button>
          <div className="flex justify-center gap-8 mt-8 text-sm text-blue-200/70">
            <span>✓ Gratuit</span>
            <span>✓ 30 min</span>
            <span>✓ Sans engagement</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg viewBox="0 0 40 48" className="w-8 h-10">
                  <defs>
                    <linearGradient id="logoGradFooter" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2F6AE8" />
                      <stop offset="100%" stopColor="#2F6AE8" />
                    </linearGradient>
                  </defs>
                  <path d="M20 4 L8 20 Q20 28 20 40 Q20 28 32 20 Z" fill="url(#logoGradFooter)" />
                  <ellipse cx="20" cy="24" rx="14" ry="5" fill="none" stroke="#2F6AE8" strokeWidth="1.5" opacity="0.7" />
                </svg>
                <span className="font-bold text-xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Yurican</span>
              </div>
              <p className="text-slate-400 text-sm">L'agence RevOps technique française</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Audit RevOps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CRM</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automatisation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data France</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Ressources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cas clients</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Paris, France</li>
                <li><a href="mailto:contact@yurican.fr" className="hover:text-white transition-colors">contact@yurican.fr</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© 2025 Yurican. Tous droits réservés.</p>
            <div className="flex gap-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default YuricanLandingPage;
