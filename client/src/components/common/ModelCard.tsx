import { Button } from "@/components/ui/button";

interface ModelCardProps {
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
  onInquire?: () => void;
}

export default function ModelCard({ 
  name, 
  description, 
  features, 
  imageUrl, 
  onInquire 
}: ModelCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="text-sm text-muted-foreground space-y-1 mb-4">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
        <Button
          onClick={onInquire}
          className="w-full btn-primary"
        >
          Inquire About This Model
        </Button>
      </div>
    </div>
  );
}
