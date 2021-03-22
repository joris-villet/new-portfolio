<template>
  <nav class="nav">
    <div class="container">
      <div class="navbar">
        <h2 class="title">Joris villet</h2>
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
      home: true
    }
  },
  created() {
    this.route()
  },
  mounted(){
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.navbar');
      if (window.scrollY > 50) nav.style.height = "80px";
      else nav.style.height = "140px";
    });
  },
  methods: {
    route: function() {
      if (this.$route.name === "About") {
        this.home = false;
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
  .title {
    font-family: 'Lobster', cursive;
    font-size: 2rem;
    margin: 0;
    color: #915bfd;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 140px;
    transition: .3s ease-in;
    color: #9a9a9a;
  }
  
  .nav {
    position: fixed;
    width: 100%;
    top: 0;
    background: #fff;
    z-index: 2;

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
          color: #6416ff;
          border: 2px solid transparent;
          font-size: 1.3rem;
          font-weight: bold;
          text-decoration: none;

          &:hover {
            border: 2px solid #6416ff;
            border-radius: 5rem;
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
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    border-radius: 5rem;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    background: rgb(100,22,255);
    background: linear-gradient(90deg, rgba(100,22,255,0.4) 0%, rgba(55,45,255,1) 100%);
  }


  
</style>