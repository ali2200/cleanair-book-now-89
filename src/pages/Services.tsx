import { 
  Wind, 
  Droplets, 
  Shield, 
  Zap, 
  Home, 
  Waves,
  FlaskConical,
  Settings,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Wind,
      title: "AC Cleaning & Maintenance",
      description: "Complete air conditioning system cleaning and maintenance for optimal performance and energy efficiency.",
      features: ["Filter cleaning/replacement", "Coil cleaning", "Drainage system maintenance", "Performance testing"],
      price: "From AED 200",
      duration: "60-120 minutes",
      href: "/services/ac-cleaning",
      popular: true
    },
    {
      icon: Home,
      title: "Duct Deep Cleaning",
      description: "Professional duct cleaning to remove dust, allergens, and improve indoor air quality.",
      features: ["Camera inspection", "Deep vacuum cleaning", "Sanitization", "Vent cleaning"],
      price: "Based on area",
      duration: "2-4 hours",
      href: "/services/duct-cleaning"
    },
    {
      icon: Shield,
      title: "Indoor Air Quality Management",
      description: "Comprehensive air quality assessment and improvement solutions for healthier indoor environments.",
      features: ["Air quality testing", "Custom filtration solutions", "Ongoing monitoring", "Health recommendations"],
      price: "Free consultation",
      duration: "Varies",
      href: "/services/air-quality"
    },
    {
      icon: Zap,
      title: "Mold Removal & Treatment",
      description: "Professional mold inspection, removal, and prevention to protect your health and property.",
      features: ["Moisture source identification", "Safe mold removal", "Surface treatment", "Prevention strategies"],
      price: "From AED 500",
      duration: "1-3 days",
      href: "/services/mold-treatment"
    },
    {
      icon: Droplets,
      title: "Fog Disinfection Technology",
      description: "Advanced fog disinfection for comprehensive sanitization of spaces and surfaces.",
      features: ["Complete surface coverage", "Safe for occupants", "Eco-friendly solutions", "Quick application"],
      price: "From AED 300",
      duration: "30-60 minutes",
      href: "/services/fog-disinfection"
    },
    {
      icon: FlaskConical,
      title: "Water Tank Cleaning & Testing",
      description: "Professional water tank cleaning and laboratory testing for safe, clean water supply.",
      features: ["Complete tank drainage", "Interior cleaning", "Water quality testing", "Certification"],
      price: "From AED 400",
      duration: "2-4 hours",
      href: "/services/water-tanks"
    },
    {
      icon: Waves,
      title: "Swimming Pool Maintenance",
      description: "Complete pool maintenance including chemical balancing, cleaning, and equipment servicing.",
      features: ["Chemical balancing", "Filter maintenance", "Pool cleaning", "Equipment inspection"],
      price: "From AED 250",
      duration: "1-2 hours",
      href: "/services/pool-maintenance"
    },
    {
      icon: Settings,
      title: "General Maintenance & AMC",
      description: "Comprehensive maintenance contracts for residential and commercial properties.",
      features: ["Scheduled maintenance", "Priority service", "Cost savings", "Preventive care"],
      price: "Custom packages",
      duration: "Ongoing",
      href: "/services/general-maintenance"
    }
  ];

  const benefits = [
    "Certified and insured technicians",
    "Latest equipment and technology",
    "Transparent pricing with no hidden costs",
    "24/7 emergency service available",
    "Satisfaction guarantee on all services",
    "Eco-friendly cleaning solutions"
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background Shapes */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2 pulse-shape"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4 pulse-shape"></div>
      </div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-accent to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Professional Services
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="hero-text">Expert Services</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              From AC maintenance to water tank cleaning, we provide comprehensive solutions 
              to keep your property running smoothly and efficiently.
            </p>
            <Button 
              onClick={() => navigate("/booking")} 
              className="cta-button text-white font-bold px-8 py-6"
            >
              Book Any Service Now
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`service-card group cursor-pointer border-0 h-full relative ${
                    service.popular ? 'ring-2 ring-primary/20' : ''
                  }`}
                  onClick={() => navigate(service.href)}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold leading-tight">
                      {service.title}
                    </CardTitle>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-primary">{service.price}</span>
                      <span className="text-muted-foreground">{service.duration}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm leading-relaxed mb-4">
                      {service.description}
                    </CardDescription>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      Learn More & Book
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose Brooklyn General Maintenance?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional service with professionalism, 
              reliability, and attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our team is standing by to provide you with exceptional service. 
            Book now or contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/booking")}
              size="lg"
              className="cta-button text-white font-bold px-8 py-6"
            >
              Book Service Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://wa.me/971501234567?text=I need information about your services", "_blank")}
              className="font-bold px-8 py-6 border-white text-white hover:bg-white hover:text-secondary"
            >
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;