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
      options: ['default', 'text']
    },
    color: {
      control: 'select',
      options: ['default', 'primary']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'df']
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
      <div style="display: grid; grid-auto-flow: row; justify-items: start; gap: 1rem;">
        <VButton v-bind="args">Button df</VButton>
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
      <div style="display: grid; grid-auto-flow: row; justify-items: start; gap: 1rem;">
        <VButton v-bind="args" color="default">Button default</VButton>
        <VButton v-bind="args" color="primary">Button Primary</VButton>
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
      <div style="display: grid; grid-auto-flow: row; justify-items: start; gap: 1rem;">
        <VButton v-bind="args" variant="default">Button default</VButton>
        <VButton v-bind="args" variant="text">Button text</VButton>
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
      <div style="display: grid; grid-auto-flow: row; justify-items: start; gap: 1rem;">
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
      <div style="display: grid; grid-auto-flow: row; justify-items: start; gap: 1rem;">
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
      <div style="display: grid; grid-auto-flow: row; justify-items: start; gap: 1rem;">
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
