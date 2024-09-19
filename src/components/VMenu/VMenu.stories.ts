import type { Meta, StoryObj } from '@storybook/vue3'
import VMenu from './VMenu.vue'
import VMenuItems from './VMenuItems.vue'
import VMenuItem from './VMenuItem.vue'
import VMenuLabel from './VMenuLabel.vue'
import VMenuText from './VMenuText.vue'
import VIcon from '../VIcon/VIcon.vue'

const meta = {
  title: 'Menu/VMenu',
  component: VMenu
} satisfies Meta<typeof VMenu>

export default meta

type Story = StoryObj<typeof VMenu>

export const Default = {
  render: args => ({
    components: { VMenu, VMenuItems, VMenuItem, VMenuText },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItems>
          <VMenuItem v-for="n in 3" :key="n">
            <VMenuText>Item {{n}}</VMenuText>
          </VMenuItem>
        </VMenuItems>
      </VMenu>
    `
  })
} satisfies Story

export const WithActive = {
  render: args => ({
    components: { VMenu, VMenuItems, VMenuItem, VMenuText },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItems>
          <VMenuItem v-for="n in 3" :key="n" :active="n === 1">
            <VMenuText>Item {{n}}</VMenuText>
          </VMenuItem>
        </VMenuItems>
      </VMenu>
    `
  })
} satisfies Story

export const WithIcons = {
  render: args => ({
    components: { VMenu, VMenuItems, VMenuItem, VIcon, VMenuText },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuItems>
          <VMenuItem>
            <VIcon name="Mail" />
            <VMenuText>Item</VMenuText>
          </VMenuItem>
          <VMenuItem>
            <VMenuText>Item</VMenuText>
            <VIcon name="Mail" />
          </VMenuItem>
          <VMenuItem>
            <VIcon name="Mail" />
            <VMenuText>Item</VMenuText>
            <VIcon name="Mail" />
          </VMenuItem>
        </VMenuItems>
      </VMenu>
    `
  })
} satisfies Story

export const WithLabel = {
  render: args => ({
    components: { VMenu, VMenuItems, VMenuItem, VMenuLabel, VMenuText, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VMenu v-bind="args">
        <VMenuLabel>Label</VMenuLabel>
        <VMenuItems>
          <VMenuItem v-for="n in 3" :key="n" :active="n === 1">
            <VMenuText>Item {{n}}</VMenuText>
          </VMenuItem>
        </VMenuItems>
      </VMenu>
    `
  })
} satisfies Story
