<template>
<div>
  <nav class="nav">
    <div class="container">
      <div class="navbar">
        <div class="navbar-profil">
          <h2 class="nav-title">{{ fullname }}</h2>
          <div class="nav-border">
            <img
              class="nav-img" 
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHdmV0OO6LZ3g/profile-displayphoto-shrink_800_800/0/1580138125004?e=1621468800&v=beta&t=7YYpgq7L8ox61jANMv7bPLqNfzrM3vP5HnTGlUYUiJk" 
              alt="photo de profil"
            >
        </div>
        </div>
        <ul class="nav-ul">
          <li class="nav-ul-item">
              <router-link v-if="home" class="nav-ul-item-link" to="/about">About me</router-link>
              <router-link v-else class="nav-ul-item-link" to="/">Home</router-link>
          </li>
          <li class="nav-ul-item">
            <router-link to="/contact" class="btn-contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="responsive-nav">
    <h2 class="responsive-nav-title">{{ fullname }}</h2>
    <i @click="handleNav(); $emit('clickBurger', $event.target)" class="burger fas fa-bars"></i>
  </div>
      <nav class="responsive-menu" :class="{navIsActive: navIsActive}">
        <router-link to="/" class="responsive-link">Home</router-link>
        <router-link to="/about" class="responsive-link">About me</router-link>
        <router-link to="/contact" class="responsive-link">Contact</router-link>
      </nav>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      fullname: 'Joris villet',
      home: true,
      path: this.$route.path,
      navIsActive: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.hideImg);
  },
  mounted() {
    this.getPath()
    this.handleFullnameColor();
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.navbar');
      if (window.screen.availWidth > 550) {
        if (window.scrollY > 50) nav.style.height = "80px";
        else nav.style.height = "140px";
      }
      else {
        if (window.scrollY > 50) nav.style.height = "40px";
        else nav.style.height = "80px";
      }
    });
  },
  methods: {
    getPath: function() {
      if (this.path !== "/") this.home = false;
      else this.home = true;
    },
    hideImg: function() {
      if (this.path === "/about") {
        const img = document.querySelector('.nav-border')
        if (window.scrollY > 170) {
          img.style.opacity = "1";
        }
        else {
          img.style.opacity = "0"
        }
      }
    },
    handleNav() {
      this.navIsActive = !this.navIsActive;
      const burger = document.querySelector('.burger');
      if (this.path === '/contact') {
        if (this.navIsActive !== true) burger.style.color = '#fff';
        else setTimeout(() => burger.style.color = '#915bfd', 300)
      }
    },
    handleFullnameColor() {
      if (this.path === '/contact') {
        const fullname = document.querySelector('.responsive-nav-title');
        fullname.style.color = '#fff';
        const burger = document.querySelector('.burger');
        burger.style.color = '#fff'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .responsive-nav {
    display: none;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 140px;
    transition: .3s ease-in;
    color: #9a9a9a;

    &-profil {
      display: flex;
      justify-content: flex-start;
    }

  }
  
  .nav {
    position: fixed;
    width: 100%;
    top: 0;
    background: #fff;
    z-index: 2;

    &-title {
      font-family: 'Lobster', cursive;
      font-size: 2rem;
      margin: 0 2rem 0 0;
      color: #915bfd;
      text-shadow: 4px 4px 1px rgba(0, 0, 0, 0.1);
    }

    &-border {
      margin: 0 auto;
      overflow: hidden;
      border: 2px solid rgb(100,22,255);
      border-radius: 50%;
      box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
      width: 40px;
      height: 40px;
      opacity: 0;
      transition: .3s ease-in;
    }

    &-img {
      width: 100%;
      height: auto;
    }

    &-ul {
      display: flex;
      align-self: center;
      padding: 0;
      margin: 0;
  
      &-item {
        align-self: center;
        list-style-type: none;
        position: relative;
        z-index: 1;
        
        &-link {
          display: inline-block;
          margin: 0;
          padding: .5rem 1.5rem;
          color: #915bfd;
          border: 2px solid transparent;
          font-size: 1.1rem;
          font-weight: bold;
          text-decoration: none;

          &:hover {
            border: 2px solid #915bfd;
            border-radius: 15px;
          }
        }
      }
    }  
  }

  .btn-contact {
    text-decoration: none;
    margin-left: 1rem;
    padding: .7rem 1.9rem;
    color: #fff;
    cursor: pointer;
    outline: none;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    background: rgb(100,22,255);
    background: linear-gradient(90deg, rgba(100,22,255,0.4) 0%, rgba(55,45,255,1) 100%);
  }

  @media (max-width: 550px) {

    .nav {
      visibility: hidden;
    }

    .responsive-nav {
      max-width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding: 1rem 0 0 0;
    }

    .responsive-nav-title {
      font-family: 'Lobster', cursive;
      font-size: 1.3rem;
      margin: 0;
      color: #915bfd;
      text-shadow: 4px 4px 1px rgba(0, 0, 0, 0.1);
    }

    .burger {
      font-size: 2rem;
      color: #915bfd;
      z-index: 9;
    }

    .burgerFixed {
      position: fixed;
      top: 1rem;
      right: 4rem;
    }

    .responsive-menu {
      opacity: 0.5;
      transition: all 0.4s ease-in-out;
      transform: translateX(-550px);
      background: #f9f9f9;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }

    .navIsActive {
      opacity: 1;
      transform: translateX(0);
    }

    .responsive-link {
      font-size: 2rem;
      color: #915bfd;
      text-decoration: none;
      margin: 1rem auto;
    }

  }


  
</style>