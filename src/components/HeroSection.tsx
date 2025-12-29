import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scene } from "@/components/ui/hero-section-3d";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex items-center pt-20">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="outline" className="mb-8 border-primary/30 bg-primary/5 text-primary animate-fade-up">
            <Sparkles className="w-4 h-4 mr-2" />
            Coming Soon — Join the Waitlist
          </Badge>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up-delay-1">
            Revolutionize Your Lab with{" "}
            <span className="text-gradient">Advanced LIMS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 max-w-3xl animate-fade-up-delay-2">
            Streamline Lab Workflows, Ensure Compliance, and Boost Efficiency. Discover the power of our cloud-based Laboratory Information Management System (LIMS) – designed for pharmaceutical, biotech, and research labs.
          </p>
          
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl animate-fade-up-delay-2">
            From sample tracking to automated reporting, our intuitive platform digitizes your processes, reduces errors, and accelerates turnaround times by up to 50%.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <Button variant="hero" size="xl" className="group">
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Features
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 justify-center mt-12 pt-8 border-t border-border animate-fade-up-delay-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">50%</div>
              <div className="text-sm text-muted-foreground">Faster TAT</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">99%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">30%</div>
              <div className="text-sm text-muted-foreground">Capacity Boost</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-25">
        <Scene />
      </div>
    </section>
  );
};

export default HeroSection;
