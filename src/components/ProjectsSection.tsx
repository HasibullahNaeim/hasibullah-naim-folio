import { ExternalLink, Github, BarChart3, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Tourism Footprint Analytics System",
    subtitle: "Final Year Project - Kedah",
    description:
      "A full-stack web platform for analyzing and visualizing real-time tourism data. Features include social media analytics, interactive dashboards, event tracking, and geospatial mapping to help stakeholders understand tourism patterns.",
    tags: ["Analytics", "Full-Stack", "Data Engineering", "Visualization"],
    icon: BarChart3,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Crime Pattern Analysis & Prediction",
    subtitle: "Machine Learning Project",
    description:
      "Comprehensive data cleaning, analysis, and implementation of supervised & unsupervised ML models. Built classification models to predict crime types with high accuracy using historical crime data.",
    tags: ["Python", "Pandas", "Scikit-learn", "ML"],
    icon: Shield,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Student Registration System",
    subtitle: "Web Development Project",
    description:
      "A user-friendly web interface built with HTML, CSS, and JavaScript. Features include student registration forms, attendance tracking, and enrollment management with focus on clean UI/UX.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    icon: Users,
    color: "bg-purple-500/10 text-purple-600",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wide mb-2">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills in data science,
            machine learning, and web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 pb-0">
                <div
                  className={`w-14 h-14 rounded-xl ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href="#contact">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Details
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://github.com/hasibullah-naeim"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
