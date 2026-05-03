'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function TrustProofs() {
  const { lang } = useLanguage()

  const testimonials = lang === 'tr' ? [
    { name: 'Jan de Vries', city: 'Amsterdam', text: 'Plise sinekliği tam ölçüde geldi, montaj çocuk oyuncağı. Beklediğimden çok daha iyi kalite.' },
    { name: 'Sophie Bakker', city: 'Rotterdam', text: 'Honeycomb perde kışın inanılmaz fark yarattı. Pencere kenarındaki soğukluk tamamen bitti.' },
    { name: 'Erik Hendriks', city: 'Utrecht', text: 'WhatsApp\'tan sipariş verdim, 8. günde kapımdaydı. Paketleme çok iyiydi, hiçbir hasar yok.' },
    { name: 'Laura Smit', city: 'Eindhoven', text: 'Zip perde balkonda rüzgar sorununu tamamen çözdü. Kuzey Hollanda\'da bile sallantı yok.' },
  ] : [
    { name: 'Jan de Vries', city: 'Amsterdam', text: 'Het plissé vliegenscherm kwam op de juiste maat, montage was kinderspel. Veel betere kwaliteit dan verwacht.' },
    { name: 'Sophie Bakker', city: 'Rotterdam', text: 'Het honingraatgordijn maakte een ongelooflijk verschil in de winter. De kou bij het raam is helemaal weg.' },
    { name: 'Erik Hendriks', city: 'Utrecht', text: 'Besteld via WhatsApp, op dag 8 aan de deur. Verpakking was uitstekend, geen enkele beschadiging.' },
    { name: 'Laura Smit', city: 'Eindhoven', text: 'De zip screen heeft het windprobleem op het balkon volledig opgelost. Zelfs in Noord-Holland geen beweging.' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#f0f7f0', color: '#404e5e' }}>
            {lang === 'tr' ? 'Güven Kanıtları' : 'Vertrouwensbewijs'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            {lang === 'tr' ? (
              <>Hollanda&apos;dan <span style={{ color: '#83bd81' }}>Gerçek Deneyimler</span></>
            ) : (
              <>Echte <span style={{ color: '#83bd81' }}>Ervaringen uit Nederland</span></>
            )}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl border" style={{ backgroundColor: '#fafcfa', borderColor: '#e8f0e8' }}>
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#4a5a6a' }}>&ldquo;{t.text}&rdquo;</p>
              <div>
                <div className="font-bold text-sm" style={{ color: '#404e5e' }}>{t.name}</div>
                <div className="text-xs" style={{ color: '#83bd81' }}>{t.city}, 🇳🇱</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {(lang === 'tr' ? [
            { icon: '🏭', label: 'Türkiye Üretimi', desc: 'Kocaeli Gebze fabrikası' },
            { icon: '🇪🇺', label: 'Avrupa Standartları', desc: 'EN 755 + Oeko-Tex' },
            { icon: '📦', label: 'Hasarsız Teslimat', desc: 'Özel köpük ambalaj' },
            { icon: '💬', label: '24 Saat Destek', desc: 'WhatsApp + E-posta' },
          ] : [
            { icon: '🏭', label: 'Productie in Turkije', desc: 'Fabriek Gebze, Kocaeli' },
            { icon: '🇪🇺', label: 'Europese Normen', desc: 'EN 755 + Oeko-Tex' },
            { icon: '📦', label: 'Schadevrije Levering', desc: 'Speciale schuimverpakking' },
            { icon: '💬', label: '24 Uur Support', desc: 'WhatsApp + E-mail' },
          ]).map((item, i) => (
            <div key={i} className="text-center p-6 rounded-2xl border" style={{ backgroundColor: '#f7faf7', borderColor: '#e8f0e8' }}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-bold mb-1 text-sm" style={{ color: '#404e5e' }}>{item.label}</div>
              <div className="text-xs" style={{ color: '#5a6a7a' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
