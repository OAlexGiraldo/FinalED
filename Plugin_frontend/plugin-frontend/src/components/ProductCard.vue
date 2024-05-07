<template>
  <div class="card" style="width: 18rem;">
    <img src="@/assets/fondo1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
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
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  position: inherit;
}
</style>
