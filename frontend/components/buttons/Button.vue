<template>
  <button
    class="bg-customBlue text-white rounded-md"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
