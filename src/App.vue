<template>
<header class="header">
    <a class="header__logo" href="#">GARY OWEN</a>
    <div class="ham-menu" @click="changeVisibility()" :class="{ 'active': burgerVisibility }">
        <span class="ham-menu__item"></span>
        <span class="ham-menu__item"></span>
        <span class="ham-menu__item"></span>
    </div>
    <nav class="header__nav-wrap" :class="{ 'open': burgerVisibility }">
        <ul class="header__nav-list" @click="burgerVisibility = false">
            <li class="header__nav-item"><a class="header__nav-link" href="#">SERVICES</a></li>
            <li class="header__nav-item"><a class="header__nav-link" href="#">ABOUT</a></li>
            <li class="header__nav-item"><a class="header__nav-link" href="#">GALLERY</a></li>
            <li class="header__nav-item"><a class="header__nav-link" href="#">CONTACT</a></li>
        </ul>
    </nav>
</header>

<div class="slide-0">
    <div class="intro__content">
        <h1 class="intro__title">OWEN</h1>
        <p class="intro__txt">Duda is going from strength to strength. Whether it’s in the prestigious gallery in the new World Trade Centre in New York or at an international art fair in Chicago or Hong Kong, people recognize the original response to life in Duda’s work, and go away feeling animated and energized by his vibrant creations.</p>
    </div>
    <img class="intro__img intro__img--1" src="@/assets/images/pic2.webp" />
    <img class="intro__img intro__img--2" src="@/assets/images/pic1.webp" />
</div>
</template>

<script>
export default {
    name: "App",
    components: {
      
    },

    data() {
        return {
            burgerVisibility: false
        }
    },
    methods: {
        changeVisibility() {
            this.burgerVisibility = !this.burgerVisibility;
        }
    },
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
    background-color: #000;
    color: #fff;
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
    bottom: 20%;

    @media all and (max-width: 768px) {
        top: 15vh;
        left: 50%;
        bottom: 50vh;
    }
}

.intro__img--2 {
    z-index: 1;
    left: 25%;
    bottom: 30%;

    @media all and (max-width: 768px) {
        top: 2vh;
        left: 70%;
        bottom: 60vh;
    }
}

.intro__content {
    position: absolute;
    right: 5%;
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



.header {
    display: flex;
    width: 100%;
    background-color: #000;
    color: #fff;
    align-items: center;
    position: relative;
    box-sizing: border-box;
}

@media screen and (max-width: 559px) {
    .header {
        height: 60px;
    }
}

@media screen and (min-width: 560px) and (max-width: 959px) {
    .header {
        height: 70px;
    }
}

@media screen and (min-width: 960px) {
    .header {
        height: 70px;
    }
}

.header__logo {
    display: inline-block;
    height: auto;
    text-decoration: none;
    color: #fff;
}

@media screen and (max-width: 559px) {
    .header__logo {
        margin-left: 16px;
        font-size: 18px;
        letter-spacing: 0.07em;
    }
}

@media screen and (min-width: 560px) and (max-width: 959px) {
    .header__logo {
        margin-left: 16px;
        font-size: 24px;
        letter-spacing: 0.05em;
    }
}

@media screen and (min-width: 960px) {
    .header__logo {
        margin-left: 24px;
        font-size: 26px;
        letter-spacing: 0.05em;
    }
}

@media screen and (min-width: 1200px) {
    .header__logo {
        margin-left: 32px;
    }
}

.header__nav-wrap {
    height: 100%;
    width: max-content;
    margin-left: auto;
}

@media screen and (max-width: 959px) {
    .header__nav-wrap {
        position: fixed;
        left: 0;
        top: 0;
        display: none;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.9);
        width: 100%;
        height: 100%;
    }
}

@media screen and (min-width: 960px) {
    .header__nav-wrap {
        display: inline-block;
        margin-right: 16px;
    }
}

.header__nav-wrap.open {
    display: block;
}

.header__nav-list {
    list-style: none;
    height: 100%;
    margin: 0;
    padding: 0;
}

@media screen and (max-width: 959px) {
    .header__nav-list {
        height: 100%;
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
        padding-top: 30vh;
    }
}

@media screen and (min-width: 960px) {
    .header__nav-list {
        display: flex;
        align-items: center;
    }
}

.header__nav-item {
    width: max-content;
}

@media screen and (max-width: 559px) {
    .header__nav-item {
        display: block;
        margin: 0 auto;
        margin-bottom: 32px;
        text-align: center;
    }
}

@media screen and (min-width: 560px) and (max-width: 959px) {
    .header__nav-item {
        display: block;
        margin: 0 auto;
        margin-bottom: 40px;
        text-align: center;
    }
}

@media screen and (min-width: 960px) {
    .header__nav-item {
        display: inline-block;
        margin-right: 24px;
    }
}

@media screen and (min-width: 1200px) {
    .header__nav-item {
        margin-right: 40px;
    }
}

.header__nav-link {
    position: relative;
    display: inline-block;
    text-decoration: none;
    letter-spacing: 0.15em;
    color: #fff;
}

@media screen and (max-width: 959px) {
    .header__nav-link {
        font-size: 21px;
        color: #fff;
    }
}

@media screen and (min-width: 960px) {
    .header__nav-link {
        font-size: 18px;
    }
}

@media screen and (min-width: 1200px) {
    .header__nav-link {
        font-size: 20px;
    }
}

.header__nav-link::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    transform: scale(0, 1);
    transform-origin: center top;
    transition-duration: 0.25s;
}

@media screen and (max-width: 959px) {
    .header__nav-link::after {
        background-color: #fff;
    }
}

@media screen and (min-width: 960px) {
    .header__nav-link::after {
        background-color: #1a1c1a;
    }
}

.header__nav-link:hover::after {
    transform: scale(1, 1);
}

@media screen and (max-width: 959px) {
    .ham-menu {
        display: inline-block;
        box-sizing: border-box;
        margin-left: auto;
        margin-right: 16px;
        transition: all 0.3s;
        z-index: 20;
        position: relative;
        width: 40px;
        height: 40px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        border-radius: 5px;
        border: 2px solid #000;
        cursor: pointer;
    }
}

@media screen and (min-width: 960px) {
    .ham-menu {
        display: none;
    }
}

@media screen and (max-width: 959px) {
    .ham-menu__item {
        display: inline-block;
        box-sizing: border-box;
        transition: all 0.3s;
        position: absolute;
        width: 30px;
        height: 4px;
        background-color: #000;
        border-radius: 5px;
    }
}

.ham-menu__item:nth-of-type(1) {
    top: 8px;
}

.ham-menu__item:nth-of-type(2) {
    top: 16px;
}

.ham-menu__item:nth-of-type(3) {
    bottom: 8px;
}

.ham-menu.active {
    border: none;
}

.ham-menu.active .ham-menu__item:nth-of-type(1) {
    -moz-transform: translateY(10px) rotate(-45deg);
    -webkit-transform: translateY(10px) rotate(-45deg);
    transform: translateY(10px) rotate(-45deg);
    background-color: #fff;
}

.ham-menu.active .ham-menu__item:nth-of-type(2) {
    transition-duration: 0s;
    opacity: 0;
}

.ham-menu.active .ham-menu__item:nth-of-type(3) {
    -moz-transform: translateY(-10px) rotate(45deg);
    -webkit-transform: translateY(-10px) rotate(45deg);
    transform: translateY(-10px) rotate(45deg);
    background-color: #fff;
}
</style>
