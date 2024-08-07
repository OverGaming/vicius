<template>
  <VText v-if="isInvalid" variant="body" size="b3" color="error" class="v-field-error">
    <VIcon name="Error" class="v-field-error__icon" />
    <span :id="messageId" class="v-field-error__text"><slot /></span>
  </VText>
</template>

<script setup lang="ts">
  import VIcon from '../VIcon/VIcon.vue'
  import VText from '../VText/VText.vue'
  import { useField } from './useField'

  const { messageId, isInvalid } = useField()
</script>

<style>
  .v-field-error {
    display: flex;
    gap: var(--v-unit-2);
  }

  .v-field-error__icon {
    flex-shrink: 0;
  }

  .v-field-error__text {
    align-self: center;
  }
</style>
