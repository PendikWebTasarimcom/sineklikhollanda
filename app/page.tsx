import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import BrandValue from '@/components/BrandValue'
import ExpertiseSection from '@/components/ExpertiseSection'
import ProcessSection from '@/components/ProcessSection'
import Applications from '@/components/Applications'
import TrustProofs from '@/components/TrustProofs'
import ServiceRegions from '@/components/ServiceRegions'
import ProductQuality from '@/components/ProductQuality'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <BrandValue />
        <ExpertiseSection />
        <ProcessSection />
        <Applications />
        <TrustProofs />
        <ServiceRegions />
        <ProductQuality />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
