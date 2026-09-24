import Link from 'next/link';
import { IconArrow } from '@/components/Icons';

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Aradığınız sayfa bulunamadı. Belki taşındı ya da hiç var olmadı.</p>
      <Link href="/" className="btn btn--primary">
        Ana Sayfaya Dön <IconArrow />
      </Link>
    </div>
  );
}
