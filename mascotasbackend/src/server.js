const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const adopcionesRouter = require('./routes/adopciones');
const cors = require("cors");



const server = express();
const port = 4200;

server.use(express.json());
server.use('/api', adopcionesRouter);
server.use(cors())

dotenv.config();


mongoose
.connect(process.env.MONGODB_URI)
  .then(() =>console.log('conectado con la base de datos'))
  .catch((err) =>
  console.log('Error al conectarse a la base de datos, erro: ' + err)
  );

server.get('/', (request, response) => {
    response.send('Hola desde la raíz');
  });

  server.listen(port, () => {
    console.log(`Servidor corriendo en localhost, en el puerto ${port}`);
  });