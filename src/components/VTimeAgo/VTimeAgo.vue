<template>
  {{ timeAgo }}
</template>

<script setup lang="ts">
  import { useTimeAgo } from './useTimeAgo'
  import type { VTimeAgoProps } from './types'

  const props = defineProps<VTimeAgoProps>()

  const timeAgo = useTimeAgo(() => props.time)
</script>
