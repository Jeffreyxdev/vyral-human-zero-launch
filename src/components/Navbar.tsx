import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-black text-primary tracking-wider">
              VYRAL
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('manifesto')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Manifesto
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('sponsors')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Sponsors
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Community
              </button>
              <Button 
                variant="hero" 
                size="sm"
                onClick={() => scrollToSection('contact')}
              >
                Work With Us
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button 
                onClick={() => scrollToSection('manifesto')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
              >
                Manifesto
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('sponsors')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
              >
                Sponsors
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
              >
                Community
              </button>
              <div className="px-3 py-2">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Work With Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;