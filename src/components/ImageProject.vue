<template>
   <img @click="$emit('get-img-full-size', $event.target)" class="image" :src="img" :alt="alt">
</template>

<script>
export default {
   name: 'ImageProject',
   props: {
      img: String,
      alt: String
   },
}
</script>

<style lang="scss" scoped>
   .image {
      width: 70%;
      box-shadow: 10px 10px 30px rgba(0,0,0,0.2);
      margin: 1rem auto;
      cursor: pointer;
      transition: .2s ease-in-out;

      &:hover {
         opacity: 0.5;
      }

      &:active {
         opacity: 0;
      }
   }

   .isActive {
      width: 100%;
      position: absolute;
   }
</style>