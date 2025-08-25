// Basic schema types for the frontend-only application

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  author: string;
  readTime: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  location?: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  message: string;
  serviceType?: string;
  preferredContact?: 'email' | 'phone';
}

export interface CustomGuitarInquiry {
  name: string;
  email: string;
  phone?: string;
  guitarType: string;
  features: string[];
  budget?: string;
  timeline?: string;
  message: string;
}