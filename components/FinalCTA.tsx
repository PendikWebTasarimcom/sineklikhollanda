'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function FinalCTA() {
  const { lang } = useLanguage()

  return (
    <section id="iletisim" className="py-20 lg:py-28" style={{ background: 'linear-gradient(135deg, #404e5e 0%, #2c3643 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          style={{ backgroundColor: 'rgba(131,189,129,0.2)', color: '#83bd81' }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#83bd81' }} />
          {lang === 'tr' ? 'Hizmetinizdeyiz — 7/24' : 'Wij staan voor u — 7/24'}
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
          {lang === 'tr' ? (
            <>
              <a href="/" className="hover:underline" style={{ color: '#83bd81' }}>
                Hollanda Sineklik
              </a>{' '}
              Siparişiniz İçin<br />Hemen İletişime Geçin
            </>
          ) : (
            <>
              Neem Nu Contact Op<br />
              <span style={{ color: '#83bd81' }}>voor Uw Bestelling</span>
            </>
          )}
        </h2>

        <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#9baabb' }}>
          {lang === 'tr'
            ? 'Ölçülerinizi WhatsApp üzerinden paylaşın. 24 saat içinde kişisel fiyat teklifiniz hazır. Teslimat 4-10 iş günü içinde adresinizde.'
            : 'Deel uw afmetingen via WhatsApp. Persoonlijke offerte binnen 24 uur klaar. Levering aan uw adres binnen 4-10 werkdagen.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/905403363873"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1"
            style={{ backgroundColor: '#25d366' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {lang === 'tr' ? 'WhatsApp ile Sipariş Ver' : 'Bestellen via WhatsApp'}
          </a>
          <a
            href="tel:+905403363873"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 border-2"
            style={{ borderColor: '#83bd81', color: '#83bd81', backgroundColor: 'transparent' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .92h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +90 540 336 38 73
          </a>
          <a
            href="mailto:info@fenetresystems.com"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 border-2"
            style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', backgroundColor: 'transparent' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            E-Posta
          </a>
        </div>

        <div className="border-t pt-10" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(lang === 'tr' ? [
              { label: 'Telefon', value: '+90 540 336 38 73', href: 'tel:+905403363873' },
              { label: 'WhatsApp', value: '+90 540 336 38 73', href: 'https://wa.me/905403363873' },
              { label: 'E-Posta', value: 'info@fenetresystems.com', href: 'mailto:info@fenetresystems.com' },
              { label: 'Adres', value: 'Gebze / Kocaeli, Türkiye', href: '#' },
            ] : [
              { label: 'Telefoon', value: '+90 540 336 38 73', href: 'tel:+905403363873' },
              { label: 'WhatsApp', value: '+90 540 336 38 73', href: 'https://wa.me/905403363873' },
              { label: 'E-mail', value: 'info@fenetresystems.com', href: 'mailto:info@fenetresystems.com' },
              { label: 'Adres', value: 'Gebze / Kocaeli, Turkije', href: '#' },
            ]).map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#83bd81' }}>{item.label}</div>
                <a href={item.href} className="text-xs text-white/80 hover:text-white transition-colors">{item.value}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 p-6 rounded-2xl" style={{ backgroundColor: 'rgba(131,189,129,0.1)', border: '1px solid rgba(131,189,129,0.3)' }}>
          <div className="font-bold mb-2" style={{ color: '#83bd81' }}>
            {lang === 'tr' ? '🤝 Bayilik İçin WhatsApp' : '🤝 Dealerschap via WhatsApp'}
          </div>
          <p className="text-sm text-white/70 mb-4">
            {lang === 'tr'
              ? 'Hollanda\'da bölgesel bayilik almak için WhatsApp hattımızdan iletişime geçin. Karlı bir iş ortaklığı için hazırız.'
              : 'Neem contact op via WhatsApp voor regionaal dealerschap in Nederland. Klaar voor een winstgevend partnerschap.'}
          </p>
          <a
            href="https://wa.me/905403363873?text=Bayilik%20hakkında%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm"
            style={{ backgroundColor: '#25d366' }}
          >
            {lang === 'tr' ? 'Bayilik Başvurusu' : 'Dealer Aanvraag'}
          </a>
        </div>
      </div>
    </section>
  )
}
