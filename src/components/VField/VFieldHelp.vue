<template>
  <VText v-if="!isInvalid" :id="messageId" variant="body" size="b3" class="v-field-help">
    <slot />
  </VText>
</template>

<script setup lang="ts">
  import VText from '../VText/VText.vue'
  import { useField } from './useField'

  const { messageId, isInvalid } = useField()
</script>
