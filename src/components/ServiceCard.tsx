interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  impacts: string[];
}

const ServiceCard = ({ title, subtitle, description, impacts }: ServiceCardProps) => {
  return (
    <div className="bg-gradient-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300 group">
      <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-xs text-gold tracking-wide mt-1 mb-3">{subtitle}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      <div>
        <p className="text-xs font-semibold text-foreground mb-2">Key Impact</p>
        <ul className="space-y-1">
          {impacts.map((impact, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
              {impact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
