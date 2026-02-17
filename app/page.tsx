import HeroSection from '@/components/home/herosection'
import FeaturedOutlets from '@/components/home/outlets'
import TestimonialsSection from '@/components/home/testimonials'
import TradeSection from '@/components/home/tradesection'
import TravelPackagesSection from '@/components/travelPackage/travelpackage'




function Home() {
  return (
    <>
    <HeroSection />
    <TravelPackagesSection />
    <TradeSection />
    <FeaturedOutlets />
        {/* <TestimonialsSection /> */}

  
    
    </>
  )
}

export default Home
