<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <!-- <button @click="scrollTop"><i class="fas fa-arrow-up btnTop"></i></button> -->
    <i @click="scrollTop" class="fas fa-arrow-up btnTop"></i>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    const btnTop = document.querySelector('.btnTop');
    if (window.screen.availWidth > 550) {

      window.addEventListener('scroll', () => {
        if (window.scrollY > 700) {
          btnTop.style.opacity = "1";
          btnTop.style.fontSize =  '1.5rem';
        } 
        else {
          btnTop.style.opacity = "0";
          btnTop.style.fontSize =  'inherit';
        } 
      });
    }
    else {
      btnTop.style.display = "none";
    }
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
    background: #f9f9f9;
    box-sizing: border-box;
  }
  
  #app {
    
    // height: 3000px;
    height: auto;
    font-family: 'Fjalla One', sans-serif;
  }

  p {
    color: #777679;
  }

  .btnTop {
    position: fixed;
    bottom: 2rem;
    right: 8rem;
    opacity: 0;
    transition: .4s;
    cursor: pointer;
    font-size: 0;
    padding: 1rem;
    border-radius: 10px;
    color: rgb(100,22,255);
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
  }

  // .fade-enter-active,
  // .fade-leave-active {
  //   transition-duration: 0.3s;
  //   transition-property: opacity;
  //   transition-timing-function: ease;
  // }

  .fade-enter-active, .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
    
</style>
