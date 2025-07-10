import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter mb-4">
            <span className="text-primary">VYRAL</span>
          </h1>
          <div className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6">
            <span className="animate-glow">HUMAN ZERO</span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-slide-up">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Revolutionary Web3 marketing agency redefining digital engagement through 
            cutting-edge technology and human-centered innovation.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up">
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToContact}
            className="group"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read Our Manifesto
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-elegant">
            <div className="flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">100+</div>
            <div className="text-muted-foreground">Web3 Projects Launched</div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-elegant">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="h-8 w-8 text-vyral-green" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">500%</div>
            <div className="text-muted-foreground">Average Growth Rate</div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-elegant">
            <div className="flex items-center justify-center mb-3">
              <Zap className="h-8 w-8 text-vyral-teal" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-muted-foreground">Community Engagement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;