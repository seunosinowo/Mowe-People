import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm text-sm font-medium hover:bg-crimson-light transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
