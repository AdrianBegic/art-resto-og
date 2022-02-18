<template>
  <div id="app">
    <Nav />
    <div class="routing" v-if="this.$route.path == '/'">
      <div class="slide-0">
        <div class="intro__content">
          <h1 class="intro__title">OWEN</h1>
          <h1 class="intro__sub__title">FINE ART RESTORATION AND FRAMING SINCE 1988</h1>
        </div>
      </div>

      

      <DividerOne />
      <div class="slide-1">
        <Box />
      </div>
      <DividerOne />
      <div class="slide-2">
        <boxTwo />
      </div>
    </div>
    <router-view></router-view>
    <footerMain />
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
import Box from "@/components/box.vue";
import DividerOne from "@/components/divider-1.vue";
import boxTwo from "@/components/boxTwo.vue";
import footerMain from "@/components/footer-main.vue";


export default {
  name: "Home",
  components: {
    Nav,
    Box,
    DividerOne,
    boxTwo,
    footerMain,
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
  font-smooth: always;
  text-align: center;
  font-weight: bold;
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
  background-image: url("./assets/images/pexels-photo-2378469.jpeg");
  background-repeat: no-repeat, repeat;
  color: #fff;
  width: 100%;
  height: 100vh;
}







@media all and (max-width: 900px) {
  .services-grid {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
}

.slide-1 {
  background-color: #fdecdc;
  color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}

.slide-2 {
  background-color: #fdecdc;
  color: #fff;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
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

.intro__content {
  position: relative;
  right: 3%;

  z-index: 3;
  color: #fff;
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
  padding-top: 10%;
  position: relative;
}

@keyframes slide-up {
  0% {
    transform: TranslateY(250px);
  }
  100% {
    transform: TranslateY(0px);
  }
}

.intro__sub__title {
  font-size: 2em;
  text-align: right;
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
------------GENERAL------------
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    /* phones */
    .intro__title{
      padding: 20%;
    }

    .intro__sub__title{
      text-align: center;
      padding:30px;
    }

    
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}

</style>
