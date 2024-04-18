<template>
    <footer class="footer">
      <div class="footer-content">
        <label class="footer-label">Siguenos en nuestras redes sociales: </label>
        <a href="URL_DE_FACEBOOK" target="_blank" class="footer-icon"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
        <a href="URL_DE_INSTAGRAM" target="_blank" class="footer-icon"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style>
  .footer {
    background-color: #333;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  
  .footer-content {
    display: flex;
    align-items: center; 
  }
  
  .footer-label {
    color: white;
    margin-right: 20px;
    font-size: 1rem; 
  }
  
  .footer-icon {
    color: white;
    font-size: 1.5rem; 
    text-decoration: none;
    margin-right: 10px; 
  }
  </style>
  