"use client";

import MainCard from "@/components/MainCard";
import BlurFade from "@/components/ui/blur-fade";
import { features } from "@/data/data";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome</h1>
      <BlurFade delay={0.55} inView>
        <div className="flex flex-wrap gap-10 max-w-7xl">
          {features.map( ( feature, idx ) => (
            <MainCard key={idx} {...feature} />
          ) )}
        </div>
      </BlurFade>
    </div>
  );
}
