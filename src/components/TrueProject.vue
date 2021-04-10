<template>
  <a class="link" :href="url" target="_blank">
    <transition name="fade">
        <div v-if="loaded">
          <div class="container__project__item">
              <div class="container__project__item__content">
                <img
                  class="container__project__item__content__img"
                  :src="img"
                  alt="image projet"
                >
                <h2 class="container__project__item__content__title">{{ title }}</h2>
                <p class="container__project__item__content__paragraphe">{{ description }}</p>
              </div>
            </div>
        </div>
    </transition>
  </a>
</template>

<script>
export default {
  name: 'TrueProject',
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

<style lang="scss" scoped>
  
  .container__project {
    display: flex;
    justify-content: space-between;
    margin: 5rem 0;
    width: 100%;
    height: 100%;
    &__item {
      width: 100%;
      height: 350px;
      background: #fff;
      border-radius: 2rem;
      box-shadow: 10px 10px 30px rgba(0,0,0,0.2);
      overflow: hidden;
  
      &__content {

        &:hover > &__img {
          filter: grayscale(0%);
          transform: scale3d(1.2, 1.2, 1.2) rotate(2deg);
        }

        &__img {
          width: 100%;
          transition: .5s;
          height: 220px;
          filter: grayscale(80%);
        }

        &__title {
          text-align: center;
          background: #fff;
          padding: 0.5rem 0 0 1rem;
          margin: 0;
          color: rgb(155, 106, 255);
          font-weight: bold;
          font-size: 1.3rem;
          position: relative;
          font-family: 'Fjalla One', sans-serif;
        }

        &__paragraphe {
          text-align: left;
          position: relative;
          padding: 0.3rem 1rem;
          margin: 0;
          font-size: 0.9rem;
          line-height: 20px;
          z-index: 1;
          color: rgb(184, 184, 184);
        }
      }
    }
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
  .fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(200px);
    opacity: 0;
  }

</style>