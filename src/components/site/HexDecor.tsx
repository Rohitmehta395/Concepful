"use client";
import { cn } from "@/lib/utils";

type HexVariant = "outline" | "nested" | "dashed" | "solid" | "cluster";
type HexColor = "blue" | "coral" | "ink" | "white";

interface HexDecorProps {
  variant?: HexVariant;
  color?: HexColor;
  className?: string;
  rotate?: number;
  opacity?: number;
  strokeWidth?: number;
  showOnMobile?: boolean;
}

const COLORS: Record<HexColor, string> = {
  blue: "#3B6BFF",
  coral: "#FF3951",
  ink: "#14142B",
  white: "#FFFFFF",
};

const HEX_POINTS = "25,5 75,5 100,50 75,95 25,95 0,50";
const INNER_HEX_POINTS = "32,15 68,15 86,50 68,85 32,85 14,50";

export function HexDecor({
  variant = "outline",
  color = "blue",
  className,
  rotate = 0,
  opacity = 0.5,
  strokeWidth = 0.5,
  showOnMobile = false,
}: HexDecorProps) {
  const stroke = COLORS[color];

  return (
    <svg
      aria-hidden
      className={cn(
        "absolute z-0 pointer-events-none",
        showOnMobile ? "" : "hidden md:block",
        className,
      )}
      style={{ opacity }}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform={`rotate(${rotate} 50 50)`}>
        {variant === "outline" && (
          <polygon
            points={HEX_POINTS}
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        )}

        {variant === "nested" && (
          <>
            <polygon
              points={HEX_POINTS}
              fill="none"
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
            <polygon
              points={INNER_HEX_POINTS}
              fill="none"
              stroke={stroke}
              strokeWidth={strokeWidth * 0.8}
              opacity={0.55}
            />
          </>
        )}

        {variant === "dashed" && (
          <polygon
            points={HEX_POINTS}
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeDasharray="3 2.2"
          />
        )}

        {variant === "solid" && (
          <polygon
            points={HEX_POINTS}
            fill={stroke}
            fillOpacity={0.08}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeOpacity={0.5}
          />
        )}

        {variant === "cluster" && (
          <>
            <polygon
              points="13,3 39,3 52,25.5 39,48 13,48 0,25.5"
              fill="none"
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
            <polygon
              points="61,3 87,3 100,25.5 87,48 61,48 48,25.5"
              fill="none"
              stroke={stroke}
              strokeWidth={strokeWidth}
              opacity={0.7}
            />
            <polygon
              points="37,52 63,52 76,74.5 63,97 37,97 24,74.5"
              fill="none"
              stroke={stroke}
              strokeWidth={strokeWidth}
              opacity={0.85}
            />
          </>
        )}
      </g>
    </svg>
  );
}
