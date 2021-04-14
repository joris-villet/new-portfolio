<template>
  <div class="about">
    <NavBar />
    <transition name="slide">
      <div v-if="show">
        <Container>
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
              Toutes ces compétences m'apportent de l'appétence dans le milieu UI comme UX, qui me donnera
              je l'espère un élan dans le début de ma carrière de <strong>développeur web !</strong>
            </p>
            <p>
              Je vous renvoie sur la page <router-link to="/">Home</router-link> pour visualiser mes projets de développement et mon coding freestyle
              si ce n'est pas déjà fait.
            </p>
            <p class="m-8">Bonne visite !</p>
          </div>

        </Container>
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

export default {
  name: 'About',
  components: { NavBar, ProjectProfil, ModalImage, Container },
  data() {
    return {
      myVideo: VideoFoodTruck,
      show: false,
      activeModal: false,
      srcImg: '',
      altImg: '',
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .about {
    font-size: 1rem;

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

    &-img {
      width: 105%;
      height: auto;
    }
  }

  .project-video {
    margin: 8rem auto;

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

  .slide-enter-active, .slide-leave-active {
    transition: all .7s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-enter, .slide-fade-leave-to {
    transform: translateY(400px);
    opacity: 0;
  }
</style>
