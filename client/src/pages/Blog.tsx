import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import SEOHead from "@/components/common/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react";
import type { BlogPost } from "@shared/schema";

const categories = [
  { id: "all", name: "All Posts" },
  { id: "setups", name: "Setups" },
  { id: "electronics", name: "Electronics" },
  { id: "vintage", name: "Vintage" },
  { id: "crackercaster", name: "Crackercaster" },
];

// Sample blog posts for demonstration - TODO: Replace with API data
const samplePosts: BlogPost[] = [
  {
    id: "1",
    slug: "guitar-setup-guide",
    title: "The Complete Guide to Guitar Setups",
    excerpt: "Learn the essential steps for optimizing your guitar's playability and tone with a professional setup.",
    content: "",
    category: "setups",
    featuredImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    published: true,
    publishedAt: new Date("2024-01-15"),
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2", 
    slug: "pickup-installation-tips",
    title: "Pickup Installation: Pro Tips and Common Mistakes",
    excerpt: "Avoid these common pitfalls when installing new pickups and learn professional techniques for optimal results.",
    content: "",
    category: "electronics",
    featuredImage: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    published: true,
    publishedAt: new Date("2024-01-10"),
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    id: "3",
    slug: "vintage-guitar-care",
    title: "Caring for Your Vintage Guitar Collection",
    excerpt: "Essential maintenance tips to preserve the value and playability of your vintage instruments.",
    content: "",
    category: "vintage",
    featuredImage: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    published: true,
    publishedAt: new Date("2024-01-05"),
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
  },
  {
    id: "4",
    slug: "crackercaster-wood-selection",
    title: "Florida Woods: The Heart of Every Crackercaster",
    excerpt: "Discover the unique tonal properties of indigenous Florida woods and how they shape the Crackercaster sound.",
    content: "",
    category: "crackercaster", 
    featuredImage: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    published: true,
    publishedAt: new Date("2024-01-01"),
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");

  // TODO: Replace with actual API call when backend is implemented
  const { data: blogPosts = samplePosts, isLoading, error } = useQuery({
    queryKey: ["/api/blog", activeCategory],
    enabled: false, // Disable until API is implemented
  });

  const typedBlogPosts = blogPosts as BlogPost[];
  const filteredPosts = activeCategory === "all" 
    ? typedBlogPosts.filter((post: BlogPost) => post.published)
    : typedBlogPosts.filter((post: BlogPost) => post.published && post.category === activeCategory);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  };

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <>
      <SEOHead
        title="Guitar Repair Blog - Tips, Guides & Industry Insights"
        description="Expert guitar repair tips, maintenance guides, and industry insights from Tampa Bay's premier guitar repair specialists."
      />

      <div className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Guitar Repair Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert tips, repair guides, and industry insights from Tampa Bay's premier guitar repair specialists.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading blog posts...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">Failed to load blog posts. Please try again later.</p>
            </div>
          )}

          {/* Blog Posts Grid */}
          {!isLoading && !error && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post: BlogPost) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      {post.featuredImage && (
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                      )}
                      <Badge 
                        className="absolute top-4 left-4 bg-white/90 text-foreground hover:bg-white"
                      >
                        {categories.find(c => c.id === post.category)?.name || post.category}
                      </Badge>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          {formatDate(post.publishedAt || post.createdAt || new Date())}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {getReadTime(post.content)} min read
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground leading-tight">
                        {post.title}
                      </h3>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Empty State */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Posts Found</h3>
                  <p className="text-muted-foreground">
                    No blog posts found in this category. Check back soon for new content!
                  </p>
                </div>
              )}
            </>
          )}

          {/* TODO: Add pagination when needed */}
        </div>
      </div>
    </>
  );
}
