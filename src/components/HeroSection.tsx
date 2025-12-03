import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <p
                className="text-primary font-semibold tracking-wide opacity-0 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Hello, I'm
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight opacity-0 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Hasibullah{" "}
                <span className="text-gradient">Naeim</span>
              </h1>
              <p
                className="text-lg md:text-xl text-muted-foreground font-medium opacity-0 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                Computer Science Student | Data Science & ML Enthusiast
              </p>
              <p
                className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                I'm a final-year Computer Science student at Albukhary
                International University passionate about data science, machine
                learning, and analytics. I work with Python, SQL, and Power BI
                to clean, analyze, and visualize data, turning it into
                actionable insights.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <Button asChild size="lg" className="shadow-glow">
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Hire Me
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#projects">View Projects</a>
                </Button>
              </div>

              {/* Social Links */}
              <div
                className="flex gap-4 justify-center lg:justify-start pt-4 opacity-0 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="https://www.linkedin.com/in/hasibullah-naeim-091902342/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/HasibullahNaeim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:hasib.naeim08@gmail.com"
                  className="p-3 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="order-1 lg:order-2 opacity-0 animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-card-hover animate-float">
                <img
                  src={profilePhoto}
                  alt="Hasibullah Naeim"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 lg:mt-20">
          <a
            href="#about"
            className="animate-bounce p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
