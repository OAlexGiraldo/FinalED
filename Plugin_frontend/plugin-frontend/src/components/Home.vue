<template>
  <div>
    <h1 id="Title">Bienvenido a Mi Tienda</h1>
    <div class="product-list row row-cols-1 row-cols-md-6 mt-6 g-5">
      <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCartHandler" />
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
        { id: 1, foto: new URL('../assets/img/imagen1.jpg', import.meta.url).href, name: 'Producto 1', price: 10.99, description: 'Descripción del Producto 1' },
        { id: 2,foto:  new URL('../assets/img/imagen2.jpg', import.meta.url).href, name: 'Producto 2', price: 119.99, description: 'Descripción del Producto 2' },
        { id: 3,foto:  new URL('../assets/img/imagen3.jpg', import.meta.url).href, name: 'Producto 3', price: 229.99, description: 'Descripción del Producto 3' },
        { id: 4,foto:  new URL('../assets/img/imagen4.jpg', import.meta.url).href, name: 'Producto 4', price: 239.99, description: 'Descripción del Producto 4' },
        { id: 5,foto:  new URL('../assets/img/imagen5.jpg', import.meta.url).href, name: 'Producto 5', price: 249.99, description: 'Descripción del Producto 5' },
        { id: 6,foto:  new URL('../assets/img/imagen6.jpg', import.meta.url).href, name: 'Producto 6', price: 529.99, description: 'Descripción del Producto 6' },
        { id: 7,foto:  new URL('../assets/img/imagen7.jpg', import.meta.url).href, name: 'Producto 7', price: 269.99, description: 'Descripción del Producto 7' },
        { id: 8,foto:  new URL('../assets/img/imagen8.jpg', import.meta.url).href, name: 'Producto 8', price: 279.99, description: 'Descripción del Producto 8' },
        { id: 9,foto:  new URL('../assets/img/imagen9.jpg', import.meta.url).href, name: 'Producto 9', price: 10.99, description: 'Descripción del Producto 9' },
        { id: 10,foto:  new URL('../assets/img/imagen10.jpg', import.meta.url).href, name: 'Producto 10', price: 119.99, description: 'Descripción del Producto 10' },
        { id: 11,foto:  new URL('../assets/img/imagen1.jpg', import.meta.url).href, name: 'Producto 11', price: 229.99, description: 'Descripción del Producto 11' },
        { id: 12,foto:  new URL('../assets/img/imagen1.jpg', import.meta.url).href, name: 'Producto 12', price: 239.99, description: 'Descripción del Producto 12' },
        { id: 13,foto:  new URL('../assets/img/imagen1.jpg', import.meta.url).href, name: 'Producto 13', price: 249.99, description: 'Descripción del Producto 13' },
        { id: 14,foto:  new URL('../assets/img/imagen1.jpg', import.meta.url).href, name: 'Producto 14', price: 529.99, description: 'Descripción del Producto 14' },
        { id: 15,foto:  new URL('../assets/img/imagen1.jpg', import.meta.url).href, name: 'Producto 15', price: 269.99, description: 'Descripción del Producto 15' },
        { id: 16,foto:  new URL('../assets/img/imagen1.jpg', import.meta.url).href, name: 'Producto 16', price: 279.99, description: 'Descripción del Producto 16' },
      ]
    };
  },
  methods: {
    addToCartHandler(product) {
      this.$emit('add-to-cart', product);
    }
  }
};
</script>
<style>
#Title{
  color: aliceblue;
}
</style>