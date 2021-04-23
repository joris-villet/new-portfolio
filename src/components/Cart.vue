<template>
<transition name="fade">
   <div v-if="show">
      <div class="panier">
         <h2 class="title">Votre panier</h2>
         <div class="panier-content">
            <Shopping
               v-for="(product, index) of panier"
               :key="index"
               :productName="product.name"
               :productQuantity="product.quantity"
               :img="product.img"
            />
            <p class="total-price">Total: <span class="total-price-number">{{ total.toFixed(2) }} €</span></p>
            <button class="btn">Passer commande</button>
         </div>
      </div>
   </div>
</transition>
</template>

<script>
import Shopping from '@/components/Shopping'
export default {
   name: 'Cart',
   components: { Shopping },
   props: {
      show: Boolean,
      total: Number,
      panier: Array
   }
}
</script>

<style scoped>
   .panier {
      padding: 2rem;
      width: 250px;
      height: 400px;
      position: fixed;
      top: 10rem;
      right: 1rem;
      border: none;
      box-shadow: 1px 5px 5px rgba(0,0,0,0.1);
      border-radius: 5px;
      background: #fff;
   }

   .title {
      color: orange;
      font-weight: bold;
      margin: 0;
   }

   .panier-content {
      width: 100%;
      height: 310px;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: rgb(255, 214, 139) rgb(241, 241, 241);
   }

   .total-price {
      margin: 0.2rem 0 0 0;
      color: rgb(161, 161, 161);
      position: absolute;
      bottom: 3rem;
      right: 2rem;
   }

   .total-price-number {
      color: orange;
      font-weight: bold;
      font-style: italic;
      font-size: 1.5rem;
   }

   .btn {
      margin-right: 0.5rem;
      border-radius: 10px;
      background: #fff;
      padding: 0.2rem 0.8rem;
      box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
      color: orange;
      font-weight: bold;
      cursor: pointer;
      position: absolute;
      bottom: 1rem;
      right: 1rem;
   }

   .fade-enter-active, .fade-leave-active {
      transition: all .4s;
   }
   
   .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
   }

   @media (max-width: 550px) {

      .panier {
         padding: 2rem;
         width: 200px;
         height: 200px;
         position: fixed;
         top: 4rem;
         right: 1rem;
      }

      .panier-content {
         width: 100%;
         height: 120px;
      }

      .title {
         font-size: 1.2rem;
      }

      .total-price-number {
         font-size: 1.2rem;
      }

      .btn {
         font-size: 0.7rem;
      }

   }


</style>