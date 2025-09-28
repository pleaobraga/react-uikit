import { FaPlus, FaDownload } from 'react-icons/fa6'
import { fn } from 'storybook/test'

import { IconButton } from '.'

import type { IconButtonSize, IconButtonVariant } from './icon-button.type'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Example/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['children'] } // optional extra safeguard
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
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
      ] as IconButtonVariant[]
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'medium', 'lg', 'xl'] as IconButtonSize[]
    },
    disabled: { control: 'boolean', defaultValue: false },
    children: { control: false },
    icon: {
      control: {
        type: 'select',
        labels: { plus: 'FaPlus', download: 'FaDownload' }
      },
      options: ['plus', 'download'],
      mapping: {
        plus: <FaPlus />,
        download: <FaDownload />
      }
    }
  }
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const ExtraSmall: Story = {
  args: {
    variant: 'default',
    size: 'xs',
    icon: 'plus'
  }
}

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    icon: 'plus'
  }
}

export const Base: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    icon: 'plus'
  }
}

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    icon: 'plus'
  }
}

export const ExtraLarge: Story = {
  args: {
    variant: 'default',
    size: 'xl',
    icon: 'plus'
  }
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    icon: 'plus',
    disabled: true
  }
}
