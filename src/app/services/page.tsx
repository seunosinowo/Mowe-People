import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Business As Game",
    subtitle: "Experiential Team Management Training",
    description: "An experiential leadership and teamwork programme that uses the dynamics of football to reveal how high-performing organizations actually win and through alignment, role clarity, communication, and disciplined execution.",
    impacts: ["Stronger teamwork and collaboration", "Clearer role ownership and accountability", "Better strategy execution across teams", "A unified performance mindset"],
  },
  {
    title: "P.A.S.T Leadership",
    subtitle: "Psychology, Art, Science & Technology of Leadership",
    description: "An integrated leadership framework recognizing that effective leadership requires the balanced integration of four critical intelligences: Psychology, Art, Science, and Technology.",
    impacts: ["Better decision-making and judgment", "Stronger people leadership capability", "Balanced and credible leadership style", "Greater influence and execution effectiveness"],
  },
  {
    title: "Relational Intelligence for Customer Service Excellence",
    subtitle: "Mastering the Human Side of Service",
    description: "Equips service professionals with the ability to accurately read customer expectations and respond with the right relational approach, especially in high-pressure interactions.",
    impacts: ["Reduced customer complaints", "Higher customer trust and loyalty", "Improved service professionalism", "Lower frontline staff burnout"],
  },
  {
    title: "Bringing Your A-Game to Work",
    subtitle: "Building Ownership, Responsibility & Professional Pride",
    description: "A mindset re-engineering seminar designed to move employees from passive job-holding to intentional contribution. Challenges individuals to reconnect with professional responsibility and personal standards.",
    impacts: ["Stronger ownership culture", "Higher engagement and work ethic", "Reduced blame culture", "Employees who take responsibility for results"],
  },
  {
    title: "Understanding Self & Managing Others",
    subtitle: "Psychology of Personality & Emotional Intelligence",
    description: "Equips managers and professionals with practical psychological insight into how personality, emotions, and behaviour influence workplace performance.",
    impacts: ["Stronger emotional intelligence", "Better communication across personalities", "Reduced interpersonal conflict", "More effective people management"],
  },
  {
    title: "The Workforce Republic",
    subtitle: "Employee Experience & Culture Governance Framework",
    description: "A consulting framework that helps organizations redesign employee experience and culture as systems of governance rather than slogans.",
    impacts: ["Stronger workforce trust and engagement", "Improved retention", "Clearer organizational culture", "Healthier leadership-employee relationships"],
  },
  {
    title: "AURA Framework",
    subtitle: "Workforce Intelligence & Capacity Alignment",
    description: "A workforce intelligence framework that helps organizations understand how people truly show up at work, beyond job descriptions and performance metrics.",
    impacts: ["Better role alignment and talent deployment", "Early detection of disengagement risks", "Smarter HR and leadership decisions", "Stronger workforce performance activation"],
  },
  {
    title: "MoWE-BIS Survey",
    subtitle: "Belonging & Engagement Intelligence System",
    description: "A workplace intelligence survey providing leaders with deep insight into how employees truly experience their organization, revealing leadership impact patterns and engagement gaps.",
    impacts: ["Clear visibility into organizational health", "Data-driven leadership development", "Accurate identification of culture gaps", "Better informed management decisions"],
  },
  {
    title: "2E2P Value Matrix",
    subtitle: "Performance, Productivity & Value Contribution Framework",
    description: "Evaluates employee and team performance across four critical dimensions: Effectiveness, Efficiency, Productivity, and Profit.",
    impacts: ["Objective performance evaluation", "Better productivity insights", "Improved talent deployment", "Stronger value-driven performance culture"],
  },
  {
    title: "Enterprise Guidance & Management (EGM)",
    subtitle: "Strategy Alignment & Execution System",
    description: "Helps organizations translate strategy into disciplined execution by aligning leadership direction, managerial accountability, and operational execution.",
    impacts: ["Clear strategy-to-execution alignment", "Stronger accountability systems", "Faster decision-making", "Improved organizational focus and results"],
  },
  {
    title: "ECAP",
    subtitle: "Employee Competency Assessment Platform",
    description: "A workforce capability assessment system that measures employees based on real performance readiness, not just qualifications or tenure.",
    impacts: ["Clear workforce capability visibility", "Accurate identification of skill gaps", "More targeted training investments", "Stronger succession and promotion decisions"],
  },
  {
    title: "CBAM and Certified Business Admin Manager",
    subtitle: "Mini-MBA Certification",
    description: "A practical Mini-MBA style certification designed to prepare emerging managers for real leadership responsibility with essential competencies in business administration and team supervision.",
    impacts: ["Stronger managerial readiness", "Improved supervisory effectiveness", "Better operational understanding", "Reliable pipeline of future leaders"],
  },
  {
    title: "R-CAP Executive Certification",
    subtitle: "Reputational Capital Architecture Program",
    description: "A structured executive development experience designed to help senior leaders deliberately build, protect, and compound reputational capital  the decisive differentiator at executive level.",
    impacts: ["Greater executive stability during uncertainty", "Higher-quality decision-making under pressure", "Stronger leadership credibility across stakeholders", "More durable succession pipelines"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 bg-card">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-gold uppercase mb-3">Our Offerings</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Services & Programmes</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive workforce engagement solutions spanning leadership development, organizational diagnostics, performance systems, and capability building.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
