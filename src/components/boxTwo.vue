<template>
<div> <h1 class="title" >MY PAST WORK </h1> 
  <div class="box">
    <div class="img-holder">
      <ImageCompare   :BeforeImage= "BeforeImage1"  :AfterImage= "AfterImage1"/>
    </div>
    <div class="img-holder">
      <ImageCompare   :BeforeImage= "BeforeImage2"  :AfterImage= "AfterImage2"/>
    </div>
    <div class="img-holder">
      <ImageCompare  :BeforeImage= "BeforeImage3"  :AfterImage= "AfterImage3"/>
    </div>
    <div class="img-holder">
      <ImageCompare    :BeforeImage= "BeforeImage4"  :AfterImage= "AfterImage4"/>
    </div>
  </div>
  <div class="bottom-link">
  <router-link class="bottom-link" to="/Gallery">SEE MORE ❯</router-link>
  </div>
  </div>
</template>

<script>
import ImageCompare from "@/components/image-compare.vue";

export default {
  name: "boxTwo",
  props: {
    msg: String,
  },

  components: {
    ImageCompare,
  },

  data() {
    return {
      BeforeImage1: require("../assets/images/frame-before.webp"),
      AfterImage1: require("../assets/images/frame-after.webp"),
      BeforeImage2: require("../assets/images/dog-before.webp"),
      AfterImage2: require("../assets/images/dog-after.webp"),
       BeforeImage3: require("../assets/images/mary-before.webp"),
      AfterImage3: require("../assets/images/mary-after.webp"),
      BeforeImage4: require("../assets/images/coast-before.webp"),
      AfterImage4: require("../assets/images/coast-after.webp"),
    };
  },
};
</script>

<style>

img , svg {
    min-height: 500px;
    max-height: 500px;
}

.box {
  width: 70%;
  height: auto;
  margin: 0 auto;
}

.img-holder {
  float: left;
  width: 50%;
  height: 100%;
 padding: 1%;
}

.bottom-link {
    display: inline-block;
    cursor: pointer;
  text-decoration: none;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 2em;
}

.bottom-link:hover {
  color: #666;
}

.title {
    
  
  text-decoration: none;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 4em;
}



</style>
