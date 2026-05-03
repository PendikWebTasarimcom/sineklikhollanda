'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const provinces = {
  tr: [
    { name: 'Noord-Holland', flag: '🏙️', pop: '2,9 Milyon', cities: 'Amsterdam, Haarlem, Zaandam, Alkmaar, Hilversum', desc: 'Amsterdam kanalları ve geniş ticari yapılarıyla Hollanda\'nın en kalabalık eyaletinde sineklik ve perde sistemlerimiz yoğun talep görüyor. Dar kotage pencereleri ile modern apartmanlar için iki farklı çözüm sunuyoruz. Noord-Holland\'ın nem oranı yüksek iklimi, korozyon dayanımlı ürünlerimizin değerini artırıyor.' },
    { name: 'Zuid-Holland', flag: '⚓', pop: '3,8 Milyon', cities: 'Rotterdam, Den Haag, Leiden, Delft, Dordrecht', desc: 'Hollanda\'nın en büyük eyaletinde Rotterdam liman bölgesinden Den Haag hükümet binalarına kadar geniş bir müşteri yelpazesine hizmet veriyoruz. Rüzgarlı kıyı konumlar için zip perde, şehir içi konutlar için plise sineklik en çok tercih edilen ürünlerimiz.' },
    { name: 'Utrecht', flag: '🎓', pop: '1,4 Milyon', cities: 'Utrecht, Amersfoort, Veenendaal, Nieuwegein', desc: 'Üniversite şehri Utrecht\'in yoğun kiralık konut stoku, pratik ve dayanıklı ürünlerimizin doğal pazar alanını oluşturuyor. Amersfoort ve çevresindeki yeni yapı bölgelerinde honeycomb perde enerji tasarrufu nedeniyle öne çıkıyor.' },
    { name: 'Noord-Brabant', flag: '🏭', pop: '2,6 Milyon', cities: 'Eindhoven, Tilburg, Breda, Den Bosch', desc: 'Teknoloji firmaları ve endüstriyel tesislerle tanınan Noord-Brabant\'ta ofis güneş kontrolü için jaluzi ve zip perde büyük talep görüyor. Eindhoven\'in teknoparkındaki modern cam cepheli binalara özel geniş ölçü üretimi yapıyoruz.' },
    { name: 'Gelderland', flag: '🌳', pop: '2,1 Milyon', cities: 'Nijmegen, Arnhem, Apeldoorn, Ede', desc: 'Nehir vadileri ve ormanlarıyla çevrili Gelderland, kış bahçesi ve teras kapatma talebinde öne çıkıyor. Nijmegen\'in tarihi yapı stoğu, özel ölçü sinekliğimize olan ihtiyacı artırıyor. Honeycomb perde enerji tasarrufu açısından bölgede çok tercih edilir.' },
    { name: 'Overijssel', flag: '🚴', pop: '1,2 Milyon', cities: 'Enschede, Zwolle, Deventer, Hengelo', desc: 'Alman sınırına yakın Overijssel\'de farklı pencere mimarisi göze çarpar. Deventer\'in eski şehir dokusundaki ahşap çerçeveli pencerelere uyumlu özel profil seçenekleri sunuyoruz. Enschede\'nin sanayi çevrelerinde ticari jaluzi çözümleri yaygındır.' },
    { name: 'Groningen', flag: '⚓', pop: '600 Bin', cities: 'Groningen, Veendam, Hoogezand, Winschoten', desc: 'Hollanda\'nın kuzeydoğu ucundaki Groningen, güçlü rüzgar koşuları nedeniyle rüzgar dayanımlı zip perde talebinde diğer eyaletlerin önüne geçiyor. Waddenzee kıyısına yakın konumlar için özel UV dayanımlı kumaş tercih ediyoruz.' },
    { name: 'Friesland', flag: '🐄', pop: '650 Bin', cities: 'Leeuwarden, Harlingen, Sneek, Drachten', desc: 'Kendi dili ve kültürüyle özgün bir bölge olan Friesland\'da çiftlik dönüşümü konutları giderek artıyor. Çiftlik evlerinin geniş ve yüksek pencerelerine uygun, uzun boyutlu özel sineklik ve perde üretimi yapıyoruz. Leeuwarden merkezinde ticari talep de güçleniyor.' },
    { name: 'Drenthe', flag: '🌾', pop: '500 Bin', cities: 'Assen, Emmen, Hoogeveen, Meppel', desc: 'Doğa parkları ve sakin kırsal ile bilinen Drenthe\'de tatil köyleri ve konutlar sineklik talebinin merkezini oluşturuyor. Emmen\'deki yeni yapı bölgeleri honeycomb perde enerji verimliliği için en hızlı büyüyen pazar segmentimizi temsil ediyor.' },
    { name: 'Flevoland', flag: '🌊', pop: '430 Bin', cities: 'Almere, Lelystad, Dronten, Zeewolde', desc: 'Denizden kazanılmış bu genç eyaletin tamamı modern yapı stoğundan oluşur. Almere\'nin yeni konut projelerinde plise perde ve honeycomb perde birlikte sipariş edilme oranı yüksek. Rüzgar açıkta esen kara ortasındaki bu bölge için güçlü profil seçimi kritiktir.' },
    { name: 'Limburg', flag: '🍇', pop: '1,1 Milyon', cities: 'Maastricht, Venlo, Heerlen, Sittard', desc: 'Hollanda\'nın en güneydeki eyaletinde Belçika ve Almanya sınırına yakınlık, çok uluslu müşteri profilini beraberinde getiriyor. Maastricht\'in tarihi binalarında dar pencere boşlukları için minimal profil sineklik en çok tercih edilir. Venlo lojistik merkezindeki ticari yapılar için ticari jaluzi çözümleri sunuyoruz.' },
    { name: 'Zeeland', flag: '🏖️', pop: '380 Bin', cities: 'Middelburg, Vlissingen, Goes, Terneuzen', desc: 'Delta bölgesinde deniz iklimiyle şekillenen Zeeland, zip perde talebinde en yüksek oran gösteren eyaletimiz. Kuzey Denizi\'ne açık konumlarda rüzgar yükü 300+ km/saat test edilmiş ürünlerimiz zorunluluk haline geliyor. Vlissingen liman bölgesinde özel ticari çözümler sunuyoruz.' },
  ],
  nl: [
    { name: 'Noord-Holland', flag: '🏙️', pop: '2,9 Miljoen', cities: 'Amsterdam, Haarlem, Zaandam, Alkmaar, Hilversum', desc: 'In de dichtstbevolkte provincie van Nederland, met Amsterdamse grachten en brede handelsgebouwen, zijn onze vliegenschermen en raamdecoratie erg populair. Wij bieden twee oplossingen: voor smalle cottage-ramen en moderne appartementen. Het hoge vochtgehalte van Noord-Holland vergroot de waarde van onze corrosiebestendige producten.' },
    { name: 'Zuid-Holland', flag: '⚓', pop: '3,8 Miljoen', cities: 'Rotterdam, Den Haag, Leiden, Delft, Dordrecht', desc: 'In de grootste provincie van Nederland bedienen wij een breed klantenspectrum. Van het havengebied van Rotterdam tot regeringsgebouwen in Den Haag. Zip screens voor winderige kustlocaties en plissé vliegenschermen voor stedelijke woningen zijn het meest gevraagd.' },
    { name: 'Utrecht', flag: '🎓', pop: '1,4 Miljoen', cities: 'Utrecht, Amersfoort, Veenendaal, Nieuwegein', desc: 'De drukke huurwoningmarkt van de universiteitsstad Utrecht vormt het ideale verkoopgebied voor onze praktische en duurzame producten. In nieuwe woongebieden rondom Amersfoort zijn honingraatgordijnen populair vanwege energiebesparing.' },
    { name: 'Noord-Brabant', flag: '🏭', pop: '2,6 Miljoen', cities: 'Eindhoven, Tilburg, Breda, Den Bosch', desc: 'In Noord-Brabant, bekend om technologiebedrijven en industriële faciliteiten, is er grote vraag naar jaloezie en zip screens voor zonwering op kantoor. In de modern beglaasde gebouwen van het Eindhovense technopark produceren wij op grote maat.' },
    { name: 'Gelderland', flag: '🌳', pop: '2,1 Miljoen', cities: 'Nijmegen, Arnhem, Apeldoorn, Ede', desc: 'Gelderland, omringd door rivierdalen en bossen, vraagt veel om terras- en serreafsluiting. De historische woningstock van Nijmegen vergroot de behoefte aan maatwerk vliegenschermen. Honingraatgordijnen zijn hier erg in trek vanwege energiebesparing.' },
    { name: 'Overijssel', flag: '🚴', pop: '1,2 Miljoen', cities: 'Enschede, Zwolle, Deventer, Hengelo', desc: 'Overijssel, dicht bij de Duitse grens, heeft een opvallend andere raamarchitectuur. Voor houtomlijste ramen in de historische binnenstad van Deventer bieden wij speciale profielopties. In industriële omgevingen rondom Enschede zijn commerciële jaloezieoplossingen gangbaar.' },
    { name: 'Groningen', flag: '⚓', pop: '600 Duizend', cities: 'Groningen, Veendam, Hoogezand, Winschoten', desc: 'Groningen, in het noordoosten van Nederland, overtreft andere provincies in vraag naar windbestendige zip screens vanwege sterke wind. Voor locaties nabij de Waddenzee kiezen wij speciaal voor UV-bestendige stoffen.' },
    { name: 'Friesland', flag: '🐄', pop: '650 Duizend', cities: 'Leeuwarden, Harlingen, Sneek, Drachten', desc: 'In Friesland, met zijn eigen taal en cultuur, neemt het aantal boerderijconversiewoningen toe. Voor de brede en hoge ramen van boerderijhuizen produceren wij vliegenschermen en gordijnen in speciale formaten. De commerciële vraag in Leeuwarden groeit ook.' },
    { name: 'Drenthe', flag: '🌾', pop: '500 Duizend', cities: 'Assen, Emmen, Hoogeveen, Meppel', desc: 'In Drenthe, bekend om natuurparken en rustig platteland, vormen vakantiedorpen en woningen het centrum van de vliegenschermvraag. Nieuwe woonwijken in Emmen vertegenwoordigen ons snelst groeiende marktsegment voor honingraatgordijnen.' },
    { name: 'Flevoland', flag: '🌊', pop: '430 Duizend', cities: 'Almere, Lelystad, Dronten, Zeewolde', desc: 'Deze jonge provincie, gewonnen op zee, bestaat volledig uit moderne woningbouw. In nieuwbouwprojecten in Almere worden plissé- en honingraatgordijnen vaak samen besteld. Voor deze winderige vlakke regio is een sterk profielprofiel essentieel.' },
    { name: 'Limburg', flag: '🍇', pop: '1,1 Miljoen', cities: 'Maastricht, Venlo, Heerlen, Sittard', desc: 'De zuidelijkste provincie van Nederland, dicht bij de Belgische en Duitse grens, trekt een multinationaal klantenprofiel. In historische gebouwen in Maastricht is minimaal profiel vliegenscherm voor smalle raamopeningen het populairst. Voor commerciële gebouwen in het logistiekcentrum Venlo bieden wij commerciële jaloezieoplossingen.' },
    { name: 'Zeeland', flag: '🏖️', pop: '380 Duizend', cities: 'Middelburg, Vlissingen, Goes, Terneuzen', desc: 'Zeeland, gevormd door het deltaklimaat, is onze provincie met de hoogste vraag naar zip screens. Op locaties die open staan naar de Noordzee worden onze producten getest op een windlast van 300+ km/u. In het havengebied van Vlissingen bieden wij speciale commerciële oplossingen.' },
  ],
}

export default function ServiceRegions() {
  const { lang } = useLanguage()
  const [expanded, setExpanded] = useState<number | null>(null)
  const list = provinces[lang]

  return (
    <section id="bolgeler" className="py-20 lg:py-28" style={{ backgroundColor: '#f7faf7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#e8f5e8', color: '#404e5e' }}>
            {lang === 'tr' ? '12 Hollanda Eyaleti' : '12 Nederlandse Provincies'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#404e5e' }}>
            {lang === 'tr' ? (
              <>
                <a href="/" style={{ color: '#83bd81' }} className="hover:underline">Hollanda Sineklik Fiyatları</a>{' '}
                ve Teslimat Bölgeleri
              </>
            ) : (
              <>Leveringsgebieden in <span style={{ color: '#83bd81' }}>Heel Nederland</span></>
            )}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5a6a7a' }}>
            {lang === 'tr'
              ? 'Hollanda\'nın 12 eyaletinin tamamına adrese teslim yapıyoruz. Her bölgenin iklim ve mimari özelliklerine göre ürün önerisi sunuyoruz.'
              : 'Wij leveren aan huis in alle 12 provincies van Nederland. Per regio geven wij productadvies op basis van klimaat en architectuur.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((prov, i) => (
            <div key={i} className="bg-white rounded-2xl border overflow-hidden transition-all"
              style={{ borderColor: '#e8f0e8' }}>
              <button
                className="w-full flex items-center gap-3 p-5 text-left hover:bg-[#f7faf7] transition-colors"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <span className="text-2xl">{prov.flag}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-bold" style={{ color: '#404e5e' }}>{prov.name}</div>
                  <div className="text-xs truncate" style={{ color: '#5a6a7a' }}>{prov.cities}</div>
                </div>
                <div className="flex flex-col items-end flex-shrink-0">
                  <span className="text-sm font-bold" style={{ color: '#83bd81' }}>{prov.pop}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={`transition-transform ${expanded === i ? 'rotate-180' : ''}`}
                    style={{ color: '#83bd81' }}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </button>
              {expanded === i && (
                <div className="px-5 pb-5 border-t" style={{ borderColor: '#e8f0e8' }}>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: '#4a5a6a' }}>{prov.desc}</p>
                  <div className="mt-3">
                    <span className="text-xs font-semibold" style={{ color: '#83bd81' }}>
                      {lang === 'tr' ? 'Şehirler: ' : 'Steden: '}
                    </span>
                    <span className="text-xs" style={{ color: '#5a6a7a' }}>{prov.cities}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-3xl text-center bg-white border" style={{ borderColor: '#e8f0e8' }}>
          <h3 className="font-bold text-xl mb-3" style={{ color: '#404e5e' }}>
            {lang === 'tr' ? 'Bulunduğunuz Eyalette Hizmet Alın' : 'Bestel in Uw Provincie'}
          </h3>
          <p className="text-sm mb-5 max-w-xl mx-auto" style={{ color: '#5a6a7a' }}>
            {lang === 'tr'
              ? 'Yaşadığınız şehri ve ölçülerinizi WhatsApp ile paylaşın. 24 saat içinde size özel fiyat teklifi hazırlanır.'
              : 'Deel uw stad en afmetingen via WhatsApp. Binnen 24 uur ontvangt u een persoonlijke offerte.'}
          </p>
          <a
            href="https://wa.me/905403363873"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm"
            style={{ backgroundColor: '#25d366' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {lang === 'tr' ? 'Fiyat Sor' : 'Vraag Prijs'}
          </a>
        </div>
      </div>
    </section>
  )
}
