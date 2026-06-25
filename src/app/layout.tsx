import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Providers } from "./providers";
import { HelmetWrapper } from "@/components/site/HelmetWrapper";
import LenisProvider from "@/providers/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conceptful",
  description: "Clarity Strategy, Narrative Development, and Brand Systems.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <HelmetWrapper>
          <Providers>
            <LenisProvider>
              <div className="flex min-h-screen flex-col bg-white font-sans text-[#14142B]">
                <Header />
                <main className="flex-1 pt-[44px]">
                  {children}
                </main>
                <Footer />
              </div>
              <Toaster />
            </LenisProvider>
          </Providers>
        </HelmetWrapper>
      </body>
    </html>
  );
}
