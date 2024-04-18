<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/" class="nav-brand">Mi Tienda</router-link>
      <div class="nav-search">
        <input type="text" placeholder="Buscar..." class="search-input">
        <button class="search-button"><font-awesome-icon icon="search" /></button>
      </div>
      <div class="nav-cart">
        <button class="cart-button" @click="openCart">
          <font-awesome-icon icon="shopping-cart" />
          <span class="cart-count">{{ cartCount }}</span>
        </button>
        <span class="cart-text">Carrito</span>
      </div>
    </nav>

    <div class="additional-selectors">
      <select>
        <option value="">Opción 1</option>
        <option value="value1">Valor 1</option>
        <option value="value2">Valor 2</option>
      </select>
      <select>
        <option value="">Opción 2</option>
        <option value="value1">Valor 1</option>
        <option value="value2">Valor 2</option>
      </select>
      <select>
        <option value="">Opción 3</option>
        <option value="value1">Valor 1</option>
        <option value="value2">Valor 2</option>
      </select>
      <select>
        <option value="">Opción 4</option>
        <option value="value1">Valor 1</option>
        <option value="value2">Valor 2</option>
      </select>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'; 
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer
  },
  setup() {
    const cartCount = ref(0); 

    const openCart = () => {

    };

    return {
      cartCount,
      openCart
    };
  }
};
</script>

<style>
.main-nav {
  position: fixed; 
  top: 0;
  left: 0; 
  width: 98%; 
  z-index: 1000; 
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  color: #007bff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-search {
  flex-grow: 1; 
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.search-input {
  width: 60%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-button {
  background-color: #007bff;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
}

.additional-selectors {
  position: fixed; 
  top: 60px; 
  left: 10px; 
  display: flex;
  align-items: center;
}

.additional-selectors select {
  padding: 8px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #f8f9fa;
  margin-right: 10px; 
}

.additional-selectors {
  flex-direction: row;
}

.nav-cart {
  display: flex;
  align-items: center;
  margin-left: 10px; 
}

.cart-button {
  background-color: #007bff;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 0.8rem;
}

.cart-text {
  margin-left: 5px;
  font-weight: bold;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px; 
  margin-top: 60px; 
}
</style>
