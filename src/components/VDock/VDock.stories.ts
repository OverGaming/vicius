import type { Meta, StoryObj } from '@storybook/vue3'
import VDock from './VDock.vue'
import VDockItem from './VDockItem.vue'
import VButton from '../VButton/VButton.vue'
import VIcon from '../VIcon/VIcon.vue'

const meta = {
  title: 'Menu/VDock',
  component: VDock
} satisfies Meta<typeof VDock>

export default meta

type Story = StoryObj<typeof VDock>

export const Default = {
  render: args => ({
    components: { VDock, VDockItem, VButton, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VDock>
        <VDockItem v-for="n in 3" :key="n">
          <VButton v-bind="args">
            <VIcon name="Mail" />
          </VButton>
        </VDockItem>
      </VDock>
    `
  })
} satisfies Story

export const WithHeaderAndFooter = {
  render: args => ({
    components: { VDock, VDockItem, VButton, VIcon },
    setup() {
      return { args }
    },
    template: `
      <VDock>
        <template #header>
          <VDockItem>
            <VButton v-bind="args">
            <VIcon name="Mail" />
          </VButton>
          </VDockItem>
        </template>
        <VDockItem v-for="n in 3" :key="n">
          <VButton v-bind="args">
            <VIcon name="Mail" />
          </VButton>
        </VDockItem>
        <template #footer>
          <VDockItem>
            <VButton v-bind="args">
            <VIcon name="Mail" />
          </VButton>
          </VDockItem>
        </template>
      </VDock>
    `
  })
} satisfies Story
