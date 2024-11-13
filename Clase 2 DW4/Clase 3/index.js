// const express = require('express'); 
import express from 'express' 
// const bodyParser = require ('body-parser'); 
import bodyParser from 'body-parser'; 
const app = express(); 
app.use(bodyParser.json()); 
//Variable global que almacena los objetos 
let datos = [ { id:1, nombre: 'Ejemplo 1'}, 
{ id:2, nombre: 'Ejemplo 2'}, 
{ id:3, nombre: 'Ejemplo 3'}, ]; 
//Ruta para tener todos los datos 
app.get('/datos', (req, res) => { 
    const nuevoDato = req.body;
nuevoDato.id = datos.length + 1;
datos.push(nuevoDato);
res.json(nuevoDato); }); 
    const puerto = 3000; 
    app.listen (puerto, () => { cons });

    app.delete('/datos/:id', (req,res)=>{
        const id = parseInt(req.params.id);
        datos = datos.filter((item) => item.id !==id);
        res.json({mensaje: 'Dato eliminado exitosamente'});
    }); 