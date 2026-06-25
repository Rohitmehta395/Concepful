import { useContext } from "react";
import type { default as LenisType } from "lenis";
import { LenisContext } from "@/providers/LenisProvider";

export function useLenis(): LenisType | null {
  const context = useContext(LenisContext);
  if (context === undefined) {
    throw new Error("useLenis must be used within a LenisProvider");
  }
  return context;
}
