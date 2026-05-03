'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function ProductQuality() {
  const { lang } = useLanguage()

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#f0f7f0', color: '#404e5e' }}>
            {lang === 'tr' ? 'Malzeme Kalitesi' : 'Materiaalkwaliteit'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            {lang === 'tr' ? (
              <>
                <a href="/" style={{ color: '#83bd81' }} className="hover:underline">Sineklik</a> Sistemlerinde{' '}
                Kullanılan Malzemeler
              </>
            ) : (
              <>Gebruikte <span style={{ color: '#83bd81' }}>Materialen</span> in Onze Systemen</>
            )}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
          <div>
            {lang === 'tr' ? (
              <div className="space-y-5 text-base leading-relaxed" style={{ color: '#4a5a6a' }}>
                <p>
                  Üretimimizde kullanılan tüm alüminyum profiller, <strong>6063 T5 alüminyum alaşımından</strong> elde edilir. Bu alaşım; düşük özgül ağırlığı, yüksek korozyon direnci ve mükemmel yüzey kaplama özelliğiyle perde ve sineklik kasası yapımında dünya standardını temsil eder.
                </p>
                <p>
                  Eloksal kaplama işlemi, profilin yüzeyine <em>7-10 mikron kalınlığında</em> oksit tabakası kazandırır. Bu tabaka; Hollanda&apos;nın nem oranı yüksek ikliminde yıllarca görünümünü ve sağlamlığını korur. Renk boyanmış seçeneklerde elektrostatik toz boya yöntemi kullanılır.
                </p>
                <p>
                  Sineklik ağlarında <u>fiberglas veya polyester örgü</u> tercih edilir. Fiberglas ağ; 18×16 mesh yapısıyla küçük böceklere karşı tam bariyer sunar. Polyester ağ ise daha yüksek hava geçirgenliği gerektiren bölgeler için idealdir.
                </p>
                <p>
                  Perde kumaşlarında kullanılan tüm iplikler <strong>Oeko-Tex Standard 100</strong> sertifikasına sahiptir. Bu sertifika; kimyasal kalıntı, ağır metal ve zararlı madde içermediğini doğrular. Bebek ve çocuk odaları dahil tüm alanlarda güvenle kullanılabilir.
                </p>
              </div>
            ) : (
              <div className="space-y-5 text-base leading-relaxed" style={{ color: '#4a5a6a' }}>
                <p>
                  Alle aluminium profielen in onze productie zijn vervaardigd van <strong>6063 T5 aluminiumlegering</strong>. Deze legering vertegenwoordigt de wereldstandaard voor raamdecoratie en vliegenschermen dankzij lage soortelijke massa, hoge corrosieweerstand en uitstekende oppervlaktebehandeling.
                </p>
                <p>
                  Het anodiseerproces geeft het oppervlak een <em>7 tot 10 micron dikke</em> oxidelaag. Deze laag behoudt zijn uiterlijk en sterkte jarenlang in het vochtige Nederlandse klimaat. Kleurgeschilderde opties gebruiken elektrostatische poederlak.
                </p>
                <p>
                  Voor vliegenschermnetten wordt <u>glasvezel of polyester weefsel</u> gebruikt. Glasvezelnet met 18×16 mesh biedt een complete barrière tegen kleine insecten. Polyesternet is ideaal voor gebieden die meer luchtdoorstroming vereisen.
                </p>
                <p>
                  Alle garens in gordijnstoffen hebben het <strong>Oeko-Tex Standard 100</strong>-certificaat. Dit certificaat bevestigt de afwezigheid van chemische residuen, zware metalen en schadelijke stoffen. Veilig te gebruiken in alle ruimtes, inclusief baby- en kinderkamers.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 shadow-sm border" style={{ borderColor: '#e8f0e8' }}>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: '#83bd81' }}>
                {lang === 'tr' ? 'Malzeme Teknik Tablosu' : 'Technische Materiaaltabel'}
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: '#f0f7f0' }}>
                    <th className="text-left py-2 px-3 font-semibold rounded-l-lg" style={{ color: '#404e5e' }}>
                      {lang === 'tr' ? 'Malzeme' : 'Materiaal'}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold" style={{ color: '#404e5e' }}>
                      {lang === 'tr' ? 'Standart' : 'Norm'}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold rounded-r-lg" style={{ color: '#404e5e' }}>
                      {lang === 'tr' ? 'Özellik' : 'Eigenschap'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(lang === 'tr' ? [
                    ['Alüminyum Profil', 'EN 755 / 6063 T5', 'Korozyon dayanımlı'],
                    ['Eloksal Kaplama', '7-10 µm oksit', 'Uzun ömürlü yüzey'],
                    ['Toz Boya', 'RAL / NCS renk', 'Elektrostatik uygulama'],
                    ['Fiberglas Ağ', '18×16 Mesh', 'Böcek geçirmez'],
                    ['Polyester Ağ', '20×20 Mesh', 'Yüksek hava geçişi'],
                    ['Perde Kumaşı', 'Oeko-Tex 100', 'Kimyasal sertifikalı'],
                    ['PVC Zip Şerit', 'UV dayanımlı', 'Rüzgar sertifikalı'],
                  ] : [
                    ['Aluminiumprofiel', 'EN 755 / 6063 T5', 'Corrosiebestendig'],
                    ['Anodisering', '7-10 µm oxide', 'Langdurig oppervlak'],
                    ['Poedercoating', 'RAL / NCS kleur', 'Elektrostatische applicatie'],
                    ['Glasvezelnet', '18×16 Mesh', 'Insectenwerend'],
                    ['Polyesternet', '20×20 Mesh', 'Hoge luchtdoorstroming'],
                    ['Gordijnstof', 'Oeko-Tex 100', 'Chemisch gecertificeerd'],
                    ['PVC Zip Rits', 'UV-bestendig', 'Windlastgecertificeerd'],
                  ]).map(([mat, norm, prop], i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'white' : '#f7faf7' }}>
                      <td className="py-2.5 px-3 font-medium" style={{ color: '#404e5e' }}>{mat}</td>
                      <td className="py-2.5 px-3" style={{ color: '#5a6a7a' }}>{norm}</td>
                      <td className="py-2.5 px-3" style={{ color: '#83bd81' }}>{prop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {(lang === 'tr' ? [
                { label: 'EN 755', desc: 'Alüminyum profil normu' },
                { label: 'Oeko-Tex', desc: 'Kumaş sertifikası' },
                { label: '0,5mm', desc: 'Max tolerans' },
                { label: 'ISO 9001', desc: 'Kalite yönetim' },
              ] : [
                { label: 'EN 755', desc: 'Aluminium profielnorm' },
                { label: 'Oeko-Tex', desc: 'Stofcertificaat' },
                { label: '0,5mm', desc: 'Max tolerantie' },
                { label: 'ISO 9001', desc: 'Kwaliteitsbeheer' },
              ]).map((cert, i) => (
                <div key={i} className="text-center p-4 rounded-xl border" style={{ backgroundColor: '#f7faf7', borderColor: '#e8f0e8' }}>
                  <div className="font-extrabold text-xl mb-1" style={{ color: '#83bd81' }}>{cert.label}</div>
                  <div className="text-xs" style={{ color: '#5a6a7a' }}>{cert.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
