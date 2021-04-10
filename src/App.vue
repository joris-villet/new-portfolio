<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <button class="btnTop" @click="scrollTop">top</button>
  </div>
</template>

<script>

export default {
  mounted() {
    const btnTop = document.querySelector('.btnTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 700) {
          btnTop.style.opacity = "1";
      }
      else {
          btnTop.style.opacity = "0";
      }
    });
  },
  methods: {
    scrollTop: function() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
  
  #app {
    background: #f9f9f9;
    box-sizing: border-box;
    font-family: verdana;
    height: 3000px;
    // height: auto;
    font-family: 'Fjalla One', sans-serif;
  }

  p {
    color: #81758c;
  }

  .btnTop {
    position: fixed;
    opacity: 0;
    transition: .9s;
    bottom: 2rem;
    cursor: pointer;
    right: 8rem;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: #fff;
    outline: none;
    border: none;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    background: rgb(100,22,255);
    background: linear-gradient(90deg, rgba(100,22,255,0.4) 0%, rgba(55,45,255,1) 100%);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
