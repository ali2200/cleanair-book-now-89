import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Calendar, MapPin, User, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

interface BookingData {
  service: string;
  city: string;
  area: string;
  propertyType: string;
  units: string;
  notes: string;
  date: string;
  period: string;
  urgent: boolean;
  firstName: string;
  lastName: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  termsAccepted: boolean;
}

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    service: "",
    city: "",
    area: "",
    propertyType: "",
    units: "",
    notes: "",
    date: "",
    period: "",
    urgent: false,
    firstName: "",
    lastName: "",
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
    termsAccepted: false,
  });
  
  const { toast } = useToast();

  const services = [
    "AC Cleaning & Maintenance",
    "Air Duct Deep Cleaning",
    "Indoor Air Quality Management",
    "Mold Removal & Treatment",
    "Fog Disinfection Technology",
    "Water Tank Cleaning + Testing",
    "Swimming Pool Maintenance",
    "General Maintenance",
    "Annual Contracts"
  ];

  const cities = ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"];
  const propertyTypes = ["Apartment", "Villa", "Office", "Warehouse", "Commercial Shop"];
  const periods = ["Morning (8:00 - 12:00)", "Afternoon (12:00 - 16:00)", "Evening (16:00 - 20:00)"];

  const updateBookingData = (field: string, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!bookingData.service || !bookingData.city || !bookingData.propertyType) {
          toast({
            title: "Please fill all required fields",
            description: "Service, city, and property type are required.",
            variant: "destructive"
          });
          return false;
        }
        break;
      case 2:
        if (!bookingData.date || !bookingData.period) {
          toast({
            title: "Please select appointment",
            description: "Date and time period are required.",
            variant: "destructive"
          });
          return false;
        }
        break;
      case 3:
        if (!bookingData.firstName || !bookingData.lastName || !bookingData.phone || !bookingData.termsAccepted) {
          toast({
            title: "Please fill personal information",
            description: "Name, phone number, and terms acceptance are required.",
            variant: "destructive"
          });
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      const bookingId = `BG-2024-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
      
      console.log("Booking Data:", bookingData);
      
      toast({
        title: "Booking request sent successfully!",
        description: `Booking ID: ${bookingId}`,
      });

      const message = `Hello, new booking request received:
Booking ID: ${bookingId}
Service: ${bookingData.service}
City: ${bookingData.city}
Property Type: ${bookingData.propertyType}
Name: ${bookingData.firstName} ${bookingData.lastName}
Phone: ${bookingData.phone}`;

      setTimeout(() => {
        window.open(`https://wa.me/971501234567?text=${encodeURIComponent(message)}`, "_blank");
      }, 2000);

      setCurrentStep(4);
    }
  };

  const getStepIcon = (step: number) => {
    if (step < currentStep) return <CheckCircle className="h-5 w-5" />;
    if (step === 1) return <MapPin className="h-5 w-5" />;
    if (step === 2) return <Calendar className="h-5 w-5" />;
    if (step === 3) return <User className="h-5 w-5" />;
    return <div className="w-5 h-5 rounded-full border-2 border-current" />;
  };

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
      
      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                  step <= currentStep 
                    ? 'bg-primary text-primary-foreground step-completed' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {getStepIcon(step)}
                </div>
                {step < 3 && (
                  <div className={`w-24 h-1 mx-4 transition-all ${
                    step < currentStep ? 'step-indicator' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">
              Step {currentStep} of 3
            </div>
            <div className="text-lg font-semibold">
              {currentStep === 1 && "Service & Location"}
              {currentStep === 2 && "Appointment & Details"}
              {currentStep === 3 && "Personal Information"}
              {currentStep === 4 && "Successfully Submitted"}
            </div>
          </div>
        </div>

        {/* Form Steps */}
        <div className="max-w-2xl mx-auto">
          {/* Step 1: Service & Location */}
          {currentStep === 1 && (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Choose Your Service & Location</CardTitle>
                <CardDescription>
                  Select the type of service needed and property location
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="service">Required Service *</Label>
                  <Select value={bookingData.service} onValueChange={(value) => updateBookingData('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Select value={bookingData.city} onValueChange={(value) => updateBookingData('city', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="area">Area/District</Label>
                    <Input
                      value={bookingData.area}
                      onChange={(e) => updateBookingData('area', e.target.value)}
                      placeholder="e.g., Marina, Downtown"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="propertyType">Property Type *</Label>
                    <Select value={bookingData.propertyType} onValueChange={(value) => updateBookingData('propertyType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="units">Number of Units/Rooms</Label>
                    <Input
                      type="number"
                      value={bookingData.units}
                      onChange={(e) => updateBookingData('units', e.target.value)}
                      placeholder="e.g., 3"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    value={bookingData.notes}
                    onChange={(e) => updateBookingData('notes', e.target.value)}
                    placeholder="Any additional details you'd like to add..."
                    rows={3}
                  />
                </div>

                <Button onClick={nextStep} className="w-full cta-button text-white font-bold">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Date & Time */}
          {currentStep === 2 && (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Choose Appointment</CardTitle>
                <CardDescription>
                  Select your preferred date and time
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => updateBookingData('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <Label htmlFor="period">Preferred Time *</Label>
                  <Select value={bookingData.period} onValueChange={(value) => updateBookingData('period', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time period" />
                    </SelectTrigger>
                    <SelectContent>
                      {periods.map((period) => (
                        <SelectItem key={period} value={period}>
                          {period}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="urgent"
                    checked={bookingData.urgent}
                    onCheckedChange={(checked) => updateBookingData('urgent', checked)}
                  />
                  <Label htmlFor="urgent" className="text-sm">
                    Urgent service (additional charges may apply)
                  </Label>
                </div>

                {bookingData.urgent && (
                  <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                    <p className="text-sm text-warning-foreground">
                      Note: Urgent service requires additional fees ranging from 50-100 AED depending on service type and location.
                    </p>
                  </div>
                )}

                <div className="flex gap-4">
                  <Button onClick={prevStep} variant="outline" className="flex-1">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button onClick={nextStep} className="flex-1 cta-button text-white font-bold">
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Personal Information */}
          {currentStep === 3 && (
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Your Personal Information</CardTitle>
                <CardDescription>
                  Enter your details to contact you and confirm the appointment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      value={bookingData.firstName}
                      onChange={(e) => updateBookingData('firstName', e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      value={bookingData.lastName}
                      onChange={(e) => updateBookingData('lastName', e.target.value)}
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Mobile Number *</Label>
                  <Input
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => updateBookingData('phone', e.target.value)}
                    placeholder="+971 50 123 4567"
                  />
                </div>

                <div>
                  <Label htmlFor="whatsapp">WhatsApp (Optional)</Label>
                  <Input
                    type="tel"
                    value={bookingData.whatsapp}
                    onChange={(e) => updateBookingData('whatsapp', e.target.value)}
                    placeholder="Same as mobile or different number"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address (Optional)</Label>
                  <Input
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => updateBookingData('email', e.target.value)}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Detailed Address</Label>
                  <Textarea
                    value={bookingData.address}
                    onChange={(e) => updateBookingData('address', e.target.value)}
                    placeholder="Building name, apartment number, nearest landmark..."
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={bookingData.termsAccepted}
                    onCheckedChange={(checked) => updateBookingData('termsAccepted', checked)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and privacy policy *
                  </Label>
                </div>

                <div className="flex gap-4">
                  <Button onClick={prevStep} variant="outline" className="flex-1">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button onClick={handleSubmit} className="flex-1 cta-button text-white font-bold">
                    Submit Request
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Success */}
          {currentStep === 4 && (
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-success" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Your request has been received successfully!</h2>
                <p className="text-muted-foreground mb-6">
                  We will confirm your appointment via WhatsApp or phone within a few minutes.
                  Thank you for choosing Brooklyn General Maintenance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => window.location.href = "/"} variant="outline">
                    Back to Home
                  </Button>
                  <Button 
                    onClick={() => window.open("https://wa.me/971501234567", "_blank")}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    Open WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Booking;