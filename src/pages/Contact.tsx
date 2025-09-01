import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Map from "@/components/Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "+971 50 123 4567",
      description: "24/7 Customer Support",
      action: () => window.open("tel:+971501234567")
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@brooklyngm.ae",
      description: "General Inquiries",
      action: () => window.open("mailto:info@brooklyngm.ae")
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      info: "+971 50 123 4567",
      description: "Instant Support",
      action: () => window.open("https://wa.me/971501234567?text=Hello, I need information about your services")
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Abu Dhabi, UAE",
      description: "Serving all Emirates",
      action: () => {}
    }
  ];

  const operatingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  const subjects = [
    "General Inquiry",
    "AC Cleaning & Maintenance",
    "Duct Cleaning",
    "Mold Treatment",
    "Water Tank Cleaning",
    "Pool Maintenance",
    "Emergency Service",
    "Complaint/Feedback",
    "Other"
  ];

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Create WhatsApp message
      const message = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;

      setTimeout(() => {
        window.open(`https://wa.me/971501234567?text=${encodeURIComponent(message)}`, "_blank");
      }, 1000);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-accent to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Contact <span className="hero-text">Our Team</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Have questions or need a service? We're here to help. Contact us through 
              any of the methods below or send us a message using the contact form.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index} 
                  className="service-card border-0 text-center cursor-pointer"
                  onClick={info.action}
                >
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium mb-1">{info.info}</p>
                    <CardDescription className="text-sm">
                      {info.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Location Map */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Our Location</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Visit us at our office or let us come to you. We serve all emirates across the UAE.
            </p>
          </div>
          <Map className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Contact Form & Hours */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select value={formData.subject} onValueChange={(value) => updateFormData('subject', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => updateFormData('message', e.target.value)}
                      placeholder="Please describe how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full cta-button text-white font-bold py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Operating Hours & Quick Actions */}
            <div className="space-y-8">
              {/* Operating Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {operatingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Need Immediate Help?</CardTitle>
                  <CardDescription>
                    For urgent matters, contact us directly through these channels:
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    onClick={() => window.open("tel:+971501234567")}
                    variant="outline"
                    className="w-full justify-start gap-3"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now: +971 50 123 4567
                  </Button>
                  
                  <Button
                    onClick={() => window.open("https://wa.me/971501234567?text=Hello, I need urgent assistance", "_blank")}
                    className="w-full justify-start gap-3 bg-green-500 hover:bg-green-600 text-white"
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp Chat
                  </Button>
                  
                  <Button
                    onClick={() => navigate("/booking")}
                    className="w-full justify-start gap-3 cta-button text-white"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Book Service Online
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency Notice */}
              <div className="p-6 bg-warning/10 border border-warning/20 rounded-lg">
                <h4 className="font-bold text-warning-foreground mb-2">Emergency Service</h4>
                <p className="text-sm text-warning-foreground/80">
                  For emergency maintenance issues outside regular hours, 
                  call our 24/7 emergency line. Additional charges may apply for emergency services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;