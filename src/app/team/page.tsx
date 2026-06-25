"use client";
import { SeoHead } from "@/components/site/SeoHead";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";
import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "Peter Sierra",
      role: "Creative Director / Owner",
      bio: "Peter leads Concepful's creative direction, helping companies clarify their ideas, sharpen their narrative, and turn strategy into brand experiences people understand.",
      image: "/images/team-peter.png",
      contact: true
    },
    {
      name: "Strategy Lead",
      role: "Positioning & Messaging",
      bio: "Positioning, research, and messaging architecture.",
      image: "/images/team-strategy.png",
      contact: false
    },
    {
      name: "Design Lead",
      role: "Visual Systems",
      bio: "Visual systems, web design, and creative direction.",
      image: "/images/team-design.png",
      contact: false
    },
    {
      name: "Content Lead",
      role: "Campaigns & Voice",
      bio: "Campaign narratives, content systems, and brand voice.",
      image: "/images/team-content.png",
      contact: false
    }
  ];

  return (
    <>
      <SeoHead 
        title="Team | Concepful"
        description="Meet the Concepful team behind clarity-first creative strategy, narrative development, and design systems. Led by Peter Sierra in Miami, FL."
        path="/team"
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Peter Sierra",
          "jobTitle": "Creative Director / Owner",
          "worksFor": { "@id": "https://conceptful.agency/#organization" },
          "url": "https://conceptful.agency/team",
          "image": "https://conceptful.agency/images/team-peter.png",
          "telephone": "+1-305-562-8802",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "addressCountry": "US"
          },
          "description": "Peter Sierra leads Concepful's creative direction, helping companies clarify their ideas, sharpen their narrative, and turn strategy into brand experiences people understand."
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://conceptful.agency/" },
            { "@type": "ListItem", "position": 2, "name": "Team", "item": "https://conceptful.agency/team" }
          ]
        }`}
      </script>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[#14142B]/5">
        <HexDecor variant="outline" color="coral" className="top-20 right-12 w-[200px] h-[200px]" rotate={10} opacity={0.45} />
        <HexDecor variant="nested" color="blue" className="-top-10 -right-24 w-[260px] h-[260px]" rotate={-15} opacity={0.4} />
        <HexDecor variant="dashed" color="blue" className="bottom-4 left-1/4 w-[140px] h-[140px]" rotate={20} opacity={0.3} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-8">
              Small team. Sharp thinking.
            </h1>
            <p className="text-xl md:text-2xl text-[#6E7191] leading-relaxed">
              We are built for focused creative work: fewer layers, better questions, clearer outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col text-center items-center"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-[#FFF4F1] border border-[#14142B]/5 shadow-sm">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-[#14142B] mb-2">{member.name}</h3>
                <p className="text-[#FF3951] font-semibold text-sm tracking-wide uppercase mb-4">{member.role}</p>
                <p className="text-[#6E7191] leading-relaxed mb-6">{member.bio}</p>
                
                {member.contact && (
                  <div className="mt-auto pt-6 border-t border-[#14142B]/5 w-full flex flex-col gap-2 text-sm text-[#14142B] font-medium">
                    <p>Miami, FL</p>
                    <a href="tel:3055628802" className="hover:text-[#FF3951] transition-colors">(305) 562-8802</a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32 bg-[#FFF7F4]">
        <HexDecor variant="nested" color="coral" className="top-1/2 -translate-y-1/2 -left-16 w-[260px] h-[260px]" rotate={-12} opacity={0.3} />
        <HexDecor variant="solid" color="blue" className="top-1/2 -translate-y-1/2 -right-12 w-[220px] h-[220px]" rotate={18} opacity={0.5} />
        <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-10">
              Want to work with people who actually think before they design?
            </h2>
            <PillButton href="/contact">Start a Conversation</PillButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
