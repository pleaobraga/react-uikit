import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

export const buttonVariants = tv({
  base: cn(
    'inline-flex items-center justify-center',
    'whitespace-nowrap rounded-sm transition-all',
    'disabled:pointer-events-none disabled:bg-gray-2 disabled:text-gray-5',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    'outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
    'cursor-pointer'
  ),
  variants: {
    variant: {
      filled: 'bg-primary text-white hover:bg-primary/90',
      light: 'text-primary bg-primary/10 hover:bg-primary/20',
      outline: 'bg-white border border-primary text-primary hover:bg-white/20',
      subtle: 'bg-transparent text-primary hover:bg-primary/10',
      default: 'border border-gray-4 bg-white text-black hover:bg-gray-1'
    },
    size: {
      xs: 'text-xs gap-2',
      sm: 'text-sm gap-3',
      medium: 'text-base gap-3',
      lg: 'text-lg gap-4',
      xl: 'text-xl gap-4'
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
      class: 'h-5 px-2'
    },
    {
      size: 'xs',
      compact: false,
      class: 'h-7 px-3'
    },
    {
      size: 'sm',
      compact: true,
      class: 'h-7 px-2'
    },
    {
      size: 'sm',
      compact: false,
      class: 'h-9 px-4'
    },
    {
      size: 'medium',
      compact: true,
      class: 'h-7 px-2'
    },
    {
      size: 'medium',
      compact: false,
      class: 'h-10 px-5'
    },
    {
      size: 'lg',
      compact: true,
      class: 'h-8 px-3'
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
