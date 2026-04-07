import { Shield, Users, Trophy } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="font-heading text-3xl font-bold mb-4">À Propos de Martins Global Links</h1>
      <p className="text-muted-foreground max-w-3xl mb-12">
        Fondée à Abidjan, Martins Global Links est votre destination de confiance pour des équipements sportifs authentiques. 
        Nous sélectionnons rigoureusement chaque produit pour vous garantir qualité, authenticité et style.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Shield className="w-8 h-8" />, title: 'Authenticité', desc: 'Tous nos produits sont 100% originaux et proviennent directement des marques officielles.' },
          { icon: <Users className="w-8 h-8" />, title: 'Communauté', desc: 'Nous servons une communauté passionnée de sportifs à Abidjan et dans toute la Côte d\'Ivoire.' },
          { icon: <Trophy className="w-8 h-8" />, title: 'Excellence', desc: 'Notre mission est de rendre accessible les meilleurs équipements sportifs au meilleur prix.' },
        ].map((item, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="inline-flex p-4 bg-accent rounded-full text-primary mb-4">{item.icon}</div>
            <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
