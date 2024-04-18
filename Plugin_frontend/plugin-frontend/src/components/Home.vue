<template>
    <div>
      <h1>Bienvenido a Mi Tienda</h1>
      <div class="product-list">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from '@/components/ProductCard.vue'; 
  
  export default {
    name: 'Home',
    components: {
      ProductCard 
    },
    data() {
      return {
        products: [
          { id: 1, name: 'Producto 1', price: 10.99, description: 'Descripción del Producto 1' },
          { id: 2, name: 'Producto 2', price: 119.99, description: 'Descripción del Producto 2' },
          { id: 3, name: 'Producto 3', price: 229.99, description: 'Descripción del Producto 3' },
          { id: 4, name: 'Producto 4', price: 239.99, description: 'Descripción del Producto 4' },
          { id: 5, name: 'Producto 5', price: 249.99, description: 'Descripción del Producto 5' },
          { id: 6, name: 'Producto 6', price: 529.99, description: 'Descripción del Producto 6' },
          { id: 7, name: 'Producto 7', price: 269.99, description: 'Descripción del Producto 7' },
          { id: 8, name: 'Producto 8', price: 279.99, description: 'Descripción del Producto 8' },
        ]
      };
    }
  };
  </script>
  