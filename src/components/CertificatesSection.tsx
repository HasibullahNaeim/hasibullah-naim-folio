import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import preUniversityEnglish from "@/assets/certificates/pre-university-english.jpg";
import pythonEssentials from "@/assets/certificates/python-essentials.jpg";
import googleCloud from "@/assets/certificates/google-cloud.png";
import powerBi from "@/assets/certificates/power-bi.jpeg";

const certificates = [
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "Nov 2025",
    image: pythonEssentials,
  },
  {
    title: "Power BI",
    issuer: "365 Data Science",
    date: "Nov 2025",
    image: powerBi,
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "Sep 2025",
    image: googleCloud,
  },
  {
    title: "Pre-University English Programme",
    issuer: "Albukhary International University",
    date: "2022/2023",
    image: preUniversityEnglish,
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Award size={16} />
            <span className="text-sm font-medium">Achievements</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certificates & Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional development through industry-recognized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-card border-border/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-sm text-foreground flex items-center gap-1">
                    <ExternalLink size={14} />
                    View Certificate
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground/70">{cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
