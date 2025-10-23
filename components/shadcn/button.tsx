import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 transition-all disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white hover:bg-primary-600/90",
        secondary: "bg-orange-500 text-white hover:bg-orange-500/90",
        outline:
          "border border-white text-white hover:bg-white hover:text-primary-900",
        ghost: "bg-transparent hover:bg-neutral-200",
        link: "text-neutral-800",
      },
      size: {
        default: "h-10 px-6 py-2",
        lg: "h-12 px-10 py-2 text-lg",
        sm: "h-9 px-4 py-1 text-sm sm:h-12 sm:px-10 sm:text-base",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
