import { tv } from 'tailwind-variants'

export const iconVariants = tv({
  variants: {
    size: {
      xs: 'size-3',
      sm: 'size-4',
      medium: 'size-5',
      lg: 'size-6',
      xl: 'size-8'
    }
  },

  defaultVariants: {
    size: 'medium'
  }
})
