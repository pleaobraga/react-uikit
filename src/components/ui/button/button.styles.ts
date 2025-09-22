import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

export const buttonVariants = tv({
  base: cn(
    'inline-flex items-center justify-center',
    'whitespace-nowrap rounded-sm',
    'transition-all disabled:pointer-events-none disabled:opacity-50',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    'outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
    'cursor-pointer'
  ),
  variants: {
    variant: {
      default:
        'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
      destructive:
        'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
      outline:
        'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
      secondary:
        'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
      ghost:
        'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
      link: 'text-primary underline-offset-4 hover:underline'
    },
    size: {
      xs: 'text-xs py-0.25',
      sm: 'text-sm',
      medium: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    },
    compact: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    {
      size: 'xs',
      compact: true,
      class: 'leading-5 px-2'
    },
    {
      size: 'xs',
      compact: false,
      class: 'leading-7 px-3'
    },
    {
      size: 'sm',
      compact: true,
      class: 'leading-6 py-0.25 px-2'
    },
    {
      size: 'sm',
      compact: false,
      class: 'h-9 px-4'
    },
    {
      size: 'medium',
      compact: true,
      class: 'leading-7 py-0.25 px-2'
    },
    {
      size: 'medium',
      compact: false,
      class: 'h-10 px-5'
    },
    {
      size: 'lg',
      compact: true,
      class: 'leading-8 py-0.25 px-3'
    },
    {
      size: 'lg',
      compact: false,
      class: 'h-12 px-7'
    },
    {
      size: 'xl',
      compact: true,
      class: 'h-10 px-3'
    },
    {
      size: 'xl',
      compact: false,
      class: 'h-15 px-8'
    }
  ],
  defaultVariants: {
    variant: 'default',
    size: 'medium',
    compact: false
  }
})
