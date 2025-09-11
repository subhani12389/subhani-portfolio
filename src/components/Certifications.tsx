import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      category: "Python Programming",
      provider: "Multiple Platforms",
      certs: [
        { title: "Python Programming", issuer: "Cisco", level: "Intermediate" },
        { title: "Python Fundamentals", issuer: "Infosys", level: "Foundation" },
        { title: "Python (Basic)", issuer: "HackerRank", level: "Basic" },
      ]
    },
    {
      category: "Java Development",
      provider: "Multiple Platforms", 
      certs: [
        { title: "Java SE Programming", issuer: "Oracle", level: "Professional" },
        { title: "Java Programming", issuer: "Infosys", level: "Intermediate" },
      ]
    },
    {
      category: "Database Management",
      provider: "Multiple Platforms",
      certs: [
        { title: "SQL Fundamentals", issuer: "Oracle", level: "Foundation" },
        { title: "Database Design", issuer: "Infosys", level: "Intermediate" },
        { title: "SQL (Basic)", issuer: "HackerRank", level: "Basic" },
      ]
    },
    {
      category: "System Administration",
      provider: "Multiple Platforms",
      certs: [
        { title: "Operating Systems", issuer: "Infosys", level: "Foundation" },
        { title: "Linux Essentials", issuer: "Red Hat", level: "Intermediate" },
      ]
    },
    {
      category: "Web Technologies",
      provider: "Multiple Platforms",
      certs: [
        { title: "Web Development Fundamentals", issuer: "Infosys", level: "Foundation" },
        { title: "Network Fundamentals", issuer: "Cisco", level: "Intermediate" },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'basic':
        return 'bg-blue-500/20 text-blue-400';
      case 'foundation':
        return 'bg-green-500/20 text-green-400';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'professional':
        return 'bg-purple-500/20 text-purple-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span> & Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and training programs that validate my technical 
            expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((category, index) => (
            <Card key={index} className="card-gradient border border-border hover-glow smooth-transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Award size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                    <p className="text-sm text-muted-foreground">{category.provider}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.certs.map((cert, certIndex) => (
                    <div key={certIndex} className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 smooth-transition">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{cert.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(cert.level)}`}>
                          {cert.level}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Issued by <span className="text-accent font-medium">{cert.issuer}</span>
                        </p>
                        <button className="text-accent hover:text-accent/80 smooth-transition p-1">
                          <ExternalLink size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "15+", label: "Certifications" },
              { number: "5", label: "Platforms" },
              { number: "6", label: "Technologies" },
              { number: "100%", label: "Completion Rate" },
            ].map((stat, index) => (
              <Card key={index} className="text-center hover-scale smooth-transition">
                <CardContent className="p-6">
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;