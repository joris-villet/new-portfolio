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
      if (window.scrollY > 700) btnTop.style.opacity = "1";
      else btnTop.style.opacity = "0";
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
    color: #777679;
  }

  .btnTop {
    position: fixed;
    opacity: 0;
    transition: .9s;
    bottom: 2rem;
    cursor: pointer;
    right: 8rem;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    color: rgb(100,22,255);
    outline: none;
    border: 3px solid rgb(100,22,255);
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    background: #fff;
    text-transform: uppercase;
    font-weight: bold;
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
