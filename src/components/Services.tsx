import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, 
  Users, 
  TrendingUp, 
  Zap, 
  Globe, 
  Rocket,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Viral Marketing Campaigns",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nunc quis libero facilisis vehicula.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Sed consectetur, risus in tempor aliquam, nunc nulla tincidunt massa, vel cursus ipsum lorem sed nunc.",
      color: "vyral-green"
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Donec vitae sollicitudin mauris, eu tempus justo. Pellentesque habitant morbi tristique senectus.",
      color: "vyral-teal"
    },
    {
      icon: Zap,
      title: "Influencer Partnerships",
      description: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet.",
      color: "accent"
    },
    {
      icon: Globe,
      title: "Web3 Integration",
      description: "Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
      color: "secondary"
    },
    {
      icon: Rocket,
      title: "Launch Campaigns",
      description: "Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.",
      color: "primary"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-secondary">
            SERVICES WE OFFER
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive Web3 marketing solutions that transform your vision 
            into viral reality and turn communities into movements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="bg-card/80 backdrop-blur-sm border-border/50 shadow-elegant hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors`}>
                    <IconComponent className={`h-8 w-8 text-${service.color === 'primary' ? 'primary' : service.color === 'vyral-green' ? 'vyral-green' : service.color === 'vyral-teal' ? 'vyral-teal' : service.color === 'accent' ? 'accent' : 'secondary'}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Work With Us CTA */}
        <div className="bg-gradient-dark rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Go Viral?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join the revolution and let's create something extraordinary together. 
            Your vision, our expertise, limitless possibilities.
          </p>
          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToContact}
            className="group"
          >
            Work With Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;