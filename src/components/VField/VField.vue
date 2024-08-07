<template>
  <div class="v-field">
    <slot name="label" />
    <div class="v-field__wrapper">
      <slot />
    </div>
    <slot name="message" />
  </div>
</template>

<script setup lang="ts">
  import { computed, useSlots, ref, provide } from 'vue'
  import { uuid } from '@/utils'
  import { VFieldContextKey } from './keys'

  const slots = useSlots()
  const messageId = uuid()
  const id = ref(uuid())
  const isDisabled = ref(false)
  const isInvalid = ref(false)
  const hasMessage = computed(() => !!slots.message)

  provide(VFieldContextKey, {
    id,
    messageId,
    isField: true,
    isInvalid,
    isDisabled,
    hasMessage,
    updateField: params => {
      id.value = params.id || id.value
      isInvalid.value = params.invalid
      isDisabled.value = params.disabled
    }
  })
</script>

<style>
  .v-field {
    --v-input-height: calc(var(--v-input-size) - (var(--v-input-border-width) * 2));

    display: grid;
    gap: var(--v-unit-2);
    grid-template-columns: 1fr;
  }

  .v-field__wrapper {
    display: flex;
    border: var(--v-input-border-width) var(--v-input-border-style) var(--v-input-border-color);
    background-color: var(--v-input-background-color);
    border-radius: var(--v-input-border-radius);
    transition: border-color var(--v-duration-fast);

    &:has(.v-input:hover:not(:disabled, .v-input--invalid)) {
      @media (hover) {
        border-color: var(--v-input-hover-border-color);
      }
    }

    &:has(.v-input:focus-within:not(.v-input--invalid)) {
      border-color: var(--v-input-focus-border-color);
    }

    &:has(.v-input--invalid) {
      --v-input-border-color: var(--v-color-error);
    }

    &:has(.v-input:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:has(.v-field-addon) {
      .v-input {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    }
  }
</style>
