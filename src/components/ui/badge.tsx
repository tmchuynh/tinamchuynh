import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-secondary px-2.5 py-0.5 mx-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-secondary hover:text-secondary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground",
        tertiary:
          "border-transparent bg-tertiary text-tertiary-foreground hover:bg-highlight hover:text-highlight-foreground",
        highlight:
          "border-transparent bg-highlight text-highlight-foreground hover:bg-tertiary hover:text-tertiary-foreground",
        accent:
          "border-transparent bg-accent text-accent-foreground hover:bg-highlight hover:text-highlight-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow dark:shadow-border hover:bg-highlight hover:text-highlight-foreground",
        outline: "text-foreground bg-transparent",
      },
      size: {
        default: "h-5 px-4 py-2",
        sm: "h-4 px-3 text-xs",
        lg: "h-6 rounded-lg px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge( { className, size, variant, ...props }: BadgeProps ) {
  return (
    <div className={cn( badgeVariants( { variant, size } ), className )} {...props} />
  );
}

export { Badge, badgeVariants };
