<template>
  <component :is="as" class="v-container" :class="{ [`v-container--${size}`]: size }">
    <slot />
  </component>
</template>

<script setup lang="ts">
  import type { VContainerProps } from './types'

  withDefaults(defineProps<VContainerProps>(), {
    as: 'div',
    size: 'bs'
  })
</script>

<style>
  .v-container {
    width: min(var(--v-container-width), 100%);
    margin-inline: auto;
  }

  .v-container--xt {
    --v-container-width: var(--v-container-xt);
  }

  .v-container--tn {
    --v-container-width: var(--v-container-tn);
  }

  .v-container--xs {
    --v-container-width: var(--v-container-xs);
  }

  .v-container--sm {
    --v-container-width: var(--v-container-sm);
  }

  .v-container--bs {
    --v-container-width: var(--v-container-bs);
  }

  .v-container--md {
    --v-container-width: var(--v-container-md);
  }

  .v-container--lg {
    --v-container-width: var(--v-container-lg);
  }

  .v-container--xl {
    --v-container-width: var(--v-container-xl);
  }

  .v-container--hg {
    --v-container-width: var(--v-container-hg);
  }

  .v-container--hd {
    --v-container-width: var(--v-container-hd);
  }
</style>
