import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Ahmed Mohamed",
      role: "Apartment Owner in New Cairo",
      image: "/api/placeholder/80/80",
      rating: 5,
      review: "Excellent service with results beyond expectations. Professional team with modern equipment. Highly recommend to everyone.",
      service: "AC Cleaning"
    },
    {
      name: "Fatima Ali",
      role: "Office Manager in Nasr City",
      image: "/api/placeholder/80/80",
      rating: 5,
      review: "Air duct cleaning was done professionally and air quality improved significantly.",
      service: "Air Duct Cleaning"
    },
    {
      name: "Mohamed Samy",
      role: "Villa Owner in Sheikh Zayed",
      image: "/api/placeholder/80/80",
      rating: 5,
      review: "Pool maintenance was comprehensive and outstanding. Water became completely clear with amazing results.",
      service: "Pool Maintenance"
    },
    {
      name: "Nora Hassan",
      role: "Homeowner in Maadi",
      image: "/api/placeholder/80/80",
      rating: 5,
      review: "Trained and polite work team. They worked with complete cleanliness and finished on time.",
      service: "Disinfection & Sanitization"
    },
    {
      name: "Khaled Youssef",
      role: "Restaurant Manager in Downtown",
      image: "/api/placeholder/80/80",
      rating: 5,
      review: "Water tank cleaning was done to high standards with quality certificates. Reliable service.",
      service: "Water Tank Cleaning"
    },
    {
      name: "Maryam Ahmed",
      role: "Beauty Salon Owner",
      image: "/api/placeholder/80/80",
      rating: 5,
      review: "Excellent customer service with quick response. All problems were solved efficiently.",
      service: "General Maintenance"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "4.9", label: "Star Rating" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Technical Support" }
  ];


  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            Client Reviews
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real testimonials from clients who experienced our services and enjoyed exceptional results
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.slice(0, 3).map((review, index) => (
            <Card key={index} className="p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </div>

              {/* Review Content */}
              <p className="text-foreground mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                "{review.review}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) nextElement.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold text-primary" style={{display: 'none'}}>
                    {review.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm sm:text-base">{review.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{review.role}</div>
                  <div className="text-xs text-primary font-medium mt-1">{review.service}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 text-muted-foreground mb-4">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span>Join our list of satisfied clients</span>
            <Star className="h-4 w-4 fill-primary text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;