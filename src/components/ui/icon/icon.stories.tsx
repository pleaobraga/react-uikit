import { FaPlus } from 'react-icons/fa6'

import { Icon } from './'

import type { IconSize } from './icon.type'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    controls: { exclude: ['children'] }
  },
  tags: ['autodocs'],
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
  },
  render: (args) => (
    <Icon {...args}>
      <FaPlus />
    </Icon>
  )
}

export const Small: Story = {
  args: {
    size: 'sm'
  },
  render: (args) => (
    <Icon {...args}>
      <FaPlus />
    </Icon>
  )
}

export const Base: Story = {
  args: {
    size: 'medium'
  },
  render: (args) => (
    <Icon {...args}>
      <FaPlus />
    </Icon>
  )
}

export const Large: Story = {
  args: {
    size: 'lg'
  },
  render: (args) => (
    <Icon {...args}>
      <FaPlus />
    </Icon>
  )
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl'
  },
  render: (args) => (
    <Icon {...args}>
      <FaPlus />
    </Icon>
  )
}
