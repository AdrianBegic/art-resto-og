<template>
  <div class="box">
    <div class="text-holder">
      <container>
        <h1>GARY OWEN</h1>
        <h3 class="content">
        My name is Gary Owen,
          in the year 2000, after many years working in the art field, under
          various disciplines l decided to go out on my own again and open a
          gallery, framing shop and art restoration studio in my home town of
          Barrie, Ontario...
        </h3>
        <router-link class="header__nav-link" to="/About">Read More ❯</router-link>
      </container>
    </div>
    <div class="img-holder">
      <img id="owen" src="@/assets/images/owen.webp" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Box",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

img {
  max-width: 100%;
  max-height: 100%;
  min-width: 100%;
  min-height: 100%;
}

#owen {
  border-radius: 0px 5px 5px 0px;
}

p {
  font-size: 1.2em;
}

.box {
  background-color: #F3D7C1;
  width: 70vw;
  height: 70vh;
  margin: 0 auto;
  padding:0;
  border-radius: 5px;
}

.img-holder {
  float: right;
  width: 50%;
  height: 100%;
  padding: 0;
  overflow:hidden;
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
}

@media only screen and (max-width: 767px) {
    /* phones */
    .box{
    height: auto;
    width: 100vw;
    border-radius: 0px;
  }

h1 {
  padding: 5%;
  font-size: 3em;
}
   .text-holder { 
    float: none;
    margin-right:0;
    width:100%;
    height: auto;   
  }
  .img-holder{
    height: 50%;
    width:100%;
  }

  .content{
    padding-bottom: 5%;
  }

#owen {
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
