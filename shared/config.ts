export const siteConfig = {
  name: "Guitar Repair of Tampa Bay",
  tagline: "Professional guitar repair, setup, and custom craftsmanship.",
  description:
    "Professional guitar repair, setup, custom builds, and vintage instrument restoration in Tampa Bay.",
  ethos: "Excellence in craftsmanship and customer service",
  contact: {
    phone: "(555) 123-4567",
    phoneRaw: "+15551234567",
    email: "info@example.com",
    address: {
      street: "1234 Sample Ave",
      city: "Tampa",
      state: "FL",
      zip: "33602",
      get full() {
        return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
      },
    },
  },
  hours: {
    monday: "10:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed",
  },
  seo: {
    defaultTitle: "Guitar Repair of Tampa Bay",
    defaultDescription:
      "Professional guitar repair, setup, custom builds, and vintage instrument restoration in Tampa Bay.",
    ogImage: "https://example.com/og-image.jpg",
    twitterCard: "summary_large_image",
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
  team: [
    {
      name: "Michael Donner",
      title: "Master Luthier & Owner",
      bio: "With over 20 years of experience in guitar repair and custom building, Michael brings unparalleled expertise to every project. He has worked with major guitar manufacturers and specializes in vintage instrument restoration and custom electronics.",
      expertise: ["Vintage Guitar Restoration", "Custom Electronics", "Fret Work", "Setup & Maintenance"]
    },
    {
      name: "Ben Chafin", 
      title: "Senior Guitar Technician",
      bio: "Ben's passion for guitars began in his teens and has grown into a decade-long career in professional guitar repair. He specializes in acoustic instruments and has extensive experience with both modern and vintage guitars.",
      expertise: ["Acoustic Guitar Repair", "Bridge Work", "Neck Adjustments", "Hardware Installation"]
    }
  ],
  services: [
    {
      name: "Guitar Setups",
      description: "Complete guitar setup including intonation, action adjustment, and electronics check.",
      startingPrice: "$65",
      icon: "Settings"
    },
    {
      name: "Repair Services", 
      description: "Professional repair for electronics, hardware, and structural issues.",
      startingPrice: "$45",
      icon: "Wrench"
    },
    {
      name: "Custom Builds",
      description: "Hand-crafted Crackercaster guitars built to your specifications.",
      startingPrice: "$1,200",
      icon: "Music"
    },
    {
      name: "Electronics",
      description: "Pickup installation, rewiring, and electronic modifications.",
      startingPrice: "$75", 
      icon: "Zap"
    }
  ]
};

export type SiteConfig = typeof siteConfig;
