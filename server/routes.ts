import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { 
  insertContactSubmissionSchema, 
  insertCustomGuitarInquirySchema,
  insertGalleryItemSchema,
  insertTestimonialSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // TODO: Implement contact form storage and email notification
      // const submission = await storage.createContactSubmission(validatedData);
      
      // TODO: Send email notification to shop
      // await sendContactNotification(validatedData);
      
      console.log("Contact form submission:", validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      res.status(400).json({ 
        error: "Invalid form data",
        details: error instanceof z.ZodError ? error.errors : undefined
      });
    }
  });

  // Quote request endpoint (similar to contact but different handling)
  app.post("/api/quotes", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // TODO: Implement quote request storage and priority handling
      // const quote = await storage.createQuoteRequest(validatedData);
      
      // TODO: Send high-priority email notification for quotes
      // await sendQuoteNotification(validatedData);
      
      console.log("Quote request:", validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Quote request submitted successfully" 
      });
    } catch (error) {
      console.error("Quote request error:", error);
      res.status(400).json({ 
        error: "Invalid form data",
        details: error instanceof z.ZodError ? error.errors : undefined
      });
    }
  });

  // Custom guitar inquiry endpoint
  app.post("/api/custom-guitar-inquiries", async (req, res) => {
    try {
      const validatedData = insertCustomGuitarInquirySchema.parse(req.body);
      
      // TODO: Implement custom guitar inquiry storage
      // const inquiry = await storage.createCustomGuitarInquiry(validatedData);
      
      // TODO: Send specialized email for custom guitar inquiries
      // await sendCustomGuitarInquiryNotification(validatedData);
      
      console.log("Custom guitar inquiry:", validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Custom guitar inquiry submitted successfully" 
      });
    } catch (error) {
      console.error("Custom guitar inquiry error:", error);
      res.status(400).json({ 
        error: "Invalid form data",
        details: error instanceof z.ZodError ? error.errors : undefined
      });
    }
  });

  // Gallery endpoints
  app.get("/api/gallery", async (req, res) => {
    try {
      const category = req.query.category as string;
      
      // TODO: Implement gallery items retrieval
      // const items = await storage.getGalleryItems({
      //   category: category !== "all" ? category : undefined,
      //   limit: 50
      // });
      
      // Mock response for now
      res.status(200).json([]);
    } catch (error) {
      console.error("Gallery retrieval error:", error);
      res.status(500).json({ error: "Failed to retrieve gallery items" });
    }
  });

  // Testimonials endpoint
  app.get("/api/testimonials", async (req, res) => {
    try {
      // TODO: Implement testimonials retrieval
      // const testimonials = await storage.getApprovedTestimonials({ limit: 10 });
      
      // Mock response for now
      res.status(200).json([]);
    } catch (error) {
      console.error("Testimonials retrieval error:", error);
      res.status(500).json({ error: "Failed to retrieve testimonials" });
    }
  });

  // File upload endpoint (for form attachments)
  app.post("/api/upload", async (req, res) => {
    try {
      // TODO: Implement file upload handling
      // This should:
      // 1. Validate file types and sizes
      // 2. Generate unique file names
      // 3. Store files in appropriate location
      // 4. Return file URLs for form submission
      
      res.status(501).json({ error: "File upload not yet implemented" });
    } catch (error) {
      console.error("File upload error:", error);
      res.status(500).json({ error: "File upload failed" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.status(200).json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
