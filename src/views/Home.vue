<template>
  <div class="home">
    <NavBar @clickBurger="hideBody"/>
    <div :class="{noBody: hidden}">
      <div class="gradient">
        <div class="container">
          <h1 class="gradient-title">My portfolio</h1>
        </div>
      </div>
      <div class="container-project">
        <CardProject
          class="card"
          url="/iphone"
          :img="imageIphone"
          title="Use my Phone"
          description="Pratique d'intégrations et d'animations pour se faire la main en css."
        />
        <CardProject
          class="card"
          url="/shop"
          :img="imageShop"
          title="Click and collect App"
          description="Création d'une SPA pour faire son shopping en ligne. J'ai beaucoup appris sur les emit event !!"
        />
        <TrueProject
          class="card"
          url="https://mcvperformance.fr"
          :img="imageMcvperf"
          title="MCVPerformance"
          description="Premier projet solo et free pour un client du secteur automobile. Je commence à travailler sur la version 2 qui sera build avec NuxtJs."
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar"
import CardProject from "@/components/CardProject"
import TrueProject from '@/components/TrueProject'
import ImageMcvperf from '@/assets/img/logo-solo-mcv.png'
import ImageIphone from '@/assets/img/iphone.png'
import ImageShop from '@/assets/img/shop.png'


export default {
  name: "Home",
  components: { NavBar, CardProject, TrueProject },
  data () {
    return {
      imageIphone: ImageIphone,
      imageShop: ImageShop,
      imageMcvperf: ImageMcvperf,
      hidden: false
    }
  },
  methods: {
    hideBody() {
      setTimeout(() => {
        this.hidden = !this.hidden;
      }, 300)
    }
  }
};
</script>

<style lang="scss" scoped>

  .noBody {
    display: none;
  }

  .home {
    padding: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;

    &-project {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 50px;
      max-width: 1200px;
      margin: 5rem auto;
      height: auto;
    }
  }

.web {
  margin: 10rem auto;
  width: 100%;
  height: 800px;
}

.gradient {
  background: rgb(100, 22, 255);
  background: linear-gradient(
    90deg,
    rgba(100, 22, 255, 0.4) 0%,
    rgba(55, 45, 255, 1) 100%
  );
  height: 250px;

  &-title {
    line-height: 250px;
    padding: 0;
    text-align: left;
    font-size: 8rem;
    font-family: "Lobster", cursive;
    color: #fff;
    text-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  }
}

  @media (max-width: 1250px) {
    .container {
      max-width: 900px;

      &-project {
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
      }
    }
    
    .gradient {
      height: 200px;

      &-title {
        font-size: 6rem;
        line-height: 200px;
      }
    }

    .card {
      width: 400px;
    }
  }

  @media (max-width: 875px) {
    .container {
      max-width: 900px;

      &-project {
        grid-template-columns: 1fr;
        justify-items: center;
      }
    }
  }

  @media (max-width: 550px) {

    .card {
      width: auto;
    }

    .home {
      padding: 0;
    }

    .container {
      max-width: 400px;
    }

    .gradient {
      height: 100px;

      &-title {
        font-size: 3rem;
        line-height: 100px;
        margin: 1rem;
      }
    }
  }
</style>
