import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { features } from "@/data/data";

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Information</h1>
      <BentoGrid>
        {features.map( ( feature, idx ) => (
          <BentoCard key={idx} {...feature} />
        ) )}
      </BentoGrid>
    </div >

  );
}
