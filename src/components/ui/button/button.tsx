import { Slot } from '@radix-ui/react-slot'

import { buttonVariants } from './button.styles'
import { Icon } from '../icon'

import type { ButtonType } from './button.type'

import { cn } from '@/lib/utils'

function Button({
  className,
  variant,
  size,
  compact,
  asChild = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonType) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, compact }), className)}
      {...props}
    >
      {leftIcon && <Icon size={size}>{leftIcon}</Icon>}
      {props.children}
      {rightIcon && <Icon size={size}>{rightIcon}</Icon>}
    </Comp>
  )
}

export { Button }
