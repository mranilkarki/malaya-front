
import VisaBanner from '@/components/shared/visabanner';
import Image from 'next/image';


interface VisaDetailsPageProps {
  params: Promise<{ slug: string }>;
}

interface VisaCountry {
  id: number;
  country_name: string;
  visa_requirements: string;
  country_flag_url: string;
  images: string[];
  
}

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/visa-countries`);
    const countries = await response.json();

    return countries.map((country: any) => ({
      slug: country.country_name.toLowerCase(),
    }));
  } catch (error) {
    console.error("Failed to fetch visa countries for static params:", error);
    return [];
  }
}

export default async function Visas({ params }: VisaDetailsPageProps) {
  const { slug } = await params;
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/visa-countries/${slug}`, {
    next: { revalidate: 3600 } 
  });
  
  if (!response.ok) return <div>Country not found</div>;
  
  const data: VisaCountry = await response.json();

  return (
    <div>
     <VisaBanner />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-4xl font-bold capitalize">
            {data.country_name} 
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-3">Requirements</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {data.visa_requirements}
            </p>
          </div>

          {/* Image Gallery */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold"></h2>
            <div className="grid grid-cols-2 gap-2">
              {data.images.map((img, index) => (
                <div key={index} className="relative h-72 w-full">
                   {/* Replace with your actual image domain/path */}
                   <Image 
                    src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${img}`} 
                    alt={`View of ${data.country_name}`} 
                    height={100}
                    width={100}
                    className="object-cover rounded-md w-full h-full"
                   />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}