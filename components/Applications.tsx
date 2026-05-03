'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Applications() {
  const { lang } = useLanguage()

  const apps = lang === 'tr' ? [
    { icon: '🏠', title: 'Konut Pencereleri', desc: 'Hollanda\'nın tipik geniş pencereli ev mimarisine uygun sabit ve plise sineklik çözümleri. Amsterdam kanalı boyundaki dar rowhouses\'dan Eindhoven\'in modern evlerine kadar.' },
    { icon: '🏢', title: 'Ofis ve Ticari Alanlar', desc: 'Büyük cam yüzeyli modern ofisler için jaluzi ve zip perde sistemleri. Güneş kontrolü ve mahremiyet bir arada. Den Haag\'ın idari binalarına, Rotterdam liman bölgesi ofislerine özel çözümler.' },
    { icon: '🌿', title: 'Balkon ve Teras', desc: 'Hollanda\'nın değişken havasına karşı teras ve balkon kapatma için zip perde. Zeeland kıyılarından Maastricht bahçelerine kadar rüzgara, yağmura ve güneşe karşı tam koruma.' },
    { icon: '🌸', title: 'Kış Bahçesi', desc: 'Cam çatılı kış bahçelerinde honeycomb ve plise perde kullanımı. Sıcaklık dalgalanmalarını önler. Utrecht ve Gelderland\'ın bahçeli evlerinde yaygın tercih.' },
    { icon: '🏨', title: 'Otel ve Kiralık Konut', desc: 'Tüm Hollanda\'da yaygınlaşan kiralık konut ve Airbnb\'lerde estetik ve pratik perde çözümleri. Uzun ömürlü yapısı, bakım masrafını minimuma indirir.' },
    { icon: '🔬', title: 'Sağlık Tesisleri', desc: 'Hastane ve klinik pencereleri için beyaj ve bej tonlarında jaluzi ve düet perde. Hijyenik yüzey özellikleri, temizliği kolaylaştırır.' },
  ] : [
    { icon: '🏠', title: 'Woningramen', desc: 'Vaste en plissé vliegenschermen voor de typisch brede ramen van Nederlandse woningen. Van de smalle rowhouses langs Amsterdamse grachten tot moderne huizen in Eindhoven.' },
    { icon: '🏢', title: 'Kantoor en Commercieel', desc: 'Jaloezie en zip screens voor moderne kantoren met grote glasoppervlakken. Zonwering en privacy gecombineerd. Speciale oplossingen voor kantoorgebouwen in Den Haag en havengebieden Rotterdam.' },
    { icon: '🌿', title: 'Balkon en Terras', desc: 'Zip screens voor terras en balkonafsluiting tegen het wisselvallige Nederlandse weer. Van Zeelandse kustgebieden tot tuinen in Maastricht — bescherming tegen wind, regen en zon.' },
    { icon: '🌸', title: 'Serre', desc: 'Honingraat en plissé gordijnen in serres met glazen dak. Voorkomt temperatuurschommelingen. Populaire keuze in tuinhuizen van Utrecht en Gelderland.' },
    { icon: '🏨', title: 'Hotel en Huurwoning', desc: 'Esthetische en praktische gordijnoplossingen voor huurwoningen en Airbnb\'s in heel Nederland. Lange levensduur minimaliseert onderhoudskosten.' },
    { icon: '🔬', title: 'Zorginstellingen', desc: 'Jaloezieën en duo rolgordijnen in witte en beige tinten voor ziekenhuizen en klinieken. Hygiënische oppervlakken vergemakkelijken reiniging.' },
  ]

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#f7faf7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#e8f5e8', color: '#404e5e' }}>
            {lang === 'tr' ? 'Kullanım Alanları' : 'Toepassingsgebieden'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            {lang === 'tr' ? (
              <>
                <a href="/" style={{ color: '#83bd81' }} className="hover:underline">Plise Sineklik</a> Nereden Kullanılır?
              </>
            ) : (
              <>Waar Worden <span style={{ color: '#83bd81' }}>Onze Producten</span> Gebruikt?</>
            )}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5a6a7a' }}>
            {lang === 'tr'
              ? 'Konut, ofis, sağlık ve ticari alanlarda farklı ihtiyaçlara özel çözümler üretiyoruz.'
              : 'Voor woning, kantoor, zorg en commerciële ruimtes bieden wij oplossingen op maat.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ borderColor: '#e8f0e8' }}>
              <div className="text-3xl mb-4">{app.icon}</div>
              <h3 className="font-bold mb-2" style={{ color: '#404e5e' }}>{app.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5a6a7a' }}>{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
