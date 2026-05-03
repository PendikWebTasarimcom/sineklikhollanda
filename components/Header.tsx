'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const { lang, setLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = lang === 'tr'
    ? [
        { label: 'Ürünler', href: '#urunler' },
        { label: 'Marka', href: '#marka' },
        { label: 'Nasıl Çalışıyoruz', href: '#surec' },
        { label: 'Hizmet Bölgeleri', href: '#bolgeler' },
        { label: 'SSS', href: '#sss' },
        { label: 'İletişim', href: '#iletisim' },
      ]
    : [
        { label: 'Producten', href: '#urunler' },
        { label: 'Merk', href: '#marka' },
        { label: 'Hoe Werkt Het', href: '#surec' },
        { label: 'Regio\'s', href: '#bolgeler' },
        { label: 'FAQ', href: '#sss' },
        { label: 'Contact', href: '#iletisim' },
      ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-3 group" aria-label="Sineklik Hollanda Ana Sayfa">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#83bd81' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                <line x1="2" y1="7" x2="22" y2="7" stroke="white" strokeWidth="1.5"/>
                <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeWidth="1.5"/>
                <line x1="2" y1="17" x2="22" y2="17" stroke="white" strokeWidth="1.5"/>
                <line x1="7" y1="2" x2="7" y2="22" stroke="white" strokeWidth="1.5"/>
                <line x1="12" y1="2" x2="12" y2="22" stroke="white" strokeWidth="1.5"/>
                <line x1="17" y1="2" x2="17" y2="22" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-base leading-tight" style={{ color: '#404e5e' }}>
                Sineklik <span style={{ color: '#83bd81' }}>Hollanda</span>
              </div>
              <div className="text-xs text-gray-500 leading-tight">Fenetre Systems</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Ana Navigasyon">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 hover:text-[#83bd81]"
                style={{ color: '#404e5e' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLang('tr')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  lang === 'tr' ? 'bg-white shadow text-[#404e5e]' : 'text-gray-500'
                }`}
                aria-label="Türkçe"
              >
                🇹🇷 TR
              </button>
              <button
                onClick={() => setLang('nl')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  lang === 'nl' ? 'bg-white shadow text-[#404e5e]' : 'text-gray-500'
                }`}
                aria-label="Nederlands"
              >
                🇳🇱 NL
              </button>
            </div>
            <a
              href="https://wa.me/905403363873"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all hover:shadow-md"
              style={{ backgroundColor: '#25d366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menü"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 shadow-lg">
          <nav className="flex flex-col gap-1" aria-label="Mobil Navigasyon">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-xl hover:bg-[#f0f7f0] hover:text-[#83bd81] transition-colors"
                style={{ color: '#404e5e' }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/905403363873"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-semibold"
              style={{ backgroundColor: '#25d366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
