import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User2 } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ContactInfo() {
  return (
    <motion.div variants={itemVariants} className="space-y-8">
      <h3 className="text-xl font-semibold text-[#14142B] border-b border-[#14142B]/10 pb-4">
        Contact Info
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
        {/* Person */}
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

        {/* Address */}
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

        {/* Phone */}
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

        {/* Email */}
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
  );
}
