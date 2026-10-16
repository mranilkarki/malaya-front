import BookingSidebar from "@/components/bookings/bookingsidebar";
import Gallery from "@/components/travelPackage/gallery";
import Itinerary from "@/components/travelPackage/itinerary";
import TravelDetails from "@/components/travelPackage/traveldetails";

export const revalidate = 3600;


interface TourDetailsPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all travel packages
export async function generateStaticParams() {
  try {
    // Fetch all travel packages from your API
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/travel-packages`);
    const packages = await response.json();

    // Return array of slug objects
    return packages.map((pkg: any) => ({
      slug: pkg.slug || pkg.id.toString(), // Adjust based on your API response
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}


export default async function TourDetailsPage({ params }: TourDetailsPageProps) {
  // Await the params to get the slug
  const { slug } = await params;
  

  return (
    <div className="min-h-screen bg-white">
      <TravelDetails slug={slug} />
      {/* Main Container */}
     
    </div>
  );
}