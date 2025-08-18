import SEOHead from "@/components/common/SEOHead";
import GalleryGrid from "@/components/common/GalleryGrid";

export default function Gallery() {
  return (
    <>
      <SEOHead
        title="Repair Gallery - See Our Guitar Restoration Work"
        description="Browse our gallery of guitar repairs, restorations, and custom builds. See examples of our expert craftsmanship and attention to detail."
      />

      <div className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of repair work, custom builds, and restoration projects. 
              Each image tells the story of an instrument brought back to life.
            </p>
          </div>

          <GalleryGrid />
        </div>
      </div>
    </>
  );
}
