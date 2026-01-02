import SyntheticHero from "@/components/ui/synthetic-hero";

export default function SyntheticHeroDemo() {
  return (
    <div className="w-screen h-screen flex flex-col relative">
      <SyntheticHero
        title="Revolutionize your laboratory workflow with AI-powered LIMS."
        description="Celleome Diagnostics offers affordable, accessible, high-quality Laboratory Information Management System (LIMS). Digitizing laboratories with AI-powered solutions."
        badgeText="AI-Powered LIMS"
        badgeLabel="Innovation"
        ctaButtons={[
          { text: "Join Waitlist", href: "#waitlist", primary: true },
          { text: "Watch Demo", href: "#demo" }
        ]}
        microDetails={[
          "Advanced laboratory management",
          "AI-powered diagnostics",
          "Pharmaceutical & biotech ready",
        ]}
      />
    </div>
  );
}