import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import profileImage from "/lovable-uploads/657bc8d4-502d-4ca0-845a-13328cbce1b2.png";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/subhani12389", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/subhani-shaik-5262b32a1", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sk5826314@gmail.com", label: "Email" },
  ];

  const stats = [
    { number: "3+", label: "Years Learning" },
    { number: "10+", label: "Projects Done" },
    { number: "500+", label: "Problems Solved" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center hero-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <p className="text-accent text-lg font-medium mb-2">Hi, I am</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
                <span className="text-foreground">Mahaboob</span>{" "}
                <span className="text-gradient bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                  Subhani
                </span>
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-accent mb-6">
                Aspiring Full Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
                Building scalable applications and solving complex problems with modern technologies. 
                Currently pursuing B.Tech in Computer Science Engineering at Aditya University.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full hover-glow smooth-transition hover-scale"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="lg" className="group">
                Hire Me
                <ExternalLink size={16} className="group-hover:translate-x-1 smooth-transition" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Download size={16} className="group-hover:translate-y-1 smooth-transition" />
                Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glow-effect">
                <img
                  src={profileImage}
                  alt="Mahaboob Subhani - Full Stack Developer"
                  className="w-full h-full object-cover hover-scale smooth-transition"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;