import type { VariantProps } from 'class-variance-authority'
import { buttonVariants } from './button.styles'

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant']
export type ButtonSize = VariantProps<typeof buttonVariants>['size']
export type ButtonCompact = VariantProps<typeof buttonVariants>['compact']
