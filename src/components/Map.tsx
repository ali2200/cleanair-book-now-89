import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Phone, Clock, Star } from 'lucide-react';

interface MapProps {
  className?: string;
  showTokenInput?: boolean;
}

const Map: React.FC<MapProps> = ({ className = "" }) => {
  // Abu Dhabi, UAE coordinates
  const coordinates: [number, number] = [54.3773, 24.2992];

  const openDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates[1]},${coordinates[0]}`;
    window.open(url, '_blank');
  };

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates[1]},${coordinates[0]}`;
    window.open(url, '_blank');
  };

  const callBusiness = () => {
    window.open('tel:+971501234567', '_self');
  };

  return (
    <div className={`bg-card rounded-lg border overflow-hidden ${className}`}>
      <div className="relative h-96 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20">
        {/* Map-like background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
            {/* Grid pattern */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Streets */}
            <path d="M0 150 Q100 140 200 150 T400 160" stroke="hsl(var(--muted-foreground))" strokeWidth="2" fill="none"/>
            <path d="M50 0 Q60 100 70 200 T80 300" stroke="hsl(var(--muted-foreground))" strokeWidth="2" fill="none"/>
            <path d="M150 0 Q160 80 170 160 T180 300" stroke="hsl(var(--muted-foreground))" strokeWidth="2" fill="none"/>
            <path d="M300 0 Q310 120 320 240 T330 300" stroke="hsl(var(--muted-foreground))" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        {/* Location marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Pulse animation */}
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-30 scale-150"></div>
            <div className="relative bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
              <MapPin className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Company info card */}
        <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1">Brooklyn General Maintenance</h4>
              <p className="text-xs text-muted-foreground mb-2">Professional AC & Maintenance Services</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>4.9 (127 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Business hours card */}
        <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="flex items-center gap-2 text-xs">
            <Clock className="h-4 w-4 text-primary" />
            <div>
              <div className="font-medium">Open Now</div>
              <div className="text-muted-foreground">24/7 Emergency Service</div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button onClick={callBusiness} size="sm" variant="secondary" className="gap-2">
            <Phone className="h-4 w-4" />
            Call
          </Button>
          <Button onClick={openDirections} size="sm" className="gap-2">
            <Navigation className="h-4 w-4" />
            Directions
          </Button>
        </div>
      </div>

      {/* Location details */}
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Our Location</h3>
            <p className="text-muted-foreground text-sm">
              Abu Dhabi, United Arab Emirates
            </p>
            <p className="text-muted-foreground text-sm">
              Serving all emirates across UAE
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+971 50 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button onClick={openGoogleMaps} variant="outline" className="flex-1 gap-2">
            <MapPin className="h-4 w-4" />
            View on Google Maps
          </Button>
          <Button onClick={openDirections} className="flex-1 gap-2">
            <Navigation className="h-4 w-4" />
            Get Directions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Map;