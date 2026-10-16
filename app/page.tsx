import ExploreTravel from '@/components/home/exploreTravel'
import HeroSection from '@/components/home/herosection'
import NepalToWorld from '@/components/home/nepaltoworld'
import FeaturedOutlets from '@/components/home/outlets'
import SocialImpact from '@/components/home/socialimpact'
// import TestimonialsSection from '@/components/home/testimonials'
import WorldOfBusiness from '@/components/home/worldofbusiness'
import TravelPackagesSection from '@/components/travelPackage/travelpackage'




function Home() {
  return (
    <>
    <HeroSection />
    <WorldOfBusiness />
    <NepalToWorld />
    <ExploreTravel />
    {/* <TravelPackagesSection /> */}
  
    <FeaturedOutlets />
    <SocialImpact />
        {/* <TestimonialsSection /> */}

  
    
    </>
  )
}

export default Home
