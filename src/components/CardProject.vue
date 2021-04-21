<template>
  <router-link class="link" :to="url">
    <transition name="fade">
        <div v-if="loaded">
          <div class="container">
            <div class="container-img">
              <img class="img" :src="img" alt="image projet">
            </div>
            <div class="container-content">
                <h2 class="container-title">{{ title }}</h2>
                <p class="container-description">{{ description }}</p>
            </div>
          </div>
        </div>
    </transition>
  </router-link>
</template>

<script>
export default {
  name: 'CardProject',
  props: {
    url: String,
    img: String,
    title: String,
    description: String,
  },
  data() {
    return {
      loaded: false
    }
  },
  created() {
    this.animation()
  },
  methods: {
    animation: function() {
      setTimeout(() => { this.loaded = true }, 200)
    }
  }
}
</script>

<style  scoped>

  .container {
    overflow: hidden;
    width: 100%;
    height: 350px;
    background: #fff;
    border-radius: 2rem;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }

  .container-img {
    overflow: hidden;
    height: 220px;
  }

  .img {
    width: 100%;
    height: 100%;
    transition: .5s;
    filter: grayscale(80%);
  }

  .container-img:hover > .img {
    filter: grayscale(0%);
    transform: scale3d(1.2, 1.2, 1.2) rotate(2deg);
  }

  .container-content {
    padding: 1rem;
  }

  .container-title {
    text-align: center;
    padding: 0;
    margin: 0;
    color: rgb(155, 106, 255);
    font-weight: bold;
    font-size: 1.3rem;
    position: relative;
    font-family: 'Fjalla One', sans-serif;
  }

  .container-description {
    text-align: left;
    padding: 0.3rem 1rem;
    margin: 0;
    font-size: 0.9rem;
    line-height: 20px;
    z-index: 1;
    color: rgb(184, 184, 184);
  }

  .link {
    text-decoration: none;
  }

  .fade-enter-active {
    transition: all .8s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(200px);
    opacity: 0;
  }

  @media (max-width: 550px) {
    .container {
      width: 80%;
      margin: 0 auto;
      height: 295px;
    }

    .container-content {
      padding: 1rem 0;
    }

    .container-img {
      overflow: hidden;
      height: 170px;
    }

    .img {
      filter: grayscale(0);
    }

  }

</style>