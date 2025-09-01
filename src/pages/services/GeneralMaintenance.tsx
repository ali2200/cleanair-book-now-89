import { Settings, CheckCircle, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useNavigate } from "react-router-dom";

const GeneralMaintenance = () => {
  const navigate = useNavigate();

  const services = [
    "Regular AC maintenance",
    "Duct cleaning schedules",
    "Water tank servicing",
    "Pool maintenance",
    "Preventive inspections",
    "Emergency repairs"
  ];

  const benefits = [
    "Cost savings on repairs",
    "Extended equipment life",
    "Priority service booking",
    "Scheduled maintenance visits",
    "Preventive care approach",
    "Professional expertise"
  ];

  const contractTypes = [
    {
      title: "Basic Annual Contract",
      price: "Special offers",
      duration: "12 months",
      visits: "Quarterly visits",
      includes: ["AC maintenance", "Basic inspections", "Priority booking", "Discounted repairs"]
    },
    {
      title: "Premium Annual Contract",
      price: "Best value", 
      duration: "12 months",
      visits: "Bi-monthly visits",
      includes: ["Everything in Basic", "Duct cleaning", "Water tank service", "Emergency support"]
    },
    {
      title: "Complete Care Contract",
      price: "Ultimate care",
      duration: "12 months", 
      visits: "Monthly visits",
      includes: ["Everything in Premium", "Pool maintenance", "Deep cleaning", "24/7 emergency"]
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
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-medium">Complete Care Solution</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                General Maintenance & Annual Contracts
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Peace of mind with scheduled regular visits. Custom contracts and preventive maintenance to keep your property in perfect condition year-round.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate("/booking")}
                  className="cta-button text-white font-bold px-8 py-6"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Contract Quote
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open("https://wa.me/971501234567?text=I need annual maintenance contract", "_blank")}
                  className="font-bold px-8 py-6"
                >
                  WhatsApp Chat
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">Special offers</div>
                    <div className="text-sm text-muted-foreground">Custom annual contracts available</div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">Scheduled visits</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Settings className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">360°</div>
                    <div className="text-sm text-muted-foreground">Complete Care</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              What's Included in Our Contracts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive maintenance services designed to keep your property in perfect condition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Settings className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose Annual Contracts?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Annual maintenance contracts provide consistent care and significant cost savings
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

      {/* Contract Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Choose Your Annual Contract
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible annual contracts designed to meet your property maintenance needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contractTypes.map((contract, index) => (
              <Card key={index} className="text-center relative">
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Recommended
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{contract.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{contract.price}</div>
                  <div className="text-sm text-muted-foreground">{contract.duration} • {contract.visits}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {contract.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => navigate("/booking")}
                    className="w-full mt-6 cta-button text-white font-bold"
                    variant={index === 1 ? "default" : "outline"}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto text-center">
            <Settings className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Professional Property Care You Can Trust
            </h3>
            <p className="text-muted-foreground mb-6">
              With years of experience serving Abu Dhabi, Dubai, and Sharjah, we provide reliable maintenance services that keep your property in excellent condition.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Support</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/booking")}
                className="cta-button text-white font-bold px-8 py-6"
              >
                Start Your Contract
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/971501234567?text=I need maintenance contract consultation", "_blank")}
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

export default GeneralMaintenance;