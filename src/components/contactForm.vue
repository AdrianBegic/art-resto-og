<template>
    <div class="box">
        <div class="text-holder">
      <container>
          <div class="row body">
    <form action="#">
      <ul>
        
        <li>
          <p class="left">
            <label for="first_name">first name</label>
            <input type="text" name="first_name" placeholder="John" />
          </p>
          <p class="pull-right">
            <label for="last_name">last name</label>
            <input type="text" name="last_name" placeholder="Smith" />      
          </p>
        </li>
        
        <li>
          <p>
            <label for="email">email <span class="req">*</span></label>
            <input type="email" name="email" placeholder="john.smith@gmail.com" />
          </p>
        </li>        
        <li><div class="divider"></div></li>
        <li>
          <label for="comments">comments</label>
          <textarea></textarea>
        </li>
        
        <li>
          <input class="btn btn-submit" type="submit" value="Submit" />
          <small>or press <strong>enter</strong></small>
        </li>
        
      </ul>
    </form>  
  </div>
       
      </container>
    </div>
    <div class="img-holder">
      <img id="map" src="../assets/images/map.webp" />
    </div>
    </div>
</template>

<script>
export default {
    name:"contactForm",
    props: {
    msg: String,
  },
}
</script>

<style scoped>
    .box {
  background-color: #F3D7C1;
  width: 60vw;
  height: 70vh;
  margin: 0 auto;
  padding:0;
  border-radius: 5px;
}

img {
  max-width: 100%;
  max-height: 100%;
  min-width: 100%;
  min-height: 100%;
}

#map {
  border-radius: 0px 5px 5px 0px;
}

p {
  font-size: 1.2em;
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
    height: 90vh;
    width: 80vw;
  }

h1 {
  padding-top: 10%;
}
   .text-holder { 
    float: none;
    margin-right:0;
    width:100%;
    height: auto;   
  }
  .img-holder{
    height: 60%;
    width:100%;
  }

#map {
  border-radius: 0px 0px 5px 5px;
}


  #media-width{
    display: none;
  }
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
}

</style>