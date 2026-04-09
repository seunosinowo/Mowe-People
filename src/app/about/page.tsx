import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Award, BookOpen, Briefcase, Users, Target, Shield, Lightbulb, ArrowUp, Zap } from "lucide-react";

const credentials = [
  "Ph.D. candidate in Industrial Relations & HR at Covenant University",
  "Master's in International Human Resources Management at Valencia International University, Spain & Rome Business School",
  "PGD in Guidance & Counselling at University of Lagos",
  "Bachelor in Engineering at University of Nigeria, Nsukka",
  "Certified Management Consultant at Centre for Management Development (CMD)",
  "ISO Certified Consultant & Certified KPI Professional at KPI Institute of Australia",
  "Chartered Institute of Personnel Management (CIPM) Nigeria",
];

const roles = [
  "Consultant Trainer at Nigeria Employers Consultative Association (NECA)",
  "FCMB Training Academy Faculty Member",
  "Trainer at Fate Foundation & Fate School, Lagos",
  "Career Counselor at Rome Business School",
  "President, Smart Couples Clinic at Family Guidance & Counselling Centre",
  "Managing Partner, HRM Office Ltd at HR Technology & Consulting, Lagos",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20" style={{ backgroundImage: "url(/about-hero.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-background/90" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-1 md:order-2">
              <img
                src="/fredrick-okeagu.png"
                alt="Fredrick Okeagu - Lead Consultant"
                className="w-72 md:w-80 object-contain drop-shadow-2xl"
                loading="lazy"
                width={320}
                height={320}
              />
            </div>
            <div className="order-2 md:order-1">
              <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">Meet Our Lead Consultant</p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                Fredrick Okeagu
              </h1>
              <p className="text-primary font-serif text-lg mb-6">"Fred Rabbi"</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A seasoned HR professional with over 15 years of experience in Human Capital Management. Fredrick is a practicing Senior HR Professional & Performance Management expert, personality assessment coach, and the initiator of the novel Certified Business Admin & Managers Course (CBAM).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His work spans leadership development, workforce intelligence, and organizational performance systems and helping organizations build cultures where commitment is earned and performance is sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-primary" size={22} />
                <h2 className="font-serif text-2xl font-bold text-foreground">Qualifications & Certifications</h2>
              </div>
              <ul className="space-y-3">
                {credentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <BookOpen size={14} className="text-gold mt-0.5 shrink-0" />
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-primary" size={22} />
                <h2 className="font-serif text-2xl font-bold text-foreground">Professional Roles</h2>
              </div>
              <ul className="space-y-3">
                {roles.map((role, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] text-primary uppercase mb-3">What We Stand For</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "People First", desc: "Every strategy begins and ends with people. We believe human understanding is the foundation of organizational success." },
              { icon: Shield, title: "Integrity", desc: "We hold ourselves to the highest ethical standards – transparent, honest, and accountable in every engagement." },
              { icon: Lightbulb, title: "Innovation", desc: "We develop original, research-backed frameworks and never recycled content. Every solution is purpose-built." },
              { icon: ArrowUp, title: "Impact", desc: "We measure success by tangible outcomes and stronger teams, better decisions, and sustainable performance." },
            ].map((value) => (
              <div key={value.title} className="p-6 rounded-lg border border-border hover:border-primary/30 transition-all text-center group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Interested in transforming your organization's workforce? Reach out to discuss how MOWE Global can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:moweglobaloffice@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm text-sm font-medium hover:bg-crimson-light transition-colors"
            >
              <Mail size={16} /> moweglobaloffice@gmail.com
            </a>
            <a
              href="tel:+2348032613268"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-sm text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <Phone size={16} /> +234 803 261 3268
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
