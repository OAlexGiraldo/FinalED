<template>
  <div id="app">
    <nav class="main-nav navbar navbar-expand-lg bg-body-primary">
      <div class="container-fluid">
        <router-link to="/" class="nav-brand">Mi Tienda</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Repuestos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item"
                    href="https://ipc-importadores.com/es/categoria/repuestos-motopartes/pagina/1">Motos</a></li>
                <li><a class="dropdown-item"
                    href="https://ipc-importadores.com/es/categoria/repuestos-motopartes/pagina/1">Carros</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item"
                    href="https://ipc-importadores.com/es/categoria/repuestos-motopartes/pagina/1">Todos</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Pedidos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">En curso</a></li>
                <li><a class="dropdown-item" href="#">Finalizados</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Todos</a></li>
              </ul>
            </li>
          </ul>
          <div class="nav-search">
            <input type="text" placeholder="Buscar..." class="search-input" v-model="searchTerm"
              @input="updateSuggestions" @keyup.enter="performSearch">
            <button class="search-button" @click="performSearch">
              <font-awesome-icon icon="search" />
            </button>
            <ul v-if="showSuggestions" class="suggestions-list">
              <li v-for="(suggestion, index) in suggestions" :key="index" @click="selectSuggestion(suggestion)"
                style="color: white;">
                {{ suggestion }}
              </li>
            </ul>
          </div>
          <div class="nav-cart">
            <button class="cart-button" @click="openCart">
              <font-awesome-icon icon="shopping-cart" />
              <span class="cart-count">{{ cartCount }}</span>
            </button>
            <span class="cart-text">Carrito</span>
          </div>
          <div class="nav-user">
            <div>
              <Login></Login>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view @add-to-cart="addToCartHandler"></router-view>
    </div>
    <Footer />

    <!-- Modal para el carrito -->
    <div class="modal" :class="{ 'show': showCart }" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Carrito de Compras</h5>
            <button type="button" class="close" @click="closeCart">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="cartItems.length === 0" class="text-center">No hay productos en el carrito.</div>
            <div v-else class="row row-cols-3 row-cols-md-3 mt-3 g-2 ml-2">
              <div v-for="item in cartItems" :key="item.id" class="mb-6">
                <img :src="item.foto" class="card-img-top1" alt="...">
                <h5>{{ item.name }}</h5>
                <p>Precio: {{ item.price }}</p>
                <p>Cantidad: {{ item.quantity }}</p>
                <button @click="removeFromCart(item)" class="btn btn-danger">Eliminar</button>
              </div>

            </div>
          </div>
          <div class="button-container text-center mt-3">
            <button type="button" class="btn btn-primary mr-3" @click="closeCart">Cerrar</button>
            <button @click="purchaseItems" class="btn btn-primary ml-3">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Footer from './components/Footer.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Login
  },
  setup() {
    const cartCount = ref(0);
    const cartItems = ref([]);
    const showCart = ref(false);
    const searchTerm = ref('');
    const suggestions = ref([]);
    const showSuggestions = ref(false);

    const products = ref([
      { id: 1, foto: new URL('../assets/img/imagen1.png', import.meta.url).href, name: 'ARBOL LEVAS AKT125SL/XLR', price: 10.99, description: 'Descripción del Producto 1' },
      { id: 2, foto: new URL('../assets/img/imagen2.png', import.meta.url).href, name: 'ARBOL LEVAS BOXER CT100 ', price: 119.99, description: 'Descripción del Producto 2' },
      { id: 3, foto: new URL('../assets/img/imagen3.png', import.meta.url).href, name: 'BANDA FRENO TRAS NON', price: 229.99, description: 'Descripción del Producto 3' },
      { id: 4, foto: new URL('../assets/img/imagen4.png', import.meta.url).href, name: 'BARRAS TELESCOPICAS ', price: 239.99, description: 'Descripción del Producto 4' },
      { id: 5, foto: new URL('../assets/img/imagen5.png', import.meta.url).href, name: 'BOBINA ALTA HONDA ', price: 249.99, description: 'Descripción del Producto 5' },
      { id: 6, foto: new URL('../assets/img/imagen6.png', import.meta.url).href, name: 'BOMBA FRENO DEL TANQ ', price: 529.99, description: 'Descripción del Producto 6' },
      { id: 7, foto: new URL('../assets/img/imagen7.png', import.meta.url).href, name: 'BOMBILLO FAROLA ', price: 269.99, description: 'Descripción del Producto 7' },
      { id: 8, foto: new URL('../assets/img/imagen8.png', import.meta.url).href, name: 'BOMBILLO LED 158 12V', price: 279.99, description: 'Descripción del Producto 8' },
      { id: 9, foto: new URL('../assets/img/imagen9.png', import.meta.url).href, name: 'BOMBILLO LED H4 P43T', price: 10.99, description: 'Descripción del Producto 9' },
      { id: 10, foto: new URL('../assets/img/imagen10.png', import.meta.url).href, name: 'BRAZO TENSOR CADENILLA ', price: 119.99, description: 'Descripción del Producto 10' },
      { id: 11, foto: new URL('../assets/img/imagen11.png', import.meta.url).href, name: 'BUJE PORTACATALINA ', price: 229.99, description: 'Descripción del Producto 11' },
      { id: 12, foto: new URL('../assets/img/imagen12.png', import.meta.url).href, name: 'BUJE PORTACATALINA ', price: 239.99, description: 'Descripción del Producto 12' },
      { id: 13, foto: new URL('../assets/img/imagen13.png', import.meta.url).href, name: 'CABLE ACELERADOR ', price: 249.99, description: 'Descripción del Producto 13' },
      { id: 14, foto: new URL('../assets/img/imagen14.png', import.meta.url).href, name: 'CADENA 520H x 110L', price: 529.99, description: 'Descripción del Producto 14' },
      { id: 15, foto: new URL('../assets/img/imagen15.png', import.meta.url).href, name: 'CABLE FRENO BOXER CT 100', price: 269.99, description: 'Descripción del Producto 15' },
      { id: 16, foto: new URL('../assets/img/imagen16.png', import.meta.url).href, name: 'CABLE CLUTCH PULSAR', price: 279.99, description: 'Descripción del Producto 16' },
    ]);
    

    const openCart = () => {
      showCart.value = true;
    };
    const openUser = () => {
      showUser.value = true;
    };

    const closeCart = () => {
      showCart.value = false;
    };

    const addToCartHandler = (product) => {
      const existingItemIndex = cartItems.value.findIndex((item) => item.id === product.id);
      if (existingItemIndex !== -1) {
        cartItems.value[existingItemIndex].quantity++;
      } else {
        cartItems.value.push({ ...product, quantity: 1 });
      }
      cartCount.value++;
    };


    const removeFromCart = (item) => {
      const index = cartItems.value.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        if (cartItems.value[index].quantity > 1) {
          cartItems.value[index].quantity--;
        } else {
          cartItems.value.splice(index, 1);
        }
        cartCount.value--;
      }
    };

    const purchaseItems = () => {
      if (cartItems.value.length > 0) {
        alert('Su pedido ha sido tomado');
        cartItems.value = [];
        cartCount.value = 0;
        closeCart();
      } else {
        alert('El carrito está vacío.');
      }
    };


    const search = () => {
      if (searchTerm.value.trim() !== '') {
        console.log('Búsqueda realizada:', searchTerm.value);
      } else {
        alert('Por favor, ingresa un término de búsqueda válido.');
      }
    };

    const dfs = (node, searchTermLower, visited = new Set()) => {
      if (visited.has(node.id)) return [];

      visited.add(node.id);

      let matches = [];
      if (node.name.toLowerCase().includes(searchTermLower)) {
        matches.push(node.name);
      }

      if (Array.isArray(node.related)) {
        for (let relatedId of node.related) {
          const relatedNode = products.value.find(product => product.id === relatedId);
          if (relatedNode) {
            matches = matches.concat(dfs(relatedNode, searchTermLower, visited));
          }
        }
      }

      return matches;
    };

    const updateSuggestions = () => {
      if (searchTerm.value.trim() !== '') {
        const searchTermLower = searchTerm.value.trim().toLowerCase();
        const visited = new Set();

        // Inicia DFS desde cada nodo no visitado
        suggestions.value = products.value.flatMap(product => dfs(product, searchTermLower, visited));

        showSuggestions.value = true;
      } else {
        suggestions.value = [];
        showSuggestions.value = false;
      }
    };

    const selectSuggestion = (suggestion) => {
      searchTerm.value = suggestion;
      showSuggestions.value = false;
      performSearch();
    };

    const performSearch = () => {
      search();
    };



    return {
      cartCount,
      openCart,
      closeCart,
      addToCartHandler,
      removeFromCart,
      cartItems,
      showCart,
      searchTerm,
      suggestions,
      search,
      showSuggestions,
      updateSuggestions,
      selectSuggestion,
      performSearch,
      purchaseItems


    };
  },
};
</script>

<style>
/* Estilos para el navbar */
.main-nav {
  position: fixed;
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

.nav-user {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.suggestions-list {
  position: absolute;
  top: calc(100% + 10px);
  left: 20%;
  /* Cambiado a 25% para que ocupe la mitad del ancho */
  width: 24%;
  /* Cambiado a 50% para que ocupe la mitad del ancho */
  background-color: rgba(14, 27, 55, 0.9);
  color: white;
  border-radius: 5px;
  list-style: none;
  padding: 5px 0;
  margin: 0;
  z-index: 1000;
}

.suggestions-list li {
  padding: 10px;
  cursor: pointer;
}

.suggestions-list li:hover {
  background-color: rgba(255, 255, 255, 0.1);
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

.user-button {
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

/* Estilos para el container principal */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px;
  margin-top: 60px;
  opacity: 100%;
}

/* Estilos para la modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1050;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 60px);
}

.modal-content {
  position: relative;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  outline: 0;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #0e7ceb;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  background-color: #0e7ceb;
  border-radius: 1rem;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 15px;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}

/* Estilos para la modal cuando se muestra */
.modal.show {
  display: block;
}

.card-img-top1 {
  width: auto;
  height: auto;
}
</style>
