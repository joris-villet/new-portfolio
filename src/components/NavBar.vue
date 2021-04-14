<template>
  <nav class="nav">
    <div class="container">
      <div class="navbar">
        <div class="navbar-profil">
          <h2 class="nav-title">Joris villet</h2>
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
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      home: true,
      path: this.$route.path
    }
  },
  created() {
    window.addEventListener('scroll', this.hideImg);
  },
  mounted(){
    this.getPath()
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.navbar');
      if (window.scrollY > 50) nav.style.height = "80px";
      else nav.style.height = "140px";
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
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
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
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


  
</style>