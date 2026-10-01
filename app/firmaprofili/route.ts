/**
 * Eski siteden kalan /firmaprofili URL'si için 410 Gone yanıtı.
 * 404 yerine 410 döndürerek Google'a "bu sayfa kalıcı olarak kaldırıldı"
 * sinyali verilir; böylece URL arama sonuçlarından hızlıca çıkarılır.
 */
export const dynamic = 'force-static';

export function GET() {
  return new Response(
    `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Sayfa Kaldırıldı — Freya Psikoloji</title>
<style>
  body { font-family: system-ui, -apple-system, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #faf7f2; color: #292641; text-align: center; padding: 20px; }
  h1 { font-size: 56px; margin: 0 0 12px; font-weight: 700; }
  p { font-size: 18px; color: #6b6b7b; margin: 0 0 28px; }
  a { display: inline-block; padding: 14px 32px; background: #292641; color: #fff; text-decoration: none; border-radius: 999px; font-weight: 600; }
</style>
</head>
<body>
<h1>410</h1>
<p>Bu sayfa kalıcı olarak kaldırılmıştır.</p>
<a href="/">Ana Sayfaya Dön</a>
</body>
</html>`,
    {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    },
  );
}
