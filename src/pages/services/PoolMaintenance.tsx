import { Waves, CheckCircle, Droplets, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useNavigate } from "react-router-dom";
import poolImage from "@/assets/pool-maintenance.jpg";

const PoolMaintenance = () => {
  const navigate = useNavigate();

  const services = [
    "Water testing & balancing",
    "Pool cleaning & skimming",
    "Filter maintenance",
    "Chemical treatment",
    "Equipment inspection",
    "Regular maintenance visits"
  ];

  const benefits = [
    "Crystal clear water",
    "Safe swimming environment", 
    "Extended equipment life",
    "Cost-effective maintenance",
    "Professional expertise",
    "Regular monitoring"
  ];

  const maintenancePackages = [
    {
      title: "Basic Package",
      price: "From AED 250",
      frequency: "Weekly",
      includes: ["Water testing", "Chemical balancing", "Skimming", "Basic cleaning"]
    },
    {
      title: "Premium Package", 
      price: "From AED 400",
      frequency: "Bi-weekly",
      includes: ["Everything in Basic", "Filter cleaning", "Equipment check", "Deep cleaning"]
    },
    {
      title: "Complete Package",
      price: "From AED 600", 
      frequency: "Monthly",
      includes: ["Everything in Premium", "Equipment maintenance", "Tile cleaning", "Priority support"]
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
                  <Waves className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-medium">Pool Care Service</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Swimming Pool Maintenance
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Chemical balance and regular cleaning for your pool. Comprehensive maintenance and chemical balancing to keep your pool safe and crystal clear.
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
                  onClick={() => window.open("https://wa.me/971501234567?text=I need pool maintenance service", "_blank")}
                  className="font-bold px-8 py-6"
                >
                  WhatsApp Chat
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">From AED 250</div>
                    <div className="text-sm text-muted-foreground">Weekly maintenance service</div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Droplets className="h-4 w-4" />
                    <span className="text-sm font-medium">Professional care</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={poolImage} 
                alt="Swimming Pool Maintenance"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Pool Maintenance Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive pool care services to keep your pool clean, safe, and ready for use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Waves className="h-8 w-8 text-primary mx-auto mb-4" />
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
              Why Choose Professional Pool Maintenance?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional maintenance ensures your pool stays clean, safe, and enjoyable year-round
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

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Choose Your Maintenance Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible maintenance packages designed to meet your pool care needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenancePackages.map((pkg, index) => (
              <Card key={index} className="text-center relative">
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">{pkg.frequency} visits</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {pkg.includes.map((item, idx) => (
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
                    Choose Package
                  </Button>
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
              Keep Your Pool Perfect Year-Round
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your professional pool maintenance service today and enjoy crystal clear water every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/booking")}
                className="cta-button text-white font-bold px-8 py-6"
              >
                Start Maintenance Service
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/971501234567?text=I need pool maintenance consultation", "_blank")}
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

export default PoolMaintenance;