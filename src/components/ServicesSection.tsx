import { 
  Wind, 
  Droplets, 
  Shield, 
  Zap, 
  Home, 
  Waves,
  FlaskConical,
  Settings,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Wind,
      title: "AC Cleaning & Maintenance",
      description: "Maintain optimal cooling and efficiency with comprehensive unit and duct cleaning.",
      details: "Filter cleaning, coil maintenance, regular servicing",
      price: "From AED 200",
      href: "/services/ac-cleaning"
    },
    {
      icon: Home,
      title: "Duct Deep Cleaning",
      description: "Remove dust and mold to improve air quality and reduce odors.",
      details: "Camera inspection and deep cleaning",
      price: "Based on area",
      href: "/services/duct-cleaning"
    },
    {
      icon: Shield,
      title: "Indoor Air Quality Management",
      description: "Comprehensive solutions for filtering, sanitizing, and monitoring.",
      details: "Complete assessment and custom solutions",
      price: "Free consultation",
      href: "/services/air-quality"
    },
    {
      icon: Zap,
      title: "Mold Removal & Treatment",
      description: "Precise inspection and safe treatment of sources.",
      details: "Source identification and root cause treatment",
      price: "From AED 500",
      href: "/services/mold-treatment"
    },
    {
      icon: Droplets,
      title: "Fog Disinfection Technology",
      description: "Comprehensive coverage for surfaces and corners.",
      details: "Safe and thorough sanitization",
      price: "From AED 300",
      href: "/services/fog-disinfection"
    },
    {
      icon: FlaskConical,
      title: "Water Tank Cleaning + Testing",
      description: "Cleaner water and laboratory reports.",
      details: "Cleaning and laboratory analysis",
      price: "From AED 400",
      href: "/services/water-tanks"
    },
    {
      icon: Waves,
      title: "Swimming Pool Maintenance",
      description: "Chemical balance and regular cleaning.",
      details: "Comprehensive maintenance and chemical balancing",
      price: "From AED 250",
      href: "/services/pool-maintenance"
    },
    {
      icon: Settings,
      title: "General Maintenance & Annual Contracts",
      description: "Peace of mind with scheduled regular visits.",
      details: "Custom contracts and preventive maintenance",
      price: "Special offers",
      href: "/services/general-maintenance"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Specialized Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Solutions for Your Comfort
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a complete range of maintenance and cleaning services with the highest standards of quality and professionalism in Abu Dhabi, Dubai, and Sharjah
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="service-card group cursor-pointer border-0 h-full"
                onClick={() => navigate(service.href)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold leading-tight">
                    {service.title}
                  </CardTitle>
                  <div className="text-sm font-medium text-primary">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed mb-3">
                    {service.description}
                  </CardDescription>
                  <div className="text-xs text-muted-foreground mb-4">
                    {service.details}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Not sure which service you need?
            </h3>
            <p className="text-muted-foreground mb-6">
              Talk to our specialized team for a free consultation and choose the service that best suits your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/booking")}
                className="cta-button text-white font-bold px-8 py-6"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/971501234567?text=I need consultation about your services", "_blank")}
                className="font-bold px-8 py-6"
              >
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;