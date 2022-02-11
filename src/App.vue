<template>
<header class="header">
        <div class="logo">OWEN GRAY</div>
        <a href="#" class="nav-btn">
            <svg class="nav-btn__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 30">
                <rect class="nav-rect" width="40" height="2" x="8" y="8" fill="#242423"/>
                <rect class="nav-rect" width="40" height="2" x="8" y="14" fill="#242423"/>
                <rect width="40" height="2" x="8" y="20" fill="#242423"/>
            </svg>
        </a>
    </header>
<div class="slide-0">
    <div class="intro__content">
        <h1 class="intro__title">OWEN</h1>
        <p class="intro__txt">Duda is going from strength to strength. Whether it’s in the prestigious gallery in the new World Trade Centre in New York or at an international art fair in Chicago or Hong Kong, people recognize the original response to life in Duda’s work, and go away feeling animated and energized by his vibrant creations.</p>
    </div>
    <img class="intro__img intro__img--1" src="https://assets.codepen.io/61488/duda-intro-1.jpg" />
    <img class="intro__img intro__img--2" src="https://assets.codepen.io/61488/duda-intro-2.jpg" />
</div>
</template>

<script>
export default {
    name: "App",
    components: {},
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

.header {
  position: fixed;
  left: 40px;
  top: 24px;
  z-index: 100;
  display: flex;
}
@media all and (max-width: 768px) {
  .header {
    display: block;
    left: 24px;
  }
}

.logo {
  font-size: 27px;
  letter-spacing: -1px;
}

.nav-btn,
.nav-btn__svg {
  width: 56px;
  height: 30px;
}

.nav-btn {
  display: block;
  margin: -2px 0 0 56px;
}
@media all and (max-width: 768px) {
  .nav-btn {
    margin: 18px 0 0 -6px;
  }
}

.nav-btn__svg {
  pointer-events: none;
}

.slide-0 {
    background-color: #fff;
    color: #000;
    width: 100%;
    height: 100vh;
}

.intro__img {
    position: absolute;
    width: 35%;
    max-width: 390px;
    height: auto;

    @media all and (max-width: 768px) {
        width: 75vw;
    }
}

.intro__img--1 {
    z-index: 2;
    left: 10%;
    bottom: 35%;

    @media all and (max-width: 768px) {
        top: 15vh;
        left: 50%;
        bottom: 50vh;
    }
}

.intro__img--2 {
    z-index: 1;
    left: 25%;
    bottom: 40%;

    @media all and (max-width: 768px) {
        top: 2vh;
        left: 70%;
        bottom: 60vh;
    }
}

.intro__content {
  position: absolute;
  right: 8%;
  bottom: 15%;
  z-index: 3;
}
@media all and (max-width: 768px) {
  .intro__content {
    right: auto;
  }
}

.intro__title {
  font-size: 20vw;
  overflow: hidden;
  letter-spacing: -2.3vw;
  padding-right: 2.3vw;
}
@media all and (max-width: 768px) {
  .intro__title {
    margin-bottom: 5vh;
  }
}

.intro__txt {
  max-width: 35vw;
  margin-left: 25vw;
}
@media all and (max-width: 768px) {
  .intro__txt {
    max-width: 80vw;
    margin-left: 5vw;
  }
}
</style>
