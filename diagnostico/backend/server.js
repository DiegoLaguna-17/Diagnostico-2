const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg'); // Importamos el cliente de PostgreSQL

const app = express();
const port = 3000;

// Configura el middleware para el análisis de datos JSON
app.use(bodyParser.json());

// Configura la conexión a PostgreSQL
const client = new Client({
  host: 'localhost', // o la dirección de tu servidor PostgreSQL
  port: 5432, // el puerto donde está corriendo PostgreSQL (el valor por defecto es 5432)
  user: 'postgres', // reemplaza con tu usuario de PostgreSQL
  password: 'admin', // reemplaza con tu contraseña de PostgreSQL
  database: 'Inscripciones', // reemplaza con el nombre de tu base de datos
});

// Conectarse a la base de datos
client.connect()  // Esto conecta a la base de datos
  .then(() => console.log('Conectado a la base de datos'))
  .catch((err) => console.error('Error al conectar a la base de datos', err));

// Ruta para manejar el formulario de inscripción
app.post('/inscribir', async (req, res) => {
    try {
      const { nombre, email, telefono, carrera, fechaNacimiento } = req.body;
  
      const result = await client.query(
        `INSERT INTO inscripciones (nombre, email, telefono, carrera, fecha_nacimiento) 
         VALUES ($1, $2, $3, $4, $5)`,
        [nombre, email, telefono, carrera, fechaNacimiento]
      );
  
      // Si la inserción fue exitosa, devuelve una respuesta exitosa
      res.status(200).send("Inscripcion correcta");
      console.log('inscripcion exitosa');
      
    } catch (error) {
      console.error('Error al insertar los datos:', error);
      console.error('Stack Trace:', error.stack);
      // Si hay error, enviar un código 500 (error interno del servidor)
      res.status(500).send('Error al procesar la solicitud');
    }
  });
  
  
  

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


const cors = require('cors');
app.use(cors());
