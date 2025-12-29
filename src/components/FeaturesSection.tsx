import { FlaskConical, Workflow, Package, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Sample Management & Tracking",
    description: "Dynamic registration with drag-and-drop templates, barcode support, and real-time traceability from receipt to disposal.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Configurable workflows for batch processing, instrument integration, and job allocation to certified personnel.",
  },
  {
    icon: Package,
    title: "Inventory & Equipment Control",
    description: "Track consumables, reagents, and assets with usage logs, calibration scheduling, and predictive maintenance alerts.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Reporting",
    description: "AI-driven insights, custom SQL query builders, and automated reports for KPIs, stability studies, and monitoring.",
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Electronic Lab Notebook (ELN) integration for real-time collaboration across teams and locations.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Key Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built for <span className="text-gradient">Scalability</span> and Flexibility
          </h2>
          <p className="text-lg text-muted-foreground">
            Our LIMS integrates seamlessly with your existing tools. Here's what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card p-6 lg:p-8 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
