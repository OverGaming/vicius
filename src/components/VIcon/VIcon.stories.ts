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
  'Close',
  'Comments',
  'Compass',
  'Discord',
  'Error',
  'Feather',
  'Gamepad',
  'GamepadCross',
  'Google',
  'House',
  'IconErrorLoad',
  'Info',
  'Loader',
  'Logout',
  'Mail',
  'Menu',
  'OverGaming',
  'Person',
  'Radio',
  'Search',
  'Settings',
  'SyncAlt',
  'Twitch',
  'Warning'
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
