import { FaPlus } from 'react-icons/fa6'

import { Icon } from './'

import type { IconSize } from './icon.type'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { children: <FaPlus /> },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'medium', 'lg', 'xl'] as IconSize[]
    },
    children: { control: false }
  }
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const ExtraSmall: Story = {
  args: {
    size: 'xs'
  }
}

export const Small: Story = {
  args: {
    size: 'sm'
  }
}

export const Base: Story = {
  args: {
    size: 'medium'
  }
}

export const Large: Story = {
  args: {
    size: 'lg'
  }
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl'
  }
}
