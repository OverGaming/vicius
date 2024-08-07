import type { Meta, StoryObj } from '@storybook/vue3'
import VAvatar from './VAvatar.vue'

const meta = {
  title: 'Media/VAvatar',
  component: VAvatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'df', 'md', 'lg', 'xl']
    }
  }
} satisfies Meta<typeof VAvatar>

export default meta

type Story = StoryObj<typeof VAvatar>

const render: Story['render'] = args => ({
  components: { VAvatar },
  setup() {
    return { args }
  },
  template: '<VAvatar v-bind="args" />'
})

export const Default = {
  render
} satisfies Story

export const Sizes = {
  render: args => ({
    components: { VAvatar },
    setup() {
      return { args }
    },
    template: `
      <div style="display:grid; grid-auto-flow: column; gap: 1rem; justify-content: start;">
        <VAvatar v-bind="args" size="xl" />
        <VAvatar v-bind="args" size="lg" />
        <VAvatar v-bind="args" size="md" />
        <VAvatar v-bind="args" size="df" />
        <VAvatar v-bind="args" size="sm" />
        <VAvatar v-bind="args" size="xs" />
      </div>
      <br/>
      <div style="display:grid; grid-auto-flow: column; gap: 1rem; justify-content: start;">
        <VAvatar v-bind="args" label="x l" size="xl" />
        <VAvatar v-bind="args" label="l g" size="lg" />
        <VAvatar v-bind="args" label="m d" size="md" />
        <VAvatar v-bind="args" label="d f" size="df" />
        <VAvatar v-bind="args" label="s m" size="sm" />
        <VAvatar v-bind="args" label="x s" size="xs" />
      </div>
      <br/>
      <div style="display:grid; grid-auto-flow: column; gap: 1rem; justify-content: start;">
        <VAvatar v-bind="args" src="/images/avatar.webp" label="x l" size="xl" />
        <VAvatar v-bind="args" src="/images/avatar.webp" label="l g" size="lg" />
        <VAvatar v-bind="args" src="/images/avatar.webp" label="m d" size="md" />
        <VAvatar v-bind="args" src="/images/avatar.webp" label="d f" size="df" />
        <VAvatar v-bind="args" src="/images/avatar.webp" label="s m" size="sm" />
        <VAvatar v-bind="args" src="/images/avatar.webp" label="x s" size="xs" />
      </div>
    `
  }),
  argTypes: {
    label: {
      table: {
        disable: true
      }
    },
    src: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story

export const WithLabel = {
  render,
  args: {
    label: 'John Doe'
  }
} satisfies Story

export const WithImage = {
  render,
  args: {
    src: '/images/avatar.webp'
  }
} satisfies Story
