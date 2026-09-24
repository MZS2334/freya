import { SITE } from '@/lib/site';
import { IconWhatsApp } from './Icons';

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
    >
      <span className="tip">Bize WhatsApp’tan yazın</span>
      <IconWhatsApp />
    </a>
  );
}
