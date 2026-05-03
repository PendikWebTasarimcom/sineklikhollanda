'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function ExpertiseSection() {
  const { lang } = useLanguage()

  const skills = lang === 'tr' ? [
    { pct: 98, label: 'Alüminyum Profil İşleme' },
    { pct: 95, label: 'Perde Sistemi Tasarımı' },
    { pct: 97, label: 'Uluslararası Lojistik' },
    { pct: 92, label: 'Özel Ölçü Üretim' },
    { pct: 96, label: 'Hollanda Pazarı Uzmanlığı' },
  ] : [
    { pct: 98, label: 'Aluminium Profielbeheer' },
    { pct: 95, label: 'Raamdecoratie Ontwerp' },
    { pct: 97, label: 'Internationale Logistiek' },
    { pct: 92, label: 'Maatwerk Productie' },
    { pct: 96, label: 'Nederlandse Marktexpertise' },
  ]

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#f7faf7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{ backgroundColor: '#e8f5e8', color: '#404e5e' }}>
              {lang === 'tr' ? 'Teknik Yetkinlik' : 'Technische Bekwaamheid'}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight" style={{ color: '#404e5e' }}>
              {lang === 'tr' ? (
                <>
                  15 Yılda Biriken{' '}
                  <span style={{ color: '#83bd81' }}>Üretim Deneyimi</span>
                </>
              ) : (
                <>
                  15 Jaar Opgebouwde{' '}
                  <span style={{ color: '#83bd81' }}>Productie-expertise</span>
                </>
              )}
            </h2>
            {lang === 'tr' ? (
              <div className="space-y-5 text-base leading-relaxed" style={{ color: '#4a5a6a' }}>
                <p>
                  Fenetre Systems ekibindeki her teknisyen, ortalama <strong>8 yıllık sektör deneyimine</strong> sahiptir. CNC profil kesim makineleri, lazer delme üniteleri ve otomatik montaj hatlarından oluşan fabrika altyapısı, günde 500 ünitenin üzerinde kapasite sunar.
                </p>
                <p>
                  Hollanda pazarına yönelik tasarımlar, <em>yerel yapı yönetmelikleri</em> ve iklim gereksinimlerine göre özelleştirilmiştir. Hollanda&apos;nın zemin tipik konut mimarisine uygun genişlik ve yükseklik aralıkları önceden tanımlanmış kalıplarla üretilir.
                </p>
                <p>
                  Her üretim partisi, <u>bağımsız kalite ekibimiz</u> tarafından denetlenir. Boyut, renk, yüzey kalitesi ve mekanik dayanım; standartlaştırılmış test protokolüne tabi tutulur. Sertifikasyon kaydı sistematik şekilde arşivlenir.
                </p>
                <p>
                  Ar-Ge ekibimiz, her yıl <strong>en az iki yeni ürün sistemi</strong> geliştiriyor. Avrupa&apos;nın değişen enerji verimliliği mevzuatı, ürün portföyümüzü sürekli ileriye taşımamızı zorunlu kılıyor.
                </p>
              </div>
            ) : (
              <div className="space-y-5 text-base leading-relaxed" style={{ color: '#4a5a6a' }}>
                <p>
                  Elke technicus bij Fenetre Systems heeft gemiddeld <strong>8 jaar sectorervaring</strong>. De fabrieksinfrastructuur, bestaande uit CNC profielsnijmachines, laserbooreenheden en geautomatiseerde assemblagelijnen, biedt een capaciteit van meer dan 500 eenheden per dag.
                </p>
                <p>
                  Ontwerpen voor de Nederlandse markt zijn aangepast aan <em>lokale bouwregelgeving</em> en klimaateisen. Breedte- en hoogtebereiken passend bij de Nederlandse woningbouw worden geproduceerd met vooraf gedefinieerde matrijzen.
                </p>
                <p>
                  Elke productiepartij wordt gecontroleerd door <u>ons onafhankelijke kwaliteitsteam</u>. Maat, kleur, oppervlaktekwaliteit en mechanische sterkte worden onderworpen aan een gestandaardiseerd testprotocol.
                </p>
                <p>
                  Ons R&D-team ontwikkelt elk jaar <strong>minimaal twee nieuwe productsystemen</strong>. De veranderende Europese energieprestatienormen vereisen voortdurende innovatie in ons productportfolio.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-3xl p-8 shadow-sm border" style={{ borderColor: '#e8f0e8' }}>
              <h3 className="font-bold mb-6 text-base" style={{ color: '#404e5e' }}>
                {lang === 'tr' ? 'Uzmanlık Alanları' : 'Expertisegebieden'}
              </h3>
              <div className="space-y-5">
                {skills.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-medium mb-1.5" style={{ color: '#404e5e' }}>
                      <span>{s.label}</span>
                      <span style={{ color: '#83bd81' }}>{s.pct}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#e8f0e8' }}>
                      <div className="h-full rounded-full" style={{ width: `${s.pct}%`, backgroundColor: '#83bd81' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {(lang === 'tr' ? [
                { num: '500+', label: 'Günlük Üretim Kapasitesi' },
                { num: '15+', label: 'Yıllık Üretim Deneyimi' },
                { num: '12', label: 'NL Eyaletine Teslimat' },
                { num: '7', label: 'Farklı Ürün Kategorisi' },
              ] : [
                { num: '500+', label: 'Dagelijkse Productiecapaciteit' },
                { num: '15+', label: 'Jaar Productie-ervaring' },
                { num: '12', label: 'NL Provincies Geleverd' },
                { num: '7', label: 'Productcategorieën' },
              ]).map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-sm border" style={{ borderColor: '#e8f0e8' }}>
                  <div className="text-3xl font-black mb-1" style={{ color: '#83bd81' }}>{s.num}</div>
                  <div className="text-xs font-medium" style={{ color: '#404e5e' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
