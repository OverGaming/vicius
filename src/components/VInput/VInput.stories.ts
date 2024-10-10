import type { Meta, StoryObj } from '@storybook/vue3'
import VInput from './VInput.vue'
import VInputGroup from './VInputGroup.vue'
import VInputStartAddon from './VInputStartAddon.vue'
import VInputEndAddon from './VInputEndAddon.vue'
import VInputStartElement from './VInputStartElement.vue'
import VInputEndElement from './VInputEndElement.vue'
import VIcon from '../VIcon/VIcon.vue'

const meta = {
  title: 'Form/VInput',
  component: VInput,
  argTypes: {
    id: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    type: {
      control: 'text'
    },
    required: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    invalid: {
      control: 'boolean'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm']
    }
  },
  args: {
    placeholder: 'Placeholder'
  }
} satisfies Meta<typeof VInput>

export default meta

type Story = StoryObj<typeof VInput>

export const Default = {
  render: args => ({
    components: { VInput },
    setup() {
      return { args }
    },
    template: '<VInput v-bind="args" />'
  })
} satisfies Story

export const Addons = {
  render: args => ({
    components: { VInput, VInputGroup, VInputStartAddon, VInputEndAddon },
    setup() {
      return { args }
    },
    template: `
      <VInputGroup>
        <VInputStartAddon>http://</VInputStartAddon>
        <VInput v-bind="args" />
        <VInputEndAddon>.com</VInputEndAddon>
      </VInputGroup>
    `
  })
} satisfies Story

export const Elements = {
  render: args => ({
    components: { VInput, VInputGroup, VInputStartElement, VInputEndElement, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VInputGroup>
        <VInputStartElement>
          <VIcon name="Mail" size="bs" />
        </VInputStartElement>
        <VInput v-bind="args" />
        <VInputEndElement>
          <VIcon name="Mail" size="bs" />
        </VInputEndElement>
      </VInputGroup>
    `
  })
} satisfies Story

export const Sizes = {
  render: args => ({
    components: {
      VInput,
      VInputGroup,
      VInputStartAddon,
      VInputEndAddon,
      VInputStartElement,
      VInputEndElement,
      VIcon
    },
    setup() {
      return { args }
    },
    template: `
      <div style="display:grid; gap: 1rem">
        <VInput v-bind="args" />
        <VInput v-bind="args" size="sm" />
        <VInput v-bind="args" size="xs" />
        <VInputGroup>
          <VInputStartAddon>http://</VInputStartAddon>
          <VInput v-bind="args" />
          <VInputEndAddon>.com</VInputEndAddon>
        </VInputGroup>
        <VInputGroup>
          <VInputStartAddon>http://</VInputStartAddon>
          <VInput v-bind="args" size="sm" />
          <VInputEndAddon>.com</VInputEndAddon>
        </VInputGroup>
        <VInputGroup>
          <VInputStartAddon>http://</VInputStartAddon>
          <VInput v-bind="args" size="xs" />
          <VInputEndAddon>.com</VInputEndAddon>
        </VInputGroup>
        <VInputGroup>
          <VInputStartElement>
            <VIcon name="Mail" />
          </VInputStartElement>
          <VInput v-bind="args" />
          <VInputEndElement>
            <VIcon name="Mail" />
          </VInputEndElement>
        </VInputGroup>
        <VInputGroup>
          <VInputStartElement>
            <VIcon name="Mail" />
          </VInputStartElement>
          <VInput v-bind="args" size="sm" />
          <VInputEndElement>
            <VIcon name="Mail" />
          </VInputEndElement>
        </VInputGroup>
        <VInputGroup>
          <VInputStartElement>
            <VIcon name="Mail" />
          </VInputStartElement>
          <VInput v-bind="args" size="xs" />
          <VInputEndElement>
            <VIcon name="Mail" />
          </VInputEndElement>
        </VInputGroup>
      </div>
    `
  })
} satisfies Story
