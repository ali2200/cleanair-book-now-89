import { useState } from "react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Book Now", href: "/booking" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello, I need information about your services", "_blank");
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/lovable-uploads/96881a94-5cd1-44e3-9b1b-e1f68500cbfc.png" 
                alt="Brooklyn General Maintenance Logo" 
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-base sm:text-lg lg:text-xl font-bold text-foreground leading-tight">
                  Brooklyn
                </h1>
                <p className="text-xs text-muted-foreground leading-tight">General Maintenance</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsApp}
              className="gap-2 text-sm"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </Button>
            <Button
              onClick={() => navigate("/booking")}
              className="cta-button text-white font-medium gap-2 text-sm"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left py-2 px-1 text-base"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="gap-2 justify-center py-3"
                >
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button
                  onClick={() => {
                    navigate("/booking");
                    setIsMenuOpen(false);
                  }}
                  className="cta-button text-white font-medium gap-2 justify-center py-3"
                >
                  <Phone className="h-4 w-4" />
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;