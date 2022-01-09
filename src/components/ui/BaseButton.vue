<template>
  <button class="btn" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: ['mode']
}
</script>