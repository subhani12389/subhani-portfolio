import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Globe, 
  Database, 
  Settings, 
  BookOpen,
  Terminal
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C", "C++", "Python", "Java", "JavaScript"],
      color: "text-blue-400",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML5", "CSS3", "Bootstrap", "React", "React Native"],
      color: "text-green-400",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQL", "MySQL", "Django ORM"],
      color: "text-purple-400",
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: ["Git", "GitHub", "Linux", "VS Code"],
      color: "text-orange-400",
    },
    {
      title: "CS Fundamentals",
      icon: BookOpen,
      skills: ["Data Structures", "Algorithms", "Operating Systems", "DBMS"],
      color: "text-red-400",
    },
    {
      title: "Development",
      icon: Terminal,
      skills: ["Full Stack Development", "Cross-platform Apps", "Responsive Design", "REST APIs"],
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools that I use to build 
            modern applications and solve complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-gradient border border-border hover-glow smooth-transition group"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary rounded-lg">
                    <category.icon 
                      size={24} 
                      className={`${category.color} group-hover:scale-110 smooth-transition`} 
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-2 bg-muted/50 rounded-md"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 4 ? 'bg-accent' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coding Platforms */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Coding <span className="text-gradient">Profiles</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "LeetCode", rating: "1400+", problems: "250+ Problems Solved", url: "https://leetcode.com/u/shaik_subhani_786/" },
              { name: "CodeChef", rating: "1⭐ Coder (1197)", problems: "600+ Problems Solved", url: "https://www.codechef.com/users/subhani_shaik" },
              { name: "HackerRank", rating: "5⭐ Gold", problems: "Python & Java", url: "https://www.hackerrank.com/profile/sk5826314" },
            ].map((platform, index) => (
              <Card key={index} className="card-gradient border border-border hover-glow smooth-transition">
                <CardContent className="p-6 text-center">
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:scale-105 smooth-transition"
                  >
                    <h4 className="text-lg font-semibold mb-2 text-accent hover:text-accent/80">
                      {platform.name}
                    </h4>
                    <p className="text-muted-foreground mb-1">
                      Rating: {platform.rating}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {platform.problems}
                    </p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;