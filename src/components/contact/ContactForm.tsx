"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Check } from "lucide-react";

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
import { PillButton } from "@/components/site/PillButton";
import { 
  CLARITY_SPRINT_INCLUDED, 
  STRATEGIC_BUILD_INCLUDED, 
  RETAINER_INCLUDED 
} from "./ContactConstants";

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

export function ContactForm() {
  const router = useRouter();
  
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
    
    // Redirect to animated thank you page with context
    const params = new URLSearchParams();
    if (data.name) params.set("name", data.name);
    if (data.budget) params.set("budget", data.budget.toString());
    if (data.isMonthlyRetainer) params.set("retainer", "true");
    
    router.push(`/thank-you?${params.toString()}`);
  };

  return (
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
                  {CLARITY_SPRINT_INCLUDED.map((item, idx) => (
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
                  {STRATEGIC_BUILD_INCLUDED.map((item, idx) => (
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
                  {RETAINER_INCLUDED.map((item, idx) => (
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
  );
}
