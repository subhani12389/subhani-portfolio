import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "Technical Hub Pvt Ltd",
    position: "Full Stack Developer Intern",
    period: "May 2025 - June 2025",
    location: "Remote",
    achievements: [
      "Built cross-platform mobile applications using React Native",
      "Developed responsive user interfaces with modern web technologies",
      "Improved user experience through intuitive design implementations",
      "Collaborated with development team on code reviews and verification",
      "Gained hands-on experience with full-stack development workflows"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience gained through internships and hands-on projects 
            in full-stack development and software engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient border border-border hover-glow smooth-transition">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Building size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{experience.position}</h3>
                    <p className="text-accent font-medium">{experience.company}</p>
                    <p className="text-sm text-muted-foreground">{experience.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-medium mb-4">Key Achievements:</h4>
                {experience.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h5 className="font-medium mb-2">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Git", "GitHub"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Goals */}
          <div className="mt-12 text-center">
            <Card className="card-gradient border border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Looking Forward</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seeking full-time opportunities in software development where I can contribute 
                  to innovative projects, work with cutting-edge technologies, and continue 
                  growing as a developer. Open to roles in web development, mobile app development, 
                  and full-stack engineering.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;