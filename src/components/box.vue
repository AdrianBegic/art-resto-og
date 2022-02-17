<template>
  <div class="box">
    <div class="img-holder">
      <img src="@/assets/images/owen.webp" />
    </div>
    <div class="text-holder">
      <container>
        <h1>GARY OWEN</h1>
        <h3 class="content" style="font-weight: 100">
          In the year 2000, after many years working in the art field, under
          various disciplines l decided to go out on my own again and open a
          gallery, framing shop and art restoration studio in my home town of
          Barrie, Ontario. It's been a very gratifying experience. Although
          tough at times l'm lucky to love what l do and continue to derive
          great pleasure in connecting with people with a common interest in
          art, whether it's framing a family photograph, selling a piece of art
          they connect with or restoring a family heirloom...
        </h3>
         <a href="#">Read More ❯</a> 
      </container>
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

h1 {
  letter-spacing: 0.5em;
}
.box {
  background-color: #f3f3f3;
  width: 70%;
  height: 80%;
  margin: 0 auto;
}

.img-holder {
  float: left;
  width: 50%;
  height: 100%;
}

.text-holder {
  float: right;
  width: 50%;
  height: 100%;
  color: #4d4d4d;
  font-weight: 100;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  margin: 1em;
  padding-top: 5%;
  font-family: 'Roboto', sans-serif;
  line-height: 1.3;
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
</style>
