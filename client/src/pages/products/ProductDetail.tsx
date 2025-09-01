import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart, Heart, Truck, Shield, Zap, Gift, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { toast } from "sonner";

// Product data
import airPurifierImage from "@/assets/product-air-purifier.jpg";
import acCleanerImage from "@/assets/product-ac-cleaner.jpg";
import waterFilterImage from "@/assets/product-water-filter.jpg";
import airMonitorImage from "@/assets/product-air-monitor.jpg";
import sanitizerImage from "@/assets/product-sanitizer.jpg";
import cleaningKitImage from "@/assets/product-cleaning-kit.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const products = {
    "1": {
      id: 1,
      name: "Home Air Purifier",
      description: "Advanced air purifier with HEPA filters to remove 99.97% of pollutants",
      images: [airPurifierImage, airPurifierImage, airPurifierImage],
      price: 915,
      originalPrice: 1099,
      rating: 4.8,
      reviews: 156,
      features: ["HEPA Filters", "99.97% Purification", "Silent Operation", "Smart Controls"],
      category: "Air Purification",
      badge: "Best Seller",
      inStock: true,
      specifications: {
        "Coverage Area": "Up to 500 sq ft",
        "Filter Type": "True HEPA H13",
        "Noise Level": "< 25dB",
        "Power Consumption": "45W",
        "Dimensions": "35 x 35 x 65 cm",
        "Weight": "8.5 kg"
      },
      longDescription: "Transform your indoor air quality with our premium HEPA air purifier. Engineered with advanced filtration technology, this unit removes 99.97% of airborne particles including dust, pollen, pet dander, and smoke. The whisper-quiet operation ensures peaceful sleep while the smart sensors automatically adjust purification levels based on air quality."
    },
    "2": {
      id: 2,
      name: "Professional AC Cleaner",
      description: "Special cleaning spray for air conditioners, safe and effective for removing bacteria and odors",
      images: [acCleanerImage, acCleanerImage, acCleanerImage],
      price: 55,
      originalPrice: 73,
      rating: 4.6,
      reviews: 89,
      features: ["Antibacterial", "Safe Formula", "Fast Acting", "Odorless"],
      category: "Cleaning Products",
      badge: "Special Offer",
      inStock: true,
      specifications: {
        "Volume": "500ml",
        "Formula": "Bio-enzymatic",
        "pH Level": "Neutral 7.0",
        "Coverage": "10-15 AC units",
        "Shelf Life": "3 years",
        "Application": "Spray & Wipe"
      },
      longDescription: "Professional-grade AC cleaning solution that penetrates deep into coils and fins to eliminate bacteria, mold, and unpleasant odors. Our bio-enzymatic formula is safe for all AC types and leaves no residue. Perfect for maintaining optimal AC performance and extending equipment lifespan."
    },
    "3": {
      id: 3,
      name: "High Quality Water Filters",
      description: "Multi-stage water filters to ensure pure and safe drinking water",
      images: [waterFilterImage, waterFilterImage, waterFilterImage],
      price: 330,
      originalPrice: 440,
      rating: 4.9,
      reviews: 234,
      features: ["7 Stages", "Chlorine Removal", "Antibacterial", "Long Lasting"],
      category: "Water Treatment",
      badge: "Top Rated",
      inStock: true,
      specifications: {
        "Filtration Stages": "7 Stage Process",
        "Flow Rate": "2.8 LPM",
        "Filter Life": "12 months",
        "Capacity": "3000 liters",
        "Installation": "Under-sink",
        "Certification": "NSF Certified"
      },
      longDescription: "Experience pure, great-tasting water with our 7-stage filtration system. Each stage targets specific contaminants: sediment pre-filter, activated carbon, KDF media, ion exchange resin, sub-micron filtration, mineral enhancement, and UV sterilization. Removes 99.9% of chlorine, heavy metals, bacteria, and viruses."
    },
    "4": {
      id: 4,
      name: "Air Quality Monitor",
      description: "Smart device for monitoring air quality and displaying data in real-time",
      images: [airMonitorImage, airMonitorImage, airMonitorImage],
      price: 220,
      originalPrice: 293,
      rating: 4.7,
      reviews: 67,
      features: ["Digital Display", "Mobile App", "Alerts", "Long Battery"],
      category: "Monitoring Devices",
      badge: "New",
      inStock: false,
      specifications: {
        "Sensors": "PM2.5, PM10, CO2, VOC",
        "Display": "3.5\" Color LCD",
        "Connectivity": "WiFi + Bluetooth",
        "Battery": "Rechargeable Li-ion",
        "App": "iOS & Android",
        "Accuracy": "±10% reading"
      },
      longDescription: "Stay informed about your indoor air quality with our smart monitoring device. Real-time measurements of PM2.5, PM10, CO2, temperature, humidity, and VOCs. The intuitive mobile app provides historical data, trends, and personalized recommendations for improving your indoor environment."
    },
    "5": {
      id: 5,
      name: "Portable Ozone Sanitizer",
      description: "Compact ozone sanitizing device for use in cars and offices",
      images: [sanitizerImage, sanitizerImage, sanitizerImage],
      price: 146,
      originalPrice: 183,
      rating: 4.5,
      reviews: 45,
      features: ["Portable", "USB Charging", "Automatic", "Safe"],
      category: "Sanitization",
      badge: "",
      inStock: true,
      specifications: {
        "Ozone Output": "100mg/h",
        "Coverage": "Up to 50 sq ft",
        "Power": "USB-C Charging",
        "Timer": "15/30/60 minutes",
        "Size": "12 x 8 x 4 cm",
        "Weight": "320g"
      },
      longDescription: "Portable ozone generator that eliminates bacteria, viruses, and odors in small spaces. Perfect for cars, offices, hotel rooms, and storage areas. The built-in timer ensures safe operation while the compact design makes it ideal for travel. USB-C charging provides up to 8 hours of operation."
    },
    "6": {
      id: 6,
      name: "Comprehensive Cleaning Kit",
      description: "Complete set of professional cleaning tools and materials for home use",
      images: [cleaningKitImage, cleaningKitImage, cleaningKitImage],
      price: 110,
      originalPrice: 146,
      rating: 4.4,
      reviews: 123,
      features: ["20 Pieces", "High Quality", "Multi-Purpose", "Storage Bag"],
      category: "Cleaning Tools",
      badge: "Limited Offer",
      inStock: true,
      specifications: {
        "Kit Contents": "20 Professional Tools",
        "Bag Material": "Heavy-duty Canvas",
        "Tool Material": "Stainless Steel",
        "Brush Types": "5 Different Sizes",
        "Cloths": "Microfiber & Cotton",
        "Chemicals": "Eco-friendly Solutions"
      },
      longDescription: "Complete professional cleaning arsenal in one convenient kit. Includes specialized brushes, microfiber cloths, extension poles, spray bottles, and eco-friendly cleaning solutions. Perfect for AC units, ducts, appliances, and general home maintenance. Organized in a durable canvas storage bag."
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  const handleBuyNow = () => {
    toast.success("Redirecting to checkout...");
    // Here you would typically redirect to checkout
  };

  const relatedProducts = Object.values(products)
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/#products')} className="hover:text-primary">Products</button>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-muted'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badge and Category */}
            <div className="flex items-center gap-3">
              <Badge variant="secondary">{product.category}</Badge>
              {product.badge && (
                <Badge className={`${
                  product.badge === "Best Seller" ? "bg-green-500" :
                  product.badge === "Special Offer" ? "bg-red-500" :
                  product.badge === "Top Rated" ? "bg-yellow-500" :
                  product.badge === "New" ? "bg-blue-500" :
                  "bg-primary"
                }`}>
                  {product.badge}
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">
                  {product.price} AED
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice} AED
                  </span>
                )}
              </div>
              {product.originalPrice > product.price && (
                <div className="text-green-600 font-medium">
                  Save {product.originalPrice - product.price} AED ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Key Features:</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={!product.inStock}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={!product.inStock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  className="flex-1 cta-button"
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                >
                  Buy Now
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">Free Delivery</div>
                  <div className="text-xs text-muted-foreground">Orders over 500 AED</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">1 Year Warranty</div>
                  <div className="text-xs text-muted-foreground">Manufacturing defects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.longDescription}
              </p>
            </Card>
          </TabsContent>
          
          <TabsContent value="specifications" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
              <div className="text-center py-8 text-muted-foreground">
                <p>Customer reviews will be displayed here.</p>
                <p className="text-sm mt-2">{product.reviews} verified reviews available</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => navigate(`/products/${relatedProduct.id}`)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">{relatedProduct.price} AED</span>
                      {relatedProduct.originalPrice > relatedProduct.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          {relatedProduct.originalPrice} AED
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ProductDetail;