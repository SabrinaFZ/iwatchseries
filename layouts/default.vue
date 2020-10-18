<template>
  <v-app>
    <v-main>
      <v-container class="container" fluid>
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          {{ $t('label.GO_TO') }}: {{ locale.name }}
          <v-img
            max-height="15"
            max-width="15"
            :src="require(`~/assets/images/locales-icons/${locale.icon}.png`)"
          />
        </nuxt-link>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  align-items: center;
  color: #fff;
  display: flex;
  text-decoration: none;
}
</style>
