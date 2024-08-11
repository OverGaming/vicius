<template>
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class="v-icon"
    :class="{
      [`v-icon--${size}`]: size,
      [`v-animate-${animate}`]: animate
    }"
    :aria-describedby="id"
    role="img"
  >
    <title :id="id">{{ title || name }}</title>
    <component :is="component" />
  </svg>
</template>

<script setup lang="ts">
  import VIconSkeleton from './VIconSkeleton.vue'
  import { uuid } from '@/utils'
  import { computed, defineAsyncComponent } from 'vue'
  import type { VIconProps } from './types'

  const props = withDefaults(defineProps<VIconProps>(), {
    size: 'bs'
  })

  const id = uuid()
  const component = computed(() => {
    const icon = props.name
    return defineAsyncComponent({
      loader: () => import(`./Icons/${icon}.vue`).catch(() => VIconSkeleton),
      loadingComponent: VIconSkeleton,
      errorComponent: VIconSkeleton,
      delay: 0,
      suspensible: false
    })
  })
</script>

<style>
  .v-icon {
    height: 1em;
    width: 1em;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: var(--v-icon-size, 1em);
    color: var(--v-icon-color, currentColor);
  }

  .v-icon--xs {
    --v-icon-size: var(--v-unit-4);
  }

  .v-icon--sm {
    --v-icon-size: var(--v-unit-5);
  }

  .v-icon--bs {
    --v-icon-size: var(--v-unit-6);
  }

  .v-icon--md {
    --v-icon-size: var(--v-unit-7);
  }

  .v-icon--lg {
    --v-icon-size: var(--v-unit-8);
  }

  .v-icon--xl {
    --v-icon-size: var(--v-unit-9);
  }
</style>
