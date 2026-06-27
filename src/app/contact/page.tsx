"use client";
import { useEffect } from "react";
import { SeoHead } from "@/components/site/SeoHead";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone, User2, Check } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Please tell us what you are trying to clarify"),
  budget: z.number().optional(),
  isMonthlyRetainer: z.boolean().default(false).optional(),
  timeline: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

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
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      budget: 15000,
      isMonthlyRetainer: false,
      timeline: "",
    },
  });

  const currentBudget = form.watch("budget") ?? 15000;
  const isMonthlyRetainer = form.watch("isMonthlyRetainer") ?? false;
  const showClaritySprint = currentBudget >= 5000 && currentBudget <= 12000 && !isMonthlyRetainer;
  const showStrategicBuild = currentBudget >= 13000 && currentBudget <= 75000 && !isMonthlyRetainer;

  useEffect(() => {
    if (currentBudget > 75000 && !isMonthlyRetainer) {
      form.setValue("isMonthlyRetainer", true);
    }
  }, [currentBudget, isMonthlyRetainer, form]);

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast.success("Message Sent", {
      description: "We've received your inquiry and will be in touch shortly.",
    });
    form.reset();
  };

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
        <HexDecor
          variant="nested"
          color="blue"
          className="top-16 -left-20 w-[300px] h-[300px]"
          rotate={-12}
          opacity={0.4}
        />
        <HexDecor
          variant="dashed"
          color="coral"
          className="top-32 right-8 w-[180px] h-[180px]"
          rotate={14}
          opacity={0.4}
        />
        <HexDecor
          variant="outline"
          color="coral"
          className="bottom-16 left-1/3 w-[140px] h-[140px]"
          rotate={20}
          opacity={0.35}
        />
        <HexDecor
          variant="solid"
          color="blue"
          className="-bottom-10 -right-12 w-[220px] h-[220px]"
          rotate={-18}
          opacity={0.5}
        />
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

{/* 
              <motion.div variants={itemVariants} className="space-y-8">
                <h3 className="text-xl font-semibold text-[#14142B] border-b border-[#14142B]/10 pb-4">
                  Contact Info
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                  {/* Person *\/}
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#FFF4F1] rounded-full flex items-center justify-center text-[#FF3951] group-hover:bg-[#FF3951] group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                      <User2 size={24} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-bold text-[#14142B] text-lg">
                        Peter Sierra
                      </p>
                      <p className="text-[#6E7191] font-medium">
                        Creative Director / Owner
                      </p>
                    </div>
                  </div>

                  {/* Address *\/}
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#FFF4F1] rounded-full flex items-center justify-center text-[#FF3951] group-hover:bg-[#FF3951] group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                      <MapPin size={24} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-bold text-[#14142B] text-lg">
                        Miami Studio
                      </p>
                      <p className="text-[#6E7191] font-medium leading-relaxed mt-1">
                        10020 SW 228th Ter.
                        <br />
                        Miami, FL 33190
                      </p>
                    </div>
                  </div>

                  {/* Phone *\/}
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#FFF4F1] rounded-full flex items-center justify-center text-[#FF3951] group-hover:bg-[#FF3951] group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                      <Phone size={24} />
                    </div>
                    <div className="flex items-center">
                      <a
                        href="tel:3055628802"
                        className="font-bold text-[#14142B] text-lg hover:text-[#FF3951] transition-colors"
                      >
                        (305) 562-8802
                      </a>
                    </div>
                  </div>

                  {/* Email *\/}
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#FFF4F1] rounded-full flex items-center justify-center text-[#FF3951] group-hover:bg-[#FF3951] group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                      <Mail size={24} />
                    </div>
                    <div className="flex items-center">
                      <a
                        href="mailto:hello@conceptful.agency"
                        className="font-bold text-[#14142B] text-lg hover:text-[#FF3951] transition-colors"
                      >
                        hello@conceptful.agency
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
*/}
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
              <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_24px_60px_rgba(20,20,43,0.08)] border border-[#14142B]/5 relative overflow-hidden">
                {/* Subtle gradient accent inside form card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FFF4F1] to-transparent rounded-bl-full opacity-60 pointer-events-none"></div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#14142B] font-bold text-sm uppercase tracking-wider">
                              Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Jane Doe"
                                {...field}
                                className="h-14 bg-[#F9F9FB] border border-[#14142B]/10 hover:border-[#14142B]/20 focus-visible:ring-1 focus-visible:ring-[#FF3951] focus-visible:border-[#FF3951] rounded-xl shadow-sm transition-all text-base"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#14142B] font-bold text-sm uppercase tracking-wider">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="jane@example.com"
                                {...field}
                                className="h-14 bg-[#F9F9FB] border border-[#14142B]/10 hover:border-[#14142B]/20 focus-visible:ring-1 focus-visible:ring-[#FF3951] focus-visible:border-[#FF3951] rounded-xl shadow-sm transition-all text-base"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#14142B] font-bold text-sm uppercase tracking-wider">
                            Company
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Acme Corp"
                              {...field}
                              className="h-14 bg-[#F9F9FB] border border-[#14142B]/10 hover:border-[#14142B]/20 focus-visible:ring-1 focus-visible:ring-[#FF3951] focus-visible:border-[#FF3951] rounded-xl shadow-sm transition-all text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#14142B] font-bold text-sm uppercase tracking-wider">
                            What are you trying to clarify?
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="We do X, but it feels like Y..."
                              className="min-h-[140px] p-4 bg-[#F9F9FB] border border-[#14142B]/10 hover:border-[#14142B]/20 focus-visible:ring-1 focus-visible:ring-[#FF3951] focus-visible:border-[#FF3951] rounded-xl resize-y shadow-sm transition-all text-base"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#14142B] font-bold text-sm uppercase tracking-wider">
                              Timeline
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-14 bg-[#F9F9FB] border border-[#14142B]/10 hover:border-[#14142B]/20 focus:ring-1 focus:ring-[#FF3951] focus:border-[#FF3951] rounded-xl shadow-sm transition-all text-[#14142B] text-base">
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="rounded-xl border border-[#14142B]/10 shadow-lg">
                                <SelectItem
                                  value="asap"
                                  className="rounded-lg focus:bg-[#FFF4F1] focus:text-[#FF3951] text-base py-2"
                                >
                                  ASAP
                                </SelectItem>
                                <SelectItem
                                  value="1-3-months"
                                  className="rounded-lg focus:bg-[#FFF4F1] focus:text-[#FF3951] text-base py-2"
                                >
                                  1-3 months
                                </SelectItem>
                                <SelectItem
                                  value="3-6-months"
                                  className="rounded-lg focus:bg-[#FFF4F1] focus:text-[#FF3951] text-base py-2"
                                >
                                  3-6 months
                                </SelectItem>
                                <SelectItem
                                  value="just-exploring"
                                  className="rounded-lg focus:bg-[#FFF4F1] focus:text-[#FF3951] text-base py-2"
                                >
                                  Just exploring
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex justify-between items-center pb-2">
                              <FormLabel className="text-[#14142B] font-bold text-sm uppercase tracking-wider">
                                Budget range
                              </FormLabel>
                              <span className="text-[#FF3951] font-bold text-sm bg-[#FFF4F1] px-3 py-1 rounded-full">
                                ${field.value ? (field.value / 1000).toFixed(0) : 15}k
                              </span>
                            </div>
                            <FormControl>
                              <div className="h-14 flex items-center px-4 bg-[#F9F9FB] border border-[#14142B]/10 hover:border-[#14142B]/20 focus-within:ring-1 focus-within:ring-[#FF3951] focus-within:border-[#FF3951] rounded-xl shadow-sm transition-all">
                                <Slider
                                  min={5000}
                                  max={100000}
                                  step={1000}
                                  value={[field.value || 15000]}
                                  onValueChange={(vals) => field.onChange(vals[0])}
                                  className="w-full"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="isMonthlyRetainer"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-[#14142B]/10 rounded-xl bg-[#F9F9FB]">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="h-5 w-5 rounded-[5px] data-[state=checked]:bg-[#FF3951] data-[state=checked]:border-[#FF3951] mt-0.5"
                              />
                            </FormControl>
                            <div className="space-y-2 leading-none">
                              <FormLabel className="text-[#14142B] font-bold text-sm cursor-pointer">
                                Monthly Retainer
                              </FormLabel>
                              <p className="text-sm text-[#6E7191]">
                                I am interested in an ongoing embedded partnership.
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />

                    {showClaritySprint && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="overflow-hidden pt-2"
                      >
                        <div className="space-y-4 pl-1 pb-2">
                          <h4 className="text-[13px] font-bold tracking-[0.15em] text-[#3B82F6] uppercase">
                            Included
                          </h4>
                          <ul className="space-y-3.5">
                            {[
                              "Positioning audit",
                              "Messaging architecture",
                              "Brand narrative",
                              "Strategic recommendations",
                              "Initial visual direction",
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-4">
                                <Check className="w-[18px] h-[18px] text-[#FF3951] shrink-0" strokeWidth={2.5} />
                                <span className="text-[#14142B] text-[17px]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}

                    {showStrategicBuild && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="overflow-hidden pt-2"
                      >
                        <div className="space-y-4 pl-1 pb-2">
                          <h4 className="text-[13px] font-bold tracking-[0.15em] text-[#3B82F6] uppercase">
                            Included
                          </h4>
                          <ul className="space-y-3.5">
                            {[
                              "Positioning, identity, and narrative system",
                              "Content strategy and executive communication alignment",
                              "Custom prompt systems and tone-alignment workflows",
                              "Editorial acceleration and image-generation pipelines",
                              "Onboarding, configuration, and infrastructure setup",
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <Check className="w-[18px] h-[18px] text-[#FF3951] shrink-0 mt-1" strokeWidth={2.5} />
                                <span className="text-[#14142B] text-[17px] leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}

                    {isMonthlyRetainer && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="overflow-hidden pt-2"
                      >
                        <div className="space-y-4 pl-1 pb-2">
                          <h4 className="text-[13px] font-bold tracking-[0.15em] text-[#3B82F6] uppercase">
                            Included
                          </h4>
                          <ul className="space-y-3.5">
                            {[
                              "Strategic context engine trained on your brand voice and positioning",
                              "Executive narrative assistant for messaging and analysis",
                              "Signal scout for competitor, policy, and market monitoring",
                              "Creative direction agent for on-brand visuals and ideation",
                              "Ongoing strategic steering with the Conceptful team",
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <Check className="w-[18px] h-[18px] text-[#FF3951] shrink-0 mt-1" strokeWidth={2.5} />
                                <span className="text-[#14142B] text-[17px] leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}

                    <div className="pt-6">
                      <PillButton
                        type="submit"
                        className="w-full h-14 text-lg shadow-[0_8px_20px_rgba(255,57,81,0.25)] hover:shadow-[0_12px_25px_rgba(255,57,81,0.35)] hover:-translate-y-1 transition-all duration-300"
                      >
                        Submit Inquiry
                      </PillButton>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
