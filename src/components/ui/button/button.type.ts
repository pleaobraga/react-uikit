import type { buttonVariants } from './button.styles'
import type { VariantProps } from 'tailwind-variants'

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant']
export type ButtonSize = VariantProps<typeof buttonVariants>['size']
export type ButtonCompact = VariantProps<typeof buttonVariants>['compact']

export type ButtonType = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
  }
