<template>
  <VText v-if="!isInvalid" :id="messageId" variant="body" size="b4" class="v-field-help">
    <slot />
  </VText>
</template>

<script setup lang="ts">
  import VText from '../VText/VText.vue'
  import { useField } from './useField'

  const { messageId, isInvalid } = useField({ hasMessage: true })
</script>

<style>
  .v-field-help {
    padding-inline: var(--v-unit-05);
  }
</style>
