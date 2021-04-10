<template>
  <div class="home">
    <NavBar />

    <div class="gradient">
      <div class="container">
        <h1 class="gradient-title">My portfolio</h1>
      </div>
    </div>

    <div class="container-project">
      <CardProject
        url="/iphone"
        img="https://images.wallpaperscraft.com/image/code_letters_screen_137590_1280x720.jpg"
        title="Use my Phone"
        description="Pratique d'intégrations et d'animations pour se faire la main en css"
      />
      
      <CardProject
        url="/about"
        img="https://images.wallpaperscraft.com/image/guitar_close-up_house_80963_1280x720.jpg"
        title="titre numéro 2"
        description="blablabla"
      />
      <CardProject
        url="/about"
        img="https://images.wallpaperscraft.com/image/car_neon_man_137624_1280x720.jpg"
        title="bin le dernier titre va"
        description="description ici"
      />
    </div>

    <div class="web">

    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import CardProject from '@/components/CardProject'
export default {
  name: 'Home',
  components: {
    NavBar,
    CardProject
  }
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin: 2rem auto;
    height: auto;

    &-project {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 20px;
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
    background: rgb(100,22,255);
    background: linear-gradient(90deg, rgba(100,22,255,0.4) 0%, rgba(55,45,255,1) 100%);  
    height: 300px;
    text-align: center;
    margin-top: 50px;

    &-title {
      text-align: left;
      font-size: 8rem;
      font-family: 'Lobster', cursive;
      color: #fff;
      line-height: 330px;
      text-shadow: 5px 5px 15px rgba(0,0,0,0.5);
    }
  }
</style>
