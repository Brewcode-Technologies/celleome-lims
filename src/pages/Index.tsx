import { Helmet } from "react-helmet-async";
import { NavBar } from "@/components/ui/tubelight-navbar";
import SyntheticHero from "@/components/ui/synthetic-hero";
import { Home, Zap, Shield, Award, Users } from "lucide-react";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ComplianceSection from "@/components/ComplianceSection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Celleome Diagnostics - AI in Diagnostics | Advanced LIMS Solution</title>
        <meta
          name="description"
          content="Celleome Diagnostics offers affordable, accessible, high-quality Laboratory Information Management System (LIMS). Digitizing laboratories with AI-powered solutions."
        />
        <meta
          name="keywords"
          content="Celleome Diagnostics, LIMS, laboratory information management system, AI in diagnostics, lab software, pharmaceutical, biotech, research labs"
        />
        <link rel="canonical" href="https://www.celleome.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <NavBar items={[
          { name: 'Home', url: '#', icon: Home },
          { name: 'Features', url: '#features', icon: Zap },
          { name: 'Benefits', url: '#benefits', icon: Award },
          { name: 'Compliance', url: '#compliance', icon: Shield },
          { name: 'Why Us', url: '#why-us', icon: Users }
        ]} />
        <SyntheticHero />
        <main>
          <FeaturesSection />
          <BenefitsSection />
          <ComplianceSection />
          <WhyUsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
