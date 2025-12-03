import { BarChart2, Code2, Brain, Sparkles } from "lucide-react";

const services = [
  {
    icon: BarChart2,
    title: "Data Analysis",
    description:
      "Transform raw data into actionable insights using Python, SQL, and visualization tools like Power BI and Tableau.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Build predictive models and implement ML solutions for classification, regression, and pattern recognition tasks.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Create clean, responsive websites and web applications using HTML, CSS, JavaScript, and WordPress.",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description:
      "Explore and implement AI-driven projects that automate processes and enhance decision-making.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wide mb-2">
            What I Can Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services & Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm open to freelance projects and collaborations. Here's what I can
            help you with.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
