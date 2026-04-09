import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-primary uppercase mb-3">Get In Touch</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Reach out to MOWE Global for leadership development, workforce diagnostics, and performance systems tailored to your organization.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-start gap-5 p-6 rounded-lg border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">Email</h3>
                <a href="mailto:moweglobaloffice@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  moweglobaloffice@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 rounded-lg border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">Phone</h3>
                <a href="tel:+2348032613268" className="text-muted-foreground hover:text-primary transition-colors">
                  +234 803 261 3268
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 rounded-lg border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
