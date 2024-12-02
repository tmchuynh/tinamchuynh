"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export default function Globe( {
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
} ) {
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>( null );

  const onResize = () => {
    if ( canvasRef.current ) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect( () => {
    window.addEventListener( "resize", onResize );
    onResize();

    const globe = createGlobe( canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
    } );

    setTimeout( () => ( canvasRef.current!.style.opacity = "1" ) );
    return () => globe.destroy();
  }, [] );

  return (
    <div
      className={cn(
        "inset-0 mx-auto aspect-[1/1]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
      />
    </div>
  );
}
