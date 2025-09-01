import { ArrowRight, CheckCircle2, MessageSquare, Phone, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-ac-cleaning.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello, I need information about AC cleaning and maintenance services", "_blank");
  };

  const features = [
    "Chemical-Free Solutions",
    "Same-Day Service", 
    "Service Warranty"
  ];

  return (
    <section className="relative min-h-[75vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional AC cleaning service technician"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-16 pb-12">
        <div className="max-w-4xl">
          {/* Top Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/10">
              <div className="p-1 bg-primary/20 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-primary" />
              </div>
              Certified & Insured Professionals
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Breathe <span className="text-primary">Cleaner</span>,
              <br />
              Live <span className="text-primary">Better</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Professional AC & Home Maintenance in Abu Dhabi. Expert team for AC cleaning, duct sanitization, pool care, and complete home maintenance solutions.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="p-1 bg-primary/30 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
                <span className="font-medium text-white">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col gap-4 mb-12">
            <Button
              onClick={() => navigate("/booking")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 gap-3 w-full sm:w-auto"
            >
              Book Service Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="flex-1 px-4 py-3 rounded-md bg-white/90 backdrop-blur-sm text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              />
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-secondary bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-3 transition-all duration-300 whitespace-nowrap"
              >
                <MessageSquare className="h-5 w-5 fill-current sm:mr-2" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-background/20 to-background z-10"></div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;