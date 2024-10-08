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
          <VMenuItem v-for="n in 3" :key="n">
            Item {{n}}
          </VMenuItem>
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
          <VMenuItem v-for="n in 3" :key="n" :active="n === 1">
            Item {{n}}
          </VMenuItem>
        </VMenuItems>
      </VMenu>
    `
  })
} satisfies Story

export const WithIcons = {
  render: args => ({
    components: { VMenu, VMenuItems, VMenuItem, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItems>
          <VMenuItem>
            <VIcon name="Mail" />
            <span>Item</span>
          </VMenuItem>
          <VMenuItem>
            <span>Item</span>
            <VIcon name="Mail" />
          </VMenuItem>
          <VMenuItem>
            <VIcon name="Mail" />
            <span>Item</span>
            <VIcon name="Mail" />
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
          <VMenuItem v-for="n in 3" :key="n" :active="n === 1">
            Item {{n}}
          </VMenuItem>
        </VMenuItems>
      </VMenu>
    `
  })
} satisfies Story
