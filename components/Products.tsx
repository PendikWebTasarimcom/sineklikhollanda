'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const products = {
  tr: [
    {
      id: 1,
      icon: '🪟',
      name: 'Sineklik',
      tag: 'Sabit Çerçeve',
      tagColor: '#83bd81',
      desc: `Pencerenin kasasına tam oturan <strong>sabit çerçeveli sineklik</strong>, yılın her mevsiminde böcek ve sinek geçişini kesinlikle engeller. Kocaeli fabrikamızda işlenen <em>6063 T5 alüminyum profil</em>, nem ve korozyona karşı dayanıklıdır. Fiberglas dokulu ağ yapısı, hava akışını %85 oranında korur. Hollanda'nın nem oranı yüksek ikliminde <u>paslanmaz yapısı</u> özellikle değer kazanır. Her pencere ölçüsüne göre üretilir; standart dışı boyutlar da kabul edilir.`,
      features: [
        'Özel ölçüde alüminyum profil çerçeve',
        'Fiberglas veya polyester ağ seçeneği',
        'Korozyon dayanımlı eloksal kaplama',
        'Kolay takıp çıkarma mekanizması',
        'Geniş renk skalası',
      ],
      table: [
        ['Profil Malzeme', '6063 T5 Alüminyum'],
        ['Ağ Tipi', 'Fiberglas / Polyester'],
        ['Max. Genişlik', '1600 mm'],
        ['Max. Yükseklik', '2000 mm'],
        ['Kaplama', 'Eloksal / Boya'],
      ],
    },
    {
      id: 2,
      icon: '🔄',
      name: 'Plise Sineklik',
      tag: 'Katlanabilir',
      tagColor: '#404e5e',
      desc: `Kapı açıklıkları ve geniş sürme pencereler için tasarlanan <strong>plise sineklik</strong>, akordeon katlama sistemiyle kullanmadığınız anlarda görünmez hale gelir. İnce polyester ağ örgüsü, böceklere karşı tam bariyer oluştururken pencere görüntüsünü <em>bozmaz</em>. Hollanda'da yaygın kullanılan balkon kapılarına mükemmel uyum sağlar. <u>Çift kanat seçeneği</u> geniş açıklıklarda büyük kolaylık yaratır. Profil kalınlığı 20 mm ile minimal estetik sunar.`,
      features: [
        'Akordeon katlama sistemi',
        'Çift ve tek kanat seçeneği',
        '18 × 16 mesh polyester ağ',
        'Yumuşak kapanma freni',
        'Balkon kapılarına uyumlu',
      ],
      table: [
        ['Profil Kalınlığı', '20 mm'],
        ['Ağ Mesh', '18×16 Polyester'],
        ['Max. Genişlik', '2400 mm (çift)'],
        ['Max. Yükseklik', '2500 mm'],
        ['Kanat', 'Tek / Çift'],
      ],
    },
    {
      id: 3,
      icon: '🌿',
      name: 'Plise Perde',
      tag: 'Işık Kontrolü',
      tagColor: '#83bd81',
      desc: `İnce alüminyum lamellerden değil; <strong>özel katlanmış kumaş yapısından</strong> oluşan plise perde, gün ışığını kademeli biçimde filtreler. Hollanda'nın sık bulutlu ve değişken havasında <em>ışık yönetimi</em> kritik önem taşır. Şeffaf, yarı opak ve tam opak kumaş seçenekleri mevcuttur. Balkon ve kış bahçesi camlarında <u>ısı yalıtımına</u> katkı sağlar. Kumaş genişliği değişmediğinden mekanizma sessiz çalışır ve uzun ömürlüdür.`,
      features: [
        'Üç farklı opaklık seçeneği',
        'UV dayanımlı polyester kumaş',
        'Isı yalıtımlı honeycomb varyant',
        "50'den fazla renk paleti",
        'Üst-alt iki yönlü kullanım',
      ],
      table: [
        ['Kumaş Tipi', 'Polyester / Honeycomb'],
        ['Opaklık', 'Şeffaf / Yarı / Tam'],
        ['Max. Genişlik', '3000 mm'],
        ['Max. Yükseklik', '3000 mm'],
        ['Katlama Adımı', '20 / 25 / 35 mm'],
      ],
    },
    {
      id: 4,
      icon: '🏢',
      name: 'Jaluzi Perde',
      tag: 'Klasik & Dayanıklı',
      tagColor: '#404e5e',
      desc: `Yatay alüminyum lamellerden oluşan <strong>jaluzi perde</strong>, ışık açısını 0° ile 180° arasında milimetrik biçimde ayarlar. Hollanda ofis ve çalışma mekânlarının vazgeçilmez aksesuarı haline gelmiştir. <em>25 mm ve 50 mm</em> lamel genişliği seçenekleri, farklı pencere boyutlarına uyum sağlar. Alüminyum yapısı; nem, güneş ve mekanik darbelere karşı yıllar boyu sağlam kalır. <u>Motorlu kontrol seçeneği</u> de üretim kapsamında sunulmaktadır.`,
      features: [
        '25 mm ve 50 mm lamel seçeneği',
        'Sonsuz açılı ışık kontrolü',
        '90 renk seçeneği RAL paleti',
        'Manuel veya motorlu kullanım',
        'Anti-statik lamel kaplama',
      ],
      table: [
        ['Lamel Genişliği', '25 mm / 50 mm'],
        ['Malzeme', 'Alüminyum'],
        ['Açı Aralığı', '0° – 180°'],
        ['Max. Genişlik', '3500 mm'],
        ['Max. Yükseklik', '3000 mm'],
      ],
    },
    {
      id: 5,
      icon: '🌗',
      name: 'Düet Perde',
      tag: 'Gece & Gündüz',
      tagColor: '#83bd81',
      desc: `Şeffaf ve opak kumaş şeritlerini üst üste bindirerek farklı ışık geçirgenliği yaratan <strong>düet perde</strong>, modern iç mekân tasarımlarının favori ürünü haline gelmiştir. Tek bir mekanizma; gün içindeki huzurlu ışığı, gece saatlerindeki tam mahremiyeti karşılar. <em>Minimalist kasası</em> 35 mm ile neredeyse görünmezdir. Hollanda'nın uzun yaz gündüzlerinde <u>parlak ışık kontrolü</u> için tercih edilen ilk üründür.`,
      features: [
        'Çift katmanlı şeffaf ve opak şerit',
        'Sonsuz ara konum ayarı',
        '35 mm ince kasa profili',
        'Zincirli veya motorlu seçenek',
        "200'den fazla renk kombinasyonu",
      ],
      table: [
        ['Kasa Genişliği', '35 mm'],
        ['Kumaş', 'Polyester / Polyuretan'],
        ['Katman', 'Çift (Şeffaf + Opak)'],
        ['Max. Genişlik', '3000 mm'],
        ['Kontrol', 'Zincir / Motor'],
      ],
    },
    {
      id: 6,
      icon: '🍯',
      name: 'Honeycomb Perde',
      tag: 'Enerji Tasarrufu',
      tagColor: '#404e5e',
      desc: `Hava hapsetme prensibiyle çalışan <strong>petek hücreli yapısı</strong>, soğuk Hollanda kışlarında pencere yüzeyinden kaynaklanan ısı kaybını %30'a kadar azaltır. Yaz aylarında ise içeri giren sıcak güneş radyasyonunu süzer; klima tüketimini düşürür. <em>Tek, çift ve üçlü katman</em> seçenekleri, farklı iklim bölgeleri için ayrı çözümler sunar. <u>Avrupa enerji verimliliği direktiflerine</u> uyumlu üretim teknolojisi kullanılmaktadır.`,
      features: [
        'Tek / çift / üçlü hücre seçeneği',
        'R-değeri artırıcı yapı',
        'Ses yalıtımı katkısı',
        'Top-down/bottom-up kullanım',
        'Güneş ışığı filtresi',
      ],
      table: [
        ['Hücre Tipi', 'Tek / Çift / Üçlü'],
        ['Hücre Boyutu', '25 mm / 38 mm'],
        ['Malzeme', 'Polyester dokuma'],
        ['R Değeri', '1,7 – 3,5 (çift)'],
        ['Max. Genişlik', '3000 mm'],
      ],
    },
    {
      id: 7,
      icon: '🌬️',
      name: 'Zip Perde',
      tag: 'Rüzgar Dayanımlı',
      tagColor: '#83bd81',
      desc: `Yan kanallarına kilitlenip kilitlenen zipli mekanizmasıyla rüzgar, böcek ve güneş ışığına karşı <strong>sıfır boşluk</strong> sunan zip perde, Hollanda kıyı bölgelerinin hırçın rüzgarlarına meydan okur. <em>Güçlü alüminyum kanal profili</em> ve UV dayanımlı PVC zip şerit, yıllarca biçimini korur. 300 km/s rüzgar yükü testinden geçmiş malzemeleri kullanıyoruz. <u>Elektrikli motor seçeneği</u> büyük açıklıklarda konforu ikiye katlar. Teras ve veranda kapatmada endüstriyel standart sunar.`,
      features: [
        'Kanal kilitlenmeli zip sistem',
        'Rüzgar yükü sertifikalı profil',
        'UV/PVC dayanımlı kumaş',
        'Elektrikli motor opsiyonu',
        'Teras, veranda, balkon uyumu',
      ],
      table: [
        ['Sistem', 'Zip Kanal Kilitli'],
        ['Profil', 'Anodize Alüminyum'],
        ['Kumaş', 'PVC Fiber / Solar'],
        ['Rüzgar Yükü', '300 km/s Test'],
        ['Kontrol', 'Manuel / Motor'],
      ],
    },
  ],
  nl: [
    {
      id: 1,
      icon: '🪟',
      name: 'Vliegenscherm',
      tag: 'Vast Kozijn',
      tagColor: '#83bd81',
      desc: `Het <strong>vaste kozijn vliegenscherm</strong> sluit naadloos aan op uw raamkozijn en houdt insecten het hele jaar buiten. Het <em>6063 T5 aluminium profiel</em> uit onze fabriek in Kocaeli is bestand tegen vocht en corrosie. Het glasvezel gaas behoudt 85% luchtdoorstroming. In het vochtige Nederlandse klimaat is de <u>roestvrije constructie</u> extra waardevol. Elk raam op maat gemaakt; ook niet-standaard afmetingen zijn mogelijk.`,
      features: [
        'Maatwerk aluminium profielkozijn',
        'Glasvezel of polyester gaas',
        'Corrosiebestendige anodisering',
        'Eenvoudig in- en uitklikbaar',
        'Ruim kleurenaanbod',
      ],
      table: [
        ['Profielmateriaal', '6063 T5 Aluminium'],
        ['Gaastype', 'Glasvezel / Polyester'],
        ['Max. Breedte', '1600 mm'],
        ['Max. Hoogte', '2000 mm'],
        ['Afwerking', 'Anodisering / Lak'],
      ],
    },
    {
      id: 2,
      icon: '🔄',
      name: 'Plissé Vliegenscherm',
      tag: 'Inklapbaar',
      tagColor: '#404e5e',
      desc: `Het <strong>plissé vliegenscherm</strong> is ontworpen voor deuren en brede schuiframen. Het harmonicavouwen maakt het scherm onzichtbaar wanneer u het niet gebruikt. Het dunne polyester gaas vormt een complete barrière tegen insecten zonder het <em>uitzicht te belemmeren</em>. Past perfect op de balkondeurendie veelgebruikt worden in Nederland. De <u>dubbelvleugel optie</u> is ideaal voor grote openingen. Het 20 mm profielbiedt minimale esthetiek.`,
      features: [
        'Harmonica vouwsysteem',
        'Enkel- en dubbelvleugel optie',
        '18×16 mesh polyester gaas',
        'Zachte sluitingsrem',
        'Geschikt voor balkondeur',
      ],
      table: [
        ['Profieldikte', '20 mm'],
        ['Gaas Mesh', '18×16 Polyester'],
        ['Max. Breedte', '2400 mm (dubbel)'],
        ['Max. Hoogte', '2500 mm'],
        ['Vleugels', 'Enkel / Dubbel'],
      ],
    },
    {
      id: 3,
      icon: '🌿',
      name: 'Plissé Gordijn',
      tag: 'Lichtregeling',
      tagColor: '#83bd81',
      desc: `Het <strong>plissé gordijn</strong> is gemaakt van speciaal gevouwen stof die daglicht gefilterd doorlaat. In het wisselvallige Nederlandse klimaat is <em>lichtbeheer</em> cruciaal. Er zijn doorschijnende, semi-opake en volledig verduisterende stoffen beschikbaar. Bijdrage aan <u>warmte-isolatie</u> bij balkon- en serre beglazing. Het mechanisme werkt stil en heeft een lange levensduur dankzij de stabiele stofbreedte.`,
      features: [
        'Drie opaakheidsniveaus',
        'UV-bestendig polyesterweefsel',
        'Warmte-isolerend honingraat variant',
        'Meer dan 50 kleuropties',
        'Boven-beneden bediening',
      ],
      table: [
        ['Stoftype', 'Polyester / Honingraat'],
        ['Opaakheid', 'Transparant / Half / Vol'],
        ['Max. Breedte', '3000 mm'],
        ['Max. Hoogte', '3000 mm'],
        ['Vouwhoogte', '20 / 25 / 35 mm'],
      ],
    },
    {
      id: 4,
      icon: '🏢',
      name: 'Jaloezie',
      tag: 'Klassiek & Duurzaam',
      tagColor: '#404e5e',
      desc: `De <strong>horizontale aluminium jaloezie</strong> regelt de lichtinval tot op de millimeter nauwkeurig, van 0° tot 180°. Een onmisbaar accessoire geworden in Nederlandse kantoren en werkruimtes. <em>25 mm en 50 mm</em> lamelbreedtes passen bij elk raamformaat. Het aluminium frame blijft jarenlang bestand tegen vocht, zon en mechanische invloeden. De <u>gemotoriseerde bediening</u> is ook beschikbaar in ons productieaanbod.`,
      features: [
        '25 mm en 50 mm lamelkeuze',
        'Oneindig verstelbare lichthoek',
        '90 kleuren RAL palet',
        'Handmatig of gemotoriseerd',
        'Antistatische lamelcoating',
      ],
      table: [
        ['Lamelbreedte', '25 mm / 50 mm'],
        ['Materiaal', 'Aluminium'],
        ['Hoekbereik', '0° – 180°'],
        ['Max. Breedte', '3500 mm'],
        ['Max. Hoogte', '3000 mm'],
      ],
    },
    {
      id: 5,
      icon: '🌗',
      name: 'Duo Rolgordijn',
      tag: 'Dag & Nacht',
      tagColor: '#83bd81',
      desc: `Het <strong>duo rolgordijn</strong> combineert doorzichtige en ondoorzichtige stroken voor variabele lichtdoorlatendheid. Eén mechanisme biedt overdag rustgevend licht en 's nachts volledige privacy. De <em>slanke kast van 35 mm</em> is vrijwel onzichtbaar. Tijdens de lange zomerdagen in Nederland is dit de <u>eerste keuze voor helderlichtregeling</u>. Beschikbaar in meer dan 200 kleurencombinaties.`,
      features: [
        'Dubbele laag transparant en opak',
        'Oneindig veel tussenposities',
        '35 mm smal kastprofiel',
        'Ketting of motorisch bediend',
        'Meer dan 200 kleurcombinaties',
      ],
      table: [
        ['Kastbreedte', '35 mm'],
        ['Stof', 'Polyester / Polyurethaan'],
        ['Lagen', 'Dubbel (Trans. + Opak)'],
        ['Max. Breedte', '3000 mm'],
        ['Bediening', 'Ketting / Motor'],
      ],
    },
    {
      id: 6,
      icon: '🍯',
      name: 'Honingraat Gordijn',
      tag: 'Energiebesparing',
      tagColor: '#404e5e',
      desc: `De <strong>cellenstructuur</strong> werkt als luchtkussen en vermindert warmteverlies via het raamoppervlak met wel 30% in koude Nederlandse winters. In de zomer filtert het binnenkomende zonnestraling en verlaagt de airco-verbruik. <em>Enkel-, dubbel- en drievoudige cellagen</em> bieden oplossingen voor diverse klimaatzones. Geproduceerd met technologie die voldoet aan de <u>Europese energie-efficiëntierichtlijnen</u>.`,
      features: [
        'Enkel / dubbel / drievoudige cel',
        'R-waarde verbeterende structuur',
        'Geluidsisolatietoevoeging',
        'Top-down/bottom-up bediening',
        'Zonlichfilter',
      ],
      table: [
        ['Celtype', 'Enkel / Dubbel / Drievoudig'],
        ['Celgrootte', '25 mm / 38 mm'],
        ['Materiaal', 'Polyester weefsel'],
        ['R-waarde', '1,7 – 3,5 (dubbel)'],
        ['Max. Breedte', '3000 mm'],
      ],
    },
    {
      id: 7,
      icon: '🌬️',
      name: 'Zip Screen',
      tag: 'Windbestendig',
      tagColor: '#83bd81',
      desc: `De zipvergrendeling in de zijkanaaltjes biedt <strong>nul spleet</strong> bescherming tegen wind, insecten en zonlicht — ideaal voor de ruige kustwind in Nederland. Het <em>robuuste aluminium kanaal</em> en de UV-bestendige PVC-rits houden hun vorm jarenlang. De materialen zijn getest op een windlast van 300 km/u. De <u>elektrische motoroptie</u> verdubbelt het comfort bij grote openingen. Industriestandaard voor terras- en verandabeglazing.`,
      features: [
        'Kanaalgrendel zip-systeem',
        'Windlast gecertificeerd profiel',
        'UV/PVC-bestendig doek',
        'Elektromotor optioneel',
        'Terras, veranda, balkon',
      ],
      table: [
        ['Systeem', 'Zip kanaalvergrendeling'],
        ['Profiel', 'Geanodiseerd Aluminium'],
        ['Doek', 'PVC Fiber / Solar'],
        ['Windlasttest', '300 km/u'],
        ['Bediening', 'Handmatig / Motor'],
      ],
    },
  ],
}

export default function Products() {
  const { lang } = useLanguage()
  const [activeTab, setActiveTab] = useState(0)
  const list = products[lang]
  const active = list[activeTab]

  return (
    <section id="urunler" className="py-20 lg:py-28" style={{ backgroundColor: '#f7faf7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#e8f5e8', color: '#404e5e' }}>
            {lang === 'tr' ? '7 Farklı Sistem' : '7 Productsystemen'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            {lang === 'tr' ? (
              <>
                <a href="/" className="hover:underline" style={{ color: '#83bd81' }}>Sineklik Hollanda</a>{' '}
                Ürün Ailemiz
              </>
            ) : (
              <>Ons <span style={{ color: '#83bd81' }}>Productaanbod</span> voor Nederland</>
            )}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5a6a7a' }}>
            {lang === 'tr'
              ? 'Her pencere türü ve kullanım amacı için özel olarak tasarlanmış yedi farklı sistem. Tamamı Türkiye\'de üretilip Hollanda\'ya gönderilir.'
              : 'Zeven systemen, elk speciaal ontworpen voor een bepaald raamtype en gebruiksdoel. Allemaal geproduceerd in Turkije en geleverd in Nederland.'}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {list.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === i ? 'text-white shadow-md' : 'bg-white border text-gray-600 hover:border-[#83bd81]'
              }`}
              style={activeTab === i ? { backgroundColor: '#404e5e' } : { borderColor: '#e0e0e0' }}
            >
              {p.icon} {p.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-3xl shadow-sm border p-8 lg:p-10" style={{ borderColor: '#e8f0e8' }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{active.icon}</span>
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-1 text-white"
                  style={{ backgroundColor: active.tagColor }}>
                  {active.tag}
                </span>
                <h3 className="text-2xl font-extrabold" style={{ color: '#404e5e' }}>{active.name}</h3>
              </div>
            </div>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: '#4a5a6a' }}
              dangerouslySetInnerHTML={{ __html: active.desc }}
            />
            <h4 className="font-bold mb-3 text-sm uppercase tracking-wide" style={{ color: '#83bd81' }}>
              {lang === 'tr' ? 'Özellikler' : 'Kenmerken'}
            </h4>
            <ul className="space-y-2">
              {active.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#404e5e' }}>
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: '#83bd81' }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-white rounded-3xl shadow-sm border p-8 mb-6" style={{ borderColor: '#e8f0e8' }}>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wide" style={{ color: '#83bd81' }}>
                {lang === 'tr' ? 'Teknik Özellikler' : 'Technische Specificaties'}
              </h4>
              <table className="w-full text-sm">
                <tbody>
                  {active.table.map(([key, val], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="py-2.5 px-3 font-semibold rounded-l-lg" style={{ color: '#404e5e' }}>{key}</td>
                      <td className="py-2.5 px-3 rounded-r-lg" style={{ color: '#5a6a7a' }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a
              href="https://wa.me/905403363873"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-white font-bold text-base transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: '#25d366' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {lang === 'tr' ? `${active.name} için Fiyat Sorun` : `Offerte aanvragen voor ${active.name}`}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
