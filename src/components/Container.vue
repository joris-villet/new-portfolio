<template>
  <div class="container">
     <slot></slot>
  </div>
</template>

<script>
export default {
   name: 'Container'
}
</script>

<style scoped>
   .container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 12rem 0;
   }
</style>