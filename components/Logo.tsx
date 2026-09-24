export function LogoMark({ className = 'brand__mark' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src="/freyalogo.svg"
      alt="Freya Psikoloji logosu"
      width={56}
      height={56}
      aria-hidden="true"
    />
  );
}

export function Brand({ href = '/' }: { href?: string }) {
  return (
    <a className="brand" href={href} aria-label="Freya Psikoloji Ana Sayfa">
      <LogoMark />
      <span className="brand__name">
        Freya
        <small>Psikoloji</small>
      </span>
    </a>
  );
}
