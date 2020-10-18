<template>
  <v-text-field
    v-model="text"
    :class="{'expanded': expand}"
    :label="$t('input.HAVE_WATCHED')"
    outlined
    hide-details
    color="#eb6363"
    clearable
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
    @include mobile {
      width: 100%;
    }

    &.expanded {
      width: 80%;
      @include mobile {
        width: 100%;
      }
    }
  }
</style>
