'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const faqData = {
  tr: [
    {
      q: 'Hollanda\'ya teslimat süresi tam olarak ne kadardır?',
      a: 'Sipariş onayından itibaren ortalama 7 iş günü içinde Hollanda adresinize teslim edilir. En kısa süre 4 iş günü, en uzun süre ise 10 iş günüdür. Yoğunluk durumlarında bu süre kısaca uzayabilir; sipariş esnasında güncel bilgi verilir.',
    },
    {
      q: 'Ürünler demonte mi gönderilir, monte mi?',
      a: 'Tüm ürünler demonte ve parça parça paketlenerek gönderilir. Her paket içinde Türkçe ve İngilizce adım adım montaj kılavuzu, gerekli vidalar ve plastik dübeller yer alır. Standart el aletleri yeterlidir; özel alet gerekmez.',
    },
    {
      q: 'Ölçü nasıl alınır, hatalı ölçü gönderirsem ne olur?',
      a: 'Sipariş öncesi teknik ekibimiz ölçü alma konusunda WhatsApp üzerinden rehberlik eder. Pencere boşluğunun genişlik ve yükseklik ölçüleri milimetre hassasiyetiyle paylaşılır. Müşteri kaynaklı ölçü hatalarında yeniden üretim yapılır; bu durumda maliyetin %50\'si müşteriye yansır.',
    },
    {
      q: 'Özel ölçü kabul ediliyor mu?',
      a: 'Evet, her türlü özel ölçü siparişi kabul edilmektedir. Minimum 300×300 mm\'den maksimum 3500×3000 mm\'ye kadar üretim gerçekleştirilir. Eğimli çatı pencereleri ve köşe açılımlı kasalar için de çözüm sunulmaktadır.',
    },
    {
      q: 'Hangi ödeme yöntemleri kabul edilmektedir?',
      a: 'Uluslararası banka havalesi (IBAN), Wise transferi ve PayPal ile ödeme kabul edilir. Tüm işlemler için e-posta fatura düzenlenmektedir. Ödeme onayının alınmasından sonra üretim başlatılır.',
    },
    {
      q: 'Gümrük vergisi ödeyecek miyim?',
      a: 'Hollanda\'ya yapılan gönderimler, Türkiye-AB ticari akışı kapsamında değerlendirilir. Ürünler CN kodlarıyla doğru etiketlenir; nakliye firması gümrük belgelerini hazırlar. Değere bağlı olarak küçük siparişlerde gümrük vergisi çıkmayabilir. Büyük siparişlerde %6,5 ila %12 arasında ithalat vergisi ödenebilir.',
    },
    {
      q: 'Ürün garantisi var mıdır?',
      a: 'Alüminyum profil ve mekanik aksam için 2 yıl üretim hatası garantisi verilmektedir. Kumaş ve ağ malzemeleri için 1 yıl garanti geçerlidir. Mekanik hasar ve yanlış kullanımdan kaynaklanan sorunlar garanti kapsamı dışındadır.',
    },
    {
      q: 'Renk seçenekleri nelerdir?',
      a: 'Alüminyum profiller için 60\'tan fazla RAL kodu mevcuttur. En çok tercih edilenler: RAL 9016 beyaz, RAL 7016 antrasit ve RAL 8014 sepya kahvedirdir. Kumaşlar için 50\'den fazla renk ve doku seçeneği bulunmaktadır. Renk nümunesi gönderilebilir.',
    },
    {
      q: 'Numune veya katalog gönderiliyor mu?',
      a: 'Evet, talep üzerine fiziksel renk ve kumaş numunesi kargolanmaktadır. Kargo ücreti alıcıya aittir. Dijital katalog ise info@fenetresystems.com adresine gönderilen talep doğrultusunda hemen paylaşılır.',
    },
    {
      q: 'Kargo takibi nasıl yapılır?',
      a: 'Ürün sevk edildiğinde takip numarası WhatsApp ve e-posta ile anında bildirilir. DHL, UPS veya FedEx üzerinden gönderim gerçekleşir; takip sayfası üzerinden canlı konum izlenebilir.',
    },
    {
      q: 'Kurulum için profesyonele ihtiyaç var mı?',
      a: 'Hayır. Sabit çerçeveli sineklik ve plise sistemler yaklaşık 30-45 dakika içinde tek kişi tarafından monte edilebilir. Paket içindeki görsel kılavuz yeterlidir. Çok büyük boyutlu veya motorlu sistemler için yerel bir teknik servis tercih edilebilir.',
    },
    {
      q: 'Ürün hasarlı gelirse ne yapılır?',
      a: 'Kargo hasarı tespit edilirse teslim sırasında kurye firmasına tutanak tutturulur, fotoğraflarla birlikte WhatsApp\'tan bildirim yapılır. Hasar teyit edildiğinde ücretsiz yeniden üretim ve kargo gerçekleştirilir.',
    },
    {
      q: 'Zip perde ile plise sineklik arasındaki fark nedir?',
      a: 'Plise sineklik; böcek ve sinek engelleme amacıyla kullanılır, ışık ve hava geçirgenliği yüksektir. Zip perde ise hem böcek hem güneş hem de rüzgar engelidir; daha sağlam yapıdadır ve teras gibi açık alanlarda kullanılır. İki sistem farklı ihtiyaçlara yanıt verir.',
    },
    {
      q: 'Honeycomb perde gerçekten enerji tasarrufu sağlar mı?',
      a: 'Evet. Bağımsız testlere göre çift hücreli honeycomb perde, pencere kaynaklı ısı kaybını %25-30 oranında azaltır. Bu sonuç, Hollanda\'nın soğuk kış aylarında gözle görülür ısıtma maliyeti düşüşü anlamına gelir. Enerji performansı belgesi talep üzerine sunulabilir.',
    },
    {
      q: 'Bayilik almak mümkün mü?',
      a: 'Hollanda\'da bölgesel bayilik için WhatsApp hattımızdan başvuru yapabilirsiniz. Minimum sipariş miktarı, fiyat avantajı ve destek paketini içeren bayilik bilgi paketi hazır halde mevcuttur.',
    },
    {
      q: 'Motorlu perde sistemleri mevcut mudur?',
      a: 'Evet. Düet perde, zip perde ve jaluzi ürünlerinde Somfy veya Dooya motorlu sistemler kullanılmaktadır. Uzaktan kumanda ve akıllı ev entegrasyonu (WiFi, Zigbee) seçenekleri mevcuttur. Motorlu sistemlerde fiyat ve teknik bilgi için ayrıca sormanız gerekmektedir.',
    },
    {
      q: 'Ürünlerin bakımı nasıl yapılır?',
      a: 'Alüminyum profiller yılda bir kez nemli bezle silinir. Fiberglas ağlar hafif sabun suyu ve yumuşak fırçayla temizlenir. Kumaş perdeler vakumlu fırça ile veya 30°C\'de hassas programda yıkanabilir. Kimyasal solvent veya aşındırıcı ürün kullanılmamalıdır.',
    },
    {
      q: 'Çift veya üçlü pencere sistemlerine uyumlu mudur?',
      a: 'Evet. Çift kanatlı kasalar ve sürgülü sistemler için her iki pencereyi kapsayan geniş çerçeve çözümü üretilmektedir. Kasanın derinliği ve profil genişliği, pencere tipi ve marka bilgisiyle birlikte bildirilirse en uygun çözüm sunulur.',
    },
    {
      q: 'Sipariş vermek için hangi bilgileri hazırlamam gerekir?',
      a: '1) Genişlik ve yükseklik ölçüleri (mm), 2) Ürün tipi seçimi (sineklik, perde vb.), 3) Renk tercihi, 4) Teslimat adresi (eyalet ve şehir dahil). Bu dört bilgiyi WhatsApp\'tan göndermek, hızlı teklif alınmasını sağlar.',
    },
    {
      q: 'Hollanda dışına da gönderim yapılıyor mu?',
      a: 'Evet. Belçika, Almanya, Avusturya ve diğer Avrupa ülkelerine de gönderim gerçekleştirilmektedir. Teslimat süresi ülkeye göre 5-14 iş günü arasında değişir. Hollanda dışı siparişler için fiyatlandırma ayrıca hesaplanır.',
    },
  ],
  nl: [
    {
      q: 'Wat is de exacte levertijd naar Nederland?',
      a: 'Gemiddeld 7 werkdagen na orderbevestiging afgeleverd op uw Nederlandse adres. Snelste levering: 4 werkdagen, langste: 10 werkdagen. Bij drukte kan dit korte vertraging oplopen; tijdens bestelling wordt actuele informatie gegeven.',
    },
    {
      q: 'Worden producten gedemonteerd of gemonteerd verzonden?',
      a: 'Alle producten worden gedemonteerd en stuksgewijs verpakt verzonden. Elk pakket bevat een Engelse stapsgewijze montagehandleiding, benodigde schroeven en pluggen. Standaard handgereedschap volstaat; geen speciaal gereedschap vereist.',
    },
    {
      q: 'Hoe meet ik op, en wat als mijn maten onjuist zijn?',
      a: 'Ons technisch team begeleidt u via WhatsApp bij het opmeten. Breedte en hoogte van de raamopening worden in millimeters doorgegeven. Bij klantfouten in maatvoering wordt opnieuw geproduceerd; 50% van de kosten wordt doorberekend.',
    },
    {
      q: 'Worden niet-standaard maten geaccepteerd?',
      a: 'Ja, alle maatwerkbestellingen worden geaccepteerd. Productie van 300×300 mm tot maximaal 3500×3000 mm. Ook dakramen met schuine hoeken en hoekige kozijnen zijn mogelijk.',
    },
    {
      q: 'Welke betaalmethoden worden geaccepteerd?',
      a: 'Internationale bankoverschrijving (IBAN), Wise-overboeking en PayPal worden geaccepteerd. Een e-mailfactuur wordt voor alle transacties opgesteld. Productie start na ontvangst van betaalbevestiging.',
    },
    {
      q: 'Moet ik invoerrechten betalen?',
      a: 'Zendingen naar Nederland vallen onder de Turkije-EU handelsstroom. Producten worden correct gelabeld met CN-codes; de expediteur bereidt de douanedocumenten voor. Bij kleine bestellingen zijn mogelijk geen invoerrechten verschuldigd. Bij grotere bestellingen kan 6,5-12% invoerrecht van toepassing zijn.',
    },
    {
      q: 'Is er productgarantie?',
      a: 'Voor aluminium profiel en mechanische onderdelen geldt 2 jaar productiefoutgarantie. Voor stoffen en gaasmateriaal geldt 1 jaar garantie. Mechanische schade en onjuist gebruik vallen buiten de garantie.',
    },
    {
      q: 'Welke kleuropties zijn beschikbaar?',
      a: 'Voor aluminium profielen zijn meer dan 60 RAL-codes beschikbaar. Populairst: RAL 9016 wit, RAL 7016 antraciet en RAL 8014 sepia. Voor stoffen zijn meer dan 50 kleur- en structuurkeuzes beschikbaar. Kleurmonsters kunnen worden opgestuurd.',
    },
    {
      q: 'Worden monsters of catalogi verstuurd?',
      a: 'Ja, op verzoek worden fysieke kleur- en stofmonsters verstuurd. Verzendkosten zijn voor de ontvanger. De digitale catalogus wordt direct gedeeld na aanvraag via info@fenetresystems.com.',
    },
    {
      q: 'Hoe wordt zending gevolgd?',
      a: 'Bij verzending wordt het trackingnummer direct via WhatsApp en e-mail doorgegeven. Verzending via DHL, UPS of FedEx; live locatie traceerbaar via trackingpagina.',
    },
    {
      q: 'Is professionele montage nodig?',
      a: 'Nee. Vaste kozijnschermen en plissésystemen kunnen door één persoon in circa 30-45 minuten worden gemonteerd. De visuele handleiding in het pakket is voldoende. Voor zeer grote formaten of gemotoriseerde systemen kan lokale technische service worden ingeschakeld.',
    },
    {
      q: 'Wat te doen als product beschadigd aankomt?',
      a: 'Transportschade wordt bij levering gemeld bij de koerier met een schadeprotocol; melding via WhatsApp met foto\'s. Na bevestiging van schade: gratis herproductie en verzending.',
    },
    {
      q: 'Wat is het verschil tussen zip screen en plissé vliegenscherm?',
      a: 'Plissé vliegenscherm wordt gebruikt voor insectenwerend, met hoge licht- en luchtdoorlatendheid. Zip screen werkt als barrière voor zowel insecten, zon als wind; robuuster en geschikt voor terrassen. Twee systemen, twee verschillende toepassingen.',
    },
    {
      q: 'Bespaart honingraatgordijn echt energie?',
      a: 'Ja. Uit onafhankelijke tests blijkt dat dubbel cellig honingraatgordijn warmteverlies via het raam met 25-30% vermindert. Dit betekent een merkbare verlaging van verwarmingskosten in koude Nederlandse winters. Op verzoek beschikbaar: energieprestatiedocument.',
    },
    {
      q: 'Is het mogelijk om dealer te worden?',
      a: 'Voor regionaal dealerschap in Nederland kunt u een aanvraag indienen via onze WhatsApp-lijn. Een dealersinfopakket met minimale bestelhoeveelheid, prijsvoordeel en ondersteuning is beschikbaar.',
    },
    {
      q: 'Zijn gemotoriseerde raamdecoratie beschikbaar?',
      a: 'Ja. Duo rolgordijnen, zip screens en jaloezieën zijn beschikbaar met Somfy of Dooya motorsystemen. Afstandsbediening en smart home-integratie (WiFi, Zigbee) opties zijn beschikbaar. Prijs en technische informatie op aanvraag.',
    },
    {
      q: 'Hoe worden producten onderhouden?',
      a: 'Aluminium profielen eenmaal per jaar afvegen met een vochtige doek. Glasvezelgaas reinigen met licht zeepwater en zachte borstel. Gordijnstoffen stofzuigen of wassen op 30°C in fijnwasvak. Geen chemische oplosmiddelen of schuurmiddelen gebruiken.',
    },
    {
      q: 'Zijn producten compatibel met dubbele of drievoudige ramen?',
      a: 'Ja. Tweedeurs kozijnen en schuifsystemen worden gemaakt met brede kozijnen die beide ramen omvatten. Geef de diepte van het kozijn en het profielbreedte samen met het venstertype en merk door voor de meest geschikte oplossing.',
    },
    {
      q: 'Welke informatie heb ik nodig om te bestellen?',
      a: '1) Breedte en hoogte in mm, 2) Producttype (vliegenscherm, gordijn etc.), 3) Kleurvoorkeur, 4) Bezorgadres (inclusief provincie en stad). Deze vier gegevens via WhatsApp sturen zorgt voor een snelle offerte.',
    },
    {
      q: 'Wordt er ook buiten Nederland geleverd?',
      a: 'Ja. Levering ook naar België, Duitsland, Oostenrijk en andere Europese landen. Levertijd varieert van 5-14 werkdagen afhankelijk van het land. Prijsstelling voor bestellingen buiten Nederland wordt apart berekend.',
    },
  ],
}

export default function FAQ() {
  const { lang } = useLanguage()
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const list = faqData[lang]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <section id="sss" className="py-20 lg:py-28" style={{ backgroundColor: '#f7faf7' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#e8f5e8', color: '#404e5e' }}>
            {lang === 'tr' ? '20 Detaylı Soru' : '20 Gedetailleerde Vragen'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            {lang === 'tr' ? (
              <>
                <a href="/" style={{ color: '#83bd81' }} className="hover:underline">Plise Perde</a> ve{' '}
                Sineklik Hakkında Sık Sorulanlar
              </>
            ) : (
              <>Veelgestelde Vragen over <span style={{ color: '#83bd81' }}>Vliegenschermen</span></>
            )}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5a6a7a' }}>
            {lang === 'tr'
              ? 'Sipariş, teslimat, ürün ve kurulum hakkında merak edilen tüm soruların yanıtı burada.'
              : 'Antwoorden op alle vragen over bestellen, levering, product en montage.'}
          </p>
        </div>

        <div className="space-y-3">
          {list.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border overflow-hidden transition-all"
              style={{ borderColor: openIdx === i ? '#83bd81' : '#e8f0e8' }}>
              <button
                className="w-full flex items-center justify-between gap-3 p-5 text-left transition-colors hover:bg-[#f7faf7]"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-semibold text-sm leading-snug pr-4" style={{ color: '#404e5e' }}>
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: openIdx === i ? '#83bd81' : '#f0f7f0',
                    color: openIdx === i ? 'white' : '#83bd81',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                    className={`transition-transform ${openIdx === i ? 'rotate-180' : ''}`}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </span>
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5 border-t" style={{ borderColor: '#e8f0e8' }}>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: '#4a5a6a' }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm mb-4" style={{ color: '#5a6a7a' }}>
            {lang === 'tr'
              ? 'Sorunuz burada yanıtlanmadı mı? Doğrudan WhatsApp\'tan sorabilirsiniz.'
              : 'Uw vraag niet beantwoord? Stel uw vraag direct via WhatsApp.'}
          </p>
          <a
            href="https://wa.me/905403363873"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm"
            style={{ backgroundColor: '#25d366' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {lang === 'tr' ? 'WhatsApp ile Sor' : 'Vraag via WhatsApp'}
          </a>
        </div>
      </div>
    </section>
  )
}
