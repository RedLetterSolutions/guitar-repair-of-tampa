interface PriceTableProps {
  categories?: boolean;
  responsiveLayout?: boolean;
}

const priceData = {
  setups: {
    title: "Setups",
    color: "primary",
    items: [
      { service: "Acoustic or fixed-bridge electric", price: "$60" },
      { service: "Floyd/Kahler", price: "$70" },
      { service: "Steinberger Trans-Trem", price: "$120" },
    ]
  },
  restring: {
    title: "Restring/Tune/Polish", 
    color: "success",
    items: [
      { service: "6-string or bass", price: "$25" },
      { service: "12-string", price: "$35" },
      { service: "Classical", price: "$35" },
    ]
  },
  nutSaddle: {
    title: "Nut/Saddle",
    color: "accent", 
    items: [
      { service: "Plastic nut", price: "$25" },
      { service: "Graphite/bone nut", price: "$60" },
      { service: "Graphite/bone nut (12-string)", price: "$70" },
      { service: "Compensated bone saddle", price: "$85" },
    ]
  },
  fretwork: {
    title: "Fretwork",
    color: "accent",
    items: [
      { service: "Level/Crown", price: "$120+" },
      { service: "Refret (unbound)", price: "$280" },
      { service: "Refret (bound)", price: "$380" },
      { service: "Refret (lacquered maple)", price: "$380" },
    ]
  },
  electronics: {
    title: "Electronics",
    color: "success",
    items: [
      { service: "Pickup install", price: "$25+" },
      { service: "Jack", price: "$25" },
      { service: "Switch", price: "$25+" },
      { service: "1 pot (+$5 each additional)", price: "$25" },
      { service: "Coil-tap/phase", price: "$30" },
      { service: "Full rewire Strat/Gibson", price: "$80" },
      { service: "Shielding", price: "$80" },
      { service: "Preamp", price: "$80+" },
    ]
  },
  bridgeRouter: {
    title: "Bridge/Router",
    color: "primary",
    items: [
      { service: "Reglue acoustic bridge", price: "$100" },
      { service: "Pin holes ream", price: "$25" },
      { service: "New bridge", price: "$125+" },
      { service: "Pickup rout", price: "$50" },
      { service: "Floyd install", price: "$150" },
      { service: "Recessed rout", price: "$250" },
      { service: "Cavity rout", price: "$250" },
      { service: "Acoustic saddle slot", price: "$80" },
    ]
  },
  other: {
    title: "Other Services",
    color: "secondary",
    items: [
      { service: "Bolt-on neck replace (incl. light fret dress, nut, tuners, setup; no finish)", price: "$125+" },
      { service: "Endpin jack", price: "$35+" },
      { service: "Neck reset", price: "$450+" },
      { service: "Headstock repair", price: "$100+" },
      { service: "Headstock repair with cosmetics", price: "$150+" },
      { service: "Heel glue", price: "$100+" },
      { service: "Crack cleat (per inch)", price: "$30" },
      { service: "Pickguard replace", price: "$50+" },
      { service: "Paint/touch-up & finish buff", price: "Call" },
    ]
  }
};

export default function PriceTable({ categories = true, responsiveLayout = true }: PriceTableProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary text-cream";
      case "accent":
        return "brass-accent text-foreground";
      case "success":
        return "bg-success text-cream";
      case "secondary":
        return "bg-secondary text-cream";
      default:
        return "bg-primary text-cream";
    }
  };

  const getPriceColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "accent":
        return "text-brass-dark";
      case "success":
        return "text-primary";
      case "secondary":
        return "text-primary";
      default:
        return "text-primary";
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
                  <span className="text-primary flex-1 pr-4 font-medium">{item.service}</span>
                  <span className={`font-bold ${getPriceColorClasses(category.color)} whitespace-nowrap text-lg`}>
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
        <h4 className="font-bold text-primary mb-4 text-lg">Pricing Information</h4>
        <ul className="text-primary space-y-2 text-sm font-medium">
          <li>• All prices are for labor only; parts are additional</li>
          <li>• Estimates may change if hidden defects are discovered</li>
          <li>• $40 minimum rush fee for expedited service</li>
          <li>• Contact us for detailed estimates on complex repairs</li>
        </ul>
      </div>
    </div>
  );
}
