"use client";
import { SeoHead } from "@/components/site/SeoHead";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PillButton } from "@/components/site/PillButton";
import { HexDecor } from "@/components/site/HexDecor";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

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

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Please tell us what you are trying to clarify"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      budget: "",
      timeline: "",
    },
  });

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
        <HexDecor variant="nested" color="blue" className="top-16 -left-20 w-[300px] h-[300px]" rotate={-12} opacity={0.4} />
        <HexDecor variant="dashed" color="coral" className="top-32 right-8 w-[180px] h-[180px]" rotate={14} opacity={0.4} />
        <HexDecor variant="outline" color="coral" className="bottom-16 left-1/3 w-[140px] h-[140px]" rotate={20} opacity={0.35} />
        <HexDecor variant="solid" color="blue" className="-bottom-10 -right-12 w-[220px] h-[220px]" rotate={-18} opacity={0.5} />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Col: Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading 
                as="h1"
                title="Let's make it make sense."
                description="Tell us what you are building, what feels unclear, and where you need sharper thinking."
                className="mb-12"
              />

              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgba(20,20,43,0.06)] border border-[#14142B]/5">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#14142B] font-bold">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} className="h-12 bg-[#F7F7F9] border-transparent focus-visible:ring-[#FF3951] rounded-xl" />
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
                            <FormLabel className="text-[#14142B] font-bold">Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jane@example.com" {...field} className="h-12 bg-[#F7F7F9] border-transparent focus-visible:ring-[#FF3951] rounded-xl" />
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
                          <FormLabel className="text-[#14142B] font-bold">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" {...field} className="h-12 bg-[#F7F7F9] border-transparent focus-visible:ring-[#FF3951] rounded-xl" />
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
                          <FormLabel className="text-[#14142B] font-bold">
                            What are you trying to clarify?
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="We do X, but it feels like Y..."
                              className="min-h-[120px] bg-[#F7F7F9] border-transparent focus-visible:ring-[#FF3951] rounded-xl resize-y" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#14142B] font-bold">Budget range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-[#F7F7F9] border-transparent focus:ring-[#FF3951] rounded-xl text-[#14142B]">
                                  <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="15k-25k">$15k - $25k</SelectItem>
                                <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                                <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                                <SelectItem value="100k+">$100k+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#14142B] font-bold">Timeline</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-[#F7F7F9] border-transparent focus:ring-[#FF3951] rounded-xl text-[#14142B]">
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="asap">ASAP</SelectItem>
                                <SelectItem value="1-3-months">1-3 months</SelectItem>
                                <SelectItem value="3-6-months">3-6 months</SelectItem>
                                <SelectItem value="just-exploring">Just exploring</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="pt-4">
                      <PillButton type="submit" className="w-full">
                        Submit Inquiry
                      </PillButton>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>

            {/* Right Col: Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-12"
            >
              <div className="bg-[#FFF4F1] rounded-[32px] p-10 border border-[#FF3951]/10">
                <h3 className="text-2xl font-bold text-[#14142B] mb-8">Contact Info</h3>
                
                <div className="flex flex-col gap-6 text-[#14142B] text-lg font-medium">
                  <div>
                    <p className="font-bold">Peter Sierra</p>
                    <p className="text-[#6E7191] font-normal text-base">Creative Director / Owner</p>
                  </div>
                  
                  <div>
                    <p>10020 SW 228th Ter.</p>
                    <p>Miami, FL 33190</p>
                  </div>
                  
                  <div>
                    <a href="tel:3055628802" className="hover:text-[#FF3951] transition-colors block">(305) 562-8802</a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
