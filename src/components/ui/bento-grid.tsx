import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ( {
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
} ) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-9 auto-rows-min gap-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ( {
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description?: string;
  href: string;
  cta: string;
} ) => (
  <div
    key={name}
    className={cn(
      "group relative h-[20rem] flex flex-col justify-between overflow-hidden rounded-xl bg-background",
      // light styles
      "shadow-md",
      // dark styles
      "transform-gpu dark:border dark:shadow-sm dark:shadow-muted",
      className,
    )}
  >
    <div>{background}</div>
    <div className="bottom-3 z-10 absolute flex flex-col gap-1 bg-gradient-to-t from-10% from-background via-60% via-background to-transparent -mb-14 p-6 w-full h-56 transform-gpu transition-all group-hover:-translate-y-10 duration-300 pointer-events-none">
      <Icon className="group-hover:scale-75 w-12 h-12 text-tertiary transform-gpu origin-left transition-all duration-300 ease-in-out" aria-hidden="true" />
      <h1 className="font-semibold text-highlight text-xl">
        {name}
      </h1>
      <p className="max-w-lg text-xs text-foreground">{description}</p>
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-16 transform-gpu flex-row items-center py-4 opacity-0 transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-100",
        )}
      >
        <Button variant="highlight" asChild size="sm" className="pointer-events-auto m-0">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>

    <div className="group-hover:bg-gray/[.03] group-hover:dark:bg-neutral-800/10 absolute inset-0 transform-gpu transition-all duration-300 pointer-events-none" />
  </div>
);

export { BentoCard, BentoGrid };
