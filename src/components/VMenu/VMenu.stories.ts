import type { Meta, StoryObj } from '@storybook/vue3'
import VMenu from './VMenu.vue'
import VMenuItem from './VMenuItem.vue'
import VMenuLabel from './VMenuLabel.vue'
import VIcon from '../VIcon/VIcon.vue'

const meta = {
  title: 'Menu/VMenu',
  component: VMenu
} satisfies Meta<typeof VMenu>

export default meta

type Story = StoryObj<typeof VMenu>

export const Default = {
  render: args => ({
    components: { VMenu, VMenuItem },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItem>Item 1</VMenuItem>
        <VMenuItem>Item 2</VMenuItem>
        <VMenuItem>Item 3</VMenuItem>
      </VMenu>
    `
  })
} satisfies Story

export const WithActive = {
  render: args => ({
    components: { VMenu, VMenuItem },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItem active>Item 1</VMenuItem>
        <VMenuItem>Item 2</VMenuItem>
        <VMenuItem>Item 3</VMenuItem>
      </VMenu>
    `
  })
} satisfies Story

export const WithPrepend = {
  render: args => ({
    components: { VMenu, VMenuItem, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItem v-for="n in 3" :key="n">
          <template #prepend>
            <VIcon name="Mail" />
          </template>
          Item
        </VMenuItem>
      </VMenu>
    `
  })
} satisfies Story

export const WithAppend = {
  render: args => ({
    components: { VMenu, VMenuItem, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItem v-for="n in 3" :key="n">
          Item
          <template #append>
            <VIcon name="Mail" />
          </template>
        </VMenuItem>
      </VMenu>
    `
  })
} satisfies Story

export const WithPrependAndAppend = {
  render: args => ({
    components: { VMenu, VMenuItem, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItem v-for="n in 3" :key="n">
          <template #prepend>
            <VIcon name="Mail" />
          </template>
          Item
          <template #append>
            <VIcon name="Mail" />
          </template>
        </VMenuItem>
      </VMenu>
    `
  })
} satisfies Story

export const WithLabel = {
  render: args => ({
    components: { VMenu, VMenuItem, VMenuLabel, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <template #label>
          <VMenuLabel>Label</VMenuLabel>
        </template>
        <VMenuItem active>
          Item
        </VMenuItem>
        <VMenuItem v-for="n in 3" :key="n">
          Item
        </VMenuItem>
      </VMenu>
    `
  })
} satisfies Story
