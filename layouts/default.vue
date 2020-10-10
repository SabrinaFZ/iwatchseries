<template>
  <v-app>
    <v-main>
      <v-container class="container" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
  }
</style>
