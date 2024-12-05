import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex justify-center items-center gap-2 disabled:opacity-50 rounded-lg font-medium text-sm whitespace-nowrap transition-colors disabled:pointer-events-none [&_svg]:pointer-events-none shadow-md dark:shadow-border [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground",
        tertiary:
          "bg-tertiary text-tertiary-foreground hover:bg-accent hover:text-accent-foreground",
        highlight:
          "bg-highlight text-highlight-foreground hover:bg-tertiary hover:text-tertiary-foreground",
        accent:
          "bg-accent text-accent-foreground hover:text-highlight-foreground hover:bg-highlight",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-highlight hover:text-highlight-foreground",
        outline:
          "border border-accent border-2 text-primary border-primary font-bold hover:bg-secondary hover:text-secondary-foreground hover:border-secondary",
        ghost: "hover:bg-muted hover:text-foreground text-tertiary shadow-none",
        link: "text-highlight underline-offset-4 underline hover:no-underline shadow-none",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ( { className, variant, size, asChild = false, ...props }, ref ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn( buttonVariants( { variant, size, className } ) )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
