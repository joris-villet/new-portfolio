<template>
   <div class="project">
      <div class="project-content">  
            <h2 class="project-content-title">{{ title }}</h2>
            <slot></slot>
      </div>
      <div class="project-images">
            <ImageProject
               @get-img-full-size="getImgFullSize"
               :img="imageTeaTeam"
               alt="Photo Moodboard du projet Tea Team"
            />
            <ImageProject
               @get-img-full-size="getImgFullSize"
               :img="imageLune"
               alt="Photo Moodboard du projet Tea Team"
            />
            <ImageProject
               @get-img-full-size="getImgFullSize"
               :img="imageTheking"
               alt="Photo Moodboard du projet Tea Team"
            />
            <ImageProject
               @get-img-full-size="getImgFullSize"
               :img="imageMoodmcvperf"
               alt="Photo Moodboard du projet Tea Team"
            />
      </div>
   </div>
</template>

<script>
import ImageProject from '@/components/ImageProject'
import ImageTeaTeam from '@/assets/img/moodboard-tea-team.jpg'
import ImageLune from '@/assets/img/lune.jpg'
import ImageTheking from '@/assets/img/theking.png'
import ImageMoodmcvperf from '@/assets/img/moodmcvperf.png'
export default {
   name: 'ProjectProfil',
   components: { ImageProject },
   props: {
      title: String,
      img: String,
      alt: String
   },
   data () {
      return {
         imageTeaTeam: ImageTeaTeam,
         imageLune: ImageLune,
         imageTheking: ImageTheking,
         imageMoodmcvperf: ImageMoodmcvperf,
      }
   },
   methods: {
      getImgFullSize(payload) {
         this.$emit('get-img-full-size', payload)
      }
   }
}
</script>

<style scoped lang="scss">
   .project { // parent

      display: flex;
      justify-content: space-between;
      margin: 8rem auto;
      width: 100%;
      position: relative;

      &-content { // child

         &-title {
            margin: 0 0 2rem 0;  
            font-weight: bold;
            color: #915bfd;
         }

         &-description {
            font-family: 'Fjalla One', sans-serif;
            color:#b8b8b8;
            padding: 2rem 0;
         }
      }

      &-images { // child
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         width: 70%;
      }
   }
</style>