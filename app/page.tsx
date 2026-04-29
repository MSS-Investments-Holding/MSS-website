import HeroSection from "@/components/sections/HeroSection";
import CompanySection from "@/components/sections/CompanySection";
import InvestmentsSection from "@/components/sections/InvestmentsSection";
import PortfolioProcessSection from "@/components/sections/PortfolioProcessSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import FootprintSection from "@/components/sections/FootprintSection";
import NewsSection from "@/components/sections/NewsSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <CompanySection />
      <InvestmentsSection />
      <PortfolioProcessSection />
      <LeadershipSection />
      <FootprintSection />
      <NewsSection />
      <Footer />
    </main>
  );
}
