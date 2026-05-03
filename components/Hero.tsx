'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { lang } = useLanguage()

  return (
    <section
      id="hero"
      className="relative pt-20 md:pt-24 min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f7faf7 0%, #ffffff 50%, #f0f4f8 100%)' }}
    >
      <div className="absolute inset-0 bg-pattern opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: '#f0f7f0', color: '#404e5e' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#83bd81' }} />
              {lang === 'tr' ? '🇳🇱 Hollanda\'ya Hızlı Teslimat — 4-10 İş Günü' : '🇳🇱 Snelle levering heel Nederland — 4-10 werkdagen'}
            </div>

            {lang === 'tr' ? (
              <>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-balance" style={{ color: '#404e5e' }}>
                  Hollanda&apos;ya{' '}
                  <a href="/" className="hover:underline decoration-2 underline-offset-4" style={{ color: '#83bd81' }}>
                    Sineklik
                  </a>{' '}
                  ve Perde Sistemi
                </h1>
                <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl" style={{ color: '#5a6a7a' }}>
                  <strong>Fenetre Systems</strong> markasıyla üretilen ürünler, Türkiye&apos;nin Gebze fabrikasından{' '}
                  <em>tüm Hollanda eyaletlerine</em> doğrudan ulaşır. Demonte paketleme, kolay kurulum.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-balance" style={{ color: '#404e5e' }}>
                  Vliegenschermen &amp; Raamdecoratie voor{' '}
                  <span style={{ color: '#83bd81' }}>Nederland</span>
                </h1>
                <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl" style={{ color: '#5a6a7a' }}>
                  <strong>Fenetre Systems</strong> producten, rechtstreeks vanuit onze fabriek in Gebze, Turkije,
                  geleverd aan <em>alle Nederlandse provincies</em>. Demonteerbare verpakking, eenvoudige montage.
                </p>
              </>
            )}

            <div className="flex flex-wrap gap-3 mb-10">
              {(lang === 'tr' ? [
                { icon: '⚡', text: '4-10 Gün Teslimat' },
                { icon: '🏭', text: 'Avrupa Standartları' },
                { icon: '📦', text: 'Demonte Gönderim' },
                { icon: '📐', text: 'Özel Ölçü Üretim' },
              ] : [
                { icon: '⚡', text: '4-10 Werkdagen Levering' },
                { icon: '🏭', text: 'Europese Standaarden' },
                { icon: '📦', text: 'Demonteerbare Verpakking' },
                { icon: '📐', text: 'Op Maat Gemaakt' },
              ]).map((badge, i) => (
                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border"
                  style={{ backgroundColor: '#f0f7f0', borderColor: '#c1e1bf', color: '#404e5e' }}>
                  {badge.icon} {badge.text}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/905403363873"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-base transition-all hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: '#25d366' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {lang === 'tr' ? 'WhatsApp\'tan Fiyat Al' : 'Vraag Offerte via WhatsApp'}
              </a>
              <a
                href="tel:+905403363873"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base border-2 transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ borderColor: '#404e5e', color: '#404e5e', backgroundColor: 'transparent' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .92h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {lang === 'tr' ? 'Hemen Ara' : 'Direct Bellen'}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #f0f7f0 0%, #e8f5e8 100%)', minHeight: '480px' }}>

              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full max-w-sm">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="aspect-square rounded-2xl shadow-sm border flex items-center justify-center"
                        style={{ backgroundColor: 'white', borderColor: '#c1e1bf' }}>
                        <div className="w-6 h-6 rounded" style={{
                          background: i % 3 === 0 ? '#83bd81' : i % 3 === 1 ? '#404e5e' : '#c1e1bf',
                          opacity: 0.3 + (i * 0.07)
                        }} />
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium mb-1" style={{ color: '#404e5e' }}>
                      {lang === 'tr' ? '7 Farklı Sistem' : '7 Verschillende Systemen'}
                    </div>
                    <div className="text-xs" style={{ color: '#83bd81' }}>
                      {lang === 'tr' ? 'Sineklik • Plise • Jaluzi • Honeycomb • Zip' : 'Vliegenscherm • Plissé • Jaloezie • Honingraat • Zip'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-lg p-3 text-center">
                <div className="text-2xl font-black" style={{ color: '#83bd81' }}>4-10</div>
                <div className="text-xs font-medium" style={{ color: '#404e5e' }}>
                  {lang === 'tr' ? 'İş Günü' : 'Werkdagen'}
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-2xl shadow-lg p-3 text-center">
                <div className="text-2xl font-black" style={{ color: '#404e5e' }}>12</div>
                <div className="text-xs font-medium" style={{ color: '#83bd81' }}>
                  {lang === 'tr' ? 'NL Eyalet' : 'NL Provincies'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t" style={{ borderColor: '#e8f0e8' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(lang === 'tr' ? [
              { value: '15+', label: 'Yıl Üretim Deneyimi' },
              { value: '12', label: 'Hollanda Eyaletine Teslimat' },
              { value: '7', label: 'Farklı Ürün Sistemi' },
              { value: '%100', label: 'Özel Ölçüde Üretim' },
            ] : [
              { value: '15+', label: 'Jaar Productie-ervaring' },
              { value: '12', label: 'Provincies Geleverd' },
              { value: '7', label: 'Producttypen' },
              { value: '100%', label: 'Op Maat Gemaakt' },
            ]).map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black mb-1" style={{ color: '#83bd81' }}>{stat.value}</div>
                <div className="text-sm font-medium" style={{ color: '#404e5e' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
