<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <!--
    <div style="background-color: #004077;height: 40px;">
      <center>
      <table >
        <tr>
          <td style="padding-right: 10vh;">
            <h1 style="font-size:large; color: white;"> Inicio</h1>
          </td>
          <td>
            <h1 style="font-size:large; color: white;">Inscripciones</h1>
          </td>
        </tr>
      </table>
    </center>
    </div>
<div style="height: 120px;color: white;">
  <center><img src="/Imagenes/logoUCB.png" alt="Logo UCB" height="100" style="margin-top: 15px;"></center>
</div>
-->

  <div class="inicio-container">
    <!-- Imagen de fondo con texto -->
    <div class="image-overlay">
      <div class="overlay-text">
        <h1>UNIDAD ACADÉMICA<br>LA PAZ<br></h1>
        <p>Unidad académica perteneciente a la Universidad Católica Boliviana "San Pablo"</p>
      </div>
    </div>
  </div>

  <center><h1 style="color: #0c71c5;">Nuestra Infraestructura</h1></center>

   <!-- Sección de Cards de VMV -->
   <div class="cards-container">
    
    <div class="card-wrapper">
      <div class="card-title">
        <span class="bar"></span>
        <h2>Biblioteca</h2>
      </div>
      <div class="card">
        <img src="/Imagenes/biblio.jpg" alt="Imagen Misión" width="300" height="300"/>
        <div class="card-content">
          <p>
            La biblioteca  es un espacio de estudio 
            y aprendizaje que ofrece a los estudiantes acceso a una amplia colección de libros, revistas y
             recursos digitales. Cuenta con áreas de lectura, salas de estudio y servicios de préstamo, 
             brindando un ambiente propicio para la investigación académica. Además, facilita el acceso a
              bases de datos especializadas y herramientas para el desarrollo académico de la comunidad universitaria.
          </p>
        </div>
      </div>
    </div>
  
     
    <div class="card-wrapper">
      <div class="card-title">
        <span class="bar"></span>
        <h2 >Bloque C</h2>
      </div>
      <div class="card">
        <img src="/Imagenes/ingenieria.jpg" alt="Imagen Visión" width="300"/>
        <div class="card-content">
          <p>
            El Bloque C es una de las principales 
            edificaciones del campus, donde se encuentran aulas, laboratorios y oficinas administrativas. 
            Es un espacio clave para el desarrollo académico, con infraestructura moderna y ambientes diseñados
             para facilitar el aprendizaje y la investigación. Su ubicación estratégica dentro de la universidad
              lo convierte en un punto de encuentro frecuente para estudiantes y docentes.
          </p>
        </div>
      </div>
    </div>
  
  
    <div class="card-wrapper">
      <div class="card-title">
        <span class="bar"></span>
        <h2>Bloque de Arquitectura</h2>
      </div>
      <div class="card">
        <img src="/Imagenes/arquiUCB.jpg" alt="Imagen Valores" width="300" />
        <div class="card-content">
          <p>
            El bloque de Arquitectura es un espacio
             diseñado para la creatividad y el aprendizaje práctico. Alberga aulas, talleres y laboratorios
              equipados para el desarrollo de proyectos arquitectónicos. Aquí, los estudiantes exploran el diseño,
               la construcción y la innovación en un ambiente que fomenta la expresión artística y técnica. Es un punto 
               clave para la formación de futuros arquitectos.
          </p>
        </div>
      </div>
    </div>
  </div>  

  <center><h1>Nuestra oferta académica</h1></center>
  <center><img src="/Imagenes/ofertaUCB.png" alt=""></center>
  
</template>

<style scoped>
h1, h2, p {
  font-family: Arial, Helvetica, sans-serif;
}

h2 {
  color: #0c71c5;
}

.inicio-container {
  position: relative;
  width: 100%;
  height: 300px; 
  overflow: hidden;
}

.image-overlay {
  background-image: url('./Imagenes/banner2.webp');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: relative;
}

.image-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  padding: 10px;
}

.cards-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px 0;
  gap: 20px;
}

.card-wrapper {
  flex: 1;
  min-width: 300px;
  max-width: 30%;
  text-align: left;
}

.card-title {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.bar {
  width: 5px;
  height: 35px;
  background-color: #004077;
  margin-right: 10px;
}

.card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.card-content h3 {
  font-weight: bold;
  margin-bottom: 10px;
}

.card-content p {
  font-size: 14px;
}

/* Responsivo */
@media (max-width: 968px) {
  .inicio-container {
    height: 200px;
  }

  .overlay-text {
    font-size: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .cards-container {
    flex-direction: column;
    gap: 15px;
  }

  .card-wrapper {
    max-width: 100%;
  }

  .card-content p {
    font-size: 16px;
  }

  img {
    height: auto;
    max-width: 100%;
  }
}
</style>

