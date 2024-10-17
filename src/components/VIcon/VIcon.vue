<template>
  <svg
    v-if="name"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="classes"
    :aria-describedby="id"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    role="img"
  >
    <title :id="id">{{ title || name }}</title>
    <component :is="component" />
  </svg>
  <div v-else :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import VIconSkeleton from './VIconSkeleton.vue'
  import { uuid } from '@/utils'
  import { computed, defineAsyncComponent } from 'vue'
  import type { VIconProps } from './types'
  import Error from './Icons/Error.vue'

  const props = defineProps<VIconProps>()

  const id = uuid()
  const component = computed(() => {
    const icon = props.name
    return defineAsyncComponent({
      loader: () => import(`./Icons/${icon}.vue`).catch(() => Error),
      loadingComponent: VIconSkeleton,
      errorComponent: Error,
      delay: 0,
      suspensible: false
    })
  })

  const classes = computed(() => {
    return {
      'v-icon': true,
      [`v-icon--${props.size}`]: !!props.size,
      [`v-animate-${props.animate}`]: !!props.animate
    }
  })
</script>

<style>
  .v-icon,
  .v-icon svg {
    height: 1em;
    width: 1em;
    line-height: 1em;
    font-size: var(--v-icon-size, 1em);
    color: var(--v-icon-color, currentColor);
  }

  .v-icon {
    display: inline-block;

    svg {
      display: block;
    }
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
