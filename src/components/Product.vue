<template>
  <div class="product">
    <div class="container-product">
      <div class="container-content">
        <p class="container-content-name">{{ name }}</p>
        <p>Unité: {{ price }} €</p>
        <p>Quantité: {{ quantity }}</p>
        <div class="buttons">
          <button @click="$emit('add-quantity')" class="btn"><i class="fas fa-plus"></i></button>
          <button @click="$emit('remove-quantity')" class="btn"><i class="fas fa-minus"></i></button> 
        </div>
      </div>
      <div>
        <img class="images" :src="img" alt="photo">
      </div>
    </div>
    <button @click="$emit('add-panier')" class="btn-buy"><i class="fas fa-shopping-basket"></i></button>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    name: String,
    price: Number,
    quantity: Number,
    total: Number,
    img: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-product {
  display: flex;
  justify-content: space-between;
}

.product {
  border: none;
  border-radius: 10px;
  padding: 2rem 4rem;
  list-style-type: none;
  background: #fff;
  box-shadow: 1px 5px 5px rgba(0,0,0,0.1);
  max-height: 170px;
}

.container-content {
  text-align: left;
  line-height: 0.5rem;
}

.container-content-name {
  color: orange!important;
  font-size: 1.5rem!important;
}

.container-content p {
  color: rgb(184, 184, 184);
  font-size: 0.9rem;
}

.images {
  max-width: 120px;
  max-height: 100px;
}

button {
  margin-right: 0.5rem;
  border-radius: 10px;
  background: #fff;
  padding: 0.2rem 0.8rem;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.btn i {
  color: orange;
  font-size: 0.8rem;
  cursor: pointer;
}

.btn-buy  {
  display: block;
  float: right;
  font-size: 1.7rem;
  color: orange;
  cursor: pointer;
  text-align: right;
  padding: 0.2rem 2rem;
}

.btn i:hover, .btn-buy:hover {
  color: rgb(219, 144, 3);
}

@media (max-width: 550px) {

  .container-content-name {
    font-size: 1.2rem!important;
  }

  .container-content p {
    font-size: 0.7rem;
  }

  .images {
    max-width: 80px;
    max-height: 60px;
  }

  .buttons {
    display: flex;
  }

  .btn-buy {
    padding: 0.4rem;
  }

  .btn  {
    padding: 0.1rem 0.7rem;
  }
}
</style>
