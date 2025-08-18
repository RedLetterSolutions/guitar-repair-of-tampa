import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import SEOHead from "@/components/common/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import type { BlogPost } from "@shared/schema";

// Sample blog post content - TODO: Replace with API data
const sampleBlogPost: BlogPost = {
  id: "1",
  slug: "guitar-setup-guide",
  title: "The Complete Guide to Guitar Setups",
  excerpt: "Learn the essential steps for optimizing your guitar's playability and tone with a professional setup.",
  content: `
<h2>What is a Guitar Setup?</h2>
<p>A guitar setup is a comprehensive adjustment process that optimizes your instrument's playability, intonation, and tone. It involves several key adjustments that work together to ensure your guitar performs at its best.</p>

<h2>Key Components of a Professional Setup</h2>
<h3>1. Neck Relief Adjustment</h3>
<p>The truss rod adjustment controls the amount of bow (relief) in the neck. Proper neck relief ensures optimal string clearance and playability across the entire fretboard.</p>

<h3>2. String Action</h3>
<p>String action refers to the height of the strings above the frets. Lower action makes the guitar easier to play but can cause buzzing if set too low.</p>

<h3>3. Intonation</h3>
<p>Proper intonation ensures that your guitar plays in tune up and down the neck. This is achieved by adjusting the length of each string at the bridge.</p>

<h3>4. Pickup Height</h3>
<p>The distance between pickups and strings affects the output level and tonal balance. Each pickup should be adjusted individually for optimal performance.</p>

<h2>When Should You Get a Setup?</h2>
<ul>
<li>After changing string gauges</li>
<li>Seasonally, due to humidity and temperature changes</li>
<li>When you notice fret buzz or poor intonation</li>
<li>After purchasing a new instrument</li>
<li>If the guitar feels uncomfortable to play</li>
</ul>

<h2>Professional vs. DIY Setup</h2>
<p>While basic maintenance can be done at home, a professional setup involves precise measurements and adjustments that require specialized tools and experience. Our technicians have the expertise to optimize your instrument for your specific playing style and preferences.</p>

<h2>What to Expect</h2>
<p>At Guitar Repair of Tampa Bay, our setup process includes:</p>
<ol>
<li>Complete inspection of the instrument</li>
<li>Cleaning and conditioning</li>
<li>Truss rod adjustment</li>
<li>Bridge and saddle adjustment</li>
<li>Intonation setting</li>
<li>Pickup height optimization</li>
<li>Final playability testing</li>
</ol>

<p>A professional setup typically takes 2-3 hours and can transform how your guitar feels and sounds. Contact us today to schedule your guitar setup!</p>
  `,
  category: "setups",
  featuredImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
  published: true,
  publishedAt: new Date("2024-01-15"),
  createdAt: new Date("2024-01-15"),
  updatedAt: new Date("2024-01-15"),
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;

  // TODO: Replace with actual API call when backend is implemented
  const { data: blogPost = sampleBlogPost, isLoading, error } = useQuery({
    queryKey: ["/api/blog", slug],
    enabled: false, // Disable until API is implemented
  });

  const typedBlogPost = blogPost as BlogPost;

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

  const shareUrl = window.location.href;
  const shareTitle = typedBlogPost?.title || "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  if (isLoading) {
    return (
      <div className="section-padding">
        <div className="container">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !typedBlogPost) {
    return (
      <>
        <SEOHead
          title="Blog Post Not Found"
          description="The requested blog post could not be found."
        />
        <div className="section-padding">
          <div className="container">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Link href="/blog" className="btn-primary">
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={typedBlogPost.title}
        description={typedBlogPost.excerpt}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": typedBlogPost.title,
          "description": typedBlogPost.excerpt,
          "image": typedBlogPost.featuredImage,
          "datePublished": typedBlogPost.publishedAt?.toISOString(),
          "dateModified": typedBlogPost.updatedAt?.toISOString() || new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Guitar Repair of Tampa Bay"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Guitar Repair of Tampa Bay"
          }
        }}
      />

      <article className="section-padding">
        <div className="container max-w-4xl">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge>{typedBlogPost.category}</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  {formatDate(typedBlogPost.publishedAt || typedBlogPost.createdAt || new Date())}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {getReadTime(typedBlogPost.content)} min read
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {typedBlogPost.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {typedBlogPost.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          {typedBlogPost.featuredImage && (
            <div className="mb-8">
              <img
                src={typedBlogPost.featuredImage}
                alt={typedBlogPost.title}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: typedBlogPost.content }}
          />

          {/* Share Links */}
          <div className="border-t border-border pt-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium text-foreground">Share this article:</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-[#1877F2] text-white rounded-lg hover:opacity-80 transition-opacity"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-[#1DA1F2] text-white rounded-lg hover:opacity-80 transition-opacity"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-[#0A66C2] text-white rounded-lg hover:opacity-80 transition-opacity"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-muted/50 rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Professional Guitar Services?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our expert technicians are ready to help with all your guitar repair and maintenance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
