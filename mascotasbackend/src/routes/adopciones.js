const express = require('express');
const router = express.Router();
const adopcionSchema = require('../models/adopciones');
  
  
  router.post('/adopciones', (request, response) => {
    //response.send('Crear adopcion');
    console.log('request:', request.body);
  const newAdopcion = adopcionSchema(request.body);
  newAdopcion
    .save()
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
  });

  router.get('/adopciones', (request, response) => {
    //response.send('Leer todas las adopciones');
    adopcionSchema
    .find()
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
  });

  router.get('/adopciones', (request, response) => {
    //response.send('Leer una adopcion especifica');
    const { id } = request.params;
    adopcionSchema
      .findById(id)
      .then((data) => response.json({ success: data }))
      .catch((err) => response.json({ failured: err }));
  });

  router.put('/adopciones', (request, response) => {
    //response.send('Actualizar una adopcion');
  const { id } = request.params;
  const todo = request.body;
  adopcionSchema
    .updateOne({ _id: id }, { $set: adopcion})
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
  });

  router.delete('/adopciones', (request, response) => {
    //response.send('Eliminar una adopcion');
    const { id } = request.params;
  adopcionSchema
    .deleteOne({ _id: id })
    .then((data) => response.json({ success: data }))
    .catch((err) => response.json({ failured: err }));
  });

  module.exports = router;