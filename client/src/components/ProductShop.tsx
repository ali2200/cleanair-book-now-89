import { ShoppingCart, Star, Zap, Shield, Truck, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

// Import AC maintenance product images
import acFiltersImage from "@/assets/product-ac-filters.jpg";
import coilCleanerImage from "@/assets/product-coil-cleaner.jpg";
import ductSanitizerImage from "@/assets/product-duct-sanitizer.jpg";
import acMonitorImage from "@/assets/product-ac-monitor.jpg";
import portableCleanerImage from "@/assets/product-portable-cleaner.jpg";
import waterTreatmentImage from "@/assets/product-water-treatment.jpg";

const ProductShop = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "AC Filter Replacement Kit",
      description: "High-efficiency replacement filters for all AC types. HEPA grade filters that improve cooling efficiency and air quality",
      image: acFiltersImage,
      price: 185,
      originalPrice: 230,
      rating: 4.9,
      reviews: 267,
      features: ["HEPA Grade", "Universal Fit", "6-Month Life", "Easy Install"],
      category: "AC Filters & Parts",
      badge: "Best Seller",
      inStock: true,
      acRelated: true
    },
    {
      id: 2,
      name: "Professional AC Coil Cleaner",
      description: "Specialized foam cleaner for evaporator and condenser coils. Removes buildup, improves cooling efficiency by up to 30%",
      image: coilCleanerImage,
      price: 75,
      originalPrice: 95,
      rating: 4.7,
      reviews: 189,
      features: ["Foam Formula", "30% More Efficient", "Safe for Coils", "No Rinse Required"],
      category: "AC Cleaning Solutions",
      badge: "Professional Grade",
      inStock: true,
      acRelated: true
    },
    {
      id: 3,
      name: "AC Duct Sanitization Spray",
      description: "Antimicrobial treatment for AC ducts and vents. Eliminates mold, bacteria, and odors while improving air quality",
      image: ductSanitizerImage,
      price: 120,
      originalPrice: 150,
      rating: 4.6,
      reviews: 145,
      features: ["Antimicrobial", "Mold Prevention", "Odor Elimination", "Long-Lasting"],
      category: "AC Cleaning Solutions", 
      badge: "Recommended",
      inStock: true,
      acRelated: true
    },
    {
      id: 4,
      name: "Smart AC Performance Monitor",
      description: "Digital monitor to track AC efficiency, energy consumption, and performance metrics. Alerts for maintenance needs",
      image: acMonitorImage,
      price: 285,
      originalPrice: 350,
      rating: 4.8,
      reviews: 98,
      features: ["Real-time Data", "Energy Tracking", "Maintenance Alerts", "Mobile App"],
      category: "AC Monitoring Tools",
      badge: "Smart Technology",
      inStock: true,
      acRelated: true
    },
    {
      id: 5,
      name: "Portable AC Cleaning System",
      description: "Complete portable system for on-site AC cleaning. Includes pump, hoses, and cleaning solutions for professional results",
      image: portableCleanerImage,
      price: 650,
      originalPrice: 850,
      rating: 4.9,
      reviews: 76,
      features: ["Portable System", "Professional Grade", "Complete Kit", "Multiple Solutions"],
      category: "AC Maintenance Equipment",
      badge: "Professional Kit",
      inStock: true,
      acRelated: true
    },
    {
      id: 6,
      name: "AC Drainage & Water Treatment",
      description: "Water treatment system for AC condensate drainage. Prevents blockages, algae growth, and improves system efficiency",
      image: waterTreatmentImage,
      price: 195,
      originalPrice: 245,
      rating: 4.5,
      reviews: 134,
      features: ["Prevents Blockages", "Algae Treatment", "System Protection", "Easy Installation"],
      category: "AC Water Solutions",
      badge: "Maintenance Essential",
      inStock: true,
      acRelated: true
    }
  ];

  const categories = [
    "All AC Products",
    "AC Filters & Parts",
    "AC Cleaning Solutions", 
    "AC Monitoring Tools",
    "AC Maintenance Equipment",
    "AC Water Solutions"
  ];

  const handleAddToCart = (product: any) => {
    // Add to cart logic here
    console.log("Added to cart:", product);
  };

  const handleBuyNow = (product: any) => {
    navigate(`/products/${product.id}`);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <ShoppingCart className="h-4 w-4" />
            Product Store
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Professional</span> AC Maintenance Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            High-quality products designed specifically for AC maintenance, cleaning, and performance optimization
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Truck, title: "Free Delivery", desc: "On AC maintenance products over 300 AED" },
            { icon: Shield, title: "AC Performance Guarantee", desc: "Products guaranteed to improve AC efficiency" },
            { icon: Zap, title: "Professional Installation", desc: "Expert installation with AC service booking" },
            { icon: Gift, title: "Service Combo Deals", desc: "Discounts when bought with AC services" }
          ].map((feature, index) => (
            <div key={index} className="text-center p-4 bg-card/30 rounded-xl border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="font-semibold text-foreground mb-1">{feature.title}</div>
              <div className="text-sm text-muted-foreground">{feature.desc}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="products">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.badge && (
                     <Badge className={`text-xs ${
                       product.badge === "Best Seller" ? "bg-green-500" :
                       product.badge === "Professional Grade" ? "bg-blue-600" :
                       product.badge === "Recommended" ? "bg-orange-500" :
                       product.badge === "Smart Technology" ? "bg-purple-600" :
                       product.badge === "Professional Kit" ? "bg-indigo-600" :
                       product.badge === "Maintenance Essential" ? "bg-emerald-600" :
                       product.badge === "Special Offer" ? "bg-red-500" :
                       product.badge === "Top Rated" ? "bg-yellow-500" :
                       product.badge === "New" ? "bg-blue-500" :
                       "bg-primary"
                     }`}>
                      {product.badge}
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge variant="secondary" className="text-xs">
                      Out of Stock
                    </Badge>
                  )}
                </div>

                {/* Discount Percentage */}
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category */}
                <div className="text-xs text-primary font-medium mb-2">
                  {product.category}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="text-xs bg-muted/50 px-2 py-1 rounded-full text-muted-foreground">
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 3 && (
                    <span className="text-xs text-primary">+{product.features.length - 3}</span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                   <span className="text-2xl font-bold text-primary">
                      {product.price} AED
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice} AED
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 ml-2" />
                    Add to Cart
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 cta-button"
                    onClick={() => handleBuyNow(product)}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? "View Details" : "Out of Stock"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">Need AC Maintenance Products?</div>
              <p className="text-muted-foreground mb-6">
                Our AC experts will recommend the right products for your specific AC system and needs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="cta-button" onClick={() => navigate("/services/ac-cleaning")}>
                Book AC Service + Products
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.open("https://wa.me/971501234567?text=I need AC maintenance products consultation", "_blank")}>
                WhatsApp Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShop;