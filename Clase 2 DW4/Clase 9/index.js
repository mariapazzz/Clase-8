const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
import * as chai from 'chai';
import app from './server.js';
import supertest from 'supertest';
import chaiHttp from 'chai-http'

chai.use(chaiHttp);

const request = supertest.agent(app);

app.use(express.json()); // Middleware para parsear JSON en requests

// Endpoint GET: Obtiene una lista de datos
app.get('/crear-tabla',(req,res) => {
    const createTableQuery = `
    CREATE TABLE productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        precio DECIMAL(10, 2) NOT NULL,
        descripcion VARCHAR(255)
    )`;
});

// Endpoint POST: Crea un nuevo item
app.post('/agregar-producto',(req,res) => {
            const { nombre, precio, descripcion } = req.body;
            const insertQuery =
            `INSERT INTO productos (nombre, precio, descripcion)
            VALUES (?, ?, ?)
            `;
});

// Endpoint PUT: Actualiza un item existente
app.put('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    // Lógica para actualizar el item en la base de datos
    res.json({ message: `Item ${id} actualizado`, data: updatedItem });
});

// Endpoint DELETE: Elimina un item existente
app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;
    // Lógica para eliminar el item de la base de datos
    res.json({ message: `Item ${id} eliminado` });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

     connection.query(insertQuery, [nombre, precio, descripcion], (err,results) => {
            if (err) {
            console.error('Error al agregar producto:', err);
            } else {
            console.log('Producto agregado exitosamente');
            res.send('Producto agregado exitosamente');
            }
            });
                  
            app.get('/productos',(req,res) => {
                const selectQuery = `SELECT * FROM productos`;
                connection.query(selectQuery,(err,results) => {
                if (err) {
                console.error('Error al seleccionar productos', err);
                res.status(500).send('Error al seleccionar productos');
                } else {
                console.log('Productos seleccionados exitosamente');
                res.json(results);
                }
                });
                });
                
                           
                export default app