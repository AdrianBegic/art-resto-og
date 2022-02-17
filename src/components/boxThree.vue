<template>
  <div class="box">
    <div class="text-holder">
      <h1 class="title-services">Restoration</h1>
      <p>
        I take great pride in my ability to bring back the lost beauty and life
        to works of art and their accompanying frames.    
      </p>
      <p> Although it may not be
        noticible on a day to day basis paintings do accumulate
        dirt,grime,fireplace smoke and dust particles that diminish their
        vibrancy and brilliance. </p>
        <p> Rips, loss of tension, paint chipping and
        mould can occur over long periods of storage. Old varnish can turn dark
        and become brittle over time obscuring brilliance and detail of the
        work. </p>
         <p>  Antique gilded plaster frames are extremely prone to breakage,
        chipping,corner seperation and loss of finish.  All of these issues can
        be resolved and l would be more than happy to sit down with you and go
        over all the aspects concerned in retuning your piece to it's proper
        condition. </p>
        <p>You'll be surprised to see what can be done, no matter how
        poor it looks. I save works of art to be enjoyed by those who follow,
        </p>
        <p> GARY OWEN</p>
        
    </div>
    <div class="img-holder-services">
      <img src="@/assets/images/art-resto.webp" />
    </div>
  </div>
</template>
<script>
export default {
  name: "boxThree",
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

p {
  font-size: 1.2em;
}

.box {
  background-color: #f3f3f3;
  width: 80vw;
  height: 70vh;
  margin: 0 auto;
  
  
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
  padding: 2% 0% 2%;
}
</style>
