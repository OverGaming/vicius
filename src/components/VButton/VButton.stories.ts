import type { Meta, StoryObj } from '@storybook/vue3'
import VButton from './VButton.vue'
import VIconStories from '../VIcon/VIcon.stories'

const meta = {
  title: 'Button/VButton',
  component: VButton,
  argTypes: {
    startIcon: VIconStories.argTypes.name,
    endIcon: VIconStories.argTypes.name,
    variant: {
      control: 'select',
      options: ['ghost']
    },
    color: {
      control: 'select',
      options: ['primary', 'error', 'success', 'warning', 'info']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'bs']
    }
  }
} satisfies Meta<typeof VButton>

export default meta

type Story = StoryObj<typeof VButton>

export const Default = {
  render: args => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: `
      <VButton v-bind="args">Button text</VButton>
    `
  })
} satisfies Story

export const Sizes = {
  render: args => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; align-items: start; gap: 1rem;">
        <VButton v-bind="args">Button bs</VButton>
        <VButton v-bind="args" size="sm">Button sm</VButton>
        <VButton v-bind="args" size="xs">Button xs</VButton>
      </div>
    `
  }),
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story

export const Colors = {
  render: args => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; align-items: start; gap: 1rem;">
        <VButton v-bind="args" color="default">Default</VButton>
        <VButton v-bind="args" color="primary">Primary</VButton>
        <VButton v-bind="args" color="error">Error</VButton>
        <VButton v-bind="args" color="warning">Warning</VButton>
        <VButton v-bind="args" color="info">Info</VButton>
        <VButton v-bind="args" color="success">Success</VButton>
      </div>
    `
  }),
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story

export const Variants = {
  render: args => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; align-items: start; gap: 1rem;">
        <VButton v-bind="args">Default</VButton>
        <VButton v-bind="args" color="primary">Primary</VButton>
        <VButton v-bind="args" color="error">Error</VButton>
        <VButton v-bind="args" color="warning">Warning</VButton>
        <VButton v-bind="args" color="info">Info</VButton>
        <VButton v-bind="args" color="success">Success</VButton>
      </div>
      <br>
      <div style="display: flex; flex-wrap: wrap; align-items: start; gap: 1rem;">
        <VButton v-bind="args" variant="ghost">Default</VButton>
        <VButton v-bind="args" variant="ghost" color="primary">Primary</VButton>
        <VButton v-bind="args" variant="ghost" color="error">Error</VButton>
        <VButton v-bind="args" variant="ghost" color="warning">Warning</VButton>
        <VButton v-bind="args" variant="ghost" color="info">Info</VButton>
        <VButton v-bind="args" variant="ghost" color="success">Success</VButton>
      </div>
    `
  }),
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story

export const WithIcon = {
  render: args => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; align-items: start; gap: 1rem;">
        <div><VButton v-bind="args" :end-icon="undefined">Button text</VButton></div>
        <div><VButton v-bind="args" :start-icon="undefined">Button text</VButton></div>
        <div><VButton v-bind="args">Button text</VButton></div>
        <div><VButton v-bind="args" :end-icon="undefined"/></div>
      </div>
    `
  }),
  args: {
    startIcon: 'Mail',
    endIcon: 'Mail'
  }
} satisfies Story

export const Loading = {
  render: args => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; align-items: start; gap: 1rem;">
        <VButton v-bind="args">Button text</VButton>
        <div><VButton v-bind="args" :end-icon="undefined">Button text</VButton></div>
        <div><VButton v-bind="args" :start-icon="undefined">Button text</VButton></div>
        <div><VButton v-bind="args">Button text</VButton></div>
        <div><VButton v-bind="args" :end-icon="undefined"/></div>
      </div>
    `
  }),
  args: {
    loading: true,
    startIcon: 'Mail',
    endIcon: 'Mail'
  }
} satisfies Story

export const Disabled = {
  render: args => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; align-items: start; gap: 1rem;">
        <VButton v-bind="args">Button text</VButton>
        <div><VButton v-bind="args" :end-icon="undefined">Button text</VButton></div>
        <div><VButton v-bind="args" :start-icon="undefined">Button text</VButton></div>
        <div><VButton v-bind="args">Button text</VButton></div>
        <div><VButton v-bind="args" :end-icon="undefined"/></div>
      </div>
    `
  }),
  args: {
    startIcon: 'Mail',
    endIcon: 'Mail',
    disabled: true
  }
} satisfies Story
