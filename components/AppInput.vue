<template>
  <input v-model="input" type="text"></input>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
  //data() {
  //  return {
  //    input: this.value
  //  }
  //},
  //methods: {
  //  update() {
  //    this.$emit('input', this.input)
  //  }
  //},
  //watch:{
  //  value() {
  //    this.input = this.value
  //  }
  //}
}
</script>