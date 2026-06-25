import React from "react";

export function ContentContainer({ 
  children, 
  className = "",
  size = "default" 
}: { 
  children: React.ReactNode; 
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const maxWidth = 
    size === "wide" ? "max-w-[1600px] w-[96vw]" : 
    size === "narrow" ? "max-w-4xl" : 
    "max-w-7xl";
  
  return (
    <div className={`relative mx-auto ${maxWidth} px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
