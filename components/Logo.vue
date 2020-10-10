<template>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--two" />
    <div class="Triangle Triangle--one" />
    <div class="Triangle Triangle--three" />
    <div class="Triangle Triangle--four" />
  </div>
</template>

<style>
.VueToNuxtLogo {
  animation: turn 2s linear forwards 1s;
  display: inline-block;
  height: 180px;
  overflow: hidden;
  position: relative;
  transform: rotateX(180deg);
  width: 245px;
}

.Triangle {
  height: 0;
  left: 0;
  position: absolute;
  top: 0;
  width: 0;
}

.Triangle--one {
  border-bottom: 180px solid #41b883;
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
}

.Triangle--two {
  animation: goright 0.5s linear forwards 3.5s;
  border-bottom: 150px solid #3b8070;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  left: 35px;
  top: 30px;
}

.Triangle--three {
  animation: goright 0.5s linear forwards 3.5s;
  border-bottom: 120px solid #35495e;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  left: 35px;
  top: 60px;
}

.Triangle--four {
  animation: godown 0.5s linear forwards 3s;
  border-bottom: 60px solid #fff;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  left: 70px;
  top: 120px;
}

@keyframes turn {

  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {

  100% {
    top: 180px;
  }
}

@keyframes goright {

  100% {
    left: 70px;
  }
}
</style>
