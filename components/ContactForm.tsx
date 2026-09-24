'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';
import { IconWhatsApp } from './Icons';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const buildWhatsAppLink = () => {
    const lines = [
      `Ad Soyad: ${form.name}`,
      `E-posta: ${form.email}`,
      `Telefon: ${form.phone}`,
      `Konu: ${form.subject}`,
      `Mesaj: ${form.message}`,
    ];
    const text = encodeURIComponent(`Merhaba, Freya Psikoloji iletişim formundan yazıyorum.\n\n${lines.join('\n')}`);
    return `${SITE.whatsapp}?text=${text}`;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form doğrulaması — tüm alanlar zorunlu, HTML required ile de desteklenir
    const waLink = buildWhatsAppLink();
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="form-card">
      <h3>Bize Yazın</h3>
      <form className="form-grid" onSubmit={onSubmit}>
        <div className="form-field">
          <label htmlFor="cf-name">Adınız Soyadınız *</label>
          <input id="cf-name" name="name" type="text" placeholder="Adınızı girin" autoComplete="name" required value={form.name} onChange={update('name')} />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">E-posta *</label>
          <input id="cf-email" name="email" type="email" placeholder="ornek@mail.com" autoComplete="email" required value={form.email} onChange={update('email')} />
        </div>
        <div className="form-field">
          <label htmlFor="cf-phone">Telefon *</label>
          <input id="cf-phone" name="phone" type="tel" placeholder="0 (5xx) xxx xx xx" autoComplete="tel" required value={form.phone} onChange={update('phone')} />
        </div>
        <div className="form-field">
          <label htmlFor="cf-subject">Konu *</label>
          <input id="cf-subject" name="subject" type="text" placeholder="Konunuzu yazın" required value={form.subject} onChange={update('subject')} />
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="cf-msg">Mesajınız *</label>
          <textarea id="cf-msg" name="message" placeholder="Size nasıl yardımcı olabiliriz?" required value={form.message} onChange={update('message')} />
        </div>
        <div className="form-field form-field--full">
          <button type="submit" className="btn btn--primary btn--whatsapp">
            <IconWhatsApp />
            <span>WhatsApp ile Gönder</span>
          </button>
          <p className="form-note">
            Formu doldurduktan sonra WhatsApp uygulaması açılacak ve mesajınız hazır gelecektir. Dilerseniz bize <a href={`tel:${SITE.phoneHref}`} style={{ fontWeight: 700, textDecoration: 'underline' }}>{SITE.phone}</a> numarasından da ulaşabilirsiniz.
          </p>
        </div>
      </form>
    </div>
  );
}
