import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductShop from "@/components/ProductShop";
import { Helmet } from "react-helmet-async";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AC Maintenance Products | Professional HVAC Products - Brooklyn General Maintenance</title>
        <meta name="description" content="Professional AC maintenance products including filters, cleaners, monitoring tools, and equipment. High-quality HVAC products for optimal air conditioning performance." />
        <meta name="keywords" content="AC products, HVAC maintenance, air conditioner filters, AC cleaning products, HVAC equipment, Dubai AC products" />
      </Helmet>
      
      <Header />
      
      <main>
        <ProductShop />
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;