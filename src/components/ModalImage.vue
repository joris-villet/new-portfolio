<template>
   <transition name="fade">
      <div @click="$emit('hide-modal')" v-if="activeModal" class="modal">
         <div class="overlay">
            <div :style="sizeImg" class="container-image">
               <img :src="img" :alt="alt">
            </div>
         </div>
      </div>
   </transition>
</template>

<script>
export default {
   name: 'ModalImage',
   props: {
      img: String,
      alt: String,
      activeModal: Boolean,
      sizeImg: Object
   },
}
</script>

<style lang="scss" scoped>
   .modal {
      width: 100%;
      height: 100%;
      background: #fff;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
   }

   .overlay {
      width: 100%;
      height: 100%;
   }

   .container-image {
      width: 50%;
      padding: 3rem;
      background: #fff;
      z-index: 9;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      img {
         width: 100%;
         display: block;
         margin: 0 auto;
      }
   }

   .fade-enter-active {
    transition: all .6s ease;
   }

   .fade-leave-active {
      transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }

   .fade-enter, .fade-fade-leave-to
   /* .slide-fade-leave-active below version 2.1.8 */ {
      opacity: 0;
      width: 0;
   }
</style>