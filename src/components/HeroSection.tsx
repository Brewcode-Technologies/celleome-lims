import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Coming Soon — Join the Waitlist
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up-delay-1">
              Revolutionize Your Lab with{" "}
              <span className="text-gradient">Advanced LIMS</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up-delay-2">
              Streamline workflows, ensure compliance, and boost efficiency. Our cloud-based LIMS reduces errors and accelerates turnaround times by up to 50%.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up-delay-3">
              <Button variant="hero" size="xl" className="group">
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Explore Features
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-12 pt-8 border-t border-border animate-fade-up-delay-3">
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

          {/* Hero Image */}
          <div className="relative animate-fade-up-delay-2">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Modern lab environment with digital data flow"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl shadow-card animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Real-time Tracking</div>
                  <div className="text-xs text-muted-foreground">From receipt to disposal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
