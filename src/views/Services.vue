<template>
  <div class="wrapper">
    <h1 class="title-services">SERVICES</h1>
    <div class="slide-0-services">
   
    <boxThree/>
   
    </div>
    <div class="slide-1-services">
   
    <boxFour/>
 
    </div>
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
  background-color: #000;
}

.title-services {
  color: #fff;
  padding: 30px;
}

.slide-0-services {
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 100vh;

}

.slide-1-services {
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 100vh;
  
}


</style>
