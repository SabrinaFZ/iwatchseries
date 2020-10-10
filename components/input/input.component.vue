<template>
  <v-text-field
    v-model="text"
    :class="{'expanded': expand}"
    label="I have watched..."
    outlined
    color="#eb6363"
    @focus="expandInput()"
    @blur="expandInput()"
    @input="onInput()"
  />
</template>

<script>
export default {
  data() {
    return {
      text: '',
      expand: false
    };
  },
  methods: {
    expandInput() {
      this.expand = !this.expand;
      if (!this.expand) {
        this.text = '';
      }
    },
    onInput() {
      this.$emit('input', this.text);
    }
  }
};
</script>

<style lang="scss" scoped>
  .v-input {
    transition: width 0.5s ease-in-out;
    width: 40%;

    &.expanded {
       width: 80%;
    }
  }
</style>
