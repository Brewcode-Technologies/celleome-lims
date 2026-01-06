import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import celleomeLogo from "@/assets/celleome-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <a href="#" className="flex items-center mb-4">
              <img 
                src={celleomeLogo} 
                alt="Celleome Diagnostics" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-sm text-muted-foreground">
              Affordable, Accessible, High-Quality Laboratory Information Management System (LIMS) for All
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Noida, UP, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+918847562006" className="hover:text-foreground transition-colors">
                  +91 8847562006
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:prashant.singh@icloud.com" className="hover:text-foreground transition-colors">
                  prashant.singh@icloud.com
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a>
              <a href="#compliance" className="hover:text-foreground transition-colors">Compliance</a>
              <a href="#why-us" className="hover:text-foreground transition-colors">Why Choose Us</a>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-4">
            <a
              href="https://www.celleome.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              www.celleome.com
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>

        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
