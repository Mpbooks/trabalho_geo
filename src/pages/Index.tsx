import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ChallengesSection from "@/components/ChallengesSection";
import SolutionsSection from "@/components/SolutionsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <ChallengesSection />
    <SolutionsSection />
    <TeamSection />
    <Footer />
  </div>
);

export default Index;
