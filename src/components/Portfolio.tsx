import { useState } from "react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroACCleaning from "@/assets/hero-ac-cleaning.jpg";
import ductCleaningService from "@/assets/duct-cleaning-service.jpg";
import poolMaintenance from "@/assets/pool-maintenance.jpg";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ac", label: "AC Cleaning" },
    { id: "ducts", label: "Air Ducts" },
    { id: "pools", label: "Pool Maintenance" },
    { id: "tanks", label: "Water Tanks" }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "ac",
      title: "Split AC Cleaning - Villa in New Cairo",
      description: "Comprehensive cleaning of indoor and outdoor AC units with filter disinfection",
      beforeImage: heroACCleaning,
      afterImage: heroACCleaning,
      results: [
        "Improved cooling efficiency by 40%",
        "30% reduction in electricity consumption",
        "Removed 99% of bacteria and fungi"
      ],
      duration: "3 hours",
      client: "Ahmed Mohamed - New Cairo"
    },
    {
      id: 2,
      category: "ducts",
      title: "Air Duct Cleaning - Office Building in Nasr City",
      description: "Cleaning and disinfection of central air duct network for administrative building",
      beforeImage: ductCleaningService,
      afterImage: ductCleaningService,
      results: [
        "Improved air quality by 85%",
        "Removed accumulated dust and debris",
        "Enhanced airflow in offices"
      ],
      duration: "Full day",
      client: "Future Consulting Company"
    },
    {
      id: 3,
      category: "pools",
      title: "Comprehensive Pool Maintenance - Villa in Sheikh Zayed",
      description: "Pool cleaning and maintenance with water disinfection and filter cleaning",
      beforeImage: poolMaintenance,
      afterImage: poolMaintenance,
      results: [
        "Crystal clear and safe swimming water",
        "Perfect chemical balance",
        "Complete cleaning of walls and floors"
      ],
      duration: "4 hours",
      client: "Mohamed Samy - Sheikh Zayed"
    },
    {
      id: 4,
      category: "tanks",
      title: "Water Tank Cleaning - Residential Building in Maadi",
      description: "Cleaning and disinfection of overhead water tank with quality certificate",
      beforeImage: ductCleaningService,
      afterImage: ductCleaningService,
      results: [
        "Clean and safe drinking water",
        "Removed sediments and algae",
        "Certified quality assurance"
      ],
      duration: "6 hours",
      client: "Building Management - Maadi"
    },
    {
      id: 5,
      category: "ac",
      title: "Central AC Maintenance - Shopping Mall",
      description: "Comprehensive maintenance of central air conditioning system in commercial mall",
      beforeImage: heroACCleaning,
      afterImage: heroACCleaning,
      results: [
        "50% performance improvement",
        "Significant energy savings",
        "Enhanced customer comfort"
      ],
      duration: "3 days",
      client: "City Stars Mall"
    },
    {
      id: 6,
      category: "ducts",
      title: "Air Duct Disinfection - Private Hospital",
      description: "Disinfection and sterilization of air ducts according to medical standards",
      beforeImage: ductCleaningService,
      afterImage: ductCleaningService,
      results: [
        "Compliant with medical standards",
        "Safe sterile environment",
        "Exceptional air quality"
      ],
      duration: "1 week",
      client: "Nile International Hospital"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-muted/20 via-background to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Play className="h-4 w-4" />
            Our Portfolio
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Before & After</span> Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See the amazing results we achieved with our clients and the complete transformation in service quality
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full px-6 py-2 transition-all duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:shadow-2xl transition-all duration-500 group">
              {/* Before/After Images */}
              <div className="relative h-80 overflow-hidden">
                <div className="grid grid-cols-2 h-full">
                  {/* Before */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.beforeImage}
                      alt={`Before cleaning - ${item.title}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 contrast-125 sepia-[0.3] saturate-75"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-orange-800/30 to-red-900/40"></div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/90 backdrop-blur-sm text-white rounded-full text-sm font-medium shadow-lg">
                      Before
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.afterImage}
                      alt={`After cleaning - ${item.title}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-110 contrast-110 saturate-125"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-green-400/20 to-emerald-500/20"></div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white rounded-full text-sm font-medium shadow-lg">
                      After
                    </div>
                  </div>
                </div>
                
                {/* Divider Line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/30"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Results Achieved
                  </h4>
                  <div className="space-y-2">
                    {item.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-xl">
                  <div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                    <div className="font-medium text-foreground">{item.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Client</div>
                    <div className="font-medium text-foreground">{item.client}</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    Project Details
                    <ArrowRight className="h-4 w-4 mr-2" />
                  </Button>
                  <div className="text-sm text-primary font-medium">
                    Request Similar Service
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">Your Next Project?</div>
              <p className="text-muted-foreground mb-6">
                Let us achieve the same amazing results for you
              </p>
            </div>
            <Button size="lg" className="cta-button">
              Book Free Consultation
              <ArrowRight className="h-5 w-5 mr-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;