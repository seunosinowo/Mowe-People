import Link from "next/link";
import { ArrowRight, Users, Brain, BarChart3, GraduationCap, Target, Shield, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceCategories = [
  {
    icon: Brain,
    title: "Leadership & Executive Development",
    items: ["P.A.S.T Leadership", "Reputational Capital (R-CAP)", "Understanding Self & Managing Others"],
  },
  {
    icon: BarChart3,
    title: "Workforce Intelligence & Diagnostics",
    items: ["Workforce Republic", "AURA Framework", "MoWE-BIS Survey", "ECAP"],
  },
  {
    icon: Users,
    title: "Performance & Organizational Systems",
    items: ["2E2P Value Matrix", "Enterprise Guidance & Management"],
  },
  {
    icon: GraduationCap,
    title: "Capability Development Programmes",
    items: ["Business As Game", "Bringing Your A-Game to Work", "CBAM Mini-MBA"],
  },
];

const featuredServices = [
  {
    title: "Business As Game",
    subtitle: "Experiential Team Management Training",
    description: "Uses the dynamics of football to reveal how high-performing organizations actually win through alignment, role clarity, communication, and disciplined execution. Participants step into live gameplay where real leadership behaviors emerge naturally.",
    impacts: ["Stronger teamwork and collaboration", "Clearer role ownership", "Better strategy execution", "Unified performance mindset"],
    icon: Target,
  },
  {
    title: "P.A.S.T Leadership",
    subtitle: "Psychology, Art, Science & Technology of Leadership",
    description: "An integrated framework recognizing that effective leadership requires balanced integration of Psychology, Art, Science, and Technology. Leaders learn to integrate analytical thinking with people understanding, structure with creativity.",
    impacts: ["Better decision-making", "Stronger people leadership", "Balanced leadership style", "Greater influence & execution"],
    icon: Lightbulb,
  },
  {
    title: "R-CAP Executive Certification",
    subtitle: "Reputational Capital Architecture Program",
    description: "Helps senior leaders deliberately build, protect, and compound reputational capital, the decisive differentiator at the executive level that determines promotion, succession, and board visibility.",
    impacts: ["Executive stability under uncertainty", "Higher-quality decisions", "Stronger credibility", "Durable succession pipelines"],
    icon: Shield,
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "13+", label: "Proprietary Frameworks" },
  { value: "100+", label: "Organizations Served" },
  { value: "4", label: "Service Categories" },
];

const whyChoose = [
  {
    title: "Proprietary Frameworks",
    description: "Every programme is built on original, research-backed intellectual property and not recycled generic content.",
  },
  {
    title: "People-Centred Approach",
    description: "We believe that strategy without people understanding is incomplete. Every solution starts with human behaviour.",
  },
  {
    title: "Measurable Impact",
    description: "Our frameworks deliver tangible outcomes and reduced turnover, stronger engagement, clearer accountability, and better decisions.",
  },
  {
    title: "Executive-Level Expertise",
    description: "Led by a seasoned HR professional with certifications from global institutions and deep practitioner experience.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{ backgroundImage: "url(/hero-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-background" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-crimson/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gold/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        
        {/* Floating Particles */}
        <div className="absolute top-32 left-1/3 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }} />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-crimson/30 rounded-full animate-bounce" style={{ animationDelay: "1s", animationDuration: "3.5s" }} />
        <div className="absolute bottom-40 left-1/2 w-2 h-2 bg-gold/30 rounded-full animate-bounce" style={{ animationDelay: "2s", animationDuration: "2.5s" }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-end animate-fade-in-up order-1 md:order-2" style={{ animationDelay: "0.3s" }}>
              <img
                src="/fredrick-okeagu.png"
                alt="Fredrick Okeagu - Lead Consultant at MOWE Global"
                className="w-72 md:w-96 object-contain drop-shadow-2xl"
              />
            </div>
            <div className="animate-fade-in-up order-2 md:order-1">
              <p className="text-xs tracking-[0.4em] text-primary uppercase mb-4 mt-8 md:mt-0">Ministry of Workforce Engagement</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                People First.<br />
                <span className="text-primary">Strategy Always.</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Transforming organizations through workforce intelligence, leadership development, and performance systems that deliver sustainable results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm text-sm font-medium hover:bg-crimson-light transition-colors"
                >
                  Explore Services <ArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-sm text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  Meet Our Consultant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary-previous py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-primary uppercase mb-3">What We Do</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Service Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive workforce engagement solutions spanning leadership development, organizational diagnostics, performance systems, and capability building.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((cat) => (
              <div key={cat.title} className="bg-gradient-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all group">
                <cat.icon className="text-primary mb-4" size={28} />
                <h3 className="font-serif text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-crimson-light transition-colors"
            >
              View all services in detail <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-primary uppercase mb-3">Signature Programmes</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Featured Offerings</h2>
          </div>
          <div className="space-y-8">
            {featuredServices.map((service, i) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
              >
                <div className={`bg-gradient-card rounded-lg border border-border flex items-center justify-center min-h-[200px] md:min-h-[280px] overflow-hidden ${i % 2 === 1 ? "md:order-2 order-1" : "order-1"}`}>
                  <img src={service.title === "R-CAP Executive Certification" ? "/gold.webp" : i % 2 === 0 ? "/african.webp" : "/black.webp"} alt={service.title} className="w-full h-auto max-h-full object-contain opacity-80" loading="lazy" />
                </div>
                <div className={i % 2 === 1 ? "md:order-1 order-2" : "order-2"}>
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="text-primary" size={24} />
                    <p className="text-xs tracking-[0.3em] text-primary uppercase">{service.subtitle}</p>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.impacts.map((impact) => (
                      <li key={impact} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MOWE */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-primary uppercase mb-3">Why MOWE Global</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">What Sets Us Apart</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Consultant Teaser */}
      <section className="relative py-24 bg-background">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center relative">
              <div 
                className="absolute inset-0 rounded-lg opacity-30"
                style={{ 
                  backgroundImage: "url(/about-hero.webp)", 
                  backgroundSize: "cover", 
                  backgroundPosition: "center"
                }}
              />
              <img
                src="/fredrick-okeagu.png"
                alt="Fredrick Okeagu"
                className="rounded-lg w-64 md:w-72 aspect-square object-cover shadow-2xl relative z-10"
                loading="lazy"
                width={288}
                height={288}
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.4em] text-primary uppercase mb-3">Lead Consultant</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Fredrick Okeagu</h2>
              <p className="text-primary font-serif text-lg font-bold mb-6">"Fred Rabbi"</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A seasoned HR professional with over 15 years of experience in Human Capital Management. Certified Management Consultant, ISO certified consultant, and certified KPI professional from the KPI Institute of Australia.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fredrick holds a Master's in International HRM from Valencia International University & Rome Business School, and is currently pursuing his Ph.D. in Industrial Relations & HR at Covenant University.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-crimson-light transition-colors"
              >
                Read full profile <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-previous">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Partner with MOWE Global for leadership development, workforce diagnostics, and performance systems tailored to your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:moweglobaloffice@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-background text-foreground rounded-sm text-sm font-medium hover:bg-secondary transition-colors"
            >
              Get in Touch <ArrowRight size={16} />
            </a>
            <a
              href="tel:+2348032613268"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary-foreground/30 text-primary-foreground rounded-sm text-sm font-medium hover:border-primary-foreground transition-colors"
            >
              Call +234 803 261 3268
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
