<template>
  <div class="container">
    <v-img
      :lazy-src="require('~/assets/images/logo.svg')"
      max-height="200"
      max-width="200"
      :src="require('~/assets/images/logo.svg')"
    />
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: 'Ups, Page Not Found!',
      otherError: 'Ups, an error occurred!'
    };
  },
  head() {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
}

h1 {
  font-size: 20px;
}
</style>
