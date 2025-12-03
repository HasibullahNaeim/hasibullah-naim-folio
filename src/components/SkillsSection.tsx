import { useEffect, useRef, useState } from "react";

const programmingSkills = [
  { name: "Python", level: 95, color: "bg-primary" },
  { name: "Java", level: 90, color: "bg-primary" },
  { name: "SQL / MySQL", level: 85, color: "bg-primary" },
  { name: "C++", level: 70, color: "bg-primary" },
];

const dataSkills = [
  { name: "Machine Learning", level: 85 },
  { name: "Data Analysis", level: 90 },
  { name: "Data Visualization", level: 88 },
  { name: "Tableau / Power BI", level: 80 },
];

const webSkills = [
  { name: "HTML / CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "WordPress", level: 80 },
];

const tools = [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "SQL",
  "MySQL",
  "Power BI",
  "Tableau",
  "Git",
  "VS Code",
  "Jupyter",
  "HTML5",
  "CSS3",
  "JavaScript",
  "WordPress",
];

const SkillBar = ({
  skill,
  isVisible,
}: {
  skill: { name: string; level: number; color?: string };
  isVisible: boolean;
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full ${skill.color || "bg-primary"} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wide mb-2">
            My Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across programming,
            data science, and web development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Programming Skills */}
          <div className="bg-card p-6 rounded-2xl shadow-card">
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Programming Languages
            </h3>
            <div className="space-y-5">
              {programmingSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>
          </div>

          {/* Data Science Skills */}
          <div className="bg-card p-6 rounded-2xl shadow-card">
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Data Science & ML
            </h3>
            <div className="space-y-5">
              {dataSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>
          </div>

          {/* Web Development Skills */}
          <div className="bg-card p-6 rounded-2xl shadow-card md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Web Development
            </h3>
            <div className="space-y-5">
              {webSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-foreground mb-6">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <span
                key={tool}
                className="px-4 py-2 bg-card text-foreground text-sm font-medium rounded-full shadow-card hover:shadow-card-hover hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
