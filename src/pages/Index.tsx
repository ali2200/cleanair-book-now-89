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
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        {/* Animated Background Shapes */}
        <div className="background-shapes">
          <div className="shape shape-1 interactive-shape"></div>
          <div className="shape shape-2 pulse-shape interactive-shape"></div>
          <div className="shape shape-3 interactive-shape"></div>
          <div className="shape shape-4 pulse-shape interactive-shape"></div>
          <div className="shape shape-5 interactive-shape"></div>
          <div className="shape shape-6 interactive-shape"></div>
        </div>
        
        <Header />
        <div className="animate-on-scroll">
          <HeroSection />
        </div>
        <div className="animate-on-scroll">
          <WhyChooseUs />
        </div>
        <div className="animate-on-scroll">
          <ServicesSection />
        </div>
        
        {/* Customer Reviews - مباشرة بعد الخدمات لبناء الثقة */}
        <div className="animate-on-scroll">
          <CustomerReviews />
        </div>
        
        {/* Quick Quote - في موقع مبكر لزيادة التحويل */}
        <div className="animate-on-scroll">
          <QuickQuote />
        </div>
        
        <div className="animate-on-scroll">
          <DistinguishedClients />
        </div>
        <div className="animate-on-scroll">
          <Portfolio />
        </div>
        
        {/* Service Areas + Location Map - مدمجين لتحسين التدفق */}
        <div className="animate-on-scroll">
          <ServiceAreas />
        </div>
        <section className="py-24 px-4 bg-muted/20 animate-on-scroll">
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
        
        <div className="animate-on-scroll">
          <ProductShop />
        </div>
        <div className="animate-on-scroll">
          <FAQ />
        </div>
        <Footer />
        <WhatsAppFloat />
      </div>
    </PageTransition>
  );
};

export default Index;
