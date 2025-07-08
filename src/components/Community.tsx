import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Heart, Users, Gift, ArrowRight, Coins } from "lucide-react";

const Community = () => {
  const contributionTiers = [
    {
      amount: "0.1 ETH",
      title: "Supporter",
      benefits: ["Community access", "Monthly updates", "Discord role"],
      color: "vyral-teal"
    },
    {
      amount: "0.5 ETH",
      title: "Advocate",
      benefits: ["All Supporter benefits", "Early project access", "Exclusive content"],
      color: "vyral-green",
      popular: true
    },
    {
      amount: "1.0 ETH",
      title: "Champion",
      benefits: ["All Advocate benefits", "Direct team access", "Vote on initiatives"],
      color: "primary"
    }
  ];

  return (
    <section id="community" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-secondary">
            COMMUNITY WALLET
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our movement and contribute to the future of Web3 marketing. 
            Every contribution helps us build stronger communities and better tools.
          </p>
        </div>

        {/* Wallet Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-primary text-center">
            <CardContent className="p-8">
              <Wallet className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">127.8 ETH</div>
              <div className="text-muted-foreground">Total Contributions</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-vyral-green/5 to-vyral-green/10 border-vyral-green/20 shadow-elegant text-center">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-vyral-green mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">2,847</div>
              <div className="text-muted-foreground">Community Members</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-vyral-teal/5 to-vyral-teal/10 border-vyral-teal/20 shadow-elegant text-center">
            <CardContent className="p-8">
              <Gift className="h-12 w-12 text-vyral-teal mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">45</div>
              <div className="text-muted-foreground">Projects Funded</div>
            </CardContent>
          </Card>
        </div>

        {/* Contribution Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contributionTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 ${
                tier.popular 
                  ? 'ring-2 ring-primary shadow-primary scale-105' 
                  : 'shadow-elegant'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  tier.color === 'primary' ? 'bg-primary/10' :
                  tier.color === 'vyral-green' ? 'bg-vyral-green/10' :
                  'bg-vyral-teal/10'
                }`}>
                  <Coins className={`h-8 w-8 ${
                    tier.color === 'primary' ? 'text-primary' :
                    tier.color === 'vyral-green' ? 'text-vyral-green' :
                    'text-vyral-teal'
                  }`} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {tier.title}
                </CardTitle>
                <div className={`text-3xl font-black ${
                  tier.color === 'primary' ? 'text-primary' :
                  tier.color === 'vyral-green' ? 'text-vyral-green' :
                  'text-vyral-teal'
                }`}>
                  {tier.amount}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <Heart className={`h-4 w-4 ${
                        tier.color === 'primary' ? 'text-primary' :
                        tier.color === 'vyral-green' ? 'text-vyral-green' :
                        'text-vyral-teal'
                      }`} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.popular ? "hero" : "outline"} 
                  className="w-full"
                >
                  Contribute Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-dark rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the Revolution
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Your contribution doesn't just support our mission—it makes you an 
            integral part of the Web3 marketing evolution. Together, we'll reshape 
            how communities connect and grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              className="group bg-primary hover:bg-primary-glow"
            >
              Connect Wallet
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
          
          <p className="text-sm opacity-70 mt-6">
            Secure transactions powered by Ethereum blockchain
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;