
import { fn } from 'storybook/test'

import { Button } from './'

import type { ButtonSize, ButtonVariant } from './button.type'
import type { Meta, StoryObj } from '@storybook/react-vite'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn(), children: 'Button' },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link'
      ] as ButtonVariant[]
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'medium', 'lg', 'xl', 'icon'] as ButtonSize[]
    },
    compact: {
      control: { type: 'boolean' }
    },
    disabled: { control: 'boolean' }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const ExtraSmall: Story = {
  args: {
    variant: 'default',
    size: 'xs'
  }
}

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm'
  }
}

export const Base: Story = {
  args: {
    variant: 'default',
    size: 'medium'
  }
}

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg'
  }
}

export const ExtraLarge: Story = {
  args: {
    variant: 'default',
    size: 'xl'
  }
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    disabled: true
  }
}
