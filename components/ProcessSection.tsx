'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function ProcessSection() {
  const { lang } = useLanguage()

  const steps = lang === 'tr' ? [
    {
      num: '01',
      icon: '📐',
      title: 'Ölçü Alma',
      desc: 'Pencere veya kapı açıklığınızın genişlik ve yükseklik ölçülerini alın. WhatsApp üzerinden fotoğraf ve ölçü bize iletilir. Belirsiz noktalar için teknik ekibimiz rehberlik eder.',
    },
    {
      num: '02',
      icon: '💬',
      title: 'Teklif ve Onay',
      desc: '24 saat içinde detaylı fiyat teklifi e-posta ile ulaşır. Ürün seçimi, renk ve teknik özellikler netleştirilir. Ödeme onayıyla üretim süreci başlatılır.',
    },
    {
      num: '03',
      icon: '🏭',
      title: 'Üretim',
      desc: 'Onaydan sonra 3-5 iş günü içinde üretim tamamlanır. Her parça ölçü doğrulamasından geçer. Kalite kontrol belgesi siparişe eklenir.',
    },
    {
      num: '04',
      icon: '📦',
      title: 'Ambalajlama',
      desc: 'Profiller köpük kaplı, kumaşlar naylon koruyuculu olarak paketlenir. Özel karton kasa; kargo sürecindeki her türlü darbeyi önler. Montaj vidaları ve talimatnamesi pakete dahildir.',
    },
    {
      num: '05',
      icon: '✈️',
      title: 'Kargo ve Teslimat',
      desc: 'Uluslararası ekspres kargo ile Hollanda\'ya gönderilir. Takip numarası anında paylaşılır. Hollanda\'nın 12 eyaletinin tamamına adrese teslim yapılır.',
    },
    {
      num: '06',
      icon: '🔧',
      title: 'Kurulum',
      desc: 'Paket içindeki adım adım montaj kılavuzu takip edilir. Sabit sineklikler 30 dakika, plise sistemler 45 dakika içinde monte edilir. Sorunuz olursa WhatsApp destek hattı açıktır.',
    },
  ] : [
    {
      num: '01',
      icon: '📐',
      title: 'Opmeten',
      desc: 'Meet de breedte en hoogte van uw raamopening op. Stuur foto\'s en maten via WhatsApp. Ons technisch team begeleidt u bij eventuele onduidelijkheden.',
    },
    {
      num: '02',
      icon: '💬',
      title: 'Offerte en Goedkeuring',
      desc: 'Binnen 24 uur ontvangt u een gedetailleerde offerte per e-mail. Productkeuze, kleur en technische specificaties worden vastgelegd. Na betaalbevestiging start het productieproces.',
    },
    {
      num: '03',
      icon: '🏭',
      title: 'Productie',
      desc: 'Productie is voltooid binnen 3-5 werkdagen na goedkeuring. Elk onderdeel wordt geverifieerd op maatnauwkeurigheid. Kwaliteitscontroledocument wordt bij de bestelling gevoegd.',
    },
    {
      num: '04',
      icon: '📦',
      title: 'Verpakking',
      desc: 'Profielen worden verpakt met schuimbescherming, stoffen in nylonfolie. Speciale kartonnen doos voorkomt alle transportschade. Montageschroeven en instructies zitten in het pakket.',
    },
    {
      num: '05',
      icon: '✈️',
      title: 'Verzending en Levering',
      desc: 'Verzonden naar Nederland via internationale expresskoerier. Trackingnummer wordt direct gedeeld. Thuisbezorgd in alle 12 Nederlandse provincies.',
    },
    {
      num: '06',
      icon: '🔧',
      title: 'Montage',
      desc: 'Volg de stapsgewijze montagehandleiding in het pakket. Vaste schermen binnen 30 minuten gemonteerd, plissésystemen binnen 45 minuten. WhatsApp-support beschikbaar voor vragen.',
    },
  ]

  return (
    <section id="surec" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#f0f7f0', color: '#404e5e' }}>
            {lang === 'tr' ? '6 Adımda Teslimat' : '6 Stappen Levering'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            {lang === 'tr' ? (
              <>
                <a href="/" className="hover:underline" style={{ color: '#83bd81' }}>Sineklik Sistemleri</a>{' '}
                Nasıl Sipariş Edilir?
              </>
            ) : (
              <>Hoe Bestelt U <span style={{ color: '#83bd81' }}>Vliegenschermen?</span></>
            )}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5a6a7a' }}>
            {lang === 'tr'
              ? 'WhatsApp mesajından Hollanda kapısına kadar tüm süreç net ve şeffaf yürütülür.'
              : 'Van WhatsApp-bericht tot levering aan uw deur in Nederland — volledig transparant.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative p-6 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ backgroundColor: '#fafcfa', borderColor: '#e8f0e8' }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black"
                    style={{ backgroundColor: '#f0f7f0', color: '#83bd81' }}>
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold mb-1 tracking-widest" style={{ color: '#83bd81' }}>
                    {step.num}
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: '#404e5e' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5a6a7a' }}>{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  {(i + 1) % 3 !== 0 && (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10h10M10 5l5 5-5 5" stroke="#83bd81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-3xl text-center" style={{ background: 'linear-gradient(135deg, #f0f7f0, #e8f0f8)' }}>
          <p className="text-lg font-semibold mb-4" style={{ color: '#404e5e' }}>
            {lang === 'tr'
              ? 'Hemen başlayın — ilk mesajınıza 24 saat içinde yanıt veriyoruz.'
              : 'Begin vandaag — wij reageren binnen 24 uur op uw eerste bericht.'}
          </p>
          <a
            href="https://wa.me/905403363873"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-base transition-all hover:shadow-xl hover:-translate-y-0.5"
            style={{ backgroundColor: '#25d366' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {lang === 'tr' ? 'WhatsApp ile Sipariş Ver' : 'Bestellen via WhatsApp'}
          </a>
        </div>
      </div>
    </section>
  )
}
