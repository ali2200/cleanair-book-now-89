import { FlaskConical, CheckCircle, TestTube, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useNavigate } from "react-router-dom";

const WaterTanks = () => {
  const navigate = useNavigate();

  const benefits = [
    "Cleaner drinking water",
    "Bacterial contamination removal",
    "Laboratory testing reports",
    "Health safety assurance",
    "Tank inspection service",
    "Regular maintenance programs"
  ];

  const process = [
    {
      step: "1",
      title: "Inspection",
      description: "Complete tank inspection and water quality assessment"
    },
    {
      step: "2",
      title: "Cleaning",
      description: "Professional tank cleaning and sanitization"
    },
    {
      step: "3",
      title: "Testing",
      description: "Laboratory water quality testing and analysis"
    },
    {
      step: "4",
      title: "Certification",
      description: "Official reports and maintenance recommendations"
    }
  ];

  const testingParameters = [
    "Bacterial contamination",
    "Chemical composition", 
    "pH levels",
    "Chlorine residual",
    "Heavy metals",
    "Total dissolved solids"
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
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-medium">Water Quality Service</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Water Tank Cleaning + Testing
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Cleaner water and laboratory reports for your peace of mind. Professional cleaning and laboratory analysis to ensure safe drinking water.
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
                  onClick={() => window.open("https://wa.me/971501234567?text=I need water tank cleaning service", "_blank")}
                  className="font-bold px-8 py-6"
                >
                  WhatsApp Chat
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">From AED 400</div>
                    <div className="text-sm text-muted-foreground">Cleaning + laboratory testing</div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <TestTube className="h-4 w-4" />
                    <span className="text-sm font-medium">Lab certified</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <FlaskConical className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Professional Cleaning</h3>
                    <p className="text-muted-foreground">Complete tank cleaning with professional equipment and safe sanitization</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <TestTube className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Laboratory Testing</h3>
                    <p className="text-muted-foreground">Comprehensive water quality analysis with detailed reports</p>
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
              Why Clean Your Water Tank?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Regular water tank cleaning ensures safe drinking water and prevents health risks
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

      {/* Testing Parameters */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Laboratory Testing Parameters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive water quality analysis testing for all major parameters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingParameters.map((parameter, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <TestTube className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="font-medium">{parameter}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Service Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional 4-step process for complete tank cleaning and water testing
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

      {/* Health Warning */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <FlaskConical className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Protect Your Family's Health
              </h3>
              <p className="text-blue-700 mb-6">
                Contaminated water tanks can harbor bacteria and harmful microorganisms. Regular cleaning and testing ensure your family's safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate("/booking")}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-6"
                >
                  Schedule Cleaning
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://wa.me/971501234567?text=I need water tank testing", "_blank")}
                  className="border-blue-500 text-blue-500 hover:bg-blue-50 font-bold px-8 py-6"
                >
                  Water Testing Only
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

export default WaterTanks;