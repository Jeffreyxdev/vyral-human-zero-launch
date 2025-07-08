import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Star, Megaphone, TrendingUp, ArrowRight } from "lucide-react";

const Sponsors = () => {
  const benefits = [
    {
      icon: Megaphone,
      title: "Brand Amplification",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nunc quis libero facilisis vehicula."
    },
    {
      icon: TrendingUp,
      title: "Growth Exposure",
      description: "Sed consectetur, risus in tempor aliquam, nunc nulla tincidunt massa, vel cursus ipsum lorem sed nunc."
    },
    {
      icon: Star,
      title: "Premium Placement",
      description: "Donec vitae sollicitudin mauris, eu tempus justo. Pellentesque habitant morbi tristique senectus."
    }
  ];

  return (
    <section id="sponsors" className="py-20 px-4 bg-gradient-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
            BECOME A SPONSOR
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Partner with Vyral and reach the most engaged Web3 communities. 
            We offer exclusive sponsorship opportunities with guaranteed exposure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Benefits */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Handshake className="h-8 w-8 text-primary" />
              Partnership Benefits
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                      <p className="opacity-80 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Sponsor Card */}
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white">
                  Sponsor Package
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="opacity-90">Shout-outs across platforms</span>
                    <span className="text-primary font-semibold">✓</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="opacity-90">Premium content promotion</span>
                    <span className="text-primary font-semibold">✓</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="opacity-90">Community engagement boost</span>
                    <span className="text-primary font-semibold">✓</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="opacity-90">Brand integration opportunities</span>
                    <span className="text-primary font-semibold">✓</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="opacity-90">Performance analytics</span>
                    <span className="text-primary font-semibold">✓</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group bg-primary hover:bg-primary-glow"
                  >
                    Become a Sponsor
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <p className="text-sm opacity-70 text-center mt-4">
                  Custom packages available for enterprise partners
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Amplify Your Brand?
            </h3>
            <p className="opacity-90 mb-6 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vestibulum in nunc quis libero facilisis vehicula sed consectetur.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Download Sponsor Kit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;