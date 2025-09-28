import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

export const iconButtonVariants = tv({
  base: cn(
    'inline-flex items-center justify-center',
    'rounded-xs',
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
      xs: 'p-1 ',
      sm: 'p-1',
      medium: 'p-1',
      lg: 'p-1',
      xl: 'p-1'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'medium'
  }
})
