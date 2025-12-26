import ImageCarousel from "../components/ImageCarousel";
import CarOverview from "../components/CarOverview";
import PriceCalculator from "../components/PriceCalculator";
import View360Button from "../components/View360Button";
import { carData } from "../data/carData";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      
      {/* Left */}
      <div className="">
        <ImageCarousel images={carData.images} />
        <View360Button />
      </div>

      {/* Right */}
      <div className="space-y-6">
        <CarOverview car={carData} />
        <PriceCalculator basePrice={carData.price} />
      </div>

    </main>
  );
}
