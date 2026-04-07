import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="font-heading text-3xl font-bold mb-8">Contactez-nous</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="space-y-6">
            {[
              { icon: <MapPin />, label: 'Adresse', value: 'Abidjan, Côte d\'Ivoire' },
              { icon: <Phone />, label: 'Téléphone', value: '+225 XX XX XX XX' },
              { icon: <Mail />, label: 'Email', value: 'contact@martinsgloballinks.com' },
              { icon: <Clock />, label: 'Horaires', value: 'Lun - Sam : 8h - 20h' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg text-primary">{item.icon}</div>
                <div>
                  <h3 className="font-heading font-semibold">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Nom complet" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
          <textarea placeholder="Votre message" rows={5} className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none" />
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-heading font-bold hover:bg-primary/90 transition-colors">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
}
