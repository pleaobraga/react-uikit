import type { iconVariants } from './icon.styles'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'

export type IconSize = VariantProps<typeof iconVariants>['size']

export type IconType = React.ComponentProps<'span'> & {
  size?: IconSize
}
