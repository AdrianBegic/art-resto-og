<template>

<div class="parallax-about">

      <h1 class="about-title">ABOUT</h1>
  </div>
  <div class="wrapper">

    
    
  </div>
 
</template>

<script>


export default {
  name: "Contact",
  components: {
      
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #FDECDC;
  height: 100vh;
  width: 100%;
  display: flex;
    align-items: center;
}

.splash {
  width: 100%;
  height: 50vh;
  background-image: url("../assets/images/gallery-splash.webp");
   background-position: center; 
   display: flex;
  align-items: center;
  justify-content: center;
}

.about-title {
  font-size: 9em;
  color: #fff;
}

.parallax-about {
  background-image: url("../assets/images/pexels-andrew-neel-2123337.jpg");
  height: 50vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
