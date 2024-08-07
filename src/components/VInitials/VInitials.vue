<template>
  {{ initials }}
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { VInitialsProps } from './types'

  const props = withDefaults(defineProps<VInitialsProps>(), {
    name: '',
    num: 2
  })

  const initials = computed(() => {
    const arr = props.name?.split(' ')
    let initials = ''
    if (arr) {
      for (let i = 0; i < props.num && i < arr.length; i++) {
        initials += arr[i].charAt(0).toUpperCase()
      }
    }
    return initials
  })
</script>
