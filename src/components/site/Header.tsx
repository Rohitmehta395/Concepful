"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { PillButton } from "./PillButton";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useHoverDropdown } from "@/lib/useHoverDropdown";
import logoUrl from "@/assets/concepful-logo.png";
import { ServicesMegaMenu, CORE_PRACTICES } from "./ServicesMegaMenu";
import { ResourcesDropdown } from "./ResourcesDropdown";
import { SERVICES } from "@/app/services/data";
import { RESOURCES } from "@/app/resources/data";

type NavLink = {
  name: string;
  href: string;
  panel?: "mega" | "dropdown";
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", panel: "mega" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Resources", href: "/resources/blog", panel: "dropdown" },
  { name: "Contact", href: "/contact" },
];

const MEGA_PANEL_ID = "services-megamenu";
const DROPDOWN_PANEL_ID = "resources-dropdown";

export function Header() {
  const location = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const services = useHoverDropdown<HTMLAnchorElement>({ closeOnChange: location });
  const resources = useHoverDropdown<HTMLAnchorElement>({ closeOnChange: location });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset mobile accordions when the sheet closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false);
      setMobileResourcesOpen(false);
    }
  }, [mobileMenuOpen]);

  const Logo = () => (
    <Link href="/" className="flex items-center z-50 relative" aria-label="Concepful, home">
      <img src={logoUrl.src} alt="Concepful" className="h-20 md:h-24 w-auto" />
    </Link>
  );

  const isServicesActive =
    location === "/services" || location.startsWith("/services/");
  const isResourcesActive = location.startsWith("/resources");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-in-out",
        scrolled ? "bg-white/90 py-4 shadow-sm backdrop-blur-md" : "bg-white py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            if (link.panel === "mega") {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={services.openHandler}
                  onMouseLeave={services.scheduleClose}
                  onFocus={services.openHandler}
                >
                  <Link
                    href={link.href}
                    ref={services.triggerRef}
                    aria-expanded={services.open}
                    aria-controls={MEGA_PANEL_ID}
                    className={cn(
                      "inline-flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-[#FF3951]",
                      isServicesActive ? "text-[#FF3951]" : "text-[#14142B]"
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        services.open ? "rotate-180" : "rotate-0"
                      )}
                      aria-hidden
                    />
                  </Link>
                </div>
              );
            }

            if (link.panel === "dropdown") {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={resources.openHandler}
                  onMouseLeave={resources.scheduleClose}
                  onFocus={resources.openHandler}
                >
                  <Link
                    href={link.href}
                    ref={resources.triggerRef}
                    aria-expanded={resources.open}
                    aria-controls={DROPDOWN_PANEL_ID}
                    className={cn(
                      "inline-flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-[#FF3951]",
                      isResourcesActive ? "text-[#FF3951]" : "text-[#14142B]"
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        resources.open ? "rotate-180" : "rotate-0"
                      )}
                      aria-hidden
                    />
                  </Link>
                  <ResourcesDropdown
                    id={DROPDOWN_PANEL_ID}
                    open={resources.open}
                    onClose={() => resources.close(false)}
                    onMouseEnter={resources.openHandler}
                    onMouseLeave={resources.scheduleClose}
                  />
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[15px] font-medium transition-colors hover:text-[#FF3951]",
                  location === link.href ? "text-[#FF3951]" : "text-[#14142B]"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <PillButton href="/contact">Let's Make It Clear</PillButton>
        </div>

        {/* Mobile Nav */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-[#14142B] hover:text-[#FF3951]" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm flex flex-col pt-20 overflow-y-auto" aria-describedby={undefined}>
            <SheetTitle className="sr-only">Site navigation</SheetTitle>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => {
                if (link.panel === "mega") {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <div className="flex items-center justify-between gap-3">
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "text-2xl font-bold transition-colors hover:text-[#FF3951]",
                            isServicesActive ? "text-[#FF3951]" : "text-[#14142B]"
                          )}
                        >
                          {link.name}
                        </Link>
                        <button
                          type="button"
                          aria-label={mobileServicesOpen ? "Collapse services" : "Expand services"}
                          aria-expanded={mobileServicesOpen}
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className="w-9 h-9 rounded-full border border-[#14142B]/10 flex items-center justify-center text-[#14142B] hover:border-[#FF3951] hover:text-[#FF3951] transition-colors"
                        >
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              mobileServicesOpen ? "rotate-180" : "rotate-0"
                            )}
                          />
                        </button>
                      </div>

                      {mobileServicesOpen && (
                        <div className="mt-4 pl-4 border-l-2 border-[#FF3951]/15 flex flex-col gap-5">
                          <div>
                            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF3951] mb-2.5">
                              Core Practices
                            </span>
                            <ul className="flex flex-col gap-2.5">
                              {CORE_PRACTICES.map((p) => (
                                <li key={p.id}>
                                  <a
                                    href={`/services#${p.id}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-[15px] font-medium text-[#14142B] hover:text-[#FF3951] transition-colors leading-tight block"
                                  >
                                    {p.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B6BFF] mb-2.5">
                              Also Available
                            </span>
                            <ul className="flex flex-col gap-2.5">
                              {SERVICES.map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    href={`/services/${s.slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-[15px] font-medium text-[#14142B] hover:text-[#3B6BFF] transition-colors leading-tight block"
                                  >
                                    {s.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.panel === "dropdown") {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <div className="flex items-center justify-between gap-3">
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "text-2xl font-bold transition-colors hover:text-[#FF3951]",
                            isResourcesActive ? "text-[#FF3951]" : "text-[#14142B]"
                          )}
                        >
                          {link.name}
                        </Link>
                        <button
                          type="button"
                          aria-label={mobileResourcesOpen ? "Collapse resources" : "Expand resources"}
                          aria-expanded={mobileResourcesOpen}
                          onClick={() => setMobileResourcesOpen((v) => !v)}
                          className="w-9 h-9 rounded-full border border-[#14142B]/10 flex items-center justify-center text-[#14142B] hover:border-[#FF3951] hover:text-[#FF3951] transition-colors"
                        >
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              mobileResourcesOpen ? "rotate-180" : "rotate-0"
                            )}
                          />
                        </button>
                      </div>

                      {mobileResourcesOpen && (
                        <ul className="mt-4 pl-4 border-l-2 border-[#FF3951]/15 flex flex-col gap-2.5">
                          {RESOURCES.map((r) => (
                            <li key={r.slug}>
                              <Link
                                href={`/resources/${r.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-[15px] font-medium text-[#14142B] hover:text-[#FF3951] transition-colors leading-tight block"
                              >
                                {r.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-bold transition-colors hover:text-[#FF3951]",
                      location === link.href ? "text-[#FF3951]" : "text-[#14142B]"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-8 pb-8">
              <PillButton href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Let's Make It Clear
              </PillButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Services megamenu (anchored to header viewport, not the trigger) */}
      <div className="hidden md:block">
        <ServicesMegaMenu
          id={MEGA_PANEL_ID}
          open={services.open}
          onClose={() => services.close(false)}
          onMouseEnter={services.openHandler}
          onMouseLeave={services.scheduleClose}
        />
      </div>
    </header>
  );
}
