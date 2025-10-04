import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import FullWidthImageSection from '@/components/FullWidthImageSection';
import WorkPortfolioSection from '@/components/WorkPortfolioSection';
import BlueServicesSection from '@/components/BlueServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EndingSection from '@/components/EndingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FullWidthImageSection />
      <TrustSection />
      <WorkPortfolioSection />
      <BlueServicesSection />
      <TestimonialsSection />
      <EndingSection />
      <Footer />
    </main>
  );
}