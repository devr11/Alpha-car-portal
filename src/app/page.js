import ImageCarousel from "../components/ImageCarousel";
import CarOverview from "../components/CarOverview";
import PriceCalculator from "../components/PriceCalculator";
import View360Button from "../components/View360Button";
import { carData } from "../data/carData";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">
      
      {/* Left */}
      <div className="md:col-span-2">
        <ImageCarousel images={carData.images} />
        <View360Button />
      </div>

      {/* Right */}
      <div className="md:col-span-1 space-y-6">
        <CarOverview car={carData} />
        <PriceCalculator basePrice={carData.price} />
      </div>

    </main>
  );
}
