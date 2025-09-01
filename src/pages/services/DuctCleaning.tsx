import { Home, CheckCircle, Camera, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useNavigate } from "react-router-dom";
import ductImage from "@/assets/duct-cleaning-service.jpg";

const DuctCleaning = () => {
  const navigate = useNavigate();

  const benefits = [
    "Improved air quality",
    "Reduced allergens and dust",
    "Better HVAC efficiency",
    "Odor elimination", 
    "Mold prevention",
    "Energy cost savings"
  ];

  const process = [
    {
      step: "1",
      title: "Camera Inspection",
      description: "Complete duct system assessment with camera technology"
    },
    {
      step: "2",
      title: "Access Point Creation", 
      description: "Strategic access points for thorough cleaning"
    },
    {
      step: "3",
      title: "Deep Cleaning",
      description: "Professional vacuum and brush cleaning system"
    },
    {
      step: "4",
      title: "Sanitization",
      description: "Antimicrobial treatment and final inspection"
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
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-medium">Professional Duct Service</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Duct Deep Cleaning
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Remove dust, mold, and contaminants from your duct system to improve air quality and reduce odors. Professional camera inspection and deep cleaning service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate("/booking")}
                  className="cta-button text-white font-bold px-8 py-6"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Book Service Now
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open("https://wa.me/971501234567?text=I need duct cleaning service", "_blank")}
                  className="font-bold px-8 py-6"
                >
                  WhatsApp Chat
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">Based on area</div>
                    <div className="text-sm text-muted-foreground">Free inspection included</div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Camera className="h-4 w-4" />
                    <span className="text-sm font-medium">Camera inspection</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={ductImage} 
                alt="Duct Cleaning Service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Clean Your Air Ducts?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional duct cleaning improves air quality, reduces allergens, and enhances HVAC efficiency
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

      {/* Process Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Professional Cleaning Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive 4-step process with camera inspection and deep cleaning technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready for Cleaner Air?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule your professional duct cleaning service with free camera inspection
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
                onClick={() => window.open("https://wa.me/971501234567?text=I need duct cleaning consultation", "_blank")}
                className="font-bold px-8 py-6"
              >
                Free Consultation
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

export default DuctCleaning;