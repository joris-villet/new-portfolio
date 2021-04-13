<template>
   <div class="project">
      <div class="project-content">  
            <h2 class="project-content-title">{{ title }}</h2>
            <slot></slot>
      </div>
      <div class="project-images">
         <ImageProject
            v-for="(project, index) of dataProject"
            :key="index"
            @get-img-full-size="getImgFullSize({id: index, img: project.img, alt: project.alt})"
            :img="project.img"
            :alt="project.alt"
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
      alt: String,
      showImageProject: Boolean
   },
   data () {
      return {
         imageTeaTeam: ImageTeaTeam,
         imageLune: ImageLune,
         imageTheking: ImageTheking,
         imageMoodmcvperf: ImageMoodmcvperf,
         dataProject: [
            {
               img: ImageTeaTeam,
               alt: "Photo Moodboard du projet Tea Team"
            },
            {
               img: ImageLune,
               alt: "Photo lune"
            },
            {
               img: ImageTheking,
               alt: "Photo le roi lion"
            },
            {
               img: ImageMoodmcvperf,
               alt: "Photo Moodboard du projet MCVPerformance"
            }
         ]
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