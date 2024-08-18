<template>
  <component
    :is="htmlTag"
    :href="href"
    class="v-button"
    :class="{
      [`v-button--vt-${variant}`]: variant,
      [`v-button--cr-${color}`]: color,
      [`v-button--sz-${size}`]: size,
      'v-button--loading': loading,
      'v-button--disabled': disabled,
      'v-button--full-width': fullWidth,
      'v-button--no-gap': noGap
    }"
    :type="htmlTag === 'button' ? type : undefined"
    :disabled="htmlTag === 'button' ? disabled || loading : undefined"
  >
    <span v-if="loading" class="v-button__icon v-button__icon--loader">
      <VIcon name="Loader" :size="size" animate="spin" />
    </span>
    <span v-if="startIcon" class="v-button__icon v-button__icon--start">
      <VIcon :name="startIcon" :size="size" />
    </span>
    <VText v-if="$slots.default" variant="label" size="b3" class="v-button__text">
      <slot />
    </VText>
    <span v-if="endIcon" class="v-button__icon v-button__icon--end">
      <VIcon :name="endIcon" :size="size" />
    </span>
  </component>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import VIcon from '../VIcon/VIcon.vue'
  import VText from '../VText/VText.vue'
  import type { VButtonProps } from './types'

  const props = withDefaults(defineProps<VButtonProps>(), {
    type: 'button',
    disabled: false,
    loading: false,
    fullWidth: false,
    noGap: false,
    color: 'default',
    variant: 'default',
    size: 'bs'
  })

  const href = computed(() => (props.disabled || props.loading ? undefined : props.href))
  const htmlTag = computed(() => (href.value ? 'a' : 'button'))
</script>

<style>
  :root {
    --v-button-color: var(--v-color-text);
    --v-button-background-color: transparent;
    --v-button-visibility: visible;
    --v-button-size: var(--v-unit-12);

    --v-button-hover-color: var(--v-color-text-high);
    --v-button-focus-color: var(--v-color-text-high);
    --v-button-active-color: var(--v-color-text-high);
    --v-button-hover-background-color: var(--v-color-surface-mod);
    --v-button-focus-background-color: var(--v-color-surface-mod);
    --v-button-active-background-color: var(--v-color-surface-mod);
  }

  .v-button {
    display: inline-grid;
    grid-auto-flow: column;
    gap: var(--v-unit-3);
    align-items: center;
    justify-items: center;
    justify-content: center;
    text-align: center;
    min-height: var(--v-button-size);
    min-width: var(--v-button-size);
    color: var(--v-button-color);

    border-radius: var(--v-radius-sm);
    transition: var(--v-duration-default) var(--v-easing-standard);
    transition-property: background-color, color;
    position: relative;

    &:not(.v-button--no-gap) {
      &:has(.v-button__text) {
        padding-inline-start: var(--v-unit-4);
        padding-inline-end: var(--v-unit-4);

        &:has(.v-button__icon--start) {
          padding-inline-start: var(--v-unit-4);
          padding-inline-end: var(--v-unit-6);
        }

        &:has(.v-button__icon--end) {
          padding-inline-start: var(--v-unit-6);
          padding-inline-end: var(--v-unit-4);
        }

        &:has(.v-button__icon--start):has(.v-button__icon--end) {
          padding-inline-start: var(--v-unit-4);
          padding-inline-end: var(--v-unit-4);
        }
      }
    }

    &:not(:disabled, .v-button--loading) {
      &:hover {
        --v-button-color: var(--v-button-hover-color);
        --v-button-background-color: var(--v-button-hover-background-color);
      }

      &:focus-visible {
        --v-button-color: var(--v-button-focus-color);
        --v-button-background-color: var(--v-button-focus-background-color);
      }

      &:active {
        --v-button-color: var(--v-button-active-color);
        --v-button-background-color: var(--v-button-active-background-color);
      }
    }
  }

  .v-button__text {
    display: flex;
    visibility: var(--v-button-visibility);
  }

  .v-button__icon {
    display: flex;
    visibility: var(--v-button-visibility);
    flex-shrink: 0;
  }

  .v-button__icon--loader {
    visibility: visible;
    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translate(-50%, -50%);
  }

  .v-button--disabled,
  .v-button--loading {
    &:is(a) {
      pointer-events: none;
    }
  }

  .v-button--loading {
    --v-button-visibility: hidden;

    cursor: progress;
  }

  .v-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .v-button--full-width {
    display: grid;
    width: 100%;
  }

  .v-button--sz-sm {
    --v-button-size: var(--v-unit-10);
  }

  .v-button--sz-xs {
    --v-button-size: var(--v-unit-8);
  }

  .v-button--vt-default {
    background-color: var(--v-button-background-color);

    &:not(:disabled, .v-button--loading) {
      &:hover {
        --v-button-background-color: var(--v-button-hover-background-color);
      }

      &:focus-visible {
        --v-button-background-color: var(--v-button-focus-background-color);
      }

      &:active {
        --v-button-background-color: var(--v-button-active-background-color);
      }
    }
  }

  .v-button--vt-text {
    &:not(:disabled, .v-button--loading) {
      &:hover,
      &:focus-visible,
      &:active {
        background-color: var(--v-button-background-color);
      }
    }
  }

  .v-button--cr-default {
    --v-button-background-color: var(--v-color-surface-mod);

    --v-button-hover-color: var(--v-color-primary);
    --v-button-focus-color: var(--v-color-primary);
    --v-button-active-color: var(--v-color-primary);
    --v-button-hover-background-color: var(--v-color-surface-mod-high);
    --v-button-focus-background-color: var(--v-color-surface-mod-high);
    --v-button-active-background-color: var(--v-color-surface-mod-high);
  }

  .v-button--cr-primary {
    --v-button-color: var(--v-color-text-contrast-high);
    --v-button-background-color: var(--v-color-primary);

    --v-button-hover-color: var(--v-color-text-contrast-high);
    --v-button-focus-color: var(--v-color-text-contrast-high);
    --v-button-active-color: var(--v-color-text-contrast-high);
    --v-button-hover-background-color: var(--v-color-accent-primary-hover);
    --v-button-focus-background-color: var(--v-color-accent-primary-focus);
    --v-button-active-background-color: var(--v-color-accent-primary-active);
  }
</style>
