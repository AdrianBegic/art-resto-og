<template>
  <div id="app">
    <Nav />
    <div class="routing" v-if="this.$route.path == '/'">
      <div class="slide-0">
        <div class="intro__content">
          <h1 class="intro__title">GARY OWEN</h1>
          <h1 class="intro__sub__title">
            FINE ART RESTORATION AND FRAMING SINCE 1988
          </h1>
        </div>
      </div>

      <div class="intro-slide">
        <homePageBanner/>
      </div>

<div class="parallaxOne"><Box/></div>
      

      <div class="slide-2">
        <boxTwo />
      </div>

      <div class="parallaxTwo"><contactForm/></div>
</div>
    <router-view ></router-view>

     <vue-progress-bar></vue-progress-bar>

 <topButton/>
    <footerMain/>
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
import Box from "@/components/box.vue";
import contactForm from '@/components/contactForm.vue'
import boxTwo from "@/components/boxTwo.vue";
import footerMain from "@/components/footer-main.vue";
import homePageBanner from '@/components/homePageBanner.vue'
import topButton from '@/components/topButton.vue'

export default {
  name: "Home",
  components: {
    Nav,
    Box,
    contactForm,
    boxTwo,
    footerMain,
    homePageBanner,
    topButton,
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
   background-size: cover;
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
/*------------PARALLAX-------------*/

.parallaxOne {
  background-image: url("./assets/images/splash-6.webp");
  height: auto;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5%;
}


.parallaxTwo {
  background-image: url("./assets/images/splash-5.webp");
  height: auto;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5%;
}

/*------------------------------------------*/
.intro-slide {
  background-color: #fdecdc;
  color: #fff;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
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
  padding: 50px;
}

.slide-3 {
  background-color: #fdecdc;
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
  padding-top: 10%;
  position: relative;
  text-align:center;
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

  .parallaxOne {
  padding: 5%;
}
}

@media only screen and (max-width: 767px) {
  /* phones */
  .intro__title {
    padding: 5%;
    padding-top: 50%;
    font-size: 8em;
  }

  .intro__sub__title {
    text-align: center;
    padding: 30px;
  }

.parallaxOne {
  display: contents;
}

.parallaxTwo {
 display: contents;
}



.slide-2 {
  padding: 5%;
}
  
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
  /* portrait phones */
}
</style>
