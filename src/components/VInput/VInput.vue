<template>
  <input
    :id="inputId"
    v-model="value"
    class="v-input"
    :class="{
      'v-input--border': !isField,
      'v-input--background-color': !isField,
      'v-input--invalid': invalid
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
  import { watchEffect } from 'vue'

  const value = defineModel<string | number>()

  const props = withDefaults(defineProps<VInputProps>(), {
    type: 'text',
    required: false,
    disabled: false,
    invalid: false
  })

  const { id: inputId, isField, hasMessage, messageId, updateField } = useField()

  watchEffect(() => {
    updateField({
      id: props.id,
      invalid: props.invalid,
      disabled: props.disabled
    })
  })
</script>

<style>
  .v-input {
    width: 100%;
    min-height: var(--v-input-height);
    border: 0;
    border-radius: var(--v-input-border-radius);
    appearance: none;
    background-color: transparent;
    color: var(--v-input-color);
    font-family: inherit;
    font-size: var(--v-input-font-size);
    outline: none;
    transition: border-color var(--v-duration-fast);
    padding-inline-start: var(--v-unit-4);
    padding-inline-end: var(--v-unit-4);

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

  .v-input--border {
    border: var(--v-input-border-width) var(--v-input-border-style) var(--v-input-border-color);
  }

  .v-input--background-color {
    background-color: var(--v-input-background-color);
  }
</style>
