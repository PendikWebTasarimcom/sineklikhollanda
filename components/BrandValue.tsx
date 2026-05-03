'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function BrandValue() {
  const { lang } = useLanguage()

  return (
    <section id="marka" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{ backgroundColor: '#f0f7f0', color: '#404e5e' }}>
              {lang === 'tr' ? 'Fenetre Systems Hakkında' : 'Over Fenetre Systems'}
            </span>
            {lang === 'tr' ? (
              <>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight" style={{ color: '#404e5e' }}>
                  <a href="/" className="hover:underline" style={{ color: '#83bd81' }}>Hollanda Sineklik</a> Pazarında{' '}
                  Öncü Bir Fabrika
                </h2>
                <div className="space-y-5 text-base leading-relaxed" style={{ color: '#4a5a6a' }}>
                  <p>
                    <strong>Fenetre Systems</strong>, Kocaeli&apos;nin Gebze ilçesindeki fabrikasında 2009 yılından bu yana alüminyum profil ve perde sistemi üretiyor. Hollanda pazarına özel tasarım anlayışı, ürün geliştirme sürecinin merkezine yerleşti.
                  </p>
                  <p>
                    Avrupa&apos;nın iklim koşullarını, yapı kültürünü ve tüketici beklentilerini yakından tanıyan ekibimiz; <em>her ürünü gerçek bir ihtiyaçtan yola çıkarak</em> tasarlar. Zeeland kıyılarının rüzgarı ile Limburg&apos;un sakin vadileri arasındaki farkı, ürün seçimlerimize birebir yansıtıyoruz.
                  </p>
                  <p>
                    Üretimde kullanılan tüm alüminyum profiller <u>EN 755 standardına</u> uygun olarak temin edilir. Kumaş malzemeleri ise Oeko-Tex sertifikalı ipliklerden dokunur; hem çevreye hem insan sağlığına saygılı bir üretim zinciri oluşturur.
                  </p>
                  <p>
                    <strong>Kalite kontrol</strong> aşaması, her siparişte ayrı ayrı uygulanır. Boyut toleransı 0,5 mm&apos;nin altında tutulur; renk uyumu standart renk karşılaştırma lambası altında onaylanır. Hollanda&apos;ya gönderilen hiçbir ürün bu aşamayı atlamaz.
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight" style={{ color: '#404e5e' }}>
                  Een Toonaangevende Fabrikant voor de{' '}
                  <span style={{ color: '#83bd81' }}>Nederlandse Markt</span>
                </h2>
                <div className="space-y-5 text-base leading-relaxed" style={{ color: '#4a5a6a' }}>
                  <p>
                    <strong>Fenetre Systems</strong> produceert al sinds 2009 aluminium profielen en raambekleding in zijn fabriek in Gebze, Kocaeli. Het ontwerpconcept is speciaal afgestemd op de Nederlandse markt.
                  </p>
                  <p>
                    Ons team kent de Europese klimaatomstandigheden, bouwcultuur en consumentenverwachtingen van binnenuit. <em>Elk product begint bij een echte behoefte.</em> Het verschil tussen de kustwind van Zeeland en de rustige valleien van Limburg vertaalt zich direct naar onze productkeuzes.
                  </p>
                  <p>
                    Alle aluminium profielen worden geleverd conform <u>EN 755-norm</u>. Stoffen zijn geweven van Oeko-Tex gecertificeerde garens; een productieketen die zowel het milieu als de menselijke gezondheid respecteert.
                  </p>
                  <p>
                    <strong>Kwaliteitscontrole</strong> wordt bij elke bestelling afzonderlijk uitgevoerd. Maattolerantie blijft onder de 0,5 mm; kleurovereenkomst wordt goedgekeurd onder standaard kleurvergelijkingslampen. Geen enkel product dat naar Nederland gaat, slaat deze stap over.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="space-y-4">
            {(lang === 'tr' ? [
              {
                icon: '🏭',
                title: 'Türkiye Üretimi',
                desc: 'Kocaeli Gebze\'deki fabrikamızda kesintisiz üretim. Her profil kendi kalıplarımızla şekillendirilir.',
              },
              {
                icon: '🇪🇺',
                title: 'Avrupa Standartları',
                desc: 'EN 755 alüminyum profil normu. Oeko-Tex sertifikalı kumaş. AB pazar gereksinimlerine tam uyum.',
              },
              {
                icon: '📏',
                title: 'Sıfır Tolerans Kalite',
                desc: '0,5 mm boyut toleransı. Her sipariş ayrı kalite kontrolüne tabi. Hatalı ürün sevkiyatı yapılmaz.',
              },
              {
                icon: '🚚',
                title: '4-10 Gün Hollanda Teslimatı',
                desc: 'Sipariş onayından teslimata kadar ortalama 7 iş günü. Tüm 12 eyalete adrese teslim.',
              },
              {
                icon: '📦',
                title: 'Profesyonel Ambalaj',
                desc: 'Köpük kaplı, karton korumalı, etiketli ambalaj. Kargo hasarı riskini minimize eden özel paketleme.',
              },
              {
                icon: '📐',
                title: 'Sınırsız Özel Ölçü',
                desc: 'Standart dışı her boyut kabul edilir. Arşitrav pencereler ve eğimli çatı pencereleri dahil.',
              },
            ] : [
              {
                icon: '🏭',
                title: 'Productie in Turkije',
                desc: 'Ononderbroken productie in onze fabriek in Gebze, Kocaeli. Elk profiel gevormd met onze eigen matrijzen.',
              },
              {
                icon: '🇪🇺',
                title: 'Europese Normen',
                desc: 'EN 755 aluminium profielnorm. Oeko-Tex gecertificeerd weefsel. Volledig conform EU-marktstandaarden.',
              },
              {
                icon: '📏',
                title: 'Nul Tolerantie Kwaliteit',
                desc: '0,5 mm maattolerantie. Elke bestelling apart gecontroleerd. Geen defecte producten verzonden.',
              },
              {
                icon: '🚚',
                title: 'Levering in 4-10 Werkdagen',
                desc: 'Gemiddeld 7 werkdagen van orderbevestiging tot levering. Thuisbezorgd in alle 12 provincies.',
              },
              {
                icon: '📦',
                title: 'Professionele Verpakking',
                desc: 'Schuim gecoat, karton beschermd, gelabelde verpakking. Speciale verpakking minimaliseert transportschaderisico.',
              },
              {
                icon: '📐',
                title: 'Onbeperkt Maatwerk',
                desc: 'Elk afwijkend formaat geaccepteerd. Inclusief gebogen ramen en dakramen met schuine hoeken.',
              },
            ]).map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border transition-all hover:shadow-sm"
                style={{ backgroundColor: '#fafcfa', borderColor: '#e8f0e8' }}>
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-bold mb-1" style={{ color: '#404e5e' }}>{item.title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: '#5a6a7a' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
