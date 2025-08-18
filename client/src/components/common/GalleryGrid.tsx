import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
}

interface GalleryGridProps {
  masonryLayout?: boolean;
  lightbox?: boolean;
  showFilters?: boolean;
}

// Sample gallery items - TODO: Replace with API data
const sampleGalleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Acoustic Bridge Repair",
    description: "Complete bridge regluing and saddle replacement",
    imageUrl: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "acoustic"
  },
  {
    id: "2", 
    title: "Electric Guitar Fretwork",
    description: "Precision fret level and crown for optimal playability",
    imageUrl: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "electric"
  },
  {
    id: "3",
    title: "Bass Electronics Upgrade", 
    description: "Complete preamp and pickup installation",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "bass"
  },
  {
    id: "4",
    title: "Headstock Repair",
    description: "Professional headstock repair and restoration",
    imageUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "structural"
  },
  {
    id: "5",
    title: "Custom Finish Work",
    description: "Hand-rubbed natural finish highlighting wood grain",
    imageUrl: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "finish"
  },
  {
    id: "6",
    title: "Vintage Guitar Restoration",
    description: "Complete restoration of 1960s acoustic guitar",
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "acoustic"
  }
];

const categories = [
  { id: "all", name: "All" },
  { id: "acoustic", name: "Acoustic" },
  { id: "electric", name: "Electric" },
  { id: "bass", name: "Bass" },
  { id: "structural", name: "Structural" },
  { id: "finish", name: "Finish" },
];

export default function GalleryGrid({ 
  masonryLayout = true, 
  lightbox = true,
  showFilters = true 
}: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  // TODO: Replace with actual API call
  const { data: galleryItems = sampleGalleryItems, isLoading } = useQuery({
    queryKey: ["/api/gallery"],
    enabled: false, // Disable until API is implemented
  });

  const typedGalleryItems = galleryItems as GalleryItem[];
  const filteredItems = activeFilter === "all" 
    ? typedGalleryItems 
    : typedGalleryItems.filter((item: GalleryItem) => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    if (lightbox) {
      setLightboxImage(item);
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "unset";
  };

  if (isLoading) {
    return (
      <div className="container">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>
      )}

      <div className={masonryLayout ? "gallery-masonry" : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"}>
        {filteredItems.map((item: GalleryItem) => (
          <div
            key={item.id}
            className="gallery-item bg-white rounded-xl overflow-hidden shadow-soft cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              {item.description && (
                <p className="text-muted-foreground text-sm">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No items found for this category.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              onClick={closeLightbox}
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={lightboxImage.imageUrl}
              alt={lightboxImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-lg">
              <h3 className="font-semibold text-lg">{lightboxImage.title}</h3>
              {lightboxImage.description && (
                <p className="text-gray-200 text-sm mt-1">{lightboxImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
