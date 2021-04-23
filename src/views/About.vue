<template>
  <div class="about">
    <NavBar @clickBurger="hideBody" />
    <transition name="slide">
      <div v-if="show">
        <div :class="{noBody: hidden}">

        <Container class="container">
          <header>
            <div class="header">
              <div class="header-border">
                <img
                  class="header-img" 
                  :src="myPhoto"
                  alt="photo de profil"
                >
              </div>
              <h2 class="header-title">Hello !!</h2>
            </div>
          </header>
          <p class="header-content">
            Je m'appelle Joris et bienvenue sur mon portfolio.<br><br>
            Depuis quelques années en reconversion dans l'objectif d'être acteur du Web, je suis passionné par les couleurs, les animations, le code, <br>
            le travail et la logique qui se cache derrière tout ça !<br><br>
            Pour bien débuter j'ai suivi une formation dans le <strong>Web Design.</strong> 
          </p>

          <ProjectProfil
            @get-img-full-size="getImgFullSize"
            title="Découverte de Photoshop et Illustrator"
          >
            <h3 class="header-title-project">TeaTeam</h3>
            <p class="header-content-project">
              La première image est la réalisation d'une Moodboard dans le but futur était de créer un logo pour
              notre promo de web designer fan de thé.
            </p>
            <h3 class="header-title-project">The Moon</h3>
            <p class="header-content-project">
              Photo montage avec Photoshop pour expérimenter la puissance des filtres, effets et calques.
            </p>
            <h3 class="header-title-project">The Lion King</h3>
            <p class="header-content-project">
              Pratique sur le détourage à la plume avec illustrator, un régal !!
            </p>
            <h3 class="header-title-project">MCVPerformance</h3>
            <p class="header-content-project">
              Moodboard de mon projet solo et free pour un client travaillant dans le secteur automobile.
              J'ai commencé ce projet en web design, mais je l'ai réellement fini après ma formation web developper.
            </p>
          </ProjectProfil>


          <div class="project-video">
            <h2 class="project-video-title">After Effect</h2>
            <p class="project-video-content">
              After Effect pour le motion design est également abordé en web design, même si je vous l'accorde mon montage n'est pas digne d'un Spielberg.
            </p>
            <div class="container-video">
            <video class="video" width="500" height="350" onloadstart="this.volume=0.2" controls>
                <source :src="myVideo" type="video/mp4">
                Your browser does not support the video tag.
              </video> 
            </div>
          </div>
     

          <ModalImage
            :img="srcImg"
            :alt="altImg"
            :activeModal="activeModal"
            @hide-modal="hideModal"
            :sizeImg="activeSize"
          />

          <div class="text-center">
            <p>
              Après cela j'ai enchaîné dans le développement web pour pouvoir aller plus loin 
              et mettre mes réalisations en code afin de les partager à tous..
            </p>
            <p>
              Je vous renvoie sur la page <router-link to="/">Home</router-link> pour visualiser mes projets de développement et mon coding freestyle
              si ce n'est pas déjà fait.
            </p>
            <div class="stack">
              <h3 class="stack-title">Mes Technos</h3>
              <div class="dev-icon">
                <i class="dev-icon-html fab fa-html5"></i>
                <i class="dev-icon-css fab fa-css3-alt"></i>
                <i class="dev-icon-js fab fa-js"></i>
                <img class="dev-icon-vuejs" :src="iconVuejs" alt="icon vuejs">
                <i class="dev-icon-nodejs fab fa-node-js"></i>
                <img class="dev-icon-postgres" :src="iconPostgres" alt="icon postgres">
                <img class="dev-icon-sqitch" :src="iconSqitch" alt="icon sqitch">
              </div>
            </div>
            <p>
              Toutes ces compétences m'apportent de l'appétence dans le milieu UI comme UX, qui me donnera
              je l'espère un élan dans le début de ma carrière de <strong>développeur web !</strong>
            </p>
            <p class="m-8">Bonne visite !</p>
          </div>

        </Container>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import ProjectProfil from '@/components/ProjectProfil'
import ModalImage from '@/components/ModalImage'
import VideoFoodTruck from '@/assets/video/foodtruck.mp4'
import Container from '@/components/Container'
import IconPostgres from '@/assets/img/postgres.png'
import IconSqitch from '@/assets/img/sqitch.png'
import IconVuejs from '@/assets/img/vuejs.png'
import MyPhoto from '@/assets/img/moi.jpeg'

export default {
  name: 'About',
  components: { NavBar, ProjectProfil, ModalImage, Container },
  data() {
    return {
      iconVuejs: IconVuejs,
      iconPostgres: IconPostgres,
      iconSqitch: IconSqitch,
      myVideo: VideoFoodTruck,
      myPhoto: MyPhoto,
      show: false,
      activeModal: false,
      srcImg: '',
      altImg: '',
      hidden: false,
      activeSize: {
        width: '70%',
        padding: '3rem',
        background: '#fff',
        zIndex: '9',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.hideImgProfil);
  },
  mounted() {
    this.show = true;
  },
  methods: {
    hideImgProfil() {
      if (this.$route.name === "About") {
        const img = document.querySelector('.header-border')
        if (window.scrollY > 170) {
          img.style.opacity = "0";
        }
        else {
          img.style.opacity = "1";
        }
      }
    },
    getImgFullSize(payload) {
      console.log(payload)
      if (payload.id === 0) this.activeSize.width = '50%';
      else if (payload.id === 1) this.activeSize.width = '60%';
      else if (payload.id === 2) this.activeSize.width = '30%';
      else if (payload.id === 3) this.activeSize.width = '20%';
      this.srcImg = payload.img;
      this.altImg = payload.alt;
      this.activeModal = true;
    },
    hideModal() {
      this.activeModal = false;
    },
    hideBody() {
      setTimeout(() => {
        this.hidden = !this.hidden;
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>

    .noBody {
      display: none;
    }

    .about {
      font-size: 1rem;
      color:#b8b8b8;

    p {
      color:#b8b8b8;
    }

    strong {
      font-style: italic;
      color: #d2bcff;
    }

    a {
      text-decoration: none;
      color: #915bfd;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin: 0 0 0 5rem;
    width: 40%;

    &-border {
      margin: 0;
      overflow: hidden;
      border: 2px solid rgb(100,22,255);
      border-radius: 50%;
      box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
      max-width: 200px;
      min-width: 80px;
      height: auto;
      opacity: 1;
      transition: .3s ease-in;
      display: flex;
      justify-content: center;
      align-self: center;
    }

    &-img {
      width: 100%;
      height: auto;
    }

    &-title {
      align-self: center;
      margin: 0;
      font-size: 4rem;
      font-style: italic;
      color: #915bfd;

      &-project {
        color: #915bfd;
        margin: 0;
        font-size: 1.3rem;
      }
    }

    &-content {
      font-family: 'Fjalla One', sans-serif;
      color:#b8b8b8;
      text-align: center;

      &-project {
        color:#b8b8b8;
        font-size: 1rem;
        width: 70%;
        margin: 0.5rem 0 1.5rem 0;
      }
    }
  }

  .project-video {
    margin: 12rem auto;

    &-title {
      text-align: center;
      margin: 2rem auto;  
      font-weight: bold;
      color: #915bfd;
    }

    &-content {
      text-align: center;
      font-size: 1rem;
    }
  }

  .container-video {
    text-align: center;
  }

  .text-center {
    text-align: center;
  }

  .m-8 {
    margin: 4rem auto;
    color: #915bfd!important;
    font-size: 2rem;
  }

  .stack {
    margin: 4rem auto;
    max-width: 50%;
    text-align: left;
  }

  .stack-title {
    margin: 0;
    color: #915bfd;
    font-style: italic;
  }

  .dev-icon {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem 1rem 2rem;
    border-bottom: 2px solid #915bfd;
    border-radius: 10px;
  }

  .fab {
    font-size: 3rem;
  }

  .dev-icon-postgres, .dev-icon-sqitch {
    width: 35px;
    height: 40px;
  }

  .dev-icon-vuejs {
    width: 45px;
  }

  .dev-icon-html {
    color: orangered;
  }

  .dev-icon-css {
    color: rgb(52, 140, 240);
  }

  .dev-icon-js {
    color: rgb(255, 207, 50);
  }
  
  .dev-icon-nodejs {
    color: rgb(129, 202, 18);
  }

  .dev-icon-git {
    color: rgb(252, 59, 0)
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-enter, .slide-fade-leave-to {
    transform: translateY(400px);
    opacity: 0;
  }

  @media (max-width: 550px) {

    .container {
      padding: 0;
    }

    .header {
      width: 80%;
      margin: 2rem auto;

      &-border {
        max-width: 80px;
        min-width: 20px;
      }
      
      &-title {
        font-size: 2.5rem;
        margin-right: 1rem;
      }

      &-content {
        width: 80%;
        margin: 0 auto;
        text-align: left;

        &-project {
          width: 100%;
        }
      }
    }

    .project-video {
      margin: 8rem auto;
    }

    .project-images {
      width: 100%;
    }

    .project-video-content {
      text-align: left;
      width: 80%;
      margin: 1rem auto;
    }

    .image {
      justify-self: start;
    }

    .container-video {
      max-width: 80%;
      margin: 0 auto;
    }

    .video {
      margin-top: 2rem;
      width: 100%;
      min-width: 200px;
      height: auto;
    }

    .text-center {
      width: 80%;
      margin: 0 auto;
      text-align: left;
    }

    .stack {
      max-width: 100%;
    }

    .dev-icon {
      width: auto;
    }

    .fab {
      font-size: 2rem;
    }

    .dev-icon-postgres, .dev-icon-sqitch {
      width: 25px;
      height: 30px;
    }

    .dev-icon-vuejs {
      width: 35px;
    }

  }

  @media (max-width: 320px) {
    .header-title {
      font-size: 2rem;
      margin-right: 1rem;
    }
  }


</style>
