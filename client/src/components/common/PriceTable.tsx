interface PriceTableProps {
  categories?: boolean;
  responsiveLayout?: boolean;
}

const priceData = {
  fees: {
    title: "Service Fees",
    color: "primary",
    items: [
      { service: "Minimum Fee", price: "$30" },
      { service: "Rush Fee", price: "$40-60" },
    ]
  },
  setups: {
    title: "Setups",
    color: "primary",
    items: [
      { service: "Acoustic, Electric, Bass, Ukulele", price: "$70+" },
      { service: "Classical, 12-String, Mandolin, Banjo", price: "$70-80" },
      { service: "Floyd Rose/Kahler Tremolo", price: "$80" },
      { service: "Evertune System", price: "$90+" },
      { service: "Steinberger Trans-Trem", price: "$120" },
    ]
  },
  restring: {
    title: "Restring", 
    color: "primary",
    items: [
      { service: "Acoustic, Electric, Bass, Ukulele", price: "$30" },
      { service: "Classical, 12-String, Mandolin", price: "$40" },
      { service: "Floyd Rose/Kahler", price: "$45" },
    ]
  },
  nutSaddle: {
    title: "Nut/Saddle",
    color: "primary", 
    items: [
      { service: "Plastic nut", price: "$30-35" },
      { service: "Bone/Graphtech nut", price: "$70-80" },
      { service: "Bone/Graphtech saddle", price: "$60" },
      { service: "Compensated saddle", price: "$70+" },
    ]
  },
  fretwork: {
    title: "Fretwork",
    color: "primary",
    items: [
      { service: "Level/Crown (includes setup)", price: "$150+" },
      { service: "Partial Refret", price: "$20/fret" },
      { service: "Refret (unbound)", price: "$330" },
      { service: "Refret (bound)", price: "$380" },
      { service: "Refret (lacquered maple)", price: "$430" },
      { service: "File sharp fret ends", price: "$25-35" },
    ]
  },
  electronics: {
    title: "Electronics",
    color: "primary",
    items: [
      { service: "Pickup install", price: "$40 each" },
      { service: "Jack", price: "$25" },
      { service: "Switch", price: "$25-35" },
      { service: "Pot", price: "$25 each" },
      { service: "Capacitor", price: "$20" },
      { service: "Treble Bleed", price: "$25" },
      { service: "Full rewire", price: "$80+" },
      { service: "Acoustic preamp install", price: "$80+" },
    ]
  },
  bridgeRouter: {
    title: "Bridge/Router work",
    color: "primary",
    items: [
      { service: "Reglue acoustic bridge", price: "$100" },
      { service: "Pin holes ream", price: "$25" },
      { service: "New bridge", price: "$125+" },
      { service: "Pickup rout", price: "$50" },
      { service: "Floyd install", price: "$150" },
      { service: "Recessed rout", price: "$250" },
      { service: "Acoustic saddle slot", price: "$80" },
    ]
  },
  other: {
    title: "Other Services",
    color: "primary",
    items: [
      { service: "Endpin jack", price: "$35+" },
      { service: "Neck reset", price: "$450+" },
      { service: "Headstock repair", price: "$100+" },
      { service: "Headstock repair (without touch up)", price: "$100+" },
      { service: "Crack cleat (per inch)", price: "$30" },
      { service: "Pickguard replace", price: "$50+" },
    ]
  }
};

export default function PriceTable({ categories = true, responsiveLayout = true }: PriceTableProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary text-primary-foreground";
      case "accent":
        return "bg-accent text-accent-foreground";
      case "success":
        return "bg-success text-white";
      case "secondary":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  const getPriceColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary font-bold";
      case "accent":
        return "text-accent font-bold";
      case "success":
        return "text-success font-bold";
      case "secondary":
        return "text-secondary font-bold";
      default:
        return "text-primary font-bold";
    }
  };

  return (
    <div className="space-y-8">
      {Object.entries(priceData).map(([key, category]) => (
        <div key={key} className="bg-background rounded-xl shadow-strong overflow-hidden border border-wood-medium">
          <div className={`${getColorClasses(category.color)} px-6 py-4`}>
            <h3 className="text-2xl font-bold">{category.title}</h3>
          </div>
          <div className="p-6 bg-cream">
            <div className={`grid ${responsiveLayout ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-4`}>
              {category.items.map((item, index) => (
                <div key={index} className="flex justify-between items-start py-3 border-b border-wood-light last:border-b-0">
                  <span className="text-foreground flex-1 pr-4 font-medium">{item.service}</span>
                  <span className={`${getPriceColorClasses(category.color)} whitespace-nowrap text-lg`}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Pricing Disclaimer */}
      <div className="bg-background border border-brass rounded-xl p-6 shadow-strong">
        <h4 className="font-bold text-foreground mb-4 text-lg">Pricing Information</h4>
        <ul className="text-foreground space-y-2 text-sm font-medium">
          <li>• All prices are for labor only; parts are additional</li>
          <li>• Strings not included in setup and fretwork pricing</li>
          <li>• $30 minimum fee applies to all services</li>
          <li>• Rush fees range from $40-60 depending on complexity</li>
          <li>• Estimates may change if hidden defects are discovered</li>
          <li>• Contact us for detailed estimates on complex repairs</li>
        </ul>
      </div>
    </div>
  );
}
