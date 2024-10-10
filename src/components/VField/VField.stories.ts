import type { Meta, StoryObj } from '@storybook/vue3'
import VField from './VField.vue'
import VFieldHelp from './VFieldHelp.vue'
import VFieldError from './VFieldError.vue'
import VFieldLabel from './VFieldLabel.vue'
import VInput from '../VInput/VInput.vue'

const meta = {
  title: 'Form/VField',
  component: VField
} satisfies Meta<typeof VField>

export default meta

type Story = StoryObj<typeof VField>

export const Default = {
  render: args => ({
    components: {
      VField,
      VInput,
      VFieldLabel,
      VFieldHelp,
      VFieldError
    },
    setup() {
      return { args }
    },
    template: `
      <VField v-bind="args">
        <VFieldLabel>Label</VFieldLabel>
        <VInput placeholder="Placeholder" />
        <VFieldHelp>Help message</VFieldHelp>
      </VField>
    `
  })
} satisfies Story

export const WithInvalidInput = {
  render: args => ({
    components: { VField, VInput, VFieldLabel, VFieldHelp, VFieldError },
    setup() {
      return { args }
    },
    template: `
      <VField v-bind="args">
        <VFieldLabel>Label</VFieldLabel>
        <VInput placeholder="Placeholder" invalid />
        <VFieldError>Error message</VFieldError>
      </VField>
    `
  })
} satisfies Story
