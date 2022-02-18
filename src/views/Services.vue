<template>
  <div class="wrapper">
<div class="parallax-services">
    
      <h1 class="services-title">SERVICES</h1>
      </div>
    <div class="slide-0-services">
   
    <boxThree/>
   
    </div>
    <div class="parallax-gallery"></div>
    <div class="slide-1-services">
   
    <boxFour/>
 
    </div>
    <div class="parallax-gallery"></div>
  </div>
</template>

<script>
import boxThree from "@/components/boxThree.vue";
import boxFour from "@/components/boxFour.vue";

export default {
  name: "Services",
  components: {
      boxThree,
      boxFour,
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #FDECDC;
}

.splash {
  width: 100%;
  height: 50vh;
  background-image: url("../assets/images/services-splash.webp");
   background-position: bottom; 
   display: flex;
  align-items: center;
  justify-content: center;
}

.services-title {
  font-size: 9em;
  margin-top: 5%;
  color: #fff;
}

.slide-0-services {
  background-color: #FDECDC;
  color: #fff;
  width: 100%;
  height: fit-content;
    display: flex;
    align-items: center;
    padding: 80px;
}

.slide-1-services {
  background-color: #FDECDC0;
  color: #fff;
  width: 100%;
  height: fit-content;
  display: flex;
    align-items: center;
    padding: 60px 0px ;
}

.parallax-services {
  background-image: url("../assets/images/services-splash.webp");
  height: 50vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}


.parallax-gallery {
  background-image: url("../assets/images/pexels-andrew-neel-2123337.jpg");
  height: 40vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
