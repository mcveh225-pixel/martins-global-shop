import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import logo from '@/assets/LOGO.png';
import { categories } from '@/data/products';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Martins Global Links" className="h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 font-heading text-sm font-semibold">
          <Link to="/" className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}>Accueil</Link>
          <div className="relative group">
            <button
              className={`flex items-center gap-1 hover:text-primary transition-colors ${location.pathname.startsWith('/boutique') || location.pathname.startsWith('/categorie') ? 'text-primary' : ''}`}
              onClick={() => setShopOpen(!shopOpen)}
            >
              Boutique <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-xl py-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/boutique" className="block px-4 py-2 hover:bg-accent text-sm transition-colors">
                Tous les produits
              </Link>
              {categories.map(cat => (
                <Link key={cat.id} to={`/categorie/${cat.id}`} className="block px-4 py-2 hover:bg-accent text-sm transition-colors">
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/a-propos" className={`hover:text-primary transition-colors ${location.pathname === '/a-propos' ? 'text-primary' : ''}`}>À Propos</Link>
          <Link to="/contact" className={`hover:text-primary transition-colors ${location.pathname === '/contact' ? 'text-primary' : ''}`}>Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative p-2 hover:bg-accent rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-3 font-heading text-sm font-semibold">
          <Link to="/" onClick={() => setOpen(false)} className="block py-2">Accueil</Link>
          <Link to="/boutique" onClick={() => setOpen(false)} className="block py-2">Tous les produits</Link>
          {categories.map(cat => (
            <Link key={cat.id} to={`/categorie/${cat.id}`} onClick={() => setOpen(false)} className="block py-2 pl-4 text-muted-foreground">
              {cat.icon} {cat.name}
            </Link>
          ))}
          <Link to="/a-propos" onClick={() => setOpen(false)} className="block py-2">À Propos</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}
