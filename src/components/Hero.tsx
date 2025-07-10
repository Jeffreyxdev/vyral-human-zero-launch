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
    <section className="relative min-h-screen flex items-center justify-center pt-24 mt-8 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
        {/* Main Heading */}
        <div className="mb-6 md:mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter mb-2 md:mb-4">
            <span className="text-primary">VYRAL</span>
          </h1>
          <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-4 md:mb-6">
            <span>HUMAN ZERO</span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="mb-8 md:mb-12 animate-slide-up">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Revolutionary Web3 marketing agency redefining digital engagement through 
            cutting-edge technology and human-centered innovation.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-10 md:mb-16 animate-slide-up px-4">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="group w-full sm:w-auto"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto"
          >
            Read Our Manifesto
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto animate-fade-in px-4">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border shadow-elegant">
            <div className="flex items-center justify-center mb-2 md:mb-3">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 md:mb-2">100+</div>
            <div className="text-sm md:text-base text-muted-foreground">Web3 Projects Launched</div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border shadow-elegant">
            <div className="flex items-center justify-center mb-2 md:mb-3">
              <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-vyral-green" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 md:mb-2">500%</div>
            <div className="text-sm md:text-base text-muted-foreground">Average Growth Rate</div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border shadow-elegant sm:col-span-2 md:col-span-1">
            <div className="flex items-center justify-center mb-2 md:mb-3">
              <Zap className="h-6 w-6 md:h-8 md:w-8 text-vyral-teal" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 md:mb-2">24/7</div>
            <div className="text-sm md:text-base text-muted-foreground">Community Engagement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;