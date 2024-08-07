import type { Meta, StoryObj } from '@storybook/vue3'
import VCheckbox from './VCheckbox.vue'

const meta = {
  title: 'Form/VCheckbox',
  component: VCheckbox
} satisfies Meta<typeof VCheckbox>

export default meta

type Story = StoryObj<typeof VCheckbox>

export const Default = {
  render: args => ({
    components: { VCheckbox },
    setup() {
      return { args }
    },
    template: '<VCheckbox v-bind="args" />'
  })
} satisfies Story

export const WithLabel = {
  render: args => ({
    components: { VCheckbox },
    setup() {
      return { args }
    },
    template: `
      <VCheckbox v-bind="args">
        Label content
      </VCheckbox>
    `
  })
} satisfies Story
