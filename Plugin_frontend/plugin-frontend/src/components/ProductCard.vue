<template>
  <div class="card" style="width: 18rem;">
  
    <img :src="product.foto" class="card-img-top " alt="...">
    <div class="card-body opacity-100">
      <h2>{{ product.name }}</h2>
      <p>Precio: {{ product.price }}</p>
      <p>Descripción: {{ product.description }}</p>
      <a class="btn btn-primary" @click="addToCart">Añadir al Carrito</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      console.log('Producto añadido al carrito:', this.product);
      this.$emit('add-to-cart', this.product);
    }
  }
};
</script>

<style>
.card {
  border: 5px solid #0f0f0f;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  position: inherit;
  background-color: rgba(255, 255, 255, 0.5);
}

.card-img-top{
  width: 50%;
  height: auto;
  margin-left: auto; /* Centra horizontalmente */
  margin-right: auto; /* Centra horizontalmente */
}
</style>
