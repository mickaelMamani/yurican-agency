import { Logo } from '@/components/common/Logo'
import { Separator } from '@/components/ui/separator'
import { Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Audit RevOps', href: '#services' },
    { label: 'CRM', href: '#services' },
    { label: 'Automatisation', href: '#services' },
    { label: 'Data France', href: '#services' },
    { label: 'Intégrations', href: '#services' },
    { label: 'Formation', href: '#services' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Guides', href: '#' },
    { label: 'Cas clients', href: '#' },
  ],
  contact: [
    { label: 'Paris, France', href: '#' },
    { label: 'contact@yurican.fr', href: 'mailto:contact@yurican.fr' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <Logo variant="light" className="mb-4" />
            <p className="text-slate-400 text-sm">L'agence RevOps technique française</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold mb-4">Ressources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800" />

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Yurican. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                CGV
              </a>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
