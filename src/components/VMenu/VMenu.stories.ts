import type { Meta, StoryObj } from '@storybook/vue3'
import VMenu from './VMenu.vue'
import VMenuItems from './VMenuItems.vue'
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
    components: { VMenu, VMenuItems, VMenuItem },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItems>
          <VMenuItem>Item 1</VMenuItem>
          <VMenuItem>Item 2</VMenuItem>
          <VMenuItem>Item 3</VMenuItem>
        </VMenuItems>
      </VMenu>
    `
  })
} satisfies Story

export const WithActive = {
  render: args => ({
    components: { VMenu, VMenuItems, VMenuItem },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItems>
          <VMenuItem active>Item 1</VMenuItem>
          <VMenuItem>Item 2</VMenuItem>
          <VMenuItem>Item 3</VMenuItem>
        </VMenuItems>
      </VMenu>
    `
  })
} satisfies Story

export const WithPrepend = {
  render: args => ({
    components: { VMenu, VMenuItems, VMenuItem, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItems>
          <VMenuItem v-for="n in 3" :key="n">
            <template #prepend>
              <VIcon name="Mail" />
            </template>
            Item
          </VMenuItem>
        </VMenuItems>
      </VMenu>
    `
  })
} satisfies Story

export const WithAppend = {
  render: args => ({
    components: { VMenu, VMenuItems, VMenuItem, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItems>
          <VMenuItem v-for="n in 3" :key="n">
            Item
            <template #append>
              <VIcon name="Mail" />
            </template>
          </VMenuItem>
        </VMenuItems>
      </VMenu>
    `
  })
} satisfies Story

export const WithPrependAndAppend = {
  render: args => ({
    components: { VMenu, VMenuItems, VMenuItem, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItems>
          <VMenuItem v-for="n in 3" :key="n">
            <template #prepend>
              <VIcon name="Mail" />
            </template>
            Item
            <template #append>
              <VIcon name="Mail" />
            </template>
          </VMenuItem>
        </VMenuItems>
      </VMenu>
    `
  })
} satisfies Story

export const WithLabel = {
  render: args => ({
    components: { VMenu, VMenuItems, VMenuItem, VMenuLabel, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuLabel>Label</VMenuLabel>
        <VMenuItems>
          <VMenuItem active>
            Item
          </VMenuItem>
          <VMenuItem v-for="n in 3" :key="n">
            Item
          </VMenuItem>
        </VMenuItems>
      </VMenu>
    `
  })
} satisfies Story
