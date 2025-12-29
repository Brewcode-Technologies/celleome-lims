import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import ctaImage from "@/assets/cta-image.jpg";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 lg:p-16 overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img
              src={ctaImage}
              alt="Streamlined digital workflow"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-sm font-medium text-primary mb-6">
              Coming Soon
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="text-gradient">Digitize</span> and Simplify?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              We're gearing up to launch soon. Join thousands of scientists accelerating discovery by signing up for updates and early access.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Download className="w-5 h-5" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
