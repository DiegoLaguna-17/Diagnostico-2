<template>
    <nav class="navbar">
    <div class="container">
      <div class="logo">
        <img src="/Imagenes/logoUCB.png" alt="Logo"/>
      </div>
      <div class="hamburger-menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="nav-links" :class="{ 'active': isMenuOpen }">
        <li>
          <RouterLink to="/" class="nav-item" @click="closeMenu"><strong>Inicio</strong></RouterLink>
        </li>
        <li>
          <RouterLink to="/inscripciones" class="nav-item" @click="closeMenu"><strong>Inscripciones</strong></RouterLink>
        </li>
        </ul>
    </div>
    
  </nav>
</template>

<!-- Lógica del menú hamburguesa -->
<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style>
.navbar {
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1000;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 10px 20px;
    height: 10vh;
  }
  
  .logo img {
    max-width: 30vh;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;
  }
  
  .nav-item {
    margin: 0 15px;
    text-decoration: none;
    color: #004077;
    padding: 7px 10px;
    font-weight:bold;
    transition: background-color 0.3s ease;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 4px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3vh;
  }
  
  .nav-item:hover {
    background-color: #FFD400;
    color: #000000;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    transform: translate(1%);
    transition: .2s ease-in-out;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
  }
  
  .modal-content {
    position: relative;
    background-color: #fff;
    padding: 20px;
    padding-right: 35px;
    border-radius: 8px;
    width: 300px; 
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    text-align: center; 
  }
  
  .modal-content h2 {
    margin-bottom: 10px; 
  }
  
  .modal-content label {
    display: block; 
    margin-top: 15px; 
    text-align: left; 
  }
  
  .modal-content input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .modal-content button {
    background-color: #ffd400;
    color: #000;
    border: none;
    border-radius: 4px;
    padding: 10px;
    margin-top: 15px;
    margin-left: 8px;
    cursor: pointer;
    width: 100%;
  }
  
  .modal-content button:hover{
    background-color: #c2a200;
  }
  
  .modal-content .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 1.8rem;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    z-index: 10;
  }
  
  .modal-content .close:hover {
    color: #ff0000;
  }
  
  /* Menú hamburguesa */
  .hamburger-menu {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .hamburger-menu span {
    height: 3px;
    background-color: #000000;
    margin: 4px;
    width: 25px;
  }
  
  /* Responsivo: cuando el ancho es menor a 968px */
  @media (max-width: 968px) {
    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 60px; 
      right: 0;
      background-color: #FFFFFF;
      width: 100%;
      padding: 0;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
  
    .nav-links.active {
      display: block; 
    }
  
    .nav-item {
      display: block;
      margin: 10px 0; 
      font-size: 1rem;
      background-color: #F5F5F5;
      padding: 15px; 
      border-radius: 5px; 
      text-align: center; 
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); 
      width: 90%; 
      margin-left: 5%; 
    }
  
    .nav-item:hover {
      background-color: #FFD400;
      color: #000000;
    }
  
    .hamburger-menu {
      display: flex;
    }
  }
  </style>
  
    