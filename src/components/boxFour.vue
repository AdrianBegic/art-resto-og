<template>
  <div class="box">
    <div class="text-holder">
      <container>
        <h1 class="title-services">Custom Framing Since 1988</h1>
        <p class="content-services">
          I can look after all your framing needs with the care they deserve and
          The best materials available. Just drop in with your piece to see how
          Good it can look. I have hundreds of frames to choose from and there
          Is one that is perfect for your piece.
        </p>
        <router-link class="header__nav-link" to="/Contact">Contact Me ❯</router-link>
      </container>
    </div>
     <div class="img-holder-services">
      <img id="frame" src="@/assets/images/frames.webp" />
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

#frame {
  border-radius: 0px 5px 5px 0px;
}

.box {
  background-color: #F3D7C1;
  width: 80vw;
  height: 70vh;
  margin: 0 auto;
  padding:0;
  border-radius: 5px;
}

.img-holder-services {
  float: right;
  width: 50%;
  height: 100%;
  padding: 0;
}

.text-holder {
  float: left;
  width: 50%;
  height: 100%;
  color: #4d4d4d;
  font-weight: 100;
  padding: 30px;
    display: flex;
  align-items: center;
  justify-content: center;

}

.title-services {
  padding: 2% 0% 2%;
  font-size: 3em;
}

.content-services{
  font-size: 2em;
}

a {
  cursor: pointer;
  text-decoration: none;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 2em;
}

a:hover {
  color: #666;
}


@media only screen and (min-width: 768px) {
    /* tablets and desktop */
    .content-services{
  font-size: 1.5em;
}
}

@media only screen and (max-width: 767px) {
    /* phones */
    .box{
    height: auto;
    border-radius: 0px;
  }

  .title-services {
  font-size: 2.3em;
}

  .content-services{
  font-size: 1.5em;
}

   .text-holder { 
    float: none;
    margin-right:0;
    width:100%;
    height: 50%;   
  }
  .img-holder-services{
    height: 50%;
    width:100%;
  }

  #frame {
  border-radius: 0px 0px 0px 0px;
}

  #media-width{
    display: none;
  }
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}
</style>
