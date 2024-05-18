<template>
  <div>
    <!-- Formulario de inicio de sesión -->
    <div v-if="!isLoggedIn && !showForm"> <!-- Mostrar solo si el usuario no está logueado y el formulario de registro no está mostrándose -->
      <input type="text" v-model="username" placeholder="Nombre de usuario">
      <input type="password" v-model="password" placeholder="Contraseña">
      <button type="button" class="btn btn-primary" @click="login">Iniciar sesión</button>
      <button type="button" class="btn btn-primary" @click="showRegistrationForm">Registro</button>
    </div>
    
    <!-- Mensaje de usuario logueado (mostrado condicionalmente) -->
    <div v-if="isLoggedIn" style="color: white;">
      Usuario logueado: {{ loggedInUser }}
      <button type="button" class="btn btn-primary" @click="logout">Cerrar sesión</button>
    </div>
    
    <!-- Formulario de registro (mostrado condicionalmente) -->
    <div v-if="showForm">
      <!-- Aquí va tu formulario de registro -->
      <h2 style="color: white;">Formulario de Registro</h2>
      <input class="registro" type="text" v-model="registration.username" placeholder="Nombre de usuario">
      <input class="registro" type="password" v-model="registration.password" placeholder="Contraseña">
      <input class="registro" type="text" v-model="registration.email" placeholder="Email">
      <input class="registro" type="text" v-model="registration.phone" placeholder="Celular">
      <button type="button" class="btn btn-primary" @click="register">Registrarse</button>
      <button type="button" class="btn btn-primary" @click="hideRegistrationForm">Cancelar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        // Usaremos un hashmap para almacenar las credenciales
        admin: '123456',
        usuario: '123456',
        // Agrega más usuarios y contraseñas según sea necesario
      },
      username: '',
      password: '',
      isLoggedIn: false, // Inicialmente el usuario no está logueado
      loggedInUser: null, // Para almacenar el nombre de usuario logueado
      showForm: false, // Variable de estado para mostrar/ocultar el formulario de registro
      registration: {
        username: '',
        password: '',
        email: '',
        phone: ''
      }
    };
  },
  methods: {
    login() {
      // Validar las credenciales del usuario
      if (this.credentials.hasOwnProperty(this.username) && this.credentials[this.username] === this.password) {
        // Iniciar sesión exitosa, cambiar estado de inicio de sesión
        this.isLoggedIn = true;
        this.loggedInUser = this.username; // Almacena el nombre de usuario logueado
        // Redirigir al usuario a la página principal u otra página después del inicio de sesión
        this.$router.push('/');
      } else {
        alert('Nombre de usuario o contraseña incorrectos');
      }
    },
    logout() {
      // Cerrar sesión, cambiar estado de inicio de sesión y borrar datos de usuario logueado
      this.isLoggedIn = false;
      this.loggedInUser = null;
      // También puedes redirigir al usuario a la página de inicio de sesión si lo deseas
    },
    showRegistrationForm() {
      // Mostrar el formulario de registro cuando se hace clic en el botón de registro
      this.showForm = true;
    },
    hideRegistrationForm() {
      // Ocultar el formulario de registro cuando se hace clic en el botón de cancelar
      this.showForm = false;
    },
    register() {
      // Agrega las credenciales del nuevo usuario al objeto credentials
      this.credentials[this.registration.username] = this.registration.password;
      
      // Puedes guardar las credenciales en localStorage o en tu sistema de backend si es necesario
      // Por ejemplo:
      // localStorage.setItem(this.registration.username, this.registration.password);
      
      // Luego podrías redirigir al usuario a la página de inicio de sesión u otra página si lo deseas
      alert('Usuario registrado exitosamente');
      this.showForm = false; // Oculta el formulario de registro después de registrar al usuario
    }
  }
};
</script>

<style>
input {
  border: 1px solid #ccc; /* Borde normal */
  border-radius: 10px; /* Bordes redondos */
  padding: 10px; /* Espacio interno para el contenido */
  margin-left: 10px; /* Agrega separación a la izquierda */
}
button{
  margin-left: 10px; /* Agrega separación a la izquierda */
}
</style>
