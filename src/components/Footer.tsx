import { Phone, Mail, MapPin, Clock, MessageSquare, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const services = [
    "AC Cleaning & Maintenance",
    "Duct Deep Cleaning",
    "Mold Treatment",
    "Water Tank Cleaning",
    "Pool Maintenance",
    "General Maintenance"
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Book Now", href: "/booking" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <img 
                src="/lovable-uploads/96881a94-5cd1-44e3-9b1b-e1f68500cbfc.png" 
                alt="Brooklyn General Maintenance Logo" 
                className="h-8 sm:h-10 lg:h-12 w-auto brightness-0 invert"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <h3 className="text-lg sm:text-xl font-bold gradient-text">
                Brooklyn General<br/>Maintenance
              </h3>
            </div>
            <p className="text-sm sm:text-base text-secondary-foreground/80 mb-6 leading-relaxed">
              Professional maintenance and cleaning services in Abu Dhabi, Dubai, and Sharjah. 
              We provide comprehensive solutions for your comfort and health.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="bg-green-500/20 hover:bg-green-500/30"
                onClick={() => window.open("https://wa.me/971501234567", "_blank")}
              >
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-base sm:text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-secondary-foreground/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-base sm:text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-secondary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-8 sm:mt-0">
            <h4 className="text-base sm:text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">+971 50 123 4567</div>
                  <div className="text-sm text-secondary-foreground/80">24/7 Customer Service</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">info@brooklyngm.ae</div>
                  <div className="text-sm text-secondary-foreground/80">General Inquiries</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Abu Dhabi, UAE</div>
                  <div className="text-sm text-secondary-foreground/80">Serving all Emirates</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">24/7</div>
                  <div className="text-sm text-secondary-foreground/80">Emergency Service</div>
                </div>
              </div>
            </div>

            <Button
              onClick={() => navigate("/booking")}
              className="w-full mt-6 cta-button text-white font-bold"
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-secondary-foreground/80 text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
            © 2024 Brooklyn General Maintenance. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm">
            <button className="text-secondary-foreground/80 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-secondary-foreground/80 hover:text-white transition-colors">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;