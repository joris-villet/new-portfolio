<template>

<transition name="fade">
  <div v-if="loaded">
    <div class="container__project__item">
        <div class="container__project__item__content">
          <img
            class="container__project__item__content__img"
            :src=url
            alt="image projet"
          >
          <h2 class="container__project__item__content__title">{{ title }}</h2>
          <p class="container__project__item__content__paragraphe">
              {{ description }}
          </p>
        </div>
      </div>
  </div>
</transition>

</template>

<script>
export default {
  name: 'CardProject',
  props: ['url', 'title', 'description', 'classbg'],
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
      setTimeout(() => {
        this.loaded = true;
      }, 200)
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
          filter: grayscale(70%);
          transform: scale3d(1.2, 1.2, 1.2) rotate(2deg);
        }
      &__img {
        width: 100%;
        transition: .5s;
       }
      &__title {
        text-align: left;
        background: #fff;
        padding: 1rem 0 0 1rem;
        margin: 0;
        color: #645175;
        font-weight: bold;
        font-size: 1.2rem;
        position: relative;
      }
      &__paragraphe {
        text-align: left;
        position: relative;
        padding: 0.3rem 1rem;
        font-size: 0.8rem;
        line-height: 15px;
        color: #867a91;
        z-index: 1;
        }
      }
    }
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