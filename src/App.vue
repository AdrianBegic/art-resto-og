<template>
  <Nav/>

  <div class="slide-0">
    <div class="intro__content">
      <h1 class="intro__title">OWEN</h1>
      <h1 class="intro__sub__title">FINE ART RESTORATION AND FRAMING</h1>
    </div>
    <img class="intro__img intro__img--1" src="@/assets/images/pic2.webp" />
    <img class="intro__img intro__img--2" src="@/assets/images/pic1.webp" />
  </div>
<DividerOne/>
  <div class="slide-1">
  <Box/>
  </div>
<ImageCompare/>
</template>

<script>
import Nav from "@/components/nav.vue";
import Box from "@/components/box.vue";
import DividerOne from "@/components/divider-1.vue";
import ImageCompare from "@/components/image-compare.vue";

export default {
  name: "App",
  components: {
    Nav,
    Box,
    DividerOne,
   ImageCompare,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.logo {
  font-size: 27px;
  letter-spacing: -1px;
}

.nav-btn,
.nav-btn__svg {
  width: 56px;
  height: 30px;
}

.nav-btn {
  display: block;
  margin: -2px 0 0 56px;
}

@media all and (max-width: 768px) {
  .nav-btn {
    margin: 18px 0 0 -6px;
  }
}

.nav-btn__svg {
  pointer-events: none;
}

.slide-0 {
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 100vh;
}

.slide-1 {
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
    align-items: center;
}

.intro__img {
  position: absolute;
  width: 35%;
  max-width: 450px;
  height: auto;

  @media all and (max-width: 768px) {
    width: 75vw;
  }
}

.intro__img--1 {
  z-index: 2;
  left: 10%;
  bottom: 20%;

  @media all and (max-width: 768px) {
    top: 15vh;
    left: 50%;
    bottom: 50vh;
  }
}

.intro__img--2 {
  z-index: 1;
  left: 25%;
  bottom: 30%;

  @media all and (max-width: 768px) {
    top: 2vh;
    left: 70%;
    bottom: 60vh;
  }
}

.intro__content {
  position: absolute;
  right: 5%;
  bottom: 15%;
  z-index: 3;
}

@media all and (max-width: 768px) {
  .intro__content {
    right: auto;
  }
}

.intro__title {
  font-size: 20vw;
  overflow: hidden;
  letter-spacing: -2.3vw;
  padding-right: 2.3vw;
  animation: slide-up 1.5s ease 0.5s;
}

@keyframes slide-up {
  0% {
    transform: TranslateY(250px)
  }
  100% {
    transform: TranslateY(0px)
  }
}

.intro__sub__title {
  font-size: 2em;
  text-align: right;
}

@media all and (max-width: 768px) {
  .intro__title {
    margin-bottom: 5vh;
  }
}

.intro__txt {
  max-width: 35vw;
  margin-left: 25vw;
}

@media all and (max-width: 768px) {
  .intro__txt {
    max-width: 80vw;
    margin-left: 5vw;
  }
}
</style>
