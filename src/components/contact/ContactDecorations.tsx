import { HexDecor } from "@/components/site/HexDecor";

export function ContactDecorations() {
  return (
    <>
      <HexDecor
        variant="nested"
        color="blue"
        className="top-16 -left-20 w-[300px] h-[300px]"
        rotate={-12}
        opacity={0.4}
      />
      <HexDecor
        variant="dashed"
        color="coral"
        className="top-32 right-8 w-[180px] h-[180px]"
        rotate={14}
        opacity={0.4}
      />
      <HexDecor
        variant="outline"
        color="coral"
        className="bottom-16 left-1/3 w-[140px] h-[140px]"
        rotate={20}
        opacity={0.35}
      />
      <HexDecor
        variant="solid"
        color="blue"
        className="-bottom-10 -right-12 w-[220px] h-[220px]"
        rotate={-18}
        opacity={0.5}
      />
    </>
  );
}
