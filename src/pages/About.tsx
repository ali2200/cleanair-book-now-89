import { Users, Award, Clock, Shield, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Shield,
      title: "Quality & Safety",
      description: "We prioritize the highest standards of quality and safety in every service we provide."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Our customers are at the heart of everything we do. We listen, understand, and deliver."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, no matter how big or small."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Punctual, dependable service you can count on, every single time."
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Expert Technicians" },
    { number: "24/7", label: "Emergency Support" }
  ];

  const team = [
    {
      name: "Ahmed Al-Rashid",
      role: "Operations Manager",
      experience: "8+ years in facility management"
    },
    {
      name: "Sarah Johnson",
      role: "Technical Director",
      experience: "10+ years in HVAC systems"
    },
    {
      name: "Mohammed Hassan",
      role: "Quality Supervisor",
      experience: "6+ years in maintenance services"
    }
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
              About Our Company
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Your Trusted <span className="hero-text">Maintenance Partner</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Brooklyn General Maintenance has been serving the UAE with professional maintenance 
              and cleaning services since 2019. We're committed to creating healthier, more 
              comfortable environments for homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Brooklyn General Maintenance was founded with a simple mission: to provide 
                  exceptional maintenance services that improve the quality of life for our 
                  customers across the UAE.
                </p>
                <p>
                  What started as a small team of dedicated professionals has grown into one 
                  of the region's most trusted maintenance service providers. We've built our 
                  reputation on reliability, quality, and genuine care for our customers' needs.
                </p>
                <p>
                  Today, we serve over 1000 satisfied customers across Abu Dhabi, Dubai, and 
                  Sharjah, offering everything from AC maintenance to comprehensive facility 
                  management solutions.
                </p>
              </div>
              <Button 
                onClick={() => navigate("/services")} 
                className="mt-8 cta-button text-white font-bold px-6 py-4"
              >
                Explore Our Services
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center service-card border-0">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="service-card border-0 text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are dedicated to delivering exceptional service 
              and ensuring your complete satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="service-card border-0 text-center">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Certified & Insured</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We maintain all necessary certifications and insurance coverage to provide 
              you with peace of mind and professional service.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <span className="font-medium">Licensed & Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <span className="font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                <span className="font-medium">Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience Our Service?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Brooklyn General Maintenance 
            for their property care needs.
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
              onClick={() => navigate("/contact")}
              className="font-bold px-8 py-6 border-white text-white hover:bg-white hover:text-secondary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;