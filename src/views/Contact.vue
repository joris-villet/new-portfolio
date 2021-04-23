<template>
  <div class="container gradient">
      <NavBar />
      <transition name="slide">
         <div v-if="show">
            <Container>
               <div class="container-contact">
                  <h2 class="title">Contact me</h2>
                  <div class="links">
                     <div>
                        <a target="_blank" href="https://github.com/joris-villet">
                           <i class="fab fa-github"></i>
                        </a>
                     </div>
                     <div>
                        <a target="_blank" href="https://www.linkedin.com/in/joris-villet/">
                           <i class="fab fa-linkedin"></i>
                        </a>
                     </div>
                     <div>
                        <a href="mailto:jorisvillet@gmail.com">
                           <i class="fas fa-at"></i>
                        </a>
                     </div>
                  </div>
                  <p class="text">N'hésitez pas de m'écrire ou de donner votre avis sur mon portfolio</p>
                  <p class="thanks">Merci de votre visite</p>
               </div>
            </Container>
         </div>
      </transition>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Container from '@/components/Container'

export default {
   name: 'Contact',
   components: { NavBar, Container },
   data() {
      return {
         show: false
      }
   },
   mounted() {
    this.show = true;
   }
}
</script>

<style lang="scss" scoped>

   .container {
      
      text-align: center;
      color: #fff;

      &-contact {
         width: 100%;
         min-height: min-content;
         padding: 3rem 0;
         border-radius: 20px;
         background: #fff;
      }
   }

   .title {
      font-size: 6rem;
      text-align: center;
      color: #915bfd;
      font-family: "Lobster", cursive;
      margin: 0;
   }

   .links {
      display: flex;
      justify-content: space-between;
      margin: 2rem auto;
      width: 330px;
   }

   .fa-github, .fa-linkedin, .fa-at {
      font-size: 4rem;
      padding: 1rem;
      border-radius: 4px;
      border: 1px solid rgb(216, 216, 216);
      box-shadow: 1px 2px 2px rgba(0,0,0,0.2);
      cursor: pointer
   }

   .fa-github {
      color: rgb(27, 27, 27);
   }

   .fa-linkedin {
      color: #2a8cdb;
   }

   .fa-at {
      color: #fc6068;
   }

   .fa-github:hover, .fa-linkedin:hover, .fa-at:hover {
      box-shadow: 1px 2px 2px #915bfd;
      transform: translateY(1px);
   }

   .gradient {
      background: rgb(100, 22, 255);
      background: linear-gradient(
         90deg,
         rgba(100, 22, 255, 0.4) 0%,
         rgba(55, 45, 255, 1) 100%
      );
      height: 300px;
      text-align: center;
      margin-top: 50px;
   }

   .text {
      margin: 3rem auto;
      color:#b8b8b8;
      font-style: italic;
      font-size: 1.2rem;
   }

   .thanks {
      color: #915bfd;
      font-size: 1.2rem;
   }

   .slide-enter-active, .slide-leave-active {
      transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }

   .slide-enter, .slide-fade-leave-to
   /* .slide-fade-leave-active below version 2.1.8 */ {
      transform: translateY(100px);
      opacity: 0;
   }

   @media (max-width: 550px) {

      .container {
         padding: 0;
      }

      .gradient {
         margin: 0;
      }

      .title {
         font-size: 2rem;
      }

      .text {
         margin: 6rem auto;
         font-size: 1.2rem;
         width: 80%;
      }
   }
</style>