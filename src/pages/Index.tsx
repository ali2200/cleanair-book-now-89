import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";

import CustomerReviews from "@/components/CustomerReviews";
import Portfolio from "@/components/Portfolio";
import DistinguishedClients from "@/components/DistinguishedClients";
import ServiceAreas from "@/components/ServiceAreas";
import QuickQuote from "@/components/QuickQuote";
import FAQ from "@/components/FAQ";
import ProductShop from "@/components/ProductShop";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Map from "@/components/Map";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background Shapes */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2 pulse-shape"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4 pulse-shape"></div>
      </div>
      
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      
      {/* Customer Reviews - مباشرة بعد الخدمات لبناء الثقة */}
      <CustomerReviews />
      
      {/* Quick Quote - في موقع مبكر لزيادة التحويل */}
      <QuickQuote />
      
      <DistinguishedClients />
      <Portfolio />
      
      {/* Service Areas + Location Map - مدمجين لتحسين التدفق */}
      <ServiceAreas />
      <section className="py-24 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Visit <span className="gradient-text">Our Location</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in Abu Dhabi, we serve all emirates across the UAE with professional maintenance services
            </p>
          </div>
          <Map className="max-w-4xl mx-auto" showTokenInput={true} />
        </div>
      </section>
      
      <ProductShop />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
