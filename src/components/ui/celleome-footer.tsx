"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Globe,
  Shield,
} from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";
import celleomeFooterLogo from "@/assets/Celleome_Logo-white -footer.png";

function CelleomeFooter() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Benefits", href: "#benefits" },
        { label: "Compliance", href: "#compliance" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Blog", href: "#blog" },
        {
          label: "Support",
          href: "#support",
          pulse: true,
        },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ee0cf]" />,
      text: "prashant.singh@icloud.com",
      href: "mailto:prashant.singh@icloud.com",
    },
    {
      icon: <Phone size={18} className="text-[#3ee0cf]" />,
      text: "+91 8847562006",
      href: "tel:+918847562006",
    },
    {
      icon: <MapPin size={18} className="text-[#3ee0cf]" />,
      text: "Noida, UP",
    },
    {
      icon: <Globe size={18} className="text-[#3ee0cf]" />,
      text: "www.celleome.com",
      href: "https://www.celleome.com",
    },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Github size={20} />, label: "GitHub", href: "#" },
    { icon: <Globe size={20} />, label: "Website", href: "#" },
  ];

  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={celleomeFooterLogo} 
                alt="Celleome Diagnostics" 
                className="h-15 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              AI-powered Laboratory Information Management System (LIMS) for pharmaceutical, biotech, and research laboratories.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-[#3ee0cf] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#3ee0cf] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-[#3ee0cf] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground hover:text-[#3ee0cf] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#3ee0cf] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-muted-foreground">
            &copy; {new Date().getFullYear()} Celleome Diagnostics. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[20rem] -mt-36 -mb-24">
        <TextHoverEffect text="Celleome" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default CelleomeFooter;