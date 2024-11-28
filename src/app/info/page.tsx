import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import { features } from "@/data/data";

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Information</h1>
      <BlurFade delay={0.55} inView>
        <BentoGrid>
          {features.map( ( feature, idx ) => (
            <BentoCard key={idx} {...feature} />
          ) )}
        </BentoGrid>
      </BlurFade>

    </div >

  );
}
