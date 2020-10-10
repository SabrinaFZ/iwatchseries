<template>
  <img class="VuetifyLogo" alt="Vuetify Logo" src="/vuetify-logo.svg" />
</template>

<style>
.VuetifyLogo {
  animation: turn 3.5s ease-out forwards 1s;
  height: 180px;
  transform: rotateY(560deg);
  width: 180px;
}

@keyframes turn {

  100% {
    transform: rotateY(0deg);
  }
}
</style>
