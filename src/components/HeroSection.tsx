import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scene } from "@/components/ui/hero-section-3d";
import { Cpu, ShieldCheck, Layers, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Performance",
    description: "Ultra-fast data processing in every situation.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Advanced protection for complete peace of mind.",
  },
  {
    icon: Layers,
    title: "Modularity",
    description: "Easy integration with existing architecture.",
  },
  {
    icon: Zap,
    title: "Responsiveness",
    description: "Instant response to every command.",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/5 text-primary">
            ✨ Next Generation Tools
          </Badge>

          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Discover minimalism and power in{" "}
              <span className="text-gradient">one place</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Designed with aesthetics and performance in mind. Experience ultra-fast processing, advanced security, and intuitive design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Get Started
              </Button>
              <Button variant="heroOutline" size="xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 opacity-30">
        <Scene />
      </div>
    </section>
  );
};

export default HeroSection;
