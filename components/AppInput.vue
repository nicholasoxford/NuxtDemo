<template>
  <div>
    <input v-model="inputValue" type="text" />
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style scoped>
</style>