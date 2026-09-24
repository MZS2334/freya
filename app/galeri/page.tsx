import type { Metadata } from 'next';
import { PageHero, CtaBand } from '@/components/Common';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Freya Psikoloji foto galeri — merkezimizden ve çalışma ortamımızdan kareler.',
};

const ITEMS = [
  { caption: 'Freya Psikoloji — karşılama alanı', src: '/galeri/galeri-01.avif', tall: true },
  { caption: 'Seans odası', src: '/galeri/galeri-02.avif' },
  { caption: 'Oyun terapisi atölyesi', src: '/galeri/galeri-03.avif' },
  { caption: 'Grup terapisi çemberi', src: '/galeri/galeri-04.avif' },
  { caption: 'Bekleme salonu', src: '/galeri/galeri-05.avif', tall: true },
  { caption: 'Seminer ve eğitimlerimiz', src: '/galeri/galeri-06.avif' },
  { caption: 'Merkezimizden detaylar', src: '/galeri/galeri-07.avif' },
  { caption: 'Göktürk ofisimiz', src: '/galeri/galeri-08.avif' },
  { caption: 'Terapi odası', src: '/galeri/galeri-09.avif' },
  { caption: 'Danışmanlık alanı', src: '/galeri/galeri-10.avif' },
  { caption: 'Çalışma ortamımız', src: '/galeri/galeri-11.avif', tall: true },
  { caption: 'Oyun terapisi köşesi', src: '/galeri/galeri-12.avif' },
  { caption: 'Grup çalışması', src: '/galeri/galeri-13.avif' },
  { caption: 'Merkezimizden', src: '/galeri/galeri-14.avif' },
  { caption: 'Freya Psikoloji', src: '/galeri/galeri-15.avif' },
  { caption: 'Freya Psikoloji — merkezimizden', src: '/galeri/galeri-16.avif' },
  { caption: 'Çalışma alanımız', src: '/galeri/galeri-17.avif', tall: true },
  { caption: 'Seans odamız', src: '/galeri/galeri-18.avif' },
  { caption: 'Merkezimizden kareler', src: '/galeri/galeri-19.avif' },
  { caption: 'Terapi sürecimiz', src: '/galeri/galeri-20.avif' },
  { caption: 'Freya Psikoloji detay', src: '/galeri/galeri-21.avif', tall: true },
  { caption: 'Ofisimizden', src: '/galeri/galeri-22.avif' },
  { caption: 'Çalışma ortamı', src: '/galeri/galeri-23.avif' },
  { caption: 'Merkezimiz', src: '/galeri/galeri-24.avif' },
  { caption: 'Freya Psikoloji', src: '/galeri/galeri-25.avif' },
];

export default function GaleriPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ href: '/', label: 'Freya Psikoloji' }, { label: 'Galeri' }]}
        title="Foto Galeri"
        lead="Merkezimizden kareler — büyütmek için görsellere tıklayın."
      />
      <section className="section section--surface">
        <div className="container">
          <Gallery items={ITEMS} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
