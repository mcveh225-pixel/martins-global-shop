import { useState } from 'react';
import { products, categories, formatPrice } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Search } from 'lucide-react';

export default function Shop() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = products.filter(p => {
    const matchCat = filter === 'all' || p.category === filter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="font-heading text-3xl font-bold mb-2">Boutique</h1>
      <p className="text-muted-foreground mb-8">Découvrez tous nos équipements sportifs</p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-accent'}`}
          >
            Tout
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === cat.id ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-accent'}`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{filtered.length} produit(s)</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
