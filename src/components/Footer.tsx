import { FlaskConical, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Lab<span className="text-primary">Flow</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
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
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LabFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
