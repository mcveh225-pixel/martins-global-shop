import { useParams, Link } from 'react-router-dom';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ArrowLeft } from 'lucide-react';

export default function Category() {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(c => c.id === id);
  const catProducts = products.filter(p => p.category === id);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-2xl font-bold mb-4">Catégorie introuvable</h1>
        <Link to="/boutique" className="text-primary hover:underline">Retour à la boutique</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Link to="/boutique" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Retour à la boutique
      </Link>

      <div className="mb-8">
        <span className="text-5xl mb-4 block">{category.icon}</span>
        <h1 className="font-heading text-3xl font-bold">{category.name}</h1>
        <p className="text-muted-foreground mt-2">{category.description}</p>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{catProducts.length} produit(s)</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {catProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
