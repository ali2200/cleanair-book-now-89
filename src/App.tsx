import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import Services from "./pages/Services";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ACCleaning from "./pages/services/ACCleaning";
import DuctCleaning from "./pages/services/DuctCleaning";
import AirQuality from "./pages/services/AirQuality";
import MoldTreatment from "./pages/services/MoldTreatment";
import FogDisinfection from "./pages/services/FogDisinfection";
import WaterTanks from "./pages/services/WaterTanks";
import PoolMaintenance from "./pages/services/PoolMaintenance";
import GeneralMaintenance from "./pages/services/GeneralMaintenance";
import ProductDetail from "./pages/products/ProductDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Pages */}
          <Route path="/services/ac-cleaning" element={<ACCleaning />} />
          <Route path="/services/duct-cleaning" element={<DuctCleaning />} />
          <Route path="/services/air-quality" element={<AirQuality />} />
          <Route path="/services/mold-treatment" element={<MoldTreatment />} />
          <Route path="/services/fog-disinfection" element={<FogDisinfection />} />
          <Route path="/services/water-tanks" element={<WaterTanks />} />
          <Route path="/services/pool-maintenance" element={<PoolMaintenance />} />
          <Route path="/services/general-maintenance" element={<GeneralMaintenance />} />
          
          {/* Product Pages */}
          <Route path="/products/:id" element={<ProductDetail />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
