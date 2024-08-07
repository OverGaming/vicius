import type { Meta, StoryObj } from '@storybook/vue3'
import VText from './VText.vue'

const meta = {
  title: 'Typography/VText',
  component: VText,
  argTypes: {
    variant: {
      control: 'select',
      options: ['header', 'body', 'label']
    },
    color: {
      control: 'select',
      options: ['default', 'low', 'high', 'primary', 'info', 'success', 'warning', 'error']
    },
    size: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b1', 'b2', 'b3', 'b4']
    },
    minSize: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5', 'h6', 'b1', 'b2', 'b3', 'b4']
    },
    maxSize: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b1', 'b2', 'b3']
    }
  }
} satisfies Meta<typeof VText>

export default meta

type Story = StoryObj<typeof VText>

const TEXT =
  'Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.'

const render: Story['render'] = args => ({
  components: { VText },
  setup() {
    return { args }
  },
  template: `
    <VText v-bind="args">
      ${TEXT}
    </VText>
  `
})

export const Default = {
  render
} satisfies Story

export const Colors = {
  render: args => ({
    components: { VText },
    setup() {
      return { args }
    },
    template: `
      <VText v-bind="args" color="high">High color</VText>
      <VText v-bind="args" color="default">Default color</VText>
      <VText v-bind="args" color="low">Low color</VText>
      <VText v-bind="args" color="primary">Primary color</VText>
      <VText v-bind="args" color="success">Success color</VText>
      <VText v-bind="args" color="info">Info color</VText>
      <VText v-bind="args" color="warning">Warning color</VText>
      <VText v-bind="args" color="error">Error color</VText>
    `
  }),
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story

export const Variants = {
  render: args => ({
    components: { VText },
    setup() {
      return { args }
    },
    template: `
      <VText v-bind="args" variant="header">Header variant</VText>
      <VText v-bind="args" variant="label">Label variant</VText>
      <VText v-bind="args" variant="body">Body variant</VText>
    `
  }),
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story

export const Italic = {
  render: args => ({
    components: { VText },
    setup() {
      return { args }
    },
    template: `
      <VText v-bind="args" variant="header">${TEXT}</VText>
      <br/>
      <VText v-bind="args" variant="label">${TEXT}</VText>
      <br/>
      <VText v-bind="args" variant="body">${TEXT}</VText>
    `
  }),
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    italic: {
      table: {
        disable: true
      }
    }
  },
  args: {
    italic: true
  }
} satisfies Story

export const Sizes = {
  render: args => ({
    components: { VText },
    setup() {
      return { args }
    },
    template: `
      <VText v-bind="args" size="h1">Typography with size h1</VText>
      <br/>
      <VText v-bind="args" size="h2">Typography with size h2</VText>
      <br/>
      <VText v-bind="args" size="h3">Typography with size h3</VText>
      <br/>
      <VText v-bind="args" size="h4">Typography with size h4</VText>
      <br/>
      <VText v-bind="args" size="h5">Typography with size h5</VText>
      <br/>
      <VText v-bind="args" size="h6">Typography with size h6</VText>
      <br/>
      <VText v-bind="args" size="b1">Typography with size b1</VText>
      <br/>
      <VText v-bind="args" size="b2">Typography with size b2</VText>
      <br/>
      <VText v-bind="args" size="b3">Typography with size b3</VText>
      <br/>
      <VText v-bind="args" size="b4">Typography with size b4</VText>
    `
  }),
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  }
} satisfies Story

export const FluidSize = {
  render,
  args: {
    minSize: 'b2',
    maxSize: 'h4',
    sizeStart: 300,
    sizeEnd: 600
  }
} satisfies Story

export const WithEllipsis = {
  render,
  args: {
    ellipsis: true
  }
} satisfies Story

export const WithMaxLines = {
  render,
  args: {
    maxLines: 2
  }
} satisfies Story

export const WithBalance = {
  render,
  args: {
    balance: true
  }
} satisfies Story

export const WithPretty = {
  render,
  args: {
    pretty: true
  }
} satisfies Story

export const WithUppercase = {
  render,
  args: {
    uppercase: true
  }
} satisfies Story
