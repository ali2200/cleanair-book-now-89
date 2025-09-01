import { Wind, CheckCircle, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useNavigate } from "react-router-dom";
import acImage from "@/assets/hero-ac-cleaning.jpg";

const ACCleaning = () => {
  const navigate = useNavigate();

  const benefits = [
    "Improved cooling efficiency",
    "Lower electricity bills",
    "Better air quality",
    "Extended AC lifespan",
    "Reduced allergens and dust",
    "Professional deep cleaning"
  ];

  const process = [
    {
      step: "1",
      title: "Inspection",
      description: "Complete system assessment and diagnosis"
    },
    {
      step: "2", 
      title: "Filter Cleaning",
      description: "Deep cleaning or replacement of filters"
    },
    {
      step: "3",
      title: "Coil Maintenance", 
      description: "Evaporator and condenser coil cleaning"
    },
    {
      step: "4",
      title: "System Testing",
      description: "Performance check and final testing"
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
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-medium">Professional AC Service</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                AC Cleaning & Maintenance
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Maintain optimal cooling and efficiency with our comprehensive AC cleaning and maintenance services. Professional deep cleaning for all AC types.
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
                  onClick={() => window.open("https://wa.me/971501234567?text=I need AC cleaning service", "_blank")}
                  className="font-bold px-8 py-6"
                >
                  WhatsApp Chat
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">From AED 200</div>
                    <div className="text-sm text-muted-foreground">Complete AC cleaning service</div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">Same day service</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={acImage} 
                alt="AC Cleaning Service"
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
              Why Choose Our AC Cleaning Service?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional AC cleaning that improves performance, reduces costs, and ensures cleaner air
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
              Our AC Cleaning Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional 4-step process for complete AC cleaning and maintenance
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
              Ready to Improve Your AC Performance?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book our professional AC cleaning service today and enjoy better cooling efficiency
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
                onClick={() => window.open("https://wa.me/971501234567?text=I need AC cleaning consultation", "_blank")}
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

export default ACCleaning;