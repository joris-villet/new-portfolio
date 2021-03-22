<template>
  <div class="about">
    <NavBar />
    <transition name="slide">
      <div v-if="show">
        <div class="container">
          <header>
            <div class="header">
              <div class="header-border">
                <img
                  class="header-img" 
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQHdmV0OO6LZ3g/profile-displayphoto-shrink_800_800/0/1580138125004?e=1621468800&v=beta&t=7YYpgq7L8ox61jANMv7bPLqNfzrM3vP5HnTGlUYUiJk" 
                  alt="photo de profil"
                >
              </div>
              <h2 class="header-title">Hello !!</h2>
            </div>
          </header>
          <p class="header-title-content">
            Je m'appelle Joris et bienvenue sur mon portfolio.<br><br>
            Depuis quelques années en reconversion dans l'informatique, passionné par le goût et les couleurs, j'ai d'abord étudié
            le Web Design. <br><br> 


            <img class="teateam" src="@/assets/images/moodboard-tea-team.jpg" alt="image projet tea team">


            Après cela je me suis tourné dans le développement pour pouvoir aller beaucoup plus loin dans les projets
            en manipulant les fonctionnalités.
            <br><br>
            Toutes ces compétences m'apportent de l'appétence dans le milieu UI comme UX, qui me donnera
              je l'espère un élan dans le début de ma carrière de <strong>développeur Junior..</strong>
              <br><br>
            Bonne visite !
          </p> 
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'About',
  components: {
    NavBar
  },
  data() {
    return {
      show: false
    }
  },
  created() {
    window.addEventListener('scroll', this.hideImg);
  },
  mounted() {
    this.show = true;
  },
  methods: {
    hideImg: function() {
      console.log(window.scrollY)
      const img = document.querySelector('.header-border')
      if (window.scrollY > 170) {
        img.style.opacity = "0"
      }
      else {
        img.style.opacity = "1"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .about {
    font-size: 1.5rem;
    color: #9387aa;
  }
  .container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 12rem 0;
    height: auto;
  }

  .header {
    display: flex;
    justify-content: center;
    margin: 0 0 0 5rem;
    width: 40%;

    &-border {
      margin: 0 auto;
      overflow: hidden;
      border: 2px solid rgb(100,22,255);
      border-radius: 50%;
      box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
      width: 200px;
      height: 200px;
      opacity: 1;
      transition: .3s ease-in;
    }

    &-title {
      align-self: center;
      margin: 0;
      font-size: 4rem;
      font-style: italic;
      color: rgb(172, 172, 172);
    }

    &-img {
      width: 105%;
      height: auto;
    }
  }

  .teateam {
    width: 60%;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.2);
  }

  .slide-enter-active {
    transition: all .8s ease;
  }
  .slide-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(400px);
    opacity: 0;
  }
</style>
