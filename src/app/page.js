import EMICalculator from "@/components/EMICalculator";
import ImageCarousel from "../components/ImageCarousel";
import { carData } from "../data/carData";
import { Container } from "@/components/Container";
import Product from "../components/Product";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-6">
      
      {/* Left */}
      <div className="md:col-span-2">
        <ImageCarousel images={carData.images} />
      </div>

      {/* Right */}
      <div className="md:col-span-1 space-y-6">
        <Product />
        <EMICalculator />
        <Container />
        
        {/* <Dashboard /> */}
      </div>

    </main>
  );
}
