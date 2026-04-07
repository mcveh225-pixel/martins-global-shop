import { Link } from 'react-router-dom';
import { Product, formatPrice } from '@/data/products';
import { ShoppingBag } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  const placeholder = `https://placehold.co/400x400/1a7a3a/white?text=${encodeURIComponent(product.name.split(' ').slice(0, 2).join('+'))}`;

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link to={`/boutique`} className="block relative aspect-square overflow-hidden">
        <img
          src={product.image || placeholder}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-primary-foreground ${
            product.badge === 'Promo' ? 'bg-secondary' : product.badge === 'Nouveau' ? 'bg-primary' : 'bg-destructive'
          }`}>
            {product.badge}
          </span>
        )}
      </Link>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-sm mb-1 line-clamp-2">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-primary font-bold text-lg">{formatPrice(product.price)}</span>
          <button className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
