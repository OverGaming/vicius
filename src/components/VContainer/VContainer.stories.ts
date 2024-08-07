import type { Meta, StoryObj } from '@storybook/vue3'
import VContainer from './VContainer.vue'

const meta = {
  title: 'Misc/VContainer',
  component: VContainer,
  argTypes: {
    size: {
      control: 'select',
      options: ['xt', 'tn', 'xs', 'sm', 'df', 'md', 'lg', 'xl', 'hg', 'hd']
    }
  }
} satisfies Meta<typeof VContainer>

export default meta

type Story = StoryObj<typeof VContainer>

export const Default = {
  render: args => ({
    components: { VContainer },
    setup() {
      return { args }
    },
    template:
      '<VContainer v-bind="args" style="height: 4rem; background: var(--v-color-surface-mod)" />'
  })
} satisfies Story

export const Sizes = {
  render: args => ({
    components: { VContainer },
    setup() {
      return { args }
    },
    template: `
      <div style="display: grid; gap: 1rem; text-align: center;">
        <VContainer v-bind="args" size="xt" style="height: 4rem; background: var(--v-color-surface-mod)">xt</VContainer>
        <VContainer v-bind="args" size="tn" style="height: 4rem; background: var(--v-color-surface-mod)">tn</VContainer>
        <VContainer v-bind="args" size="xs" style="height: 4rem; background: var(--v-color-surface-mod)">xs</VContainer>
        <VContainer v-bind="args" size="sm" style="height: 4rem; background: var(--v-color-surface-mod)">sm</VContainer>
        <VContainer v-bind="args" size="df" style="height: 4rem; background: var(--v-color-surface-mod)">df</VContainer>
        <VContainer v-bind="args" size="md" style="height: 4rem; background: var(--v-color-surface-mod)">md</VContainer>
        <VContainer v-bind="args" size="lg" style="height: 4rem; background: var(--v-color-surface-mod)">lg</VContainer>
        <VContainer v-bind="args" size="xl" style="height: 4rem; background: var(--v-color-surface-mod)">xl</VContainer>
        <VContainer v-bind="args" size="hg" style="height: 4rem; background: var(--v-color-surface-mod)">hg</VContainer>
        <VContainer v-bind="args" size="hd" style="height: 4rem; background: var(--v-color-surface-mod)">hd</VContainer>
      </div>
    `
  })
} satisfies Story
