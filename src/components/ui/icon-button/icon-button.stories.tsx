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
        'filled',
        'light',
        'outline',
        'subtle'
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
    className: 'text-blue-6 hover:bg-blue-2 bg-blue-1'
  }
}

export const SubtleButtonProps: Story = {
  args: {
    variant: 'subtle',
    size: 'xl',
    className: 'text-blue-6 hover:bg-blue-2'
  }
}

export const Disabled: Story = {
  args: {
    size: 'lg',
    disabled: true
  }
}
