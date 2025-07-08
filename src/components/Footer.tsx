import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Youtube, Video } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://twitter.com/vyral",
      color: "hover:text-primary"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/vyral",
      color: "hover:text-vyral-green"
    },
    {
      name: "TikTok",
      icon: Video,
      url: "https://tiktok.com/@vyral",
      color: "hover:text-vyral-teal"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@vyral",
      color: "hover:text-primary"
    }
  ];

  return (
    <footer className="bg-secondary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4 text-primary">VYRAL</h3>
            <p className="text-lg opacity-90 mb-6 max-w-md">
              Revolutionary Web3 marketing agency redefining digital engagement 
              through cutting-edge technology and human-centered innovation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all"
                >
                  Manifesto
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-xl font-bold mb-6">Community</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('sponsors')?.scrollIntoView({ behavior: 'smooth' })}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all"
                >
                  Become a Sponsor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all"
                >
                  Community Wallet
                </button>
              </li>
              <li>
                <a 
                  href="#"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Stay in the Loop</h4>
            <p className="opacity-90 mb-6 max-w-2xl mx-auto">
              Get the latest updates on Web3 marketing trends, community insights, 
              and exclusive opportunities delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-primary"
              />
              <Button variant="hero" className="bg-primary hover:bg-primary-glow">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="opacity-80">
                © 2024 Vyral. All rights reserved. | Human Zero Revolution
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Privacy Policy
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Terms of Service
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;