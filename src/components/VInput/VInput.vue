<template>
  <input
    :id="id"
    v-model="value"
    class="v-input"
    :class="{
      'v-input--invalid': invalid,
      [`v-input--${size}`]: size
    }"
    :type="type"
    :required="required"
    :placeholder="placeholder"
    :disabled="disabled"
    :aria-describedby="(hasMessage && !invalid && messageId) || undefined"
    :aria-errormessage="(hasMessage && invalid && messageId) || undefined"
    :aria-invalid="invalid"
  />
</template>

<script setup lang="ts">
  import type { VInputProps } from './types'
  import { useField } from '../VField/useField'
  import { computed } from 'vue'

  const value = defineModel<string | number>()

  const props = withDefaults(defineProps<VInputProps>(), {
    type: 'text',
    required: false,
    disabled: false,
    invalid: false
  })

  const { id, hasMessage, messageId } = useField({
    id: computed(() => props.id),
    isInvalid: computed(() => props.invalid)
  })
</script>

<style>
  :root {
    --v-input-height: var(--v-unit-12);
    --v-input-gap: var(--v-unit-4);
    --v-input-border-style: solid;
    --v-input-border-width: var(--v-unit-025);
    --v-input-border-color: var(--v-color-outline);
    --v-input-border-radius: var(--v-radius-sm);
    --v-input-background-color: var(--v-color-surface-mod-alt);
    --v-input-color: var(--v-color-text-high);
    --v-input-font-size: var(--v-font-size-b2);
    --v-input-hover-border-color: var(--v-color-outline-high);
    --v-input-focus-border-color: var(--v-color-primary);
    --v-input-placeholder-color: var(--v-color-text);
  }

  .v-input {
    width: 100%;
    min-height: var(--v-input-height);
    border-radius: var(--v-input-border-radius);
    appearance: none;
    color: var(--v-input-color);
    font-family: inherit;
    font-size: var(--v-input-font-size);
    outline: none;
    transition: border-color var(--v-duration-fast);
    padding-inline-start: var(--v-input-gap);
    padding-inline-end: var(--v-input-gap);
    border: var(--v-input-border-width) var(--v-input-border-style) var(--v-input-border-color);
    background-color: var(--v-input-background-color);
    position: relative;
    z-index: 1;

    &:hover:not(:disabled, .v-input--invalid) {
      @media (hover) {
        border-color: var(--v-input-hover-border-color);
      }
    }

    &:focus-within:not(.v-input--invalid) {
      border-color: var(--v-input-focus-border-color);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;

      .v-input-field & {
        opacity: 1;
      }
    }
  }

  /* TODO: no funciona con nesting ir mirando */
  .v-input::placeholder {
    color: var(--v-input-placeholder-color);
    opacity: 0.5;
  }

  .v-input--invalid {
    --v-input-border-color: var(--v-color-error);
  }

  .v-input--sm {
    --v-input-height: var(--v-unit-10);
    --v-input-font-size: var(--v-font-size-b3);
    --v-input-gap: var(--v-unit-3);
  }

  .v-input--xs {
    --v-input-height: var(--v-unit-8);
    --v-input-font-size: var(--v-font-size-b4);
    --v-input-gap: var(--v-unit-2);
  }
</style>
