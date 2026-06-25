"use client";
import Link from "next/link";
import { PillButton } from "./PillButton";
import logoUrl from "@/assets/concepful-logo.png";

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-[#14142B]/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6" aria-label="Concepful — home">
              <img src={logoUrl.src} alt="Concepful" className="h-16 w-auto" />
            </Link>
            <p className="text-[#6E7191] text-lg max-w-sm">
              Clarity builds everything.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold text-[#14142B] mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services" className="text-[#6E7191] hover:text-[#FF3951] transition-colors">Clarity Strategy</Link></li>
              <li><Link href="/services" className="text-[#6E7191] hover:text-[#FF3951] transition-colors">Narrative Development</Link></li>
              <li><Link href="/services" className="text-[#6E7191] hover:text-[#FF3951] transition-colors">Brand + Visual Systems</Link></li>
              <li><Link href="/services" className="text-[#6E7191] hover:text-[#FF3951] transition-colors">Website + Experience</Link></li>
              <li><Link href="/services" className="text-[#6E7191] hover:text-[#FF3951] transition-colors">Content + Campaigns</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold text-[#14142B] mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-[#6E7191] hover:text-[#FF3951] transition-colors">About</Link></li>
              <li><Link href="/team" className="text-[#6E7191] hover:text-[#FF3951] transition-colors">Team</Link></li>
            </ul>
            <h4 className="font-bold text-[#14142B] mb-6 mt-8">Resources</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/contact" className="text-[#6E7191] hover:text-[#FF3951] transition-colors">Contact</Link></li>
              <li><Link href="/campaigns" className="text-[#6E7191] hover:text-[#FF3951] transition-colors">Campaigns</Link></li>
              <li><Link href="/case-studies" className="text-[#6E7191] hover:text-[#FF3951] transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-[#14142B] mb-6">Contact</h4>
            <div className="flex flex-col gap-2 text-[#6E7191]">
              <p className="text-[#14142B] font-medium">Peter Sierra</p>
              <p>Creative Director / Owner</p>
              <p className="mt-2">Miami, FL</p>
              <a href="tel:3055628802" className="mt-2 hover:text-[#FF3951] transition-colors">(305) 562-8802</a>
            </div>
            <div className="mt-8">
              <PillButton href="/contact">Start a Conversation</PillButton>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#14142B]/5 text-[#6E7191] text-sm">
          <p>© 2026 Concepful.</p>
          <p>Built in Miami.</p>
        </div>
      </div>
    </footer>
  );
}
