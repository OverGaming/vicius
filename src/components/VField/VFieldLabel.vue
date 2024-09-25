<template>
  <VText as="label" :for="id" variant="label" size="b3" color="high" class="v-field-label">
    <slot />
  </VText>
</template>

<script setup lang="ts">
  import VText from '../VText/VText.vue'
  import { useField } from './useField'

  const { id } = useField()
</script>

<style>
  .v-field-label {
    padding-inline: var(--v-unit-05);
  }
</style>
