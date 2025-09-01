import { useState } from "react";
import { Calculator, Send, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const QuickQuote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    service: "",
    propertyType: "",
    urgency: "",
    details: ""
  });

  const services = [
    { value: "ac-cleaning", label: "AC Cleaning", price: "From 200 EGP" },
    { value: "duct-cleaning", label: "Air Duct Cleaning", price: "From 800 EGP" },
    { value: "pool-maintenance", label: "Pool Maintenance", price: "From 500 EGP" },
    { value: "water-tanks", label: "Water Tank Cleaning", price: "From 300 EGP" },
    { value: "disinfection", label: "Disinfection & Sanitization", price: "From 400 EGP" },
    { value: "general-maintenance", label: "General Maintenance", price: "On Request" }
  ];

  const areas = [
    "Fifth Settlement", "Sheikh Zayed", "Nasr City", "Maadi", "Zamalek",
    "Heliopolis", "6th of October", "Rehab", "Madinaty", "Agouza", "Other"
  ];

  const propertyTypes = [
    { value: "apartment", label: "Residential Apartment" },
    { value: "villa", label: "Villa" },
    { value: "office", label: "Office" },
    { value: "commercial", label: "Commercial Property" },
    { value: "industrial", label: "Industrial Facility" }
  ];

  const urgencyLevels = [
    { value: "normal", label: "Normal (Within a week)", extra: "" },
    { value: "urgent", label: "Urgent (Within 3 days)", extra: "+15%" },
    { value: "emergency", label: "Emergency (Within 24 hours)", extra: "+30%" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in the required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Request Sent Successfully!",
      description: "We will contact you within 15 minutes to confirm the appointment",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      area: "",
      service: "",
      propertyType: "",
      urgency: "",
      details: ""
    });
  };

  const handleWhatsApp = () => {
    const message = `Hello, I would like a quote for ${services.find(s => s.value === formData.service)?.label || 'Not specified'} service in ${formData.area} area`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201234567890?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Calculator className="h-4 w-4" />
            Quick Quote
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Get Instant <span className="gradient-text">Price Quote</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get an accurate service cost estimate in minutes with direct booking option
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border border-border">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground font-medium mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="01xxxxxxxxx"
                      className="bg-background/50"
                      required
                    />
                  </div>
                </div>

                {/* Location & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label className="text-foreground font-medium mb-2 block">
                      Area
                    </Label>
                    <Select value={formData.area} onValueChange={(value) => setFormData({...formData, area: value})}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        {areas.map((area) => (
                          <SelectItem key={area} value={area}>{area}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-foreground font-medium mb-2 block">
                      Service Type *
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})} required>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select required service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            <div className="flex justify-between items-center w-full">
                              <span>{service.label}</span>
                              <span className="text-primary text-sm mr-4">{service.price}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Property Type & Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label className="text-foreground font-medium mb-2 block">
                      Property Type
                    </Label>
                    <Select value={formData.propertyType} onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-foreground font-medium mb-2 block">
                      Priority Level
                    </Label>
                    <Select value={formData.urgency} onValueChange={(value) => setFormData({...formData, urgency: value})}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select priority level" />
                      </SelectTrigger>
                      <SelectContent>
                        {urgencyLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            <div className="flex justify-between items-center w-full">
                              <span>{level.label}</span>
                              {level.extra && <span className="text-red-500 text-sm mr-4">{level.extra}</span>}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <Label htmlFor="details" className="text-foreground font-medium mb-2 block">
                    Additional Details
                  </Label>
                  <Textarea
                    id="details"
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    placeholder="Any additional details you'd like to add..."
                    className="bg-background/50 min-h-[120px]"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="flex-1 cta-button">
                    <Send className="h-5 w-5 ml-2" />
                    Get Price Quote
                  </Button>
                  <Button type="button" variant="outline" size="lg" onClick={handleWhatsApp} className="flex-1">
                    <MessageCircle className="h-5 w-5 ml-2" />
                    Direct WhatsApp
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Benefits & Info */}
          <div className="space-y-6 sm:space-y-8">
            {/* Quick Benefits */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Direct Booking Benefits
              </h3>
              <div className="space-y-3">
                {[
                  "Accurate quote within 15 minutes",
                  "15% discount on first order", 
                  "Free consultation with experts",
                  "Flexible visit schedules",
                  "Comprehensive service guarantee",
                  "24/7 customer service"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Call Now</div>
                    <div className="text-sm text-muted-foreground">01234567890</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">Instant response to your inquiries</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Pricing Note */}
            <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
              <p className="text-sm text-muted-foreground text-center">
                * Displayed prices are estimates and may vary based on work size and location
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickQuote;