import { Code, Settings, Building2, Award } from "lucide-react";

const reasons = [
  {
    icon: Code,
    title: "Open-Source Flexibility",
    description: "Customizable like proprietary software but cost-effective with community support and no licensing traps.",
  },
  {
    icon: Settings,
    title: "Tailored Implementation",
    description: "End-to-end support, including advanced analytics, compliance training, network upgrades, and multi-lab integrations.",
  },
  {
    icon: Building2,
    title: "Industry-Agnostic Design",
    description: "Perfect for pharmaceuticals, biotech R&D, healthcare, manufacturing, and commercial testing.",
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Drawing from 20+ years of partnerships, our ProX framework starts with your lab's reality for scalable, future-proof solutions.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            A{" "}
            <span className="text-gradient">Process-First</span>{" "}
            Philosophy
          </h2>
          <p className="text-lg text-muted-foreground">
            In a crowded market, we stand out by fixing broken workflows before fitting the system. Unlike rigid off-the-shelf tools, we empower your team to innovate — not adapt.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group glass-card p-8 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
