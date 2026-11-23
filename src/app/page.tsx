import LawFirmClientWrapper from "@/components/LawFirmClientWrapper";
import PracticeAreas from "@/components/PracticeAreas";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <LawFirmClientWrapper />
        <PracticeAreas />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
