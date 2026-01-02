import { Clock, DollarSign, TrendingUp, Shield, Zap } from "lucide-react";
import benefitsImage from "@/assets/benefits-image.jpg";

const benefits = [
  {
    icon: Clock,
    title: "Faster Turnaround Times",
    impact: "50%",
    description: "Significantly improved TAT through automated workflows and exception-based management.",
  },
  {
    icon: TrendingUp,
    title: "Increased Testing Capacity",
    impact: ">30%",
    description: "Boost in testing throughput enabling your lab to handle more samples efficiently.",
  },
  {
    icon: Zap,
    title: "Equipment Utilization",
    impact: "50%",
    description: "Improvement in equipment utilization through optimized scheduling and workflows.",
  },
  {
    icon: Shield,
    title: "System Availability",
    impact: "99.95%",
    description: "Enterprise-grade reliability with robust cloud infrastructure and secure data storage.",
  },
  {
    icon: DollarSign,
    title: "Quick ROI",
    impact: "6-12mo",
    description: "Payback period with low-cost, low-maintenance system and no hidden license fees.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 lg:py-32 relative bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={benefitsImage}
                alt="Lab operations transformation"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/20 to-transparent" />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-4 -right-4 glass-card p-5 rounded-xl shadow-card hidden lg:block">
              <div className="text-3xl font-bold text-gradient mb-1">50%</div>
              <div className="text-sm text-muted-foreground">Faster Results</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-primary mb-6">
              Proven Benefits
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Transform Your Lab with{" "}
              <span className="text-gradient">Measurable Results</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Backed by real-world implementations in pharma QC, R&D, and clinical labs — trusted by leading organizations.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <span className="text-sm font-bold text-primary">{benefit.impact}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
