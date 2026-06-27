"use client";
import { SeoHead } from "@/components/site/SeoHead";
import { SectionHeading } from "@/components/site/SectionHeading";
import { motion } from "framer-motion";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDecorations } from "@/components/contact/ContactDecorations";
import { ContactInfo } from "@/components/contact/ContactInfo";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Contact Concepful | Let's Make It Clear"
        description="Contact Concepful to clarify your positioning, messaging, website, brand, or creative system. Based in Miami, FL. Founder-led work."
        path="/contact"
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Concepful",
          "url": "https://conceptful.agency/contact",
          "description": "Contact Concepful to clarify your positioning, messaging, website, brand, or creative system.",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Concepful",
            "telephone": "+1-305-562-8802",
            "email": "hello@conceptful.agency",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10020 SW 228th Ter.",
              "addressLocality": "Miami",
              "addressRegion": "FL",
              "postalCode": "33190",
              "addressCountry": "US"
            }
          }
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://conceptful.agency/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://conceptful.agency/contact" }
          ]
        }`}
      </script>

      <section className="relative overflow-hidden pt-24 pb-32">
        <ContactDecorations />
        
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Col: Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-16 lg:pr-10"
            >
              <motion.div variants={itemVariants}>
                <SectionHeading
                  as="h1"
                  title="Let's make it make sense."
                  description="Tell us what you are building, what feels unclear, and where you need sharper thinking."
                />
              </motion.div>
              
              {/* Optional: Uncomment below to show Contact Info */}
              {/* <ContactInfo /> */}
            </motion.div>

            {/* Right Col: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
