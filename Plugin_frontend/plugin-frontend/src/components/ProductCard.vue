<template>
    <div class="product-card">
      <h2>{{ product.name }}</h2>
      <p>Precio: {{ product.price }}</p>
      <p>Descripción: {{ product.description }}</p>
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
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  