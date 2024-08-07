import type { Meta, StoryObj } from '@storybook/vue3'
import VBanner from './VBanner.vue'
import VBannerContent from './VBannerContent.vue'
import VImage from '../VImage/VImage.vue'

const meta = {
  title: 'Media/VBanner',
  component: VBanner
} satisfies Meta<typeof VBanner>

export default meta

type Story = StoryObj<typeof VBanner>

export const Default = {
  render: args => ({
    components: { VBanner, VBannerContent, VImage },
    setup() {
      return { args }
    },
    template: `
      <VBanner v-bind="args">
        <template #image>
          <VImage src="/images/banner.webp"/>
        </template>
        <VBannerContent>
          Content
        </VBannerContent>
      </VBanner>
    `
  })
} satisfies Story
