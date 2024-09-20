<template>
  <div class="v-alert" role="alert" :class="{ [`v-alert--${type}`]: type }">
    <slot name="icon">
      <VIcon :name="icon" size="bs" />
    </slot>
    <div class="v-alert__box">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import VIcon from '../VIcon/VIcon.vue'
  import type { VAlertProps } from './types'
  import type { VIconName } from '../VIcon/types'

  const props = withDefaults(defineProps<VAlertProps>(), {
    type: 'error'
  })

  const icon = computed(() => {
    const icons: Record<string, VIconName> = {
      error: 'Error',
      warning: 'Warning',
      info: 'Info',
      success: 'CheckCircle'
    }

    return icons[props.type] as VIconName
  })
</script>

<style scoped>
  .v-alert {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    gap: var(--v-unit-3);
    background-color: var(--v-alert-background-color, var(--v-color-surface-mod));
    border: var(--v-unit-025) solid var(--v-alert-border-color, var(--v-color-outline));
    color: var(--v-alert-color, var(--v-color-text));
    border-radius: var(--v-radius-sm);
    padding: var(--v-unit-4);
  }

  .v-alert__box {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--v-unit-1);
    align-self: center;
  }

  .v-alert--error {
    --v-alert-background-color: var(--v-color-accent-error-opacity);
    --v-alert-border-color: var(--v-color-error);
    --v-alert-color: var(--v-color-error);
  }

  .v-alert--warning {
    --v-alert-background-color: var(--v-color-accent-warning-opacity);
    --v-alert-border-color: var(--v-color-warning);
    --v-alert-color: var(--v-color-warning);
  }

  .v-alert--info {
    --v-alert-background-color: var(--v-color-accent-info-opacity);
    --v-alert-border-color: var(--v-color-info);
    --v-alert-color: var(--v-color-info);
  }

  .v-alert--success {
    --v-alert-background-color: var(--v-color-accent-success-opacity);
    --v-alert-border-color: var(--v-color-success);
    --v-alert-color: var(--v-color-success);
  }
</style>
