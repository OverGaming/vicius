<template>
  <label :for="id" class="v-checkbox" :class="{ 'v-checkbox--disabled': disabled }">
    <div class="v-checkbox__wrap">
      <input
        :id="id"
        ref="checkboxElement"
        v-model="modelValue"
        :disabled="disabled"
        :required="required"
        :checked="modelValue"
        :value="value"
        :name="name"
        type="checkbox"
        class="v-checkbox__element"
        :class="{ 'v-checkbox__element--error': error }"
      />
      <div v-show="modelValue" class="v-checkbox__icon">
        <VIcon name="Check" size="sm" />
      </div>
    </div>
    <div v-if="$slots.default" class="v-checkbox__text">
      <slot />
    </div>
  </label>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue'
  import { computed, ref } from 'vue'
  import VIcon from '../VIcon/VIcon.vue'
  import { uuid } from '@/utils'
  import type { VCheckboxProps } from './types'

  const modelValue = defineModel<boolean>({ default: false })
  const props = withDefaults(defineProps<VCheckboxProps>(), {
    disabled: false,
    required: false,
    error: false
  })

  const checkboxElement: Ref<HTMLInputElement | null> = ref(null)
  const id = computed(() => props.id || uuid())
</script>

<style>
  .v-checkbox {
    --v-checkbox-size: var(--v-unit-6);
    --v-checkbox-border-width: var(--v-unit-025);
    --v-checkbox-border-style: solid;
    --v-checkbox-border-color: var(--v-color-outline);
    --v-checkbox-border-radius: var(--v-radius-sm);
    --v-checkbox-background-color: var(--v-color-surface-mod-alt);
    --v-checkbox-hover-border-color: var(--v-color-outline-high);
    --v-checkbox-focus-border-color: var(--v-color-accent-primary);
    --v-checkbox-checked-background-color: var(--v-color-accent-primary);
    --v-checkbox-checked-border-color: var(--v-color-accent-primary);
    --v-checkbox-checked-color: var(--v-color-text-contrast-high);

    display: flex;
    gap: var(--v-unit-4);
  }

  .v-checkbox--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .v-checkbox__wrap {
    display: flex;
    position: relative;
    height: var(--v-checkbox-size);
    width: var(--v-checkbox-size);
    flex-shrink: 0;
  }

  .v-checkbox__element {
    height: inherit;
    width: inherit;
    opacity: 1;
    cursor: pointer;
    appearance: none;
    outline: none;
    border: var(--v-checkbox-border-width) var(--v-checkbox-border-style)
      var(--v-checkbox-border-color);
    border-radius: var(--v-checkbox-border-radius);
    background-color: var(--v-checkbox-background-color);
    transition: var(--v-duration-default) var(--v-easing-standard);
    transition-property: border-color, background-color;

    &:hover:not(:focus-visible, :checked, :disabled, .v-checkbox__element--error) {
      @media (hover) {
        border-color: var(--v-checkbox-hover-border-color);
      }
    }

    &:focus-visible {
      border-color: var(--v-checkbox-focus-border-color);
    }

    &:checked {
      background-color: var(--v-checkbox-checked-background-color);
      color: var(--v-checkbox-checked-color);
      border-color: var(--v-checkbox-checked-border-color);
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  .v-checkbox__element--error {
    --v-checkbox-border-color: var(--v-color-error);
  }

  .v-checkbox__icon {
    pointer-events: none;
    position: absolute;
    inset-inline-start: 50%;
    inset-block-start: 50%;
    translate: -50% -50%;
    color: var(--v-checkbox-checked-color);
    height: var(--v-checkbox-size);
    width: var(--v-checkbox-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .v-checkbox__text {
    align-self: center;
  }
</style>
