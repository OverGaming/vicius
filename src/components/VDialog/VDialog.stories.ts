import type { Meta, StoryObj } from '@storybook/vue3'
import VDialog from './VDialog.vue'
import VDialogClose from './VDialogClose.vue'
import { ref } from 'vue'

const meta = {
  title: 'Feedback/VDialog',
  component: VDialog,
  argTypes: {
    showClose: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof VDialog>

export default meta

type Story = StoryObj<typeof VDialog>

export const Default = {
  render: args => ({
    components: { VDialog },
    setup() {
      const isOpen = ref(true)

      const open = () => {
        isOpen.value = true
      }

      return { args, isOpen, open }
    },
    template: `
      <button @click="open">Open</button>
      <VDialog v-model="isOpen" v-bind="args">
        Slot content
      </VDialog>
    `
  })
} satisfies Story

export const WithStaticClose = {
  render: args => ({
    components: { VDialog, VDialogClose },
    setup() {
      const isOpen = ref(true)

      const open = () => {
        isOpen.value = true
      }

      return { args, isOpen, open }
    },
    template: `
      <button @click="open">Open</button>
      <VDialog v-model="isOpen" v-bind="args">
        <template #close><VDialogClose static /></template>
        Slot content
      </VDialog>
    `
  })
} satisfies Story
