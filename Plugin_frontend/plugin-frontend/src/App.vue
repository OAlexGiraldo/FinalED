<template>
  <div id="app">

    <nav class="main-nav navbar navbar-expand-lg bg-body-primary">
  <div class="container-fluid">
    <router-link to="/" class="nav-brand">Mi Tienda</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
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
    </div>
  </div>
</nav>

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
  position:fixed; 
  top: 0;
  left: 0; 
  width: 100%; 
  z-index: 1000; 
  background-color: #286be7;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  color: #f1f2f3;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  margin-right: 5px;
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
