import type { Meta, StoryObj } from '@storybook/vue3'
import VField from './VField.vue'
import VFieldHelp from './VFieldHelp.vue'
import VFieldError from './VFieldError.vue'
import VFieldAddon from './VFieldAddon.vue'
import VFieldLabel from './VFieldLabel.vue'
import VInput from '../VInput/VInput.vue'
import VIcon from '../VIcon/VIcon.vue'

const meta = {
  title: 'Form/VField',
  component: VField
} satisfies Meta<typeof VField>

export default meta

type Story = StoryObj<typeof VField>

export const Default = {
  render: args => ({
    components: { VField, VInput, VIcon, VFieldAddon, VFieldLabel, VFieldHelp, VFieldError },
    setup() {
      return { args }
    },
    template: `
      <VField v-bind="args">
        <template #label>
          <VFieldLabel>Label</VFieldLabel>
        </template>
 
        <VFieldAddon name="Mail">
          <VIcon name="Mail" />
        </VFieldAddon>
  
        <VInput placeholder="Placeholder" />

        <VFieldAddon name="Mail">
          <VIcon name="Mail" />
        </VFieldAddon>

        <template #message>
          <VFieldHelp>Help message</VFieldHelp>
          <VFieldError>Error message</VFieldError>
        </template>
      </VField>
    `
  })
} satisfies Story

export const WithInvalidInput = {
  render: args => ({
    components: { VField, VInput, VIcon, VFieldAddon, VFieldLabel, VFieldHelp, VFieldError },
    setup() {
      return { args }
    },
    template: `
      <VField v-bind="args">
        <template #label>
          <VFieldLabel>Label</VFieldLabel>
        </template>

        <VFieldAddon name="Mail">
          <VIcon name="Mail" />
        </VFieldAddon>

        <VInput placeholder="Placeholder" invalid />

        <VFieldAddon name="Mail">
          <VIcon name="Mail" />
        </VFieldAddon>

        <template #message>
          <VFieldHelp>Help message</VFieldHelp>
          <VFieldError>Error message</VFieldError>
        </template>
      </VField>
    `
  })
} satisfies Story

export const WithDisabledInput = {
  render: args => ({
    components: { VField, VInput, VIcon, VFieldAddon, VFieldLabel, VFieldHelp, VFieldError },
    setup() {
      return { args }
    },
    template: `
      <VField v-bind="args">
        <template #label>
          <VFieldLabel>Label</VFieldLabel>
        </template>

        <VFieldAddon name="Mail">
          <VIcon name="Mail" />
        </VFieldAddon>

        <VInput placeholder="Placeholder" disabled />

        <VFieldAddon name="Mail">
          <VIcon name="Mail" />
        </VFieldAddon>

        <template #message>
          <VFieldHelp>Help message</VFieldHelp>
          <VFieldError>Error message</VFieldError>
        </template>
      </VField>
    `
  })
} satisfies Story
