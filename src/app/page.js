import Main from "@/components/main";
import CareTipsSection from "@/components/CareTipsSection";
import ErgonomicsSection from "@/components/ErgonomicsSection ";
import PhysicalActivitySection from "@/components/PhysicalActivitySection";
import NutritionSection from "@/components/NutritionSection";
import HydrationSection from "@/components/HydrationSection";
import MentalHealthSection from "@/components/MentalHealthSection";
import LeisureSection from "@/components/LeisureSection";
import Footer from "@/components/Footer";
import FinalThoughtsSection from "@/components/FinalThoughtsSection";
export default function Home() {
  return (
    <>
      <Main />
      <CareTipsSection />
      <ErgonomicsSection />
      <PhysicalActivitySection />
      <NutritionSection />
      <HydrationSection />
      <MentalHealthSection />
      <LeisureSection />
      <FinalThoughtsSection />
      <Footer />
    </>
  );
}
