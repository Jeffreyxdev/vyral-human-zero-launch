import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-secondary">
            WHO IS VYRAL?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are the architects of digital transformation, the catalysts of 
            Web3 revolution, and the voices that turn whispers into roars.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Company */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-primary hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">THE COMPANY</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum in nunc quis libero facilisis vehicula. Sed 
                consectetur, risus in tempor aliquam, nunc nulla tincidunt 
                massa, vel cursus ipsum lorem sed nunc. Donec vitae 
                sollicitudin mauris, eu tempus justo.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="bg-gradient-to-br from-vyral-green/5 to-vyral-green/10 border-vyral-green/20 shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-vyral-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-vyral-green mb-4">OUR MISSION</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pellentesque habitant morbi tristique senectus et netus 
                et malesuada fames ac turpis egestas. Mauris blandit 
                aliquet elit, eget tincidunt nibh pulvinar a. Curabitur 
                arcu erat, accumsan id imperdiet et, porttitor at sem.
              </p>
            </CardContent>
          </Card>

          {/* Team */}
          <Card className="bg-gradient-to-br from-vyral-teal/5 to-vyral-teal/10 border-vyral-teal/20 shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-vyral-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-vyral-teal mb-4">THE TEAM</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Nulla facilisi morbi tempus iaculis urna id volutpat 
                lacus laoreet non curabitur gravida. Arcu cursus vitae 
                congue mauris rhoncus aenean vel elit scelerisque mauris 
                pellentesque pulvinar pellentesque habitant.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Extended Description */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-secondary mb-6">
              Beyond Traditional Marketing
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;