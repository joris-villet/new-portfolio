<template>
<div>
    <NavBar />
    <div class="shop">
        <div class="container-products">
          <Product
            v-for="(product, index) of products"
            :key="index"
            :name="product.name"
            :price="product.price"
            :quantity="product.quantity"
            :img="product.img"
            @add-quantity="addQuantity(product.id)"
            @remove-quantity="removeQuantity(product.id)"
            @add-panier="addPanier(product.id)"
          />
        </div>
          <Cart
            :total="totalPanier"
            :show="show"
            :panier="panier"
          />
    </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Product from "@/components/Product"
import Cart from '@/components/Cart'
export default {
   name: 'Shop',
   components: { Product, Cart, NavBar },
    data() {
    return {
      products: [
        {
          id: 1,
          name: "Pomme",
          price: 0.99,
          quantity: 1,
          img: 'https://media.gerbeaud.net/2017/01/640/pomme-detouree.jpg'
        },
        {
          id: 2,
          name: "Banane",
          price: 1.1,
          quantity: 1,
          img: 'https://img-3.journaldesfemmes.fr/E4fjdszC1JEraBTfqCUxtIioLTw=/1240x/smart/d47b1bd18da64f2a94a7ee7286be5ee9/ccmcms-jdf/10662309.jpg'
        },
        {
          id: 3,
          name: "Orange",
          price: 1.3,
          quantity: 1,
          img: 'https://img-3.journaldesfemmes.fr/Ng489iPPblpktUb1w8WYt1nLkTI=/1240x/smart/83c0e4f55dd846dea2be0be27e715dcd/ccmcms-jdf/10662446.jpg'
        },
        {
          id: 4,
          name: "Cerise",
          price: 0.70,
          quantity: 1,
          img: 'https://www.lhotellerie-restauration.fr/journal/produit-boisson/2017-06/img/thinkstockphotos-5096127_001.jpg'
        },
      ],
      totalPanier: 0,
      show: false,
      panier: [],
      shopping: []
    };
  },
  methods: {

    addQuantity(productId) {
      /* Version sans id, utiliser index de :key="index" en argument dans le composant
      =>
        const product = this.products[index];
        product.quantity++; */
        
      const product = this.products.find(product => product.id === productId);
      product.quantity++;
    },
    removeQuantity(productId) {
      const product = this.products.find(product => product.id === productId);
      if (product.quantity === 1) return;
      else product.quantity--;
    },
    addPanier(productId) {
      const product = this.products.find(product => product.id === productId);
      const somme =  product.price * product.quantity;
      this.totalPanier += somme;
      if (this.totalPanier === 0) this.show = false;
      else this.show = true;

      if (this.panier.length === 0) {
        console.log("tableau vide")
        this.shopping.push(product.name)
        this.panier.push({
          name: product.name,
          quantity: product.quantity,
          img: product.img
        })
      }

      else {
        // tableau non vide
        const isExist = this.shopping.includes(product.name)
        console.log(isExist)
    
        if (isExist) {
          console.log("produit existant")
          const thisProduct = this.panier.filter(prod => prod.name === product.name);
          thisProduct.forEach(props => props.quantity += product.quantity)
        }
        else {
          this.panier.push({
            name: product.name,
            quantity: product.quantity,
            img: product.img
          })
          this.shopping.push(product.name)
        }
      }
      product.quantity = 1;
    },
  },
}
</script>

<style scoped>

  .shop {
    margin: 0;
    padding-top: 15rem;
    background: rgb(250, 241, 215);
    min-height: 100vh;
  }

  .backgroundImage {
    width: 100%;
    height: 400px;
  }

.container-products {
  max-width: 1200px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

li {
  list-style-type: none;
}
</style>