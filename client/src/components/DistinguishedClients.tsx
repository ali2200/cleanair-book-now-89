import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  GraduationCap, 
  Palette, 
  Trophy, 
  Hotel, 
  Heart, 
  MapPin, 
  School,
  ShoppingBag,
  Camera,
  Waves,
  TreePine,
  Star,
  Gamepad2,
  Users,
  Mountain,
  Plane,
  Fuel,
  Landmark,
  Home,
  Car,
  Briefcase,
  Globe
} from "lucide-react";

const DistinguishedClients = () => {
  const clients = [
    {
      name: "Louvre Abu Dhabi",
      category: "Museum",
      location: "Saadiyat Island",
      icon: Palette,
      logo: "https://louvreabudhabi.ae/themes/lad/assets/images/logo.svg"
    },
    {
      name: "Park Hyatt Abu Dhabi",
      category: "Hospitality",
      location: "Saadiyat Island", 
      icon: Hotel,
      logo: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/25/1424/Park-Hyatt-Logo-Blue-RGB.jpg"
    },
    {
      name: "United Arab Emirates University",
      category: "Education",
      location: "Al Ain",
      icon: School,
      logo: "https://www.uaeu.ac.ae/images/uaeu_logo.png"
    },
    {
      name: "ADNOC",
      category: "Oil & Gas",
      location: "Abu Dhabi",
      icon: Fuel,
      logo: "https://www.adnoc.ae/-/media/project/adnoc/common/img/adnoc-logo.png"
    },
    {
      name: "Etihad Airways",
      category: "Aviation",
      location: "Abu Dhabi",
      icon: Plane,
      logo: "https://www.etihad.com/content/dam/etihadairways/images/common/etihad-airways-logo.svg"
    },
    {
      name: "Aldar Properties",
      category: "Real Estate",
      location: "Abu Dhabi",
      icon: Home,
      logo: "https://www.aldar.com/-/media/aldar/images/aldar-logo.svg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Distinguished Clients
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted by Leading Organizations in UAE
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Major companies, hotels, universities, and institutions in Saadiyat Island and Al Ain trust our professional maintenance services
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/20 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-4">
                  <div className="text-center">
                    {/* Logo/Icon Container */}
                    <div className="h-20 w-full mb-4 bg-white rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-all duration-300 relative overflow-hidden p-2 border border-gray-100">
                      {client.logo ? (
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          onError={(e) => {
                            // Fallback to icon if logo fails to load
                            e.currentTarget.style.display = 'none';
                            const iconContainer = e.currentTarget.nextElementSibling as HTMLElement;
                            if (iconContainer) iconContainer.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className={`h-full w-full flex items-center justify-center ${client.logo ? 'hidden' : 'flex'}`}
                      >
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    {/* Company Name */}
                    <h3 className="font-semibold text-xs leading-tight mb-2 text-foreground line-clamp-2 min-h-[2rem]">
                      {client.name}
                    </h3>
                    
                    {/* Category Badge */}
                    <Badge variant="secondary" className="text-xs mb-2 bg-accent/50 text-accent-foreground">
                      {client.category}
                    </Badge>
                    
                    {/* Location */}
                    <p className="text-xs text-muted-foreground font-medium">
                      {client.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 p-8 bg-card/50 rounded-2xl border border-border/50">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Trusted Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Join our satisfied clients and experience professional maintenance services across UAE
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-primary font-medium">
            <span>✓</span>
            <span>Licensed & Certified</span>
            <span className="mx-2">•</span>
            <span>✓</span>
            <span>24/7 Emergency Response</span>
            <span className="mx-2">•</span>
            <span>✓</span>
            <span>Quality Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistinguishedClients;