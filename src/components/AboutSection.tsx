import { GraduationCap, Code, Database, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Programming",
    description: "Python, Java, C++",
  },
  {
    icon: Database,
    title: "Data Science",
    description: "ML, SQL, Analytics",
  },
  {
    icon: Globe,
    title: "Web Dev",
    description: "HTML, CSS, WordPress",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "CS @ AIU",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-wide mb-2">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Passionate About Data & Technology
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a final-year Computer Science student at Albukhary
                International University (AIU), with an expected graduation in
                December 2026. My journey in tech has been driven by a deep
                curiosity for how data can transform decision-making.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in working with Python, SQL, and Power BI to clean,
                analyze, and visualize data, transforming raw information into
                actionable insights. Beyond analytics, I also have experience
                with HTML, CSS, and WordPress, creating functional and
                user-friendly web solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy exploring AI-driven projects and contributing to
                data-driven solutions that make a real impact. My goal is to
                bridge the gap between complex data and meaningful business
                outcomes.
              </p>

              {/* Education Badge */}
              <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Bachelor's in Computer Science
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Albukhary International University • Dec 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
