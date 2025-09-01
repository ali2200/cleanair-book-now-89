import { Droplets, CheckCircle, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useNavigate } from "react-router-dom";

const FogDisinfection = () => {
  const navigate = useNavigate();

  const benefits = [
    "Complete surface coverage",
    "Reaches difficult corners",
    "Safe and eco-friendly",
    "Quick application process",
    "99.9% germ elimination",
    "No residue left behind"
  ];

  const applications = [
    {
      title: "Homes & Apartments",
      description: "Complete residential disinfection for healthy living spaces"
    },
    {
      title: "Offices & Workplaces", 
      description: "Professional disinfection for safe working environments"
    },
    {
      title: "Medical Facilities",
      description: "Hospital-grade disinfection for healthcare settings"
    },
    {
      title: "Schools & Nurseries",
      description: "Child-safe disinfection for educational facilities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-medium">Advanced Disinfection</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Fog Disinfection Technology
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive coverage for surfaces and corners with advanced fog disinfection technology. Safe and thorough sanitization for all types of spaces.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate("/booking")}
                  className="cta-button text-white font-bold px-8 py-6"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Book Service
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open("https://wa.me/971501234567?text=I need fog disinfection service", "_blank")}
                  className="font-bold px-8 py-6"
                >
                  WhatsApp Chat
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">From AED 300</div>
                    <div className="text-sm text-muted-foreground">Complete fog disinfection</div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">99.9% effective</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
                    <p className="text-muted-foreground">Ultra-fine fog particles reach every corner and surface for complete coverage</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Safe & Effective</h3>
                    <p className="text-muted-foreground">Eco-friendly solutions that are safe for humans and pets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose Fog Disinfection?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced fog technology provides superior disinfection coverage compared to traditional methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Perfect For Any Space
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our fog disinfection service is suitable for all types of residential and commercial spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Quick & Efficient Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional fog disinfection completed in just a few simple steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Preparation</h3>
                <p className="text-muted-foreground">Space preparation and equipment setup</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Application</h3>
                <p className="text-muted-foreground">Professional fog disinfection treatment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Completion</h3>
                <p className="text-muted-foreground">Quick drying and space ready for use</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready for Complete Disinfection?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule your professional fog disinfection service for a cleaner, safer environment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/booking")}
                className="cta-button text-white font-bold px-8 py-6"
              >
                Book Service Now
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/971501234567?text=I need fog disinfection consultation", "_blank")}
                className="font-bold px-8 py-6"
              >
                Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default FogDisinfection;