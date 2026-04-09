import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="MOWE Global Logo" className="h-10 w-auto brightness-0 invert" />
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-0">MOWE</h3>
                <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Global</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ministry of Workforce Engagement.<br />
              People First. Strategy Always.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:moweglobaloffice@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} /> moweglobaloffice@gmail.com
              </a>
              <a href="tel:+2348032613268" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={14} /> +234 803 261 3268
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} MOWE Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
