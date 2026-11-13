import HeroSection from "@/components/sections/HeroSection";
import CompanySection from "@/components/sections/CompanySection";
import InvestmentsSection from "@/components/sections/InvestmentsSection";
import PortfolioProcessSection from "@/components/sections/PortfolioProcessSection";
import FootprintSection from "@/components/sections/FootprintSection";
import PartnersSection from "@/components/sections/PartnersSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import HomeCTASection from "@/components/sections/HomeCTASection";
import Footer from "@/components/layout/Footer";
import HeroImagePreloader from "@/components/HeroImagePreloader";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroImagePreloader />
      <HeroSection />
      <CompanySection />
      <InvestmentsSection />
      <PortfolioProcessSection />
      <FootprintSection />
      <PartnersSection />
      <LeadershipSection />
      <HomeCTASection />
      <Footer />
    </main>
  );
}
