import type { Meta, StoryObj } from '@storybook/vue3'
import VNavigation from './VNavigation.vue'
import VNavigationContent from './VNavigationContent.vue'
import VNavigationHeader from './VNavigationHeader.vue'
import VNavigationFooter from './VNavigationFooter.vue'
import VMenu from '../VMenu/VMenu.vue'
import VMenuItems from '../VMenu/VMenuItems.vue'
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
    components: { VNavigation, VNavigationContent, VMenu, VMenuItems, VMenuItem, VMenuLabel },
    setup() {
      return { args }
    },
    template: `
      <VNavigation v-bind="args">
        <VNavigationContent>
          <VMenu>
            <VMenuLabel>Label</VMenuLabel>
            <VMenuItems>
              <VMenuItem active>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
            </VMenuItems>
          </VMenu>
        </VNavigationContent>
      </VNavigation>
    `
  })
} satisfies Story

export const WithHeader = {
  render: args => ({
    components: {
      VNavigation,
      VNavigationContent,
      VNavigationHeader,
      VMenu,
      VMenuItems,
      VMenuItem,
      VMenuLabel
    },
    setup() {
      return { args }
    },
    template: `
      <VNavigation v-bind="args">
        <VNavigationHeader>
          <div>Header</div>
        </VNavigationHeader> 
        <VNavigationContent>
          <VMenu>
            <VMenuLabel>Label</VMenuLabel>
            <VMenuItems>
              <VMenuItem active>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
            </VMenuItems>
          </VMenu>
        </VNavigationContent>
      </VNavigation>
    `
  })
} satisfies Story

export const WithFooter = {
  render: args => ({
    components: {
      VNavigation,
      VNavigationContent,
      VNavigationFooter,
      VMenu,
      VMenuItems,
      VMenuItem,
      VMenuLabel
    },
    setup() {
      return { args }
    },
    template: `
      <VNavigation v-bind="args">
        <VNavigationContent>
          <VMenu>
            <VMenuLabel>Label</VMenuLabel>
            <VMenuItems>
              <VMenuItem active>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
            </VMenuItems>
          </VMenu>
        </VNavigationContent>
        <VNavigationFooter>
          <div>Footer</div>
        </VNavigationFooter> 
      </VNavigation>
    `
  })
} satisfies Story

export const WithHeaderAndFooter = {
  render: args => ({
    components: {
      VNavigation,
      VNavigationContent,
      VNavigationHeader,
      VNavigationFooter,
      VMenu,
      VMenuItems,
      VMenuItem,
      VMenuLabel
    },
    setup() {
      return { args }
    },
    template: `
      <VNavigation v-bind="args">
        <VNavigationHeader>
          <div>Header</div>
        </VNavigationHeader> 
        <VNavigationContent>
          <VMenu>
            <VMenuLabel>Label</VMenuLabel>
            <VMenuItems>
              <VMenuItem active>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
            </VMenuItems>
            <VMenuLabel>Label</VMenuLabel>
            <VMenuItems>
              <VMenuItem active>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
              <VMenuItem>Item</VMenuItem>
            </VMenuItems>
          </VMenu>
        </VNavigationContent>
        <VNavigationFooter>
          <div>Footer</div>
        </VNavigationFooter> 
      </VNavigation>
    `
  })
} satisfies Story
