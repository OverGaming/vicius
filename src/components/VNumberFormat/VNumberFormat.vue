<template>
  {{ formattedNumber }}
</template>

<script setup lang="ts">
  import { useNumberFormat } from './useNumberFormat'
  import type { VNumberFormatProps } from './types'

  const props = withDefaults(defineProps<VNumberFormatProps>(), {
    digits: 1
  })

  const formattedNumber = useNumberFormat(
    () => props.value,
    () => props.digits
  )
</script>
