/**
 * Deterministik SVG illüstrasyonlar — markanın line-art kimliğini yansıtır.
 * `theme` parametresi ile kategori bazlı renk varyasyonu üretir.
 */

export type Theme = 'teal' | 'terra' | 'sand' | 'rose' | 'deep' | 'night';

const PALETTES: Record<Theme, { from: string; to: string; line: string; soft: string }> = {
  teal: { from: '#292641', to: '#1e1b30', line: '#f1eff5', soft: '#c9a86a' },
  terra: { from: '#c9a86a', to: '#a88a4f', line: '#fdf8ee', soft: '#eee5de' },
  sand: { from: '#eee5de', to: '#e0d8cc', line: '#292641', soft: '#c9a86a' },
  rose: { from: '#e8d8c8', to: '#d4c0b0', line: '#4a3a2a', soft: '#292641' },
  deep: { from: '#15122a', to: '#0e0b1c', line: '#e8d8c8', soft: '#c9a86a' },
  night: { from: '#3a3654', to: '#292641', line: '#f0e8d6', soft: '#b8b0d0' },
};

interface ArtProps {
  theme?: Theme;
  /** 0..4 — kompozisyon varyantı */
  variant?: number;
  ratio?: string;
}

export function ArtIllustration({ theme = 'teal', variant = 0 }: ArtProps) {
  const p = PALETTES[theme];
  const vb = '0 0 400 260';

  return (
    <svg viewBox={vb} preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={`g-${theme}-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.from} />
          <stop offset="100%" stopColor={p.to} />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#g-${theme}-${variant})`} />

      {variant % 5 === 0 && (
        <g stroke={p.line} strokeWidth="1.6" fill="none" strokeLinecap="round">
          {/* kalp tutan eller (orijinal hero line-art referansı) */}
          <path d="M200 132c-10-26-34-42-56-36-20 5.4-28 26.8-20 46 8.8 21.4 36 40 76 58" />
          <path d="M200 132c10-26 34-42 56-36 20 5.4 28 26.8 20 46-8.8 21.4-36 40-76 58" />
          <path d="M186 110c-6 4-6 12 0 16l14 3" />
          <path d="M214 110c6 4 6 12 0 16l-14 3" />
          <circle cx="200" cy="82" r="10" stroke={p.soft} />
          <path d="M48 226c60-14 244-14 304 0" strokeOpacity="0.5" />
          <path d="M60 40c20 16 20 30 0 46M340 40c-20 16-20 30 0 46" strokeOpacity="0.35" />
        </g>
      )}

      {variant % 5 === 1 && (
        <g stroke={p.line} strokeWidth="1.6" fill="none" strokeLinecap="round">
          {/* anne & bebek profil */}
          <circle cx="190" cy="118" r="60" strokeOpacity="0.55" />
          <path d="M168 72c-16 7-24 21-22 37 1.2 10.6 5.6 17.6 14.6 22.6-3 8.6-2.2 15.6 4 20.4" />
          <path d="M168 72c9-5.4 19.6-4 23.6 2.6" />
          <circle cx="206" cy="168" r="15" stroke={p.soft} />
          <path d="M224 180c9-6 20-5 26 1.4 5.4 6 5.4 14-1 19" stroke={p.soft} />
          <path d="M60 228c60-16 220-16 280 0" strokeOpacity="0.45" />
          <path d="M330 66c12 10 12 22 0 32M348 54c16 14 16 32 0 44" strokeOpacity="0.3" />
        </g>
      )}

      {variant % 5 === 2 && (
        <g stroke={p.line} strokeWidth="1.6" fill="none" strokeLinecap="round">
          {/* lotus / büyüme */}
          <path d="M200 200c-40 0-72-22.4-80-53.6 22.4 4.4 40.4 0 53.6-13.6-17.6-4.4-35.2-22.4-44.4-49.6 22.4 4.4 44.8 13.6 58 31.6C196.8 84 187.2 56 200 32c12.8 24 3.2 52 12.8 82.8 13.2-18 35.6-27.2 58-31.6-9.2 27.2-26.8 45.2-44.4 49.6 13.2 13.6 31.2 18 53.6 13.6-8 31.2-40 53.6-80 53.6z" strokeOpacity="0.9" />
          <circle cx="200" cy="206" r="6" fill={p.soft} stroke="none" />
          <path d="M70 70c10 12 10 22 0 34M330 70c-10 12-10 22 0 34" strokeOpacity="0.3" />
        </g>
      )}

      {variant % 5 === 3 && (
        <g stroke={p.line} strokeWidth="1.6" fill="none" strokeLinecap="round">
          {/* el oğuşması / destek */}
          <path d="M120 150c22-30 46-52 70-62 12-5 24-5 34 1 7 4.4 10 10 9.6 16.6" />
          <path d="M132 162c18-24 38-42 58-51 14-6.4 26.4-7 35.6-1.6 6.6 4 9.8 9.6 9.2 16.4" />
          <path d="M250 186c-14 14-32 24-52 28-16 3.2-32 .8-44-7.4" stroke={p.soft} />
          <path d="M262 172c-16 18-36 30-58 34" stroke={p.soft} strokeOpacity="0.7" />
          <circle cx="318" cy="80" r="22" strokeOpacity="0.4" />
          <path d="M48 220c70-18 234-18 304 0" strokeOpacity="0.5" />
        </g>
      )}

      {variant % 5 === 4 && (
        <g stroke={p.line} strokeWidth="1.6" fill="none" strokeLinecap="round">
          {/* dal & yaprak */}
          <path d="M70 210c60-8 110-40 140-96 14-26 30-44 52-54" />
          <path d="M150 158c-18 0-30-12-32-28 16-2 28 8 32 28z" />
          <path d="M186 130c-4-18 6-32 22-38 6 16-4 32-22 38z" stroke={p.soft} />
          <path d="M218 96c2-18 16-30 32-30 0 18-14 30-32 30z" />
          <circle cx="96" cy="74" r="18" strokeOpacity="0.4" />
          <circle cx="104" cy="74" r="2.5" fill={p.line} stroke="none" />
        </g>
      )}

      {/* köşe süslemesi */}
      <path d="M12 12h56M12 12v56M388 248h-56M388 248v-56" stroke={p.soft} strokeOpacity="0.45" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

/** Ekip portre çizimi (line-art yüz) */
export function PortraitArt() {
  return (
    <svg viewBox="0 0 320 380" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Portre illüstrasyonu">
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eee5de" />
          <stop offset="100%" stopColor="#f0e8d6" />
        </linearGradient>
      </defs>
      <rect width="320" height="380" fill="url(#pg)" />
      <g stroke="#292641" strokeWidth="2.2" fill="none" strokeLinecap="round">
        {/* yüz */}
        <ellipse cx="160" cy="150" rx="58" ry="72" />
        <path d="M106 128c10-34 40-50 56-50s50 16 58 50" />
        {/* saç */}
        <path d="M100 220c-14-70 4-130 60-138 56 8 74 68 60 138" strokeOpacity="0.75" />
        <path d="M104 152c-4 30-2 58 6 84" strokeOpacity="0.6" />
        <path d="M216 152c4 30 2 58-6 84" strokeOpacity="0.6" />
        {/* omuz */}
        <path d="M160 226v20" />
        <path d="M96 338c10-46 34-66 64-66s54 20 64 66" />
        <path d="M96 338c22 14 128 14 128 0 0-12-4-24-12-34" strokeOpacity="0.5" />
      </g>
      <g stroke="#a88a4f" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M132 136c6-5 14-5 20 0M168 136c6-5 14-5 20 0" />
        <path d="M150 186c6 5 14 5 20 0" />
      </g>
      <circle cx="160" cy="150" r="104" stroke="#c9a86a" strokeWidth="1" strokeDasharray="3 6" fill="none" />
      <path d="M26 356c50-16 218-16 268 0" stroke="#a88a4f" strokeOpacity="0.35" fill="none" />
    </svg>
  );
}

/** Galeri için geniş sahne illüstrasyonu */
export function GalleryArt({ seed }: { seed: number }) {
  const themes: Theme[] = ['teal', 'terra', 'sand', 'night', 'deep', 'rose'];
  const t = themes[seed % themes.length];
  const p = PALETTES[t];
  return (
    <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
      <rect width="400" height="400" fill={p.from} />
      <g stroke={p.line} strokeWidth="1.6" fill="none" strokeLinecap="round">
        {seed % 3 === 0 && (
          <>
            <circle cx="200" cy="190" r="88" strokeOpacity="0.4" />
            <path d="M200 100c-24 40-24 84 0 120-16 20-36 30-60 26 8 30 34 50 60 50s52-20 60-50c-24 4-44-6-60-26 24-36 24-80 0-120z" />
          </>
        )}
        {seed % 3 === 1 && (
          <>
            <path d="M90 300c30-70 80-120 140-150 20-10 44-10 60 2" />
            <path d="M110 316c44-16 136-16 180 0" strokeOpacity="0.55" />
            <circle cx="130" cy="130" r={26 + (seed % 5) * 6} strokeOpacity="0.5" />
          </>
        )}
        {seed % 3 === 2 && (
          <>
            <path d="M120 240c40-46 120-46 160 0" />
            <path d="M150 240c20-20 80-20 100 0" stroke={p.soft} />
            <circle cx="200" cy="150" r="34" />
            <path d="M70 330c60-20 200-20 260 0" strokeOpacity="0.5" />
          </>
        )}
      </g>
      <text x="24" y="44" fontFamily="Georgia, serif" fontStyle="italic" fontSize="20" fill={p.soft} opacity="0.85">
        freya
      </text>
    </svg>
  );
}
