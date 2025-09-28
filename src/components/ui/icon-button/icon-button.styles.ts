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
      filled: 'bg-primary text-white hover:bg-primary/90',
      light: 'text-primary bg-primary/10 hover:bg-primary/20',
      outline:
        'bg-white border-2 border-primary text-primary hover:bg-white/20',
      subtle: 'bg-transparent text-primary hover:bg-primary/10',
      default: 'border-2 border-gray-4 bg-white text-black hover:bg-gray-1'
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
