import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MessageSquare, User } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Application Submitted!",
      description: "We'll get back to you within 24 hours to discuss your project.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      project: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-secondary">
            WORK WITH US
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your Web3 project into a viral phenomenon? 
            Let's discuss how we can amplify your vision.
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm shadow-elegant border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              Contact Application Form
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-border/50 focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border/50 focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium">
                    Company/Project Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="border-border/50 focus:border-primary"
                    placeholder="Your company or project"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project" className="text-foreground font-medium">
                    Project Type
                  </Label>
                  <Input
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="border-border/50 focus:border-primary"
                    placeholder="DeFi, NFT, Gaming, etc."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Tell us about your project *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-32 border-border/50 focus:border-primary resize-none"
                  placeholder="Describe your project, goals, and how we can help make it go viral..."
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full group"
                >
                  Submit Application
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Prefer direct contact? Reach out to us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:hello@vyral.agency" 
              className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
            >
              <Mail className="h-4 w-4" />
              hello@vyral.agency
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <span className="text-muted-foreground">Response within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;