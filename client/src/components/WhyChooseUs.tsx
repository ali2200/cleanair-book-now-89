import { Shield, Droplets, Award, Leaf, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ac-cleaning.jpg";
import ductImage from "@/assets/duct-cleaning-service.jpg";
import poolImage from "@/assets/pool-maintenance.jpg";

const WhyChooseUs = () => {
  const mainFeatures = [
    {
      icon: Droplets,
      title: "Premium Air Quality Solutions",
      description: "Advanced filtration systems and comprehensive air quality improvement services that exceed industry standards.",
      image: heroImage,
      stats: "99.9% Purification Rate"
    },
    {
      icon: Shield,
      title: "Certified Professional Team",
      description: "Licensed technicians with years of experience and continuous training in the latest cleaning technologies.",
      image: ductImage,
      stats: "500+ Certified Hours"
    },
    {
      icon: Leaf,
      title: "100% Eco-Friendly Products",
      description: "Chemical-free, bio-sanitizing solutions that are safe for your family and pets while being highly effective.",
      image: poolImage,
      stats: "Zero Harmful Chemicals"
    }
  ];

  const benefits = [
    "Same-day emergency service available",
    "Comprehensive warranty on all services", 
    "Free consultation and assessment",
    "Advanced equipment and technology",
    "Transparent pricing with no hidden fees",
    "24/7 customer support"
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <CheckCircle2 className="h-4 w-4" />
            Why Work With Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            Why Choose <span className="gradient-text">Our Services</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience unmatched quality and professionalism with our comprehensive home maintenance solutions
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Stats Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                  {feature.stats}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What Makes Us <span className="text-primary">Different</span>
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                We don't just clean – we transform your living environment with cutting-edge technology and uncompromising attention to detail.
              </p>
              
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background/60 rounded-xl border border-border/50">
                    <div className="p-1 bg-primary/20 rounded-full">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center lg:text-left">
              <div className="inline-flex flex-col items-center lg:items-start gap-6 p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl">
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-primary mb-2">Ready to Experience</div>
                  <div className="text-2xl font-bold text-foreground mb-4">Professional Service?</div>
                  <p className="text-muted-foreground mb-6">
                    Join hundreds of satisfied customers who trust us with their home maintenance needs.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Button size="lg" className="flex-1 cta-button">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;