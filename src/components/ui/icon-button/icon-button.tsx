import { Slot } from '@radix-ui/react-slot'

import { iconButtonVariants } from './icon-button.styles'
import { Icon } from '../icon'

import type { IconButtonType } from './icon-button.type'

import { cn } from '@/lib/utils'

function IconButton({
  className,
  variant,
  size,
  asChild = false,
  icon,
  ...props
}: IconButtonType) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...props}
    >
      <Icon size={size}>{icon}</Icon>
    </Comp>
  )
}

export { IconButton }
