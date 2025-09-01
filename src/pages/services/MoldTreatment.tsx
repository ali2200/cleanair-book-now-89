import { Zap, CheckCircle, Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useNavigate } from "react-router-dom";

const MoldTreatment = () => {
  const navigate = useNavigate();

  const benefits = [
    "Safe mold removal",
    "Root cause treatment",
    "Health risk reduction",
    "Prevention solutions",
    "Professional inspection",
    "Eco-friendly treatments"
  ];

  const process = [
    {
      step: "1",
      title: "Inspection",
      description: "Comprehensive mold inspection and source identification"
    },
    {
      step: "2",
      title: "Containment",
      description: "Secure containment to prevent spread during treatment"
    },
    {
      step: "3",
      title: "Treatment",
      description: "Safe and effective mold removal and sanitization"
    },
    {
      step: "4",
      title: "Prevention",
      description: "Root cause addressing and prevention measures"
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
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-medium">Professional Mold Treatment</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Mold Removal & Treatment
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Precise inspection and safe treatment of mold sources. Professional source identification and root cause treatment for complete mold elimination.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate("/booking")}
                  className="cta-button text-white font-bold px-8 py-6"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Book Treatment
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open("https://wa.me/971501234567?text=I need mold treatment service", "_blank")}
                  className="font-bold px-8 py-6"
                >
                  WhatsApp Chat
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">From AED 500</div>
                    <div className="text-sm text-muted-foreground">Professional mold treatment</div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Search className="h-4 w-4" />
                    <span className="text-sm font-medium">Free inspection</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Expert Treatment</h3>
                    <p className="text-muted-foreground">Safe and effective mold removal using professional-grade equipment and eco-friendly solutions</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Root Cause Analysis</h3>
                    <p className="text-muted-foreground">Comprehensive inspection to identify and eliminate mold sources</p>
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
              Why Choose Professional Mold Treatment?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional mold treatment ensures safe removal and prevents recurrence
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
              Our Mold Treatment Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional 4-step process for complete mold removal and prevention
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

      {/* Warning Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Don't Ignore Mold Problems
              </h3>
              <p className="text-orange-700 mb-6">
                Mold can cause serious health issues and structural damage. Early detection and professional treatment are crucial for your family's safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate("/booking")}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6"
                >
                  Schedule Inspection
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://wa.me/971501234567?text=I need urgent mold inspection", "_blank")}
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 font-bold px-8 py-6"
                >
                  Emergency Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default MoldTreatment;