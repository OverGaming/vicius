import type { Meta, StoryObj } from '@storybook/vue3'
import VImage from './VImage.vue'

const meta = {
  title: 'Media/VImage',
  component: VImage,
  decorators: [() => ({ template: '<div style="max-width: 600px;"><story /></div>' })],
  argTypes: {
    src: {
      control: 'text'
    },
    alt: {
      control: 'text'
    },
    loading: {
      control: 'select',
      options: ['eager', 'lazy']
    },
    srcset: {
      control: 'text'
    },
    sizes: {
      control: 'text'
    },
    aspectRatio: {
      control: 'text'
    },
    fit: {
      control: 'select',
      options: ['fill', 'contain', 'cover', 'none', 'scale-down']
    },
    position: {
      control: 'text'
    },
    rounded: {
      control: 'boolean'
    },
    circle: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof VImage>

export default meta

type Story = StoryObj<typeof VImage>

export const Default = {
  render: args => ({
    components: { VImage },
    setup() {
      return { args }
    },
    template: `
      <VImage v-bind="args" />
    `
  }),
  args: {
    src: '/images/banner.webp'
  }
} satisfies Story

export const WithFallback = {
  render: args => ({
    components: { VImage },
    setup() {
      return { args }
    },
    template: `
      <VImage v-bind="args">
        <template #fallback>
          <img src="/images/banner-fallback.webp" />
        </template>
      </VImage>
    `
  }),
  args: {
    src: 'bad-url.webp'
  }
} satisfies Story

export const WithError = {
  render: args => ({
    components: { VImage },
    setup() {
      return { args }
    },
    template: `
      <VImage v-bind="args">
        <template #error>
          Custom error message or code here
        </template>
      </VImage>
    `
  }),
  args: {
    src: 'bad-url.webp'
  }
} satisfies Story

export const WithFallbackAndError = {
  render: args => ({
    components: { VImage },
    setup() {
      return { args }
    },
    template: `
      <VImage v-bind="args">
        <template #fallback>
          <img src="/images/banner-fallback.webp" />
        </template>
        <template #error>
          Custom error message or code here
        </template>
      </VImage>
    `
  }),
  args: {
    src: 'bad-url.webp'
  }
} satisfies Story
