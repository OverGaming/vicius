import { watchEffect } from 'vue'

const THEMES = [
  { name: 'light', className: 'v-light' },
  { name: 'dark', className: 'v-dark' }
]

export const withTheme = (story, context) => {
  const theme = context.globals.theme || THEMES[0].name
  const selectedTheme = THEMES.find(t => t.name === theme) || THEMES[0]

  watchEffect(() => {
    document.documentElement.className = selectedTheme.className
  })

  return {
    components: { story },
    template: '<story/>'
  }
}
