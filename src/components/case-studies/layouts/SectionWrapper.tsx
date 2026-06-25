import React from "react";

export function SectionWrapper({ 
  children, 
  className = "", 
  id,
  overflowHidden = true
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
  overflowHidden?: boolean;
}) {
  return (
    <section 
      id={id} 
      className={`relative ${overflowHidden ? 'overflow-hidden' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
