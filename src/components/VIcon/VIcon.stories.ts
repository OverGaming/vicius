import type { Meta, StoryObj } from '@storybook/vue3'
import VIcon from './VIcon.vue'
import type { VIconName } from './types'

const iconNames: VIconName[] = [
  'Add',
  'Bell',
  'Check',
  'CheckCircle',
  'ChevronBottom',
  'ChevronLeft',
  'ChevronTop',
  'ChevronRight',
  'Comment',
  'Comments',
  'Compass',
  'Discord',
  'Error',
  'Feather',
  'Gamepad',
  'GamepadCross',
  'Google',
  'House',
  'Info',
  'Loader',
  'Logout',
  'Mail',
  'Menu',
  'OverGaming',
  'Pencil',
  'Person',
  'Radio',
  'Search',
  'Settings',
  'Twitch',
  'Warning',
  'Close'
]

const meta = {
  title: 'Iconography/VIcon',
  component: VIcon,
  argTypes: {
    name: {
      control: 'select',
      options: iconNames
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'bs', 'md', 'lg', 'xl']
    },
    animate: {
      control: 'select',
      options: ['spin', 'pulse']
    }
  },
  args: {
    size: 'bs'
  }
} satisfies Meta<typeof VIcon>

export default meta

type Story = StoryObj<typeof VIcon>

const render: Story['render'] = args => ({
  components: { VIcon },
  setup() {
    return { args }
  },
  template: '<VIcon v-bind="args" />'
})

export const Default = {
  render,
  args: {
    name: 'Mail'
  }
} satisfies Story

export const Names = {
  render: args => ({
    components: { VIcon },
    setup() {
      return { args, iconNames }
    },
    template: `
      <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
        <div v-for="icon in iconNames" :key="icon" style="display: grid; grid-template-columns: auto 1fr; gap: 1rem; align-items: center;">
          <VIcon v-bind="args" :name="icon" />
          {{ icon }}
        </div>
      </div>
    `
  }),
  argTypes: {
    name: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story

export const Sizes = {
  render: args => ({
    components: { VIcon },
    setup() {
      return { args }
    },
    template: `
      <div style="display:grid; grid-auto-flow: column; gap: 1rem; justify-content: start;">
        <VIcon v-bind="args" name="Mail" size="xl" />
        <VIcon v-bind="args" name="Mail" size="lg" />
        <VIcon v-bind="args" name="Mail" size="md" />
        <VIcon v-bind="args" name="Mail" size="bs" />
        <VIcon v-bind="args" name="Mail" size="sm" />
        <VIcon v-bind="args" name="Mail" size="xs" />
      </div>
    `
  }),
  argTypes: {
    name: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story

export const CustomSvg = {
  render: args => ({
    components: { VIcon },
    setup() {
      return { args }
    },
    template: `
      <div style="display:grid; grid-auto-flow: column; gap: 1rem; justify-content: start;">
        <VIcon v-bind="args">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
        </VIcon>
      </div>
    `
  }),
  argTypes: {
    name: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story
