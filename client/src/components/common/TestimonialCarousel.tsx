import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location?: string;
  title?: string;
  content: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  showControls?: boolean;
}

// Sample testimonials - TODO: Replace with API data
const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Martinez",
    location: "St. Petersburg, FL",
    title: "Professional Guitarist",
    content: "Michael and Ben transformed my vintage Gibson that had been sitting unplayable for years. The fretwork is absolutely perfect, and the tone is better than ever. These guys really know their craft.",
    rating: 5
  },
  {
    id: "2", 
    name: "David Chen",
    location: "Tampa, FL",
    title: "Music Teacher",
    content: "Fast turnaround and fair pricing. My Stratocaster needed a complete electronics rewire and they had it back to me in perfect condition within a week. Highly recommended!",
    rating: 5
  },
  {
    id: "3",
    name: "Jennifer Williams", 
    location: "Clearwater, FL",
    title: "Session Musician",
    content: "My Crackercaster bass is absolutely incredible. The Florida wood gives it such a unique character and tone. The build quality is outstanding and the attention to detail is remarkable.",
    rating: 5
  }
];

export default function TestimonialCarousel({ 
  testimonials = defaultTestimonials,
  autoPlay = true,
  showControls = true 
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) {
    return (
      <section className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Customer Testimonials
            </h2>
            <p className="text-muted-foreground">No testimonials available.</p>
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear from musicians who trust us with their most valuable instruments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-soft text-center relative">
            {showControls && testimonials.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div className="flex justify-center mb-4">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-current" />
              ))}
            </div>

            <blockquote className="text-xl text-muted-foreground mb-6 italic leading-relaxed">
              "{currentTestimonial.content}"
            </blockquote>

            <cite className="not-italic">
              <div className="font-semibold text-foreground text-lg">
                {currentTestimonial.name}
              </div>
              {(currentTestimonial.title || currentTestimonial.location) && (
                <div className="text-muted-foreground text-sm mt-1">
                  {currentTestimonial.title}
                  {currentTestimonial.title && currentTestimonial.location && " • "}
                  {currentTestimonial.location}
                </div>
              )}
            </cite>

            {/* Testimonial indicators */}
            {testimonials.length > 1 && (
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
