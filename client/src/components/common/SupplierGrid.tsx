interface SupplierGridProps {
  responsive?: boolean;
  brands?: string[];
}

const defaultSuppliers = [
  "Floyd Rose", "Fender", "Taylor", "PRS", "Dean", "Gretsch", "Guild",
  "Chafin Custom", "Bedell", "Babicz", "Graph Tech", "L.R. Baggs", 
  "Seymour Duncan", "EMG", "ALLPARTS", "Lollar", "Bartolini", "Lace",
  "TonePros", "Luthiers Supply", "Aguilar", "Stewart-MacDonald",
  "Stellartone", "Moe Colors", "Wilkins", "WD Music"
];

export default function SupplierGrid({ 
  responsive = true, 
  brands = defaultSuppliers 
}: SupplierGridProps) {
  return (
    <div className={`grid ${
      responsive 
        ? "grid-cols-2 md:grid-cols-4 lg:grid-cols-6" 
        : "grid-cols-4"
    } gap-8 items-center opacity-60`}>
      {brands.map((supplier) => (
        <div
          key={supplier}
          className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow min-h-[80px]"
        >
          <span className="text-muted-foreground font-bold text-sm text-center">
            {supplier}
          </span>
        </div>
      ))}
    </div>
  );
}
