import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/LOGO.png';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Martins Global Links" className="h-16 w-auto mb-4 brightness-0 invert" />
          <p className="text-sm opacity-70">Votre partenaire pour des équipements sportifs authentiques à Abidjan.</p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4">Navigation</h4>
          <div className="space-y-2 text-sm opacity-70">
            <Link to="/" className="block hover:opacity-100">Accueil</Link>
            <Link to="/boutique" className="block hover:opacity-100">Boutique</Link>
            <Link to="/a-propos" className="block hover:opacity-100">À Propos</Link>
            <Link to="/contact" className="block hover:opacity-100">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4">Catégories</h4>
          <div className="space-y-2 text-sm opacity-70">
            <Link to="/categorie/maillots" className="block hover:opacity-100">Maillots & Tenues</Link>
            <Link to="/categorie/chaussures" className="block hover:opacity-100">Chaussures</Link>
            <Link to="/categorie/accessoires" className="block hover:opacity-100">Accessoires</Link>
            <Link to="/categorie/ballons" className="block hover:opacity-100">Ballons</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4">Contact</h4>
          <div className="space-y-3 text-sm opacity-70">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Abidjan, Côte d'Ivoire</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +225 XX XX XX XX</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@martinsgloballinks.com</div>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 text-center py-4 text-xs opacity-50">
        © 2025 Martins Global Links. Tous droits réservés.
      </div>
    </footer>
  );
}
