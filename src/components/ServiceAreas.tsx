import { MapPin, Clock, Car, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServiceAreas = () => {
  const mainAreas = [
    {
      name: "Abu Dhabi",
      districts: ["Al Khalidiyah", "Al Karamah", "Al Manhal", "Al Reem Island", "Corniche", "Marina"],
      responseTime: "30 minutes",
      featured: true
    },
    {
      name: "Dubai",
      districts: ["Downtown", "Dubai Marina", "JBR", "Business Bay", "DIFC", "Jumeirah"],
      responseTime: "45 minutes",
      featured: true
    },
    {
      name: "Sharjah",
      districts: ["Al Majaz", "Al Qasba", "Al Nahda", "Muwailih", "Al Taawun", "King Faisal Street"],
      responseTime: "50 minutes",
      featured: false
    },
    {
      name: "Ajman",
      districts: ["Al Nuaimiya", "Al Rashidiya", "Al Helio", "Al Jurf", "City Centre", "Corniche"],
      responseTime: "60 minutes",
      featured: false
    }
  ];

  const additionalAreas = [
    "Fujairah", "Ras Al Khaimah", "Umm Al Quwain", "Al Ain", "Dibba", "Khor Fakkan", 
    "Kalba", "Masafi", "Dhaid", "Liwa", "Madinat Zayed", "Ghantoot"
  ];

  const serviceFeatures = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "Fast arrival at scheduled times"
    },
    {
      icon: Car,
      title: "Wide Coverage",
      description: "Service throughout UAE"
    },
    {
      icon: MapPin,
      title: "Multiple Locations",
      description: "Branches in main governorates"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            Service Areas
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            We Serve You <span className="gradient-text">Everywhere</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our premium services are available throughout UAE with guaranteed quality and speed
          </p>
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {serviceFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main Service Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mainAreas.map((area, index) => (
            <Card key={index} className={`p-8 bg-card/50 backdrop-blur-sm border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${area.featured ? 'border-primary/30 bg-primary/5' : 'border-border'}`}>
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{area.name}</h3>
                    {area.featured && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Featured Area
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Response Time: {area.responseTime}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Districts */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Covered Areas
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {area.districts.map((district, districtIndex) => (
                    <div key={districtIndex} className="flex items-center gap-2 p-3 bg-background/60 rounded-lg border border-border/50">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">{district}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Service Available</span>
                  <span className="text-primary font-medium">24/7</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Coverage */}
        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-3xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Additional Coverage Throughout <span className="text-primary">UAE</span>
            </h3>
            <p className="text-muted-foreground">
              We also provide our services in the following emirates by appointment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {additionalAreas.map((area, index) => (
              <div key={index} className="text-center p-4 bg-background/50 rounded-xl border border-border/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
                <div className="text-foreground font-medium">{area}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Service Notice */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-foreground">Emergency Service</div>
              <div className="text-muted-foreground">Available 24/7 in featured areas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;