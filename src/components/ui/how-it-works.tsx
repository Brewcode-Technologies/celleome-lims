"use client";

import LimsWorkflow from "@/components/ui/lims-workflow";

export function HowItWorks() {
  return (
    <section className="py-12 md:py-20 bg-muted/20" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our comprehensive workflow visualization shows the complete laboratory data journey
          </p>
        </div>
        
        <div className="flex justify-center">
          <LimsWorkflow
            circleText="LIMS"
            badgeTexts={{
              first: "Sample Intake",
              second: "Data Processing", 
              third: "Quality Control",
              fourth: "Final Report"
            }}
            buttonTexts={{
              first: "Celleome",
              second: "v3_lims"
            }}
            title="Laboratory data flows seamlessly through our LIMS"
            lightColor="#3ee0cf"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}