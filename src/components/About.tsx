import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Globe, MapPin } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Aditya University",
      period: "2023 - 2027",
      cgpa: "8.1 CGPA",
    },
    {
      degree: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Vignan Bharathi Junior College",
      period: "2021 - 2023",
      cgpa: "8.49 CGPA",
    },
  ];


  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate computer science student with a strong foundation in full-stack development 
            and a drive to solve complex problems through innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently pursuing my B.Tech in Computer Science Engineering at Aditya University, 
                I have maintained a strong academic record with an 8.1 CGPA. My journey in technology 
                began with a curiosity about how things work, which evolved into a passion for 
                building applications that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through internships and personal projects, I've gained hands-on experience in 
                full-stack development, working with modern technologies like React Native, 
                JavaScript, and various databases. I believe in continuous learning and staying 
                updated with the latest industry trends.
              </p>
            </div>

          </div>

          {/* Right Content - Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap size={24} className="text-accent" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-gradient border border-border hover-glow smooth-transition">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <span className="text-accent font-medium">
                        {edu.cgpa}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.period}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;