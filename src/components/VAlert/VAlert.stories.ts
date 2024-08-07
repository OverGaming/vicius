import type { Meta, StoryObj } from '@storybook/vue3'
import VAlert from './VAlert.vue'
import VAlertLabel from './VAlertLabel.vue'
import VAlertMessage from './VAlertMessage.vue'

const meta = {
  title: 'Feedback/VAlert',
  component: VAlert,
  argTypes: {
    type: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success']
    }
  }
} satisfies Meta<typeof VAlert>

export default meta

type Story = StoryObj<typeof VAlert>

export const Default = {
  render: args => ({
    components: { VAlert, VAlertLabel, VAlertMessage },
    setup() {
      return { args }
    },
    template: `
      <VAlert v-bind="args">
        <VAlertLabel>Alert message</VAlertLabel>
        <VAlertMessage>Description message</VAlertMessage>
      </VAlert>
    `
  })
} satisfies Story

export const Types = {
  render: args => ({
    components: { VAlert, VAlertLabel, VAlertMessage },
    setup() {
      return { args }
    },
    template: `
      <VAlert v-bind="args" type="error">
        <VAlertLabel>Alert message</VAlertLabel>
        <VAlertMessage>Description message</VAlertMessage>
      </VAlert>
      <br/>
      <VAlert v-bind="args" type="warning">
        <VAlertLabel>Alert message</VAlertLabel>
        <VAlertMessage>Description message</VAlertMessage>
      </VAlert>
      <br/>
      <VAlert v-bind="args" type="info">
        <VAlertLabel>Alert message</VAlertLabel>
        <VAlertMessage>Description message</VAlertMessage>
      </VAlert>
      <br/>
      <VAlert v-bind="args" type="success">
        <VAlertLabel>Alert message</VAlertLabel>
        <VAlertMessage>Description message</VAlertMessage>
      </VAlert>
    `
  }),
  argTypes: {
    type: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story
