import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center select-none justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        nav: "w-32 text-desc-3xl font-light hover:text-accent hover:font-bold hover:underline",
        hero_dev: "bg-glow border border-accent hover:border-glow rounded-[26px] shadow-[0_0_4.7px_0_#231D20] hover:bg-accent transition-all duration-300 group",
        cta1: "text-title-2xl tracking-[-1.2px] font-light bg-highlight border-foreground border-2 hover:-translate-y-0.5 active:translate-0 shadow-[0_4px_4px_rgba(0,0,0,0.25)] active:shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_8px_rgba(0,0,0,0.25)]",
        cta2: "text-desc-3xl tracking-[-1.2px] [color:var(--glow)] font-light bg-accent border-glow border-2 hover:-translate-y-0.5 active:translate-0 shadow-[0_4px_4px_rgba(0,0,0,0.25)] active:shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_8px_rgba(0,0,0,0.25)]",
        footer_button: "hover:drop-shadow-[0_0_9.2px_var(--highlight)] hover:-translate-y-0.5 active:translate-0",
        footer_submenu: "tracking-[0.7px] leading-5.5 items-end text-start justify-start hover:underline hover:-skew-x-12 hover:drop-shadow-[0_0_9.2px_var(--highlight)] duration-300",
        about_pagination: "bg-glow rounded-[20px] shadow-[0_0_10px_rgba(0,0,0,0.25)] border-2 border-accent hover:-translate-y-0.5 active:translate-0 hover:shadow-[0_0px_15px_rgba(0,0,0,0.25)]",
        pin: "absolute top-4/11 left-7/15 -translate-x-1/2 -translate-y-1/2 hover:drop-shadow-[0_0_9.2px_var(--highlight)]"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        hero_dev: "p-2.75",
        cta1: "py-2.5 px-4.5 rounded-3xl",
        cta2: "py-2.5 px-4.5 rounded-3xl w-fit",
        footer: "w-6 h-6",
        language: "p-0",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        flat: "p-0",
        about_pagination: "p-3.75",
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
