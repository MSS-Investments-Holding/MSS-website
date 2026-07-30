import HeroSection from "@/components/sections/HeroSection";
import CompanySection from "@/components/sections/CompanySection";
import InvestmentsSection from "@/components/sections/InvestmentsSection";
import PortfolioProcessSection from "@/components/sections/PortfolioProcessSection";
import FootprintSection from "@/components/sections/FootprintSection";
import PartnersSection from "@/components/sections/PartnersSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import HomeCTASection from "@/components/sections/HomeCTASection";
import NewsSection from "@/components/sections/NewsSection";
import Footer from "@/components/layout/Footer";
import { getAllArticles } from "@/lib/sanity/queries";
import { NEWS_ENABLED } from "@/lib/features";
import HeroImagePreloader from "@/components/HeroImagePreloader";

// Revalidate every 60 s so newly published Sanity articles appear automatically
export const revalidate = 60;

export default async function HomePage() {
  const articles = NEWS_ENABLED ? await getAllArticles() : [];

  // Hero shows the 2 most-recent articles; News section shows the next 6
  const heroArticles  = articles.slice(0, 2);
  const newsArticles  = articles.slice(0, 6);

  return (
    <main id="main-content">
      <HeroImagePreloader />
      <HeroSection  articles={heroArticles} />
      <CompanySection />
      <InvestmentsSection />
      <PortfolioProcessSection />
      <FootprintSection />
      <PartnersSection />
      <LeadershipSection />
      <HomeCTASection />
      {NEWS_ENABLED ? <NewsSection articles={newsArticles} /> : null}
      <Footer />
    </main>
  );
}
