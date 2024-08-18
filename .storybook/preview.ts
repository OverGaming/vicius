import '@/css/styles.css'
import type { Preview } from '@storybook/vue3'
import { themes } from '@storybook/theming'
import { withTheme } from './decorators/withTheme'

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
  },
  decorators: [withTheme],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' }
        ]
      }
    }
  }
}

export default preview
