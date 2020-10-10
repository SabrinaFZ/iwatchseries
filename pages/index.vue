<template>
  <div class="container">
    <h1>
      <v-img
        lazy-src="/logo.png"
        max-height="200"
        max-width="200"
        src="/logo.png"
      />
    </h1>
    <InputComponent @input="searchSerie" />
  </div>
</template>

<script>
import InputComponent from '@/components/input/input.component';

export default {
  components: {
    InputComponent
  },
  methods: {
    searchSerie(serieTitle) {
      // send a request to get serie info
      console.log(serieTitle);
    }
  }
};
</script>

<style lang="scss" scoped>
  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
  }
</style>
