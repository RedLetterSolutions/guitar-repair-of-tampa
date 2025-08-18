import { Badge } from "@/components/ui/badge";

interface BioCardProps {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  imagePosition?: "left" | "right";
  backgroundColor?: string;
}

export default function BioCard({ 
  name, 
  title, 
  bio, 
  expertise, 
  imagePosition = "left",
  backgroundColor = "bg-muted/50"
}: BioCardProps) {
  const imageUrl = `https://images.unsplash.com/photo-${
    name.includes("Michael") ? "1507003211169-0a1dd7228f2d" : "1472099645785-5658abf4ff4e"
  }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`;

  return (
    <div className={`${backgroundColor} rounded-2xl p-8 md:p-12`}>
      <div className={`grid md:grid-cols-2 gap-8 items-center ${
        imagePosition === "right" ? "md:grid-flow-col-dense" : ""
      }`}>
        <div className={imagePosition === "right" ? "md:col-start-2" : ""}>
          <img
            src={imageUrl}
            alt={`${name} - ${title}`}
            className="rounded-xl shadow-lg w-full h-auto"
            loading="lazy"
          />
        </div>
        <div className={imagePosition === "right" ? "md:col-start-1" : ""}>
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-primary font-medium mb-4">{title}</p>
          <p className="text-muted-foreground mb-6 leading-relaxed">{bio}</p>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
