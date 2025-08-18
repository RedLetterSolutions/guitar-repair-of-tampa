import { useEffect } from "react";
import { siteConfig } from "@shared/config";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  structuredData?: object;
}

export default function SEOHead({ 
  title, 
  description, 
  canonical, 
  structuredData 
}: SEOHeadProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.seo.defaultTitle;
  const pageDescription = description || siteConfig.seo.defaultDescription;
  const pageUrl = canonical || window.location.href;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update meta tags
    const metaTags = [
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: siteConfig.seo.ogImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: siteConfig.seo.twitterCard },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:image", content: siteConfig.seo.ogImage },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement("meta");
        if (name) meta.name = name;
        if (property) meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    });

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = pageUrl;

    // Add structured data
    if (structuredData) {
      const scriptId = "structured-data";
      let script = document.getElementById(scriptId);
      
      if (script) {
        script.remove();
      }
      
      script = document.createElement("script");
      script.id = scriptId;
      (script as HTMLScriptElement).type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [pageTitle, pageDescription, pageUrl, structuredData]);

  return null;
}
