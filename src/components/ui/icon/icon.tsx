import { Slot } from '@radix-ui/react-slot'

import { iconVariants } from './icon.styles'

import type { IconType } from './icon.type'

function Icon({ size, ...props }: IconType) {
  return <Slot className={iconVariants({ size })} {...props} />
}

export { Icon }
