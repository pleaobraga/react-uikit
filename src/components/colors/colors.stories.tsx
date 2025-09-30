import { AllPalettes as Colors } from './colors'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Foundation/Colors',
  component: Colors,
  parameters: { docsOnly: true }
} satisfies Meta<typeof Colors>

export default meta
type Story = StoryObj<typeof meta>

export const AllPalettes: Story = {}
