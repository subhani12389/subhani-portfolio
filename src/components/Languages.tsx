import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";

const Languages = () => {
  const languages = [
    "English", "Telugu", "Hindi", "Urdu", "Japanese (Intermediate)", "Arabic (Beginner)"
  ];

  return (
    <section id="languages" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Languages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multilingual communication skills across different cultures and regions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient border border-border hover-glow smooth-transition">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Globe size={32} className="text-accent mr-3" />
                <h3 className="text-2xl font-semibold">Speaking Languages</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm border border-border hover:border-accent smooth-transition"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Languages;