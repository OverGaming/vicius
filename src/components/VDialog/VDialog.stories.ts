import type { Meta, StoryObj } from '@storybook/vue3'
import VDialog from './VDialog.vue'
import VDialogClose from './VDialogClose.vue'
import { ref } from 'vue'

const meta = {
  title: 'Feedback/VDialog',
  component: VDialog
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

export const WithClose = {
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
        <VDialogClose />
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
        <VDialogClose static />
        Slot content
      </VDialog>
    `
  })
} satisfies Story
