import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hello, I need information about your services", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsApp}
      className="whatsapp-float bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-2xl border-4 border-white"
      size="icon"
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppFloat;