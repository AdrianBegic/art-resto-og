<template>
  <div class="box">
    <div class="img-holder-services">
      <img src="@/assets/images/frames.webp" />
    </div>
    <div class="text-holder">
      <container>
        <h1 class="title-services">Custom Framing Since 1988</h1>
        <p class="content-services">
          I can look after all your framing needs with the care they deserve and
          The best materials available. Just drop in with your piece to see how
          Good it can look. I have hundreds of frames to choose from and there
          Is one that is perfect for your piece.
        </p>
       
      </container>
    </div>
  </div>
</template>

<script>
export default {
  name: "boxFour",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
  min-width: 100%;
  min-height: 100%;
}

.box {
  background-color: #F3D7C1;
  width: 80vw;
  height: 70vh;
  margin: 0 auto;
  display: flex;
}

.img-holder-services {
  float: right;
  width: 50%;
  height: 100%;
  padding: none;
}

.text-holder {
  float: left;
  width: 50%;
  height: 100%;
  color: #4d4d4d;
  font-weight: 100;
  padding: 30px;
}

.title-services {
  padding: 10% 0% 5%;
  font-size: 3em;
}

.content-services {
    font-size: 1.7em;
  
}
</style>
