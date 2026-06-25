"use client";
import { SeoHead } from "@/components/site/SeoHead";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";
import { motion } from "framer-motion";
import { Check, Megaphone, PenTool, Briefcase, Sparkles, Video, FileText, Rocket, Code2, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Services() {
  const [activeSection, setActiveSection] = useState("clarity-strategy");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // Scroll to hash anchor on mount (e.g. /services#clarity-strategy)
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.slice(1);
      const target = document.getElementById(id);
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const services = [
    {
      id: "clarity-strategy",
      title: "Clarity Strategy",
      problem: "Most companies skip clarity and jump straight into branding. That creates internal misalignment, weak positioning, and messaging that constantly needs to be explained.",
      approach: "We pressure-test the idea until it holds up. We define what you do, who it is for, why it matters, and where you win.",
      benefits: ["Sharper positioning", "Faster decision-making", "Stronger internal alignment", "A foundation for messaging, design, and campaigns"],
      deliverables: ["Positioning framework", "Value proposition", "Audience definition", "Messaging hierarchy", "Competitive narrative"]
    },
    {
      id: "narrative-development",
      title: "Narrative Development",
      problem: "Most messaging sounds the same: too many claims, too much jargon, and not enough meaning.",
      approach: "We build messaging that sounds like a real person, supports the business strategy, and survives scrutiny from customers, investors, and internal teams.",
      benefits: ["Clearer communication", "Stronger differentiation", "More useful sales and marketing language", "Messaging that can scale across channels"],
      deliverables: ["Website messaging", "Brand voice guide", "Sales narrative", "Campaign messaging", "Executive storylines"]
    },
    {
      id: "brand-visual-systems",
      title: "Brand + Visual Systems",
      problem: "Design is often treated as decoration. The result may look polished, but it does not communicate anything useful.",
      approach: "We design visual systems that reinforce the core idea, signal the right audience, and create a recognizable brand experience.",
      benefits: ["Stronger visual identity", "More consistent brand presence", "Better customer trust", "Creative direction that actually means something"],
      deliverables: ["Brand identity system", "Logo direction", "Color and typography system", "Visual guidelines", "Social and campaign templates"]
    },
    {
      id: "website-experience-design",
      title: "Website + Experience Design",
      problem: "Most websites are organized around what the company wants to say, not what the audience needs to understand.",
      approach: "We structure websites around clarity, hierarchy, conversion, and user experience. Every section has a job.",
      benefits: ["Clearer user journeys", "Stronger conversion paths", "Better brand perception", "More useful content structure"],
      deliverables: ["Website strategy", "UX wireframes", "Landing page design", "Website copy", "Conversion-focused page layouts"]
    },
    {
      id: "content-campaign-systems",
      title: "Content + Campaign Systems",
      problem: "Most teams create content reactively. Every campaign starts from zero.",
      approach: "We create reusable creative systems that make content easier to produce, easier to manage, and easier to scale.",
      benefits: ["Faster content creation", "Stronger consistency", "Better campaign execution", "Less wasted effort"],
      deliverables: ["Content strategy", "Campaign frameworks", "Social media systems", "Email sequences", "Creative production templates"]
    }
  ];

  const additionalServices = [
    {
      slug: "marketing-campaigns",
      icon: Megaphone,
      title: "Marketing Campaigns",
      desc: "Strategic, end-to-end marketing campaigns built to move audiences from passive interest to real action."
    },
    {
      slug: "graphic-design",
      icon: PenTool,
      title: "Graphic Design",
      desc: "Purpose-driven visual design that brings your brand to life across every surface, channel, and format."
    },
    {
      slug: "fractional-cmo",
      icon: Briefcase,
      title: "Fractional CMO",
      desc: "Senior marketing leadership without the full-time hire. Strategy, oversight, and direction when you need it."
    },
    {
      slug: "brand-development",
      icon: Sparkles,
      title: "Brand Development",
      desc: "Standalone identity sprints for new ventures, sub-brands, and product lines that need a sharp visual mark fast."
    },
    {
      slug: "video-animation",
      icon: Video,
      title: "Video Animation",
      desc: "High-impact animated video that captivates audiences and explains complex ideas in seconds."
    },
    {
      slug: "content-creation",
      icon: FileText,
      title: "Content Creation",
      desc: "Project-based content production: hero pieces, launch assets, and one-time deliverables built to perform."
    },
    {
      slug: "one-off-campaigns",
      icon: Rocket,
      title: "One-off Campaigns",
      desc: "Strategic, creative campaign sprints designed to launch a product, moment, or message with impact."
    },
    {
      slug: "custom-web-development",
      icon: Code2,
      title: "Custom Web Development",
      desc: "Build and engineering for sites and landing pages, taking approved designs from concept to live in production."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Services | Concepful Creative Strategy & Design Systems"
        description="Explore Concepful's clarity strategy, narrative development, visual systems, website design, and campaign services."
        path="/services"
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://conceptful.agency/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://conceptful.agency/services" }
          ]
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Creative Strategy & Design",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Concepful"
          },
          "areaServed": "United States",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Concepful Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Clarity Strategy"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Narrative Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Brand + Visual Systems"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Website + Experience Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Content + Campaign Systems"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Marketing Campaigns" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Graphic Design" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Fractional CMO" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Brand Development" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Video Animation" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Content Creation" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "One-off Campaigns" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Custom Web Development" }
              }
            ]
          }
        }`}
      </script>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[#14142B]/5">
        <HexDecor variant="cluster" color="coral" className="top-16 right-8 w-[260px] h-[260px]" rotate={-6} opacity={0.45} />
        <HexDecor variant="solid" color="blue" className="-bottom-10 -left-20 w-[300px] h-[300px]" rotate={18} opacity={0.7} />
        <HexDecor variant="dashed" color="ink" className="top-1/2 right-1/3 w-[120px] h-[120px]" rotate={12} opacity={0.18} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-8">
              Services built around clarity.
            </h1>
            <p className="text-xl md:text-2xl text-[#6E7191] leading-relaxed">
              We help companies sharpen the idea, shape the narrative, and build the creative systems needed to move people from confusion to action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Main */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 relative">
            
            {/* Sticky Nav */}
            <div className="hidden lg:block w-80 shrink-0">
              <div className="sticky top-32">
                <ul className="flex flex-col gap-4 border-l-2 border-[#14142B]/5 pl-6 py-2">
                  {services.map((s) => (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollTo(s.id)}
                        className={`text-left text-[17px] font-medium transition-colors ${activeSection === s.id ? "text-[#FF3951]" : "text-[#6E7191] hover:text-[#14142B]"}`}
                      >
                        {s.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Content */}
            <div className="flex-1 flex flex-col gap-32">
              {services.map((s, idx) => (
                <section id={s.id} key={s.id} className="scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-[#FF3951] font-bold text-3xl mb-4 block">0{idx + 1}</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#14142B]">{s.title}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                      <div className="flex flex-col gap-10">
                        <div>
                          <h3 className="text-[#14142B] font-bold text-lg mb-3">Problem</h3>
                          <p className="text-[#6E7191] text-lg leading-relaxed">{s.problem}</p>
                        </div>
                        <div>
                          <h3 className="text-[#14142B] font-bold text-lg mb-3">Our Approach</h3>
                          <p className="text-[#14142B] font-medium text-lg leading-relaxed">{s.approach}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-10">
                        <div className="bg-[#FFF4F1] p-8 rounded-[24px]">
                          <h3 className="text-[#14142B] font-bold text-lg mb-6">Key Benefits</h3>
                          <ul className="flex flex-col gap-4">
                            {s.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-[#FF3951] shrink-0 mt-0.5" />
                                <span className="text-[#14142B] font-medium">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-[#14142B] font-bold text-lg mb-4">Example Deliverables</h3>
                          <ul className="flex flex-col gap-3">
                            {s.deliverables.map((d, i) => (
                              <li key={i} className="text-[#6E7191] flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-[#14142B]/20 rounded-full"></span>
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>
              ))}

              {/* Also Available — additional services grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="mb-12 max-w-2xl">
                  <span className="text-[#FF3951] font-bold text-3xl mb-4 block">+</span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-5 text-[#14142B] leading-[1.05]">
                    Also available.
                  </h2>
                  <p className="text-lg text-[#6E7191] leading-relaxed">
                    Project-based engagements that sit alongside our core practice areas. Use these when you need senior creative firepower on a specific deliverable, channel, or launch moment.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
                  {additionalServices.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <motion.div
                        key={s.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.04 }}
                      >
                        <Link
                          href={`/services/${s.slug}`}
                          aria-label={`Learn more about ${s.title}`}
                          className="group relative h-full flex flex-col bg-white rounded-[20px] p-6 border border-[#14142B]/8 shadow-[0_2px_18px_rgba(20,20,43,0.04)] hover:shadow-[0_18px_45px_rgba(20,20,43,0.10)] hover:-translate-y-0.5 hover:border-[#3B6BFF]/20 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <h3 className="text-[17px] font-bold text-[#14142B] leading-snug pr-1 group-hover:text-[#3B6BFF] transition-colors">
                              {s.title}
                            </h3>
                            <div aria-hidden className="flex-shrink-0 w-9 h-9 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#3B6BFF] group-hover:bg-[#3B6BFF] group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                          </div>
                          <p className="text-sm text-[#6E7191] leading-relaxed mb-4">
                            {s.desc}
                          </p>
                          <span className="mt-auto inline-flex items-center gap-1.5 text-[#FF3951] font-bold text-[13px] group-hover:gap-2 transition-all">
                            Learn more <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Case Study Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#14142B] rounded-[32px] p-10 md:p-16 text-white text-center mt-8 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF3951]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="relative z-10">
                  <span className="text-[#FF3951] text-[13px] font-bold tracking-widest uppercase flex items-center gap-2 justify-center mb-6">
                    <span className="w-6 h-[2px] bg-[#FF3951] rounded-full inline-block"></span>
                    See clarity in action.
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Case Study: From scattered message to scalable brand system</h3>
                  <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    A placeholder case study showing how Concepful helped a complex business clarify its positioning, rebuild its narrative, and translate that into a sharper digital presence.
                  </p>
                  <PillButton href="/case-studies/clarity-system">Read Case Study</PillButton>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-32 bg-[#FFF7F4]">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-6">
              Still trying to figure out what is not working?
            </h2>
            <p className="text-xl text-[#6E7191] mb-10">
              We will help you find it, name it, and fix it.
            </p>
            <PillButton href="/contact">Start a Conversation</PillButton>
          </motion.div>
        </div>
      </section>

    </>
  );
}
