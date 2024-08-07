import type { Meta, StoryObj } from '@storybook/vue3'
import VDivider from './VDivider.vue'

const meta = {
  title: 'Misc/VDivider',
  component: VDivider
} satisfies Meta<typeof VDivider>

export default meta

type Story = StoryObj<typeof VDivider>

export const Default = {
  render: args => ({
    components: { VDivider },
    setup() {
      return { args }
    },
    template: '<VDivider v-bind="args" />'
  })
} satisfies Story

export const WithSlotContent = {
  render: args => ({
    components: { VDivider },
    setup() {
      return { args }
    },
    template: '<VDivider v-bind="args">Divider</VDivider>'
  })
} satisfies Story

export const WithDot = {
  render: args => ({
    components: { VDivider },
    setup() {
      return { args }
    },
    template: '<VDivider v-bind="args" />'
  }),
  args: {
    dot: true
  }
} satisfies Story
