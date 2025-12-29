import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
        <title>LabFlow - Advanced LIMS Solution for Modern Laboratories</title>
        <meta
          name="description"
          content="Streamline lab workflows, ensure compliance, and boost efficiency with LabFlow's cloud-based Laboratory Information Management System. Reduce errors and accelerate turnaround times by up to 50%."
        />
        <meta
          name="keywords"
          content="LIMS, laboratory information management system, lab software, pharmaceutical, biotech, research labs, sample tracking, workflow automation"
        />
        <link rel="canonical" href="https://labflow.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
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
