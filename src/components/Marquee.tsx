import { CSSProperties } from "react";

interface MarqueeProps {
  items: string[];
  separator?: string;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Marquee({
  items,
  separator = "·",
  speed = 30,
  className = "",
  style,
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none ${className}`} style={style}>
      <div
        className="inline-flex gap-0"
        style={{ animation: `marquee-scroll ${speed}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span>{item}</span>
            <span className="opacity-40">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
