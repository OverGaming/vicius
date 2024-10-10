<template>
  <div class="v-field">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { ref, provide } from 'vue'
  import { uuid } from '@/utils'
  import { VFieldContextKey } from './keys'

  const messageId = uuid()
  const id = ref(uuid())
  const isInvalid = ref(false)
  const hasMessage = ref(false)

  provide(VFieldContextKey, {
    id,
    messageId,
    isInvalid,
    hasMessage,
    updateField: params => {
      id.value = params.id ?? id.value
      isInvalid.value = params.isInvalid ?? isInvalid.value
      hasMessage.value = params.hasMessage ?? hasMessage.value
    }
  })
</script>

<style>
  .v-field {
    display: grid;
    gap: var(--v-unit-2);
    grid-template-columns: 1fr;
  }
</style>
