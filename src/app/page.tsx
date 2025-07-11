import { 
  HeroSection, 
  ValuePropositionSection, 
  ServicesSection, 
  SocialProofSection, 
  ContactSection 
} from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValuePropositionSection />
      <ServicesSection />
      <SocialProofSection />
      <ContactSection />
    </main>
  );
}
