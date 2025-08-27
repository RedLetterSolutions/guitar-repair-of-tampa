export const siteConfig = {
  // Site identifier used for external contact form service auto-attach
  siteId: "guitar_repair_of_tampa_bay",
  name: "Guitar Repair of Tampa Bay",
  tagline: "Professional guitar repair, setup, and custom craftsmanship.",
  description:
    "Professional guitar repair, setup, custom builds, and vintage instrument restoration in Tampa Bay.",
  ethos: "Excellence in craftsmanship and customer service",
  contact: {
    phone: "(813) 304-2560",
    phoneRaw: "+18133042560",
    email: "luthier@guitarrepairoftampabay.com",
    address: {
      street: "7705 Ann Ballard Road",
      city: "Tampa",
      state: "FL",
      zip: "33634",
      get full() {
        return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
      },
    },
  },
  hours: {
    tuesday: "12:00 PM - 6:00 PM",
    wednesday: "12:00 PM - 6:00 PM", 
    thursday: "12:00 PM - 6:00 PM",
    friday: "12:00 PM - 6:00 PM",
    saturday: "12:00 PM - 6:00 PM",
    sunday: "Closed",
    monday: "Closed",
  },
  seo: {
    defaultTitle: "Guitar Repair of Tampa Bay",
    defaultDescription:
      "Professional guitar repair, setup, custom builds, and vintage instrument restoration in Tampa Bay.",
    ogImage: "https://guitarrepairoftampabay.com/images/og-image.jpg",
    twitterCard: "summary_large_image",
  },
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
  team: [
    {
      name: "Bob Sheeks",
      title: "Master Luthier & Owner",
      bio: "Bob brings extensive experience in guitar repair and custom building to Guitar Repair of Tampa Bay. His passion for craftsmanship and dedication to excellence ensures every instrument receives the expert care it deserves.",
      expertise: ["Guitar Repair", "Custom Building", "Setup & Maintenance", "Instrument Restoration"]
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
