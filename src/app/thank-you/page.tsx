import { Suspense } from "react";
import { ThankYouContent } from "@/components/contact/ThankYouContent";
import { SeoHead } from "@/components/site/SeoHead";

export default function ThankYouPage() {
  return (
    <>
      <SeoHead
        title="Thank You | Concepful"
        description="Thank you for reaching out. We will be in touch shortly."
        path="/thank-you"
      />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <ThankYouContent />
      </Suspense>
    </>
  );
}
