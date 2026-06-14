"use client";

const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='256' height='256' filter='url(%23n)'/></svg>`;

export default function GrainOverlay({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999]"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,${svg}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "192px 192px",
      }}
    />
  );
}
