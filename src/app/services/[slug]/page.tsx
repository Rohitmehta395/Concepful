"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SeoHead } from "@/components/site/SeoHead";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES } from "../data";

import { use } from "react";

export default function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const path = `/services/${service.slug}`;
  const url = `https://conceptful.agency${path}`;
  const related = service.related
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <SeoHead
        title={`${service.title} | Concepful Services`}
        description={service.tagline}
        path={path}
      />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://conceptful.agency/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://conceptful.agency/services" },
            { "@type": "ListItem", "position": 3, "name": ${JSON.stringify(service.title)}, "item": ${JSON.stringify(url)} }
          ]
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": ${JSON.stringify(service.title)},
          "serviceType": ${JSON.stringify(service.category)},
          "description": ${JSON.stringify(service.tagline)},
          "url": ${JSON.stringify(url)},
          "provider": { "@type": "LocalBusiness", "name": "Concepful" },
          "areaServed": "United States"
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            ${service.faqs
              .map(
                (f) =>
                  `{ "@type": "Question", "name": ${JSON.stringify(f.q)}, "acceptedAnswer": { "@type": "Answer", "text": ${JSON.stringify(f.a)} } }`
              )
              .join(",\n            ")}
          ]
        }`}
      </script>

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-[#14142B]/5">
        <HexDecor variant="cluster" color="coral" className="top-16 right-8 w-[260px] h-[260px]" rotate={-6} opacity={0.4} />
        <HexDecor variant="solid" color="blue" className="-bottom-16 -left-20 w-[300px] h-[300px]" rotate={18} opacity={0.6} />
        <HexDecor variant="dashed" color="ink" className="top-1/2 right-1/3 w-[120px] h-[120px]" rotate={12} opacity={0.18} />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Link href="/services" className="inline-flex items-center text-[#6E7191] hover:text-[#FF3951] font-medium mb-8 md:mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span aria-hidden className="inline-flex w-10 h-10 rounded-full bg-[#EEF2FF] items-center justify-center text-[#3B6BFF]">
                <Icon className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3B6BFF]">
                {service.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-6">
              {service.title}.
            </h1>
            <p className="text-xl md:text-2xl text-[#6E7191] leading-relaxed mb-10">
              {service.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <PillButton href="/contact">Start a Conversation</PillButton>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#14142B] font-bold text-[15px] px-6 py-3 rounded-full border border-[#14142B]/15 hover:border-[#FF3951] hover:text-[#FF3951] transition-colors"
              >
                See all services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro + Best For */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <span className="text-[#FF3951] font-bold text-2xl mb-3 block">01</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#14142B] leading-tight mb-8">
                What it is.
              </h2>
              <div className="flex flex-col gap-5">
                {service.intro.map((p, i) => (
                  <p key={i} className="text-lg md:text-xl text-[#6E7191] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFF4F1] rounded-[24px] p-8 border border-[#FF3951]/10 self-start"
            >
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF3951] mb-5">
                Best for
              </h3>
              <ul className="flex flex-col gap-4">
                {service.bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF3951] shrink-0 mt-0.5" />
                    <span className="text-[#14142B] font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-24 bg-[#FAFAFC] border-y border-[#14142B]/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-14"
          >
            <span className="text-[#FF3951] font-bold text-2xl mb-3 block">02</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#14142B] leading-tight mb-5">
              How it runs.
            </h2>
            <p className="text-lg text-[#6E7191] leading-relaxed">
              A clear process so you know what is happening, when, and what we need from you at each step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-[20px] p-6 border border-[#14142B]/8 shadow-[0_2px_18px_rgba(20,20,43,0.04)] flex flex-col gap-3"
              >
                <span className="text-[#3B6BFF] font-mono font-bold text-sm tracking-wider">
                  {step.phase}
                </span>
                <h3 className="text-xl font-bold text-[#14142B]">{step.title}</h3>
                <p className="text-[#6E7191] leading-relaxed text-[15px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + Outcomes */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[28px] p-8 md:p-10 border border-[#14142B]/8 shadow-[0_2px_22px_rgba(20,20,43,0.04)]"
            >
              <span className="text-[#FF3951] font-bold text-2xl mb-3 block">03</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#14142B] mb-7 leading-tight">
                What you get.
              </h2>
              <ul className="flex flex-col gap-4">
                {service.deliverables.map((d, i) => (
                  <li key={d} className="flex items-start gap-3 pb-4 border-b border-[#14142B]/5 last:border-b-0 last:pb-0">
                    <span aria-hidden className="text-[#3B6BFF] font-mono text-xs font-bold mt-1.5 w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#14142B] font-medium leading-snug">{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#14142B] rounded-[28px] p-8 md:p-10 text-white relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-[280px] h-[280px] bg-[#FF3951]/20 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="relative">
                <span className="text-[#FF3951] font-bold text-2xl mb-3 block">04</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-7 leading-tight">
                  What changes.
                </h2>
                <ul className="flex flex-col gap-4">
                  {service.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-[#FF3951] shrink-0 mt-0.5" />
                      <span className="text-white/90 font-medium leading-snug">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-24 bg-[#FAFAFC] border-y border-[#14142B]/5">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-[#FF3951] font-bold text-2xl mb-3 block">05</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#14142B] leading-tight">
              Common questions.
            </h2>
          </motion.div>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {service.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-[18px] border border-[#14142B]/8 px-6 data-[state=open]:border-[#FF3951]/30"
              >
                <AccordionTrigger className="text-left text-[#14142B] font-bold text-[17px] py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#6E7191] leading-relaxed pb-5 text-[15px]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#FFF7F4]">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#14142B] leading-[1.05] mb-6">
              {service.ctaTitle}
            </h2>
            <p className="text-xl text-[#6E7191] mb-10 max-w-2xl mx-auto">
              {service.ctaSubtitle}
            </p>
            <PillButton href="/contact">Start a Conversation</PillButton>
          </motion.div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
              <div>
                <span className="text-[#FF3951] font-bold text-2xl mb-3 block">+</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#14142B] leading-tight">
                  Often paired with.
                </h2>
              </div>
              <Link
                href="/services"
                className="text-[#14142B] font-bold text-[15px] hover:text-[#FF3951] transition-colors inline-flex items-center gap-2"
              >
                All services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => {
                const RIcon = r.icon;
                return (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}`}
                    className="group block bg-white rounded-[20px] p-6 border border-[#14142B]/8 shadow-[0_2px_18px_rgba(20,20,43,0.04)] hover:shadow-[0_18px_45px_rgba(20,20,43,0.10)] hover:-translate-y-0.5 hover:border-[#3B6BFF]/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <h3 className="text-[17px] font-bold text-[#14142B] leading-snug pr-1">
                        {r.title}
                      </h3>
                      <div aria-hidden className="flex-shrink-0 w-9 h-9 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#3B6BFF] group-hover:bg-[#3B6BFF] group-hover:text-white transition-colors">
                        <RIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-sm text-[#6E7191] leading-relaxed mb-4">
                      {r.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#FF3951] font-bold text-[13px] group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

