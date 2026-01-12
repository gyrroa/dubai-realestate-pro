import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        nav: "w-32 text-3xl font-light hover:text-accent hover:font-bold hover:underline",
        cta1: "text-3xl font-light bg-highlight border-foreground border-2 hover:-translate-y-0.5 active:translate-0 shadow-[0_4px_4px_rgba(0,0,0,0.25)] active:shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_8px_rgba(0,0,0,0.25)]",
        cta2: "text-3xl font-light bg-accent border-glow border-2 hover:-translate-y-0.5 active:translate-0 text-glow shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
        footer: "bg-glow text-accent shadow-[0_0_5px_rgba(0,0,0,0.50)] hover:-translate-y-0.5 active:translate-0",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        cta1: "py-2.5 px-4.5 rounded-3xl",
        cta2: "py-2.5 px-4.5 rounded-3xl w-fit",
        footer: "py-[4.5px] px-[5.5px] rounded-[10px] hover:-translate-y-0.5 active:translate-0",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
