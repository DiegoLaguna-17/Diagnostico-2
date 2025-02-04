<script setup>
import Inicio from './views/Inicio.vue';
import HelloWorld from './views/Inicio.vue'
</script>

<template>

  <div id="app">
    <Navbar  />
    <router-view />
    
  </div>
 
</template>
<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
  },
  setup() {
    const route = useRoute();
    // Mostrar Navbar y Footer en todas las rutas excepto en /admin
    const show = computed(() => route.path !== '/admin');

    return {
      show,
    };
  },
};
</script>
<style scoped>
.app{
  width: 100%;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
