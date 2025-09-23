import { type VariantProps } from 'tailwind-variants'

import type { buttonVariants } from './button.styles'

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant']
export type ButtonSize = VariantProps<typeof buttonVariants>['size']
export type ButtonCompact = VariantProps<typeof buttonVariants>['compact']

export type ButtonType = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }
