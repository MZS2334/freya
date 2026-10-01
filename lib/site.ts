export const SITE = {
  name: 'Freya Psikoloji',
  tagline: 'Psikolojik Danışmanlık Merkezi',
  description:
    'Freya Psikoloji; yetişkin, çocuk-ergen terapileri, zeka ve gelişim testleri ve yetişkinlerle grup terapileri yürüten, doğum psikolojisi alanında uzmanlaşmış bir psikolojik danışmanlık merkezidir.',
  phone: '(0 552) 604 31 07',
  phoneHref: '+905526043107',
  email: 'r.gulcinsanli@gmail.com',
  founderEmail: 'r.gulcinsanli@gmail.com',
  address: 'Göktürk Merkez Mahallesi Göktürk Caddesi No.5 A Blok Kat 3 Ofis.6 Eyüpsultan Göktürk / İstanbul',
  addressShort: 'Göktürk / İstanbul',
  whatsapp: 'https://wa.me/905526043107',
  url: 'https://www.freyapsikoloji.com',
  foundedYear: 2026,
  instagrams: [
    { handle: 'freyapsikoloji', url: 'https://www.instagram.com/freyapsikoloji', label: '@freyapsikoloji' },
    { handle: 'freyadadogum', url: 'https://www.instagram.com/freyadadogum', label: '@freyadadogum' },
    { handle: 'psk.gulcinsanli', url: 'https://www.instagram.com/psk.gulcinsanli', label: '@psk.gulcinsanli' },
  ],
} as const;

export const VALUES = [
  { value: 100, suffix: '%', label: 'Mutluluk', icon: 'smile' },
  { value: 100, suffix: '%', label: 'Memnuniyet', icon: 'heart' },
  { value: 100, suffix: '%', label: 'Çözüm Odaklılık', icon: 'target' },
  { value: 100, suffix: '%', label: 'Ekonomik', icon: 'wallet' },
] as const;

export const FIELDS = [
  'Çocuk & Ergen Terapisi',
  'Oyun Terapisi (0–12 yaş)',
  'Zeka ve Gelişim Testleri',
  'Grup Terapisi',
  'Yeme Bozuklukları',
  'Duygusal Yeme & Obezite',
  'Gebelikte Psikolojik Destek',
  'Doğuma Hazırlık',
  'Psikosomatik Ağrılar',
  'Psikodrama',
  'Dürtü Kontrol Bozuklukları',
  'Aile İçi İletişim',
] as const;

export const VIDEOS = [
  {
    id: 'DYmOR1LkTrM',
    title: 'Doğum Korkusu ve Doğum Fizyolojisi..',
  },
  {
    id: 'M-K0T4PTok4',
    title: 'Doğum Korkusu Neden Oluşur?',
  },
] as const;
