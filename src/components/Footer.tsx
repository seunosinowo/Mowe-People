"use client";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-14 w-14 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
            <div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
            <div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="space-y-3">
                <div className="h-3 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border text-center">
            <div className="h-3 bg-gray-200 rounded animate-pulse mx-auto w-48" />
          </div>
        </div>
      </footer>
    );
  }
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4 group">
              <img src="/logowhiite.PNG" alt="MOWE Logo" className="h-14 w-auto transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" />
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
