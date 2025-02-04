<template>
    <div class="formulario-inscripcion">
      <h2>Formulario de Inscripción</h2>
  
      <form @submit.prevent="enviarFormulario">
        <div>
          <label for="nombre">Nombre Completo:</label>
          <input v-model="form.nombre" type="text" id="nombre" name="nombre" required />
        </div>
  
        <div>
          <label for="email">Correo Electrónico:</label>
          <input v-model="form.email" type="email" id="email" name="email" required />
        </div>
  
        <div>
          <label for="telefono">Teléfono:</label>
          <input v-model="form.telefono" type="tel" id="telefono" name="telefono" required />
        </div>
  
        <div>
          <label for="carrera">Carrera a Elegir:</label>
          <select v-model="form.carrera" id="carrera" name="carrera" required>
            <option value="">Seleccione una carrera</option>
            <option value="ingenieria_sistemas">Ingeniería en Sistemas</option>
            <option value="ingenieria_civil">Ingeniería Civil</option>
            <option value="medicina">Medicina</option>
            <option value="derecho">Derecho</option>
            <option value="arquitectura">Arquitectura</option>
          </select>
        </div>
  
        <div>
          <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
          <input v-model="form.fechaNacimiento" type="date" id="fecha_nacimiento" name="fecha_nacimiento" required />
        </div>
  
        <button type="submit">Inscribirse</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        form: {
          nombre: '',
          email: '',
          telefono: '',
          carrera: '',
          fechaNacimiento: ''
        }
      };
    },
    methods: {
        async enviarFormulario() {
  try {
    const response = await axios.post('http://localhost:3000/inscribir', this.form);
    console.log(response.data); // Imprime la respuesta del servidor
    // Verifica que la respuesta sea "Inscripción exitosa"
    console.log(response.status);
    if (response.status === 200 && response.data=='Inscripcion correcta') {
      alert('Inscripción exitosa');
      
    } else {
      // Si la respuesta no es la esperada, muestra un mensaje de error
      alert('Error al inscribir.');
    }
  } catch (error) {
  // Verifica si hay una respuesta del servidor
  if (error.response) {
    console.error('Error del servidor:', error.response.data);
    console.error('Código de estado:', error.response.status);
  } else if (error.request) {
    // Si no hubo respuesta, es un problema de red
    console.error('No se recibió respuesta del servidor:', error.request);
  } else {
    // Error relacionado con la configuración de la solicitud
    console.error('Error en la configuración de la solicitud:', error.message);
   
  }
  console.log(response.data);
  alert('Error al procesar la solicitud. Intenta nuevamente.');
}

}

}

  };
  </script>
  
  <style scoped>
  .formulario-inscripcion {
    max-width: 600px;
    margin: 0 auto;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  form div {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  input, select {
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  