import DJI_0512 from '@/assets/products/DJI_0512.jpg';
import DJI_0517 from '@/assets/products/DJI_0517.jpg';
import DJI_0521 from '@/assets/products/DJI_0521.jpg';
import DJI_0524 from '@/assets/products/DJI_0524.jpg';
import DJI_05122 from '@/assets/products/DJI_05122.jpg';
import IMG_maillot from '@/assets/products/IMG_20251207_185836_422.jpg';
import SD from '@/assets/products/SD.jpg';
import QS from '@/assets/products/QS.jpg';
import XS from '@/assets/products/XS.jpg';
import ed from '@/assets/products/ed.jpg';
import FQ from '@/assets/products/FQ1456-001_g1.jpg';
import webIe from '@/assets/products/web-ie1588-p.webp';
import viralto from '@/assets/products/chaussures-viralto.jpg';
import pumaFuture from '@/assets/products/puma-future-9.jpg';
import shoe2e from '@/assets/products/2e2aa.jpg';
import shoe9c from '@/assets/products/9c535b.jpg';
import accessoire1 from '@/assets/products/accessoire1.jpg';
import accessoire2 from '@/assets/products/accessoire2.jpg';
import accessoire3 from '@/assets/products/accessoire3.jpg';
import accessoire5 from '@/assets/products/accessoire5.jpg';
import ballon1 from '@/assets/products/ballon1.jpg';
import ballon2 from '@/assets/products/ballon2.jpg';
import ballon3 from '@/assets/products/ballon3.jpg';
import ballon4 from '@/assets/products/ballon4.jpg';
import arbitre1 from '@/assets/products/arbitre1.jpg';
import arbitre2 from '@/assets/products/arbitre2.jpg';
import arbitre3 from '@/assets/products/arbitre3.jpg';
import gardien1 from '@/assets/products/gardien1.jpg';
import gardien2 from '@/assets/products/gardien2.jpg';
import gardien3 from '@/assets/products/gardien3.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
}

export const categories = [
  { id: 'maillots', name: 'Maillots & Tenues', icon: '👕', description: 'Maillots et tenues de football authentiques' },
  { id: 'chaussures', name: 'Chaussures', icon: '👟', description: 'Chaussures de football pour tous terrains' },
  { id: 'accessoires', name: 'Accessoires', icon: '🎒', description: 'Sacs, protège-tibias, gants et plus' },
  { id: 'ballons', name: 'Ballons', icon: '⚽', description: 'Ballons officiels et d\'entraînement' },
  { id: 'arbitrage', name: 'Équipements Arbitrage', icon: '🏁', description: 'Tenues et accessoires pour arbitres' },
  { id: 'gardien', name: 'Équipements Gardien', icon: '🧤', description: 'Gants, maillots et pantalons de gardien' },
];

export const products: Product[] = [
  { id: 'm1', name: 'Maillot Domicile Premium', price: 25000, image: DJI_0512, category: 'maillots', badge: 'Nouveau' },
  { id: 'm2', name: 'Maillot Extérieur Classique', price: 22000, image: DJI_0517, category: 'maillots' },
  { id: 'm3', name: 'Tenue Complète Entraînement', price: 35000, image: DJI_0521, category: 'maillots', badge: 'Promo' },
  { id: 'm4', name: 'Maillot Collector Édition Limitée', price: 45000, image: DJI_0524, category: 'maillots', badge: 'Populaire' },
  { id: 'm5', name: 'Maillot Third Saison 2025', price: 28000, image: DJI_05122, category: 'maillots' },
  { id: 'm6', name: 'Maillot Rétro Vintage', price: 30000, image: IMG_maillot, category: 'maillots' },

  { id: 'c1', name: 'Nike Phantom GX Elite', price: 65000, image: SD, category: 'chaussures', badge: 'Populaire' },
  { id: 'c2', name: 'Adidas Predator Edge', price: 55000, image: QS, category: 'chaussures' },
  { id: 'c3', name: 'Nike Mercurial Superfly', price: 70000, image: XS, category: 'chaussures', badge: 'Nouveau' },
  { id: 'c4', name: 'Adidas X Speedportal', price: 48000, image: ed, category: 'chaussures' },
  { id: 'c5', name: 'Nike Tiempo Legend', price: 52000, image: FQ, category: 'chaussures' },
  { id: 'c6', name: 'Puma King Ultimate', price: 45000, image: webIe, category: 'chaussures' },
  { id: 'c7', name: 'Kipsta Viralto Turf', price: 18000, image: viralto, category: 'chaussures', badge: 'Promo' },
  { id: 'c8', name: 'Puma Future 9 Match', price: 42000, image: pumaFuture, category: 'chaussures' },
  { id: 'c9', name: 'Nike Air Zoom Mercurial', price: 60000, image: shoe2e, category: 'chaussures' },
  { id: 'c10', name: 'Adidas Copa Pure II', price: 38000, image: shoe9c, category: 'chaussures' },

  { id: 'a1', name: 'Sac de Sport Nike', price: 15000, image: accessoire2, category: 'accessoires' },
  { id: 'a2', name: 'Protège-Tibias Carbon', price: 8000, image: accessoire3, category: 'accessoires' },
  { id: 'a3', name: 'Kit Accessoires Complet', price: 12000, image: accessoire1, category: 'accessoires', badge: 'Populaire' },
  { id: 'a4', name: 'Serre-poignet Nike', price: 3500, image: accessoire5, category: 'accessoires' },

  { id: 'b1', name: 'Ballon Officiel Match Pro', price: 35000, image: ballon1, category: 'ballons', badge: 'Populaire' },
  { id: 'b2', name: 'Ballon Entraînement Adidas', price: 12000, image: ballon4, category: 'ballons' },
  { id: 'b3', name: 'Ballon Futsal Select', price: 18000, image: ballon2, category: 'ballons' },
  { id: 'b4', name: 'Mini Ballon Collection', price: 6000, image: ballon3, category: 'ballons' },

  { id: 'ar1', name: 'Kit Arbitre Complet', price: 25000, image: arbitre1, category: 'arbitrage' },
  { id: 'ar2', name: 'Sifflet Fox 40 Pro', price: 8000, image: arbitre2, category: 'arbitrage' },
  { id: 'ar3', name: 'Cartons Arbitre (Set)', price: 3000, image: arbitre3, category: 'arbitrage' },

  { id: 'g1', name: 'Gants Gardien Adidas Predator', price: 28000, image: gardien1, category: 'gardien', badge: 'Nouveau' },
  { id: 'g2', name: 'Maillot Gardien Nike', price: 22000, image: gardien2, category: 'gardien' },
  { id: 'g3', name: 'Pantalon Gardien Rembourré', price: 18000, image: gardien3, category: 'gardien' },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
