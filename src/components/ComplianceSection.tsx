import { Shield, FileCheck, Database, Globe, Lock } from "lucide-react";
import complianceImage from "@/assets/compliance-image.jpg";

const complianceItems = [
  {
    icon: FileCheck,
    title: "21 CFR Part 11 & Annex 11 Ready",
    description: "Full audit trails, electronic/digital signatures and time-stamped records.",
  },
  {
    icon: Shield,
    title: "GMP/GLP & GAMP 4 Aligned",
    description: "Automated CAPA for non-conformances, SOP/document control, and version management.",
  },
  {
    icon: Database,
    title: "ALCOA+ Principles",
    description: "Ensures data is Attributable, Legible, Contemporaneous, Original, Accurate, Complete, Consistent, Enduring, and Available.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "HIPAA, SOC 2, GDPR, ISO 17025 compliant, with configurable validation packs.",
  },
  {
    icon: Lock,
    title: "Security Features",
    description: "Role-based access, encrypted storage, and advanced search for secure, traceable workflows.",
  },
];

const ComplianceSection = () => {
  return (
    <section id="compliance" className="py-24 lg:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Regulatory Compliance
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Compliance{" "}
            <span className="text-gradient">Without Complexity</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Navigate regulations effortlessly with built-in safeguards for ALCOA+ data integrity. Electronic signatures, CAPA management, and complete audit trails ensure 100% regulatory adherence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Compliance Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {complianceItems.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card p-5 rounded-xl hover:border-primary/30 transition-all duration-300 ${
                  index === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={complianceImage}
                alt="Compliance and security visualization"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
