import React from "react";

export function PageContainer({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <main className={`case-studies-page flex flex-col min-h-screen ${className}`}>
      {children}
    </main>
  );
}
