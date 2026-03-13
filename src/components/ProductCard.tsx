import { Check } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

const getWhatsAppLink = (appName: string) => {
  const phone = '628562626116';
  const now = new Date();
  const isFriday = now.getDay() === 5;
  let message = `Permisi order ${appName}`;
  if (isFriday) {
    message += ` *kode jumat berkah*`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

const ProductCard = ({ title, price, features, highlight }: ProductCardProps) => {
  return (
    <div className={`product-card flex flex-col p-8 ${highlight ? 'ring-2 ring-accent' : ''}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-display font-bold text-card-foreground">{title}</h3>
        <span className="price-badge text-lg md:text-xl px-4 py-2 rounded-lg">{price}</span>
      </div>
      <ul className="space-y-3 flex-1 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <span className="text-card-foreground/80 font-body">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={getWhatsAppLink(title)}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button w-full text-center inline-block"
      >
        Order via WhatsApp
      </a>
    </div>
  );
};

export default ProductCard;
