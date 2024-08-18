<template>
  <component
    :is="as"
    class="v-text"
    :class="{
      [`v-text--${variant}`]: variant,
      [`v-text--${color}`]: color,
      [`v-text--${size}`]: size,
      'v-text--fluid': minSize && maxSize,
      'v-text--ellipsis': ellipsis,
      'v-text--uppercase': uppercase,
      'v-text--italic': italic,
      'v-text--inline': inline,
      'v-text--pretty': pretty,
      'v-text--balance': balance,
      'v-text--clamp': maxLines
    }"
    :style="style"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { VTextProps } from './types'

  const props = withDefaults(defineProps<VTextProps>(), {
    as: 'div',
    sizeStart: 400,
    sizeEnd: 800,
    ellipsis: false,
    uppercase: false,
    italic: false,
    inline: false,
    pretty: false,
    balance: false
  })

  const style = computed(() => {
    let style = {}

    if (props.minSize && props.maxSize) {
      style = {
        ...style,
        ...{
          '--min-size': `var(--v-font-size-${props.minSize}-value)`,
          '--max-size': `var(--v-font-size-${props.maxSize}-value)`,
          '--size-start': props.sizeStart,
          '--size-end': props.sizeEnd
        }
      }
    }

    if (props.maxLines) {
      style = { ...style, ...{ '--v-text-line-clamp': props.maxLines } }
    }

    return style
  })
</script>

<style>
  .v-text {
    font-size: var(--v-text-font-size, inherit);
    font-weight: var(--v-text-font-weight, inherit);
    line-height: var(--v-text-line-height, var(--v-line-height));
    color: var(--v-text-color, inherit);
    font-family: var(--v-text-font-family, inherit);
  }

  .v-text--ellipsis {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
  }

  .v-text--uppercase {
    text-transform: uppercase;
  }

  .v-text--italic {
    font-style: italic;
  }

  .v-text--inline {
    display: inline-block;
  }

  .v-text--pretty {
    text-wrap: pretty;
  }

  .v-text--balance {
    text-wrap: balance;
  }

  .v-text--clamp {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--v-text-line-clamp, 2);
    display: -webkit-box;
    overflow: hidden;
  }

  .v-text--header {
    --v-text-font-weight: var(--v-font-weight-semibold);
  }

  .v-text--body {
    --v-text-font-weight: var(--v-font-weight-normal);
  }

  .v-text--label {
    --v-text-font-weight: var(--v-font-weight-medium);
  }

  .v-text--fluid {
    --slope: calc((var(--max-size) - var(--min-size)) / (var(--size-end) - var(--size-start)));
    --slope-cqi: calc(var(--slope) * 100cqi);
    --inter-unit: calc(
      ((var(--min-size) - var(--slope) * var(--size-start)) / var(--v-base-size)) *
        var(--v-base-unit)
    );

    --v-text-font-size: clamp(
      calc((var(--min-size) / var(--v-base-size)) * var(--v-base-unit)),
      var(--slope-cqi) + var(--inter-unit),
      calc((var(--max-size) / var(--v-base-size)) * var(--v-base-unit))
    );

    @supports (line-height: round(nearest, 0.8rem, 1rem)) {
      --v-text-font-size: clamp(
        calc((var(--min-size) / var(--v-base-size)) * var(--v-base-unit)),
        round(nearest, calc(var(--slope-cqi) + var(--inter-unit)), var(--v-unit-05)),
        calc((var(--max-size) / var(--v-base-size)) * var(--v-base-unit))
      );
    }
  }

  .v-text--h1 {
    --v-text-font-size: var(--v-font-size-h1);
  }

  .v-text--h2 {
    --v-text-font-size: var(--v-font-size-h2);
  }

  .v-text--h3 {
    --v-text-font-size: var(--v-font-size-h3);
  }

  .v-text--h4 {
    --v-text-font-size: var(--v-font-size-h4);
  }

  .v-text--h5 {
    --v-text-font-size: var(--v-font-size-h5);
  }

  .v-text--h6 {
    --v-text-font-size: var(--v-font-size-h6);
  }

  .v-text--b1 {
    --v-text-font-size: var(--v-font-size-b1);
  }

  .v-text--b2 {
    --v-text-font-size: var(--v-font-size-b2);
  }

  .v-text--b3 {
    --v-text-font-size: var(--v-font-size-b3);
  }

  .v-text--b4 {
    --v-text-font-size: var(--v-font-size-b4);
  }

  .v-text--low {
    --v-text-color: var(--v-color-text-low);
  }

  .v-text--default {
    --v-text-color: var(--v-color-text);
  }

  .v-text--high {
    --v-text-color: var(--v-color-text-high);
  }

  .v-text--primary {
    --v-text-color: var(--v-color-primary);
  }

  .v-text--info {
    --v-text-color: var(--v-color-info);
  }

  .v-text--success {
    --v-text-color: var(--v-color-success);
  }

  .v-text--warning {
    --v-text-color: var(--v-color-warning);
  }

  .v-text--error {
    --v-text-color: var(--v-color-error);
  }
</style>
