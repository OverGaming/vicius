import type { Preview } from '@storybook/vue3'
import { themes } from '@storybook/theming'

import '@/css/styles.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      theme: themes.dark
    },
    options: {
      storySort: {
        order: ['Get Started', 'Typography', 'Iconography']
      }
    },
    backgrounds: {
      default: 'default',
      values: [
        { name: 'lowest', value: 'var(--v-color-surface-lowest)' },
        { name: 'low', value: 'var(--v-color-surface-low)' },
        { name: 'default', value: 'var(--v-color-surface)' },
        { name: 'high', value: 'var(--v-color-surface-high)' },
        { name: 'highest', value: 'var(--v-color-surface-highest)' }
      ]
    }
  }
}

export default preview
