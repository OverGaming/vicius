import type { Meta, StoryObj } from '@storybook/vue3'
import VNavigation from './VNavigation.vue'
import VMenu from '../VMenu/VMenu.vue'
import VMenuItem from '../VMenu/VMenuItem.vue'
import VMenuLabel from '../VMenu/VMenuLabel.vue'

const meta = {
  title: 'Navigation/VNavigation',
  component: VNavigation
} satisfies Meta<typeof VNavigation>

export default meta

type Story = StoryObj<typeof VNavigation>

export const Default = {
  render: args => ({
    components: { VNavigation, VMenu, VMenuItem, VMenuLabel },
    setup() {
      return { args }
    },
    template: `
      <VNavigation v-bind="args">
        <VMenu v-for="n in 2" :key="n">
          <template #label>
            <VMenuLabel>Label</VMenuLabel>
          </template>
          <VMenuItem active>Item</VMenuItem>
          <VMenuItem>Item</VMenuItem>
          <VMenuItem>Item</VMenuItem>
          <VMenuItem>Item</VMenuItem>
        </VMenu>
      </VNavigation>
    `
  })
} satisfies Story

export const WithHeader = {
  render: args => ({
    components: { VNavigation, VMenu, VMenuItem, VMenuLabel },
    setup() {
      return { args }
    },
    template: `
      <VNavigation v-bind="args">
        <template #header>
          <div>Header</div>
        </template> 
        <VMenu v-for="n in 2" :key="n">
          <template #label>
            <VMenuLabel>Label</VMenuLabel>
          </template>
          <VMenuItem active>Item</VMenuItem>
          <VMenuItem>Item</VMenuItem>
          <VMenuItem>Item</VMenuItem>
          <VMenuItem>Item</VMenuItem>
        </VMenu>
      </VNavigation>
    `
  })
} satisfies Story

export const WithFooter = {
  render: args => ({
    components: { VNavigation, VMenu, VMenuItem, VMenuLabel },
    setup() {
      return { args }
    },
    template: `
      <VNavigation v-bind="args">
        <VMenu v-for="n in 2" :key="n">
          <template #label>
            <VMenuLabel>Label</VMenuLabel>
          </template>
          <VMenuItem active>Item</VMenuItem>
          <VMenuItem>Item</VMenuItem>
          <VMenuItem>Item</VMenuItem>
          <VMenuItem>Item</VMenuItem>
        </VMenu>
        <template #footer>
          <div>Footer</div>
        </template> 
      </VNavigation>
    `
  })
} satisfies Story

export const WithHeaderAndFooter = {
  render: args => ({
    components: { VNavigation, VMenu, VMenuItem, VMenuLabel },
    setup() {
      return { args }
    },
    template: `
      <VNavigation v-bind="args">
        <template #header>
          <div>Header</div>
        </template> 
        <VMenu v-for="n in 2" :key="n">
          <template #label>
            <VMenuLabel>Label</VMenuLabel>
          </template>
          <VMenuItem active>Item</VMenuItem>
          <VMenuItem>Item</VMenuItem>
          <VMenuItem>Item</VMenuItem>
          <VMenuItem>Item</VMenuItem>
        </VMenu>
        <template #footer>
          <div>Footer</div>
        </template> 
      </VNavigation>
    `
  })
} satisfies Story
