import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Star, Palette } from 'lucide-react';
import { products, categories, formatPrice } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import heroImage from '@/assets/hero-sports.jpg';

export default function Home() {
  const featured = products.filter(p => p.badge === 'Populaire' || p.badge === 'Nouveau').slice(0, 4);
  const latest = products.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Équipements sportifs Martins Global Links" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-2xl">
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold mb-6">🏆 Équipements Authentiques</span>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              L'Excellence du Sport à Portée de Main
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Découvrez notre sélection premium de maillots, chaussures et accessoires de football. Qualité garantie, livraison rapide à Abidjan et en Côte d'Ivoire.
            </p>
            <Link
              to="/boutique"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-secondary/90 transition-colors"
            >
              Découvrir la Boutique <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-heading text-3xl font-bold text-center mb-10">Nos Catégories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/categorie/${cat.id}`}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-4xl block mb-3">{cat.icon}</span>
              <h3 className="font-heading font-semibold text-sm">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading text-3xl font-bold">Produits Phares</h2>
            <Link to="/boutique" className="text-primary font-semibold flex items-center gap-1 hover:underline">
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-heading text-3xl font-bold">Derniers Arrivages</h2>
          <Link to="/boutique" className="text-primary font-semibold flex items-center gap-1 hover:underline">
            Voir tout <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {latest.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Services */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-10">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Truck />, title: 'Livraison Rapide', desc: 'Livraison à Abidjan et en CI' },
              { icon: <Shield />, title: 'Produits Authentiques', desc: '100% originaux et certifiés' },
              { icon: <Palette />, title: 'Personnalisation', desc: 'Flocage noms & numéros' },
              { icon: <Star />, title: 'Service Client', desc: 'Assistance 7j/7 par WhatsApp' },
            ].map((s, i) => (
              <div key={i} className="text-center p-6">
                <div className="inline-flex p-4 bg-primary-foreground/10 rounded-full mb-4">{s.icon}</div>
                <h3 className="font-heading font-bold mb-2">{s.title}</h3>
                <p className="text-sm opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
