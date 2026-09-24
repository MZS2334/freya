import type { Metadata } from 'next';
import { PageHero, CtaBand } from '@/components/Common';
import ArticleFilter from '@/components/ArticleFilter';
import { ARTICLES } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Makaleler',
  description:
    'Freya Psikoloji makaleleri — terapi, travma, çocuk psikolojisi, beslenme psikolojisi, doğum ve bağlanma üzerine yazılar.',
};

export default function MakalelerPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ href: '/', label: 'Freya Psikoloji' }, { label: 'Makaleler' }]}
        title="Makaleler"
        lead="Kalemimizden çıkan her satır; duyulan bir bedenin, kucaklanan bir duygunun izini taşır."
      />
      <section className="section">
        <div className="container">
          <ArticleFilter articles={ARTICLES} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
