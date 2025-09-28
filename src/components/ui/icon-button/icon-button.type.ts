import type { iconButtonVariants } from './icon-button.styles'
import type { VariantProps } from 'tailwind-variants'

export type IconButtonVariant = VariantProps<
  typeof iconButtonVariants
>['variant']
export type IconButtonSize = VariantProps<typeof iconButtonVariants>['size']

export type IconButtonType = React.ComponentProps<'button'> &
  VariantProps<typeof iconButtonVariants> & {
    asChild?: boolean
    icon: React.ReactNode
  }
