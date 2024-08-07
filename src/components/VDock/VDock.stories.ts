import type { Meta, StoryObj } from '@storybook/vue3'
import VDock from './VDock.vue'
import VDockItem from './VDockItem.vue'
import VButton from '../VButton/VButton.vue'

const meta = {
  title: 'Menu/VDock',
  component: VDock
} satisfies Meta<typeof VDock>

export default meta

type Story = StoryObj<typeof VDock>

export const Default = {
  render: args => ({
    components: { VDock, VDockItem, VButton },
    setup() {
      return { args }
    },
    template: `
      <VDock>
        <VDockItem>
          <VButton v-bind="args" start-icon="Mail"/>
        </VDockItem>
        <VDockItem>
          <VButton v-bind="args" start-icon="Mail"/>
        </VDockItem>
        <VDockItem>
          <VButton v-bind="args" start-icon="Mail"/>
        </VDockItem>
      </VDock>
    `
  })
} satisfies Story
