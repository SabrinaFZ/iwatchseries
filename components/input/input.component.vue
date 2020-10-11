<template>
  <v-text-field
    v-model="text"
    :class="{'expanded': expand}"
    label="I have watched..."
    outlined
    hide-details
    color="#eb6363"
    @focus="expandInput()"
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
      this.expand = true;
    },
    onInput() {
      if (this.text) {
        this.$emit('input', this.text);
      } else {
        this.$emit('clean-dropdown');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .v-input {
    margin-bottom: 0;
    transition: width 0.5s ease-in-out;
    width: 40%;

    &.expanded {
       width: 80%;
    }
  }
</style>
