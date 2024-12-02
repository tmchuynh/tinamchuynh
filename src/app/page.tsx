import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import { features } from "@/data/data";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Welcome</h1>
      <BlurFade delay={0.55} inView>
        <BentoGrid className="w-11/12 mx-auto" >
          {features.map( ( feature, idx ) => (
            <BentoCard key={idx} {...feature} />
          ) )}
        </BentoGrid>
      </BlurFade>
    </>
  );
}