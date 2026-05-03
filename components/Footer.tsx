'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()

  const products = lang === 'tr'
    ? ['Sineklik', 'Plise Sineklik', 'Plise Perde', 'Jaluzi Perde', 'Düet Perde', 'Honeycomb Perde', 'Zip Perde']
    : ['Vliegenscherm', 'Plissé Vliegenscherm', 'Plissé Gordijn', 'Jaloezie', 'Duo Rolgordijn', 'Honingraat Gordijn', 'Zip Screen']

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/FenetreSystems/', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
    { name: 'Instagram', href: 'https://www.instagram.com/fenetresystems/', icon: 'M16 2H8C4.69 2 2 4.69 2 8v8c0 3.31 2.69 6 6 6h8c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm4 14c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v8zm-8-9a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.5-9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z' },
    { name: 'YouTube', href: 'https://www.youtube.com/@FenetreSystems', icon: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/fenetresystems/', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
    { name: 'Pinterest', href: 'https://tr.pinterest.com/fenetresystems/', icon: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
    { name: 'X', href: 'https://x.com/FenetreSystems', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  ]

  return (
    <footer className="py-16" style={{ backgroundColor: '#1a2332' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-5" aria-label="Sineklik Hollanda Ana Sayfa">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#83bd81' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                  <line x1="2" y1="7" x2="22" y2="7" stroke="white" strokeWidth="1.5"/>
                  <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeWidth="1.5"/>
                  <line x1="2" y1="17" x2="22" y2="17" stroke="white" strokeWidth="1.5"/>
                  <line x1="7" y1="2" x2="7" y2="22" stroke="white" strokeWidth="1.5"/>
                  <line x1="12" y1="2" x2="12" y2="22" stroke="white" strokeWidth="1.5"/>
                  <line x1="17" y1="2" x2="17" y2="22" stroke="white" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-base leading-tight">
                  Sineklik <span style={{ color: '#83bd81' }}>Hollanda</span>
                </div>
                <div className="text-xs" style={{ color: '#9baabb' }}>Fenetre Systems</div>
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#9baabb' }}>
              {lang === 'tr'
                ? 'Türkiye\'den Hollanda\'ya 4-10 iş günü sineklik ve perde sistemi. Fenetre Systems markasıyla üretilen Avrupa standartlı ürünler.'
                : 'Vliegenschermen en raambekleding van Turkije naar Nederland in 4-10 werkdagen. Europese kwaliteitsproducten van het merk Fenetre Systems.'}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d={s.icon}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-wide">
              {lang === 'tr' ? 'Ürünlerimiz' : 'Onze Producten'}
            </h4>
            <ul className="space-y-2">
              {products.map((p, i) => (
                <li key={i}>
                  <a href="/" className="text-sm hover:text-white transition-colors" style={{ color: '#9baabb' }}>
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-wide">
              {lang === 'tr' ? 'İç Linkler' : 'Interne Links'}
            </h4>
            <ul className="space-y-2">
              {(lang === 'tr' ? [
                { anchor: 'Sineklik Hollanda', href: '/' },
                { anchor: 'Hollanda Sineklik', href: '/' },
                { anchor: 'Plise Sineklik', href: '/' },
                { anchor: 'Plise Perde', href: '/' },
                { anchor: 'Hollanda Sineklik Fiyatları', href: '/' },
                { anchor: 'Sineklik Sistemleri', href: '/' },
                { anchor: 'Jaluzi Perde Hollanda', href: '/' },
              ] : [
                { anchor: 'Vliegenscherm Nederland', href: '/' },
                { anchor: 'Insectenscherm Holland', href: '/' },
                { anchor: 'Plissé Vliegenscherm', href: '/' },
                { anchor: 'Plissé Gordijn', href: '/' },
                { anchor: 'Vliegenscherm Prijs', href: '/' },
                { anchor: 'Raamdecoratie Nederland', href: '/' },
                { anchor: 'Jaloezie Nederland', href: '/' },
              ]).map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors" style={{ color: '#9baabb' }}>
                    {link.anchor}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-wide">
              {lang === 'tr' ? 'İletişim' : 'Contact'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+905403363873" className="flex items-start gap-2 text-sm hover:text-white transition-colors" style={{ color: '#9baabb' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .92h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +90 540 336 38 73
                </a>
              </li>
              <li>
                <a href="https://wa.me/905403363873" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm hover:text-white transition-colors" style={{ color: '#9baabb' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: +90 540 336 38 73
                </a>
              </li>
              <li>
                <a href="mailto:info@fenetresystems.com" className="flex items-start gap-2 text-sm hover:text-white transition-colors" style={{ color: '#9baabb' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  info@fenetresystems.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: '#9baabb' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Cumhuriyet Mah. 2233 Sok.<br />No:4/A Gebze / Kocaeli</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-xs text-center md:text-left" style={{ color: '#9baabb' }}>
            © {new Date().getFullYear()} Sineklik Hollanda — Tüm hakları saklıdır.{' '}
            {lang === 'tr' ? 'Üretici: ' : 'Producent: '}
            <a
              href="https://www.fenetresystems.com"
              target="_blank"
              rel="dofollow"
              className="font-semibold hover:text-white transition-colors"
              style={{ color: '#83bd81' }}
            >
              Fenetre Systems
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: '#9baabb' }}>
            <span>sineklikhollanda.com</span>
            <span>·</span>
            <a href="https://www.fenetresystems.com" target="_blank" rel="dofollow" className="hover:text-white transition-colors" style={{ color: '#83bd81' }}>
              fenetresystems.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
