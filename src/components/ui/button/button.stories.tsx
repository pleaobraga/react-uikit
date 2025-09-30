import { FaPlus } from 'react-icons/fa6'
import { fn } from 'storybook/test'

import { Button } from './'

import type { ButtonSize, ButtonVariant } from './button.type'
import type { Meta, StoryObj } from '@storybook/react-vite'

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
        'filled',
        'light',
        'outline',
        'subtle'
      ] as ButtonVariant[]
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'medium', 'lg', 'xl'] as ButtonSize[]
    },
    compact: {
      control: { type: 'boolean', defaultValue: false }
    },
    className: { control: 'text' },
    disabled: { control: 'boolean', defaultValue: false },
    leftIcon: {
      control: { type: 'select', labels: { none: '— none —', plus: 'FaPlus' } },
      options: ['none', 'plus'],
      mapping: {
        none: undefined,
        plus: <FaPlus />
      }
    },
    rightIcon: {
      control: { type: 'select', labels: { none: '— none —', plus: 'FaPlus' } },
      options: ['none', 'plus'],
      mapping: {
        none: undefined,
        plus: <FaPlus />
      }
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

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

export const FilledButtonProps: Story = {
  args: {
    variant: 'filled',
    size: 'xl',
    className: 'bg-blue-6 hover:bg-blue-6/80'
  }
}

export const OutlineButtonProps: Story = {
  args: {
    variant: 'outline',
    size: 'xl',
    className: 'text-blue-6 hover:bg-blue-1 border-blue-6 '
  }
}

export const LightButtonProps: Story = {
  args: {
    variant: 'light',
    size: 'xl',
    className: 'text-blue-6 hover:bg-blue-1 bg-blue-0'
  }
}

export const SubtleButtonProps: Story = {
  args: {
    variant: 'subtle',
    size: 'xl',
    className: 'text-blue-6 hover:bg-blue-1'
  }
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    disabled: true
  }
}
