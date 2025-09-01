import { HelpCircle, Plus, Minus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "How often should air conditioners be cleaned per year?",
      answer: "We recommend cleaning air conditioners at least twice a year - before and after summer season. For intensive use or dusty environments, you may need more frequent cleaning every 3-4 months."
    },
    {
      question: "Does air duct cleaning really improve air quality?",
      answer: "Yes absolutely! Air duct cleaning removes accumulated dust, bacteria, fungi, and pollen. This improves air quality by up to 85% and reduces allergy and asthma symptoms."
    },
    {
      question: "How long does water tank cleaning take?",
      answer: "Water tank cleaning and disinfection usually takes 4-8 hours depending on tank size and contamination level. We empty the tank, clean it, disinfect it, then refill it with quality assurance."
    },
    {
      question: "Are the materials used safe for children and pets?",
      answer: "All materials we use are 100% safe and environmentally friendly. We use internationally certified biological and natural products, free from harmful chemicals, and completely safe for children and pets."
    },
    {
      question: "What is the monthly cost of pool maintenance?",
      answer: "Monthly pool maintenance costs range from 800-1500 EGP depending on pool size and service type. Service includes: water cleaning, chemical testing, filter cleaning, and equipment maintenance."
    },
    {
      question: "Do you provide warranty on services?",
      answer: "Yes, we provide comprehensive warranty on all our services for 3-12 months depending on service type. If you're not satisfied with the result, we redo the service for free or provide full refund."
    },
    {
      question: "When can I use the AC after cleaning?",
      answer: "You can use the AC immediately after cleaning is complete. We ensure all components are completely dry and test operation before leaving to guarantee optimal efficiency."
    },
    {
      question: "Do you work on weekends?",
      answer: "Yes, we work 7 days a week including weekends and public holidays. We also provide 24-hour emergency service for urgent cases."
    },
    {
      question: "How do I know if air ducts need cleaning?",
      answer: "Signs that air ducts need cleaning include: strange odors when AC is running, excessive dust accumulation, weak airflow, increased electricity bills, or allergy symptoms in family members."
    },
    {
      question: "What's the difference between cleaning and disinfection?",
      answer: "Cleaning removes visible dirt and dust, while disinfection eliminates invisible bacteria, viruses, and fungi. We provide comprehensive service combining deep cleaning and complete disinfection to ensure a healthy environment."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Answers to <span className="gradient-text">Your Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Common questions from our clients with detailed answers from our experts
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl px-6 py-2 hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-right hover:no-underline py-6 text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-right flex-1">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-6 text-muted-foreground leading-relaxed text-lg">
                  <div className="mr-12 pr-4 border-r-2 border-primary/20">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">Didn't find your answer?</div>
                <p className="text-muted-foreground mb-6">
                  Contact us now and our experts will answer all your questions
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="cta-button">
                  Contact Us Now
                </Button>
                <Button variant="outline" size="lg">
                  WhatsApp Chat
                </Button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;