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
  args: { onClick: fn(), icon: 'plus', variant: 'default' },
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

export const Disabled: Story = {
  args: {
    size: 'lg',
    disabled: true
  }
}
