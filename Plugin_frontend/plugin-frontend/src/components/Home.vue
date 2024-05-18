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
        { id: 1, foto: new URL('../assets/img/imagen1.png', import.meta.url).href, name: 'ARBOL LEVAS AKT125SL/XLR', price: 10.99, description: 'Descripción del Producto 1' },
        { id: 2,foto:  new URL('../assets/img/imagen2.png', import.meta.url).href, name: 'ARBOL LEVAS BOXER CT100 ', price: 119.99, description: 'Descripción del Producto 2' },
        { id: 3,foto:  new URL('../assets/img/imagen3.png', import.meta.url).href, name: 'BANDA FRENO TRAS NON', price: 229.99, description: 'Descripción del Producto 3' },
        { id: 4,foto:  new URL('../assets/img/imagen4.png', import.meta.url).href, name: 'BARRAS TELESCOPICAS ', price: 239.99, description: 'Descripción del Producto 4' },
        { id: 5,foto:  new URL('../assets/img/imagen5.png', import.meta.url).href, name: 'BOBINA ALTA HONDA ', price: 249.99, description: 'Descripción del Producto 5' },
        { id: 6,foto:  new URL('../assets/img/imagen6.png', import.meta.url).href, name: 'BOMBA FRENO DEL TANQ ', price: 529.99, description: 'Descripción del Producto 6' },
        { id: 7,foto:  new URL('../assets/img/imagen7.png', import.meta.url).href, name: 'BOMBILLO FAROLA ', price: 269.99, description: 'Descripción del Producto 7' },
        { id: 8,foto:  new URL('../assets/img/imagen8.png', import.meta.url).href, name: 'BOMBILLO LED 158 12V', price: 279.99, description: 'Descripción del Producto 8' },
        { id: 9,foto:  new URL('../assets/img/imagen9.png', import.meta.url).href, name: 'BOMBILLO LED H4 P43T', price: 10.99, description: 'Descripción del Producto 9' },
        { id: 10,foto:  new URL('../assets/img/imagen10.png', import.meta.url).href, name: 'BRAZO TENSOR CADENILLA ', price: 119.99, description: 'Descripción del Producto 10' },
        { id: 11,foto:  new URL('../assets/img/imagen11.png', import.meta.url).href, name: 'BUJE PORTACATALINA ', price: 229.99, description: 'Descripción del Producto 11' },
        { id: 12,foto:  new URL('../assets/img/imagen12.png', import.meta.url).href, name: 'BUJE PORTACATALINA ', price: 239.99, description: 'Descripción del Producto 12' },
        { id: 13,foto:  new URL('../assets/img/imagen13.png', import.meta.url).href, name: 'CABLE ACELERADOR ', price: 249.99, description: 'Descripción del Producto 13' },
        { id: 14,foto:  new URL('../assets/img/imagen14.png', import.meta.url).href, name: 'CADENA 520H x 110L', price: 529.99, description: 'Descripción del Producto 14' },
        { id: 15,foto:  new URL('../assets/img/imagen15.png', import.meta.url).href, name: 'CABLE FRENO BOXER CT 100', price: 269.99, description: 'Descripción del Producto 15' },
        { id: 16,foto:  new URL('../assets/img/imagen16.png', import.meta.url).href, name: 'CABLE CLUTCH PULSAR', price: 279.99, description: 'Descripción del Producto 16' },
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
  color: rgb(24, 24, 24);
}
</style>