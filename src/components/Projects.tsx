import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Clock, Users, TrendingUp } from "lucide-react";

const Projects = () => {
  const featuredProject = {
    title: "QuickFix - Home Services Booking Platform",
    description: "A comprehensive web platform that revolutionizes how users book home services, featuring real-time booking, secure payments, and efficient service management.",
    image: "/api/placeholder/600/400",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    features: [
      "OTP-based verification system for secure user authentication",
      "Geolocation integration for location-based service discovery",
      "Comprehensive review and rating system",
      "Booking history and service tracking",
      "Secure service provider listings and verification"
    ],
    impact: "Reduced booking time by 80%",
    links: {
      live: "#",
      github: "#"
    }
  };

  const otherProjects = [
    {
      title: "Patient Appointment System",
      description: "A streamlined system for managing patient appointments with doctors, featuring scheduling, notifications, and medical record management.",
      technologies: ["Java", "MySQL", "Swing"],
      status: "In Development"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing projects, skills, and professional experience with modern design principles.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      status: "Completed"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive web application for visualizing sorting and searching algorithms to help students understand algorithmic concepts.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through 
            real-world applications and innovative solutions.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <Card className="card-gradient border border-border hover-glow smooth-transition overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative bg-muted/30 p-8 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Clock size={32} className="text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground">Project Screenshot</p>
                    <p className="text-xs text-muted-foreground mt-1">Coming Soon</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={20} className="text-accent" />
                    <span className="text-sm font-medium text-accent">Featured Project</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{featuredProject.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredProject.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {featuredProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={16} className="text-accent" />
                      <span className="font-medium">Impact:</span>
                    </div>
                    <p className="text-accent font-semibold">{featuredProject.impact}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="hero" size="sm" className="group">
                      <ExternalLink size={16} className="group-hover:translate-x-1 smooth-transition" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="group">
                      <Github size={16} className="group-hover:scale-110 smooth-transition" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            Other <span className="text-gradient">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="card-gradient border border-border hover-glow smooth-transition hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github size={14} />
                      Code
                    </Button>
                    {project.status === 'Completed' && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink size={14} />
                        Demo
                      </Button>
                    )}
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

export default Projects;
