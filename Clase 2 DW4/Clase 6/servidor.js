import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const PORT = 3000;
const DB = process.env.DB;
console.log(DB);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Definir el esquema de Producto
const productoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String // Cambiado a "descripcion"
});

// Definir el esquema de Usuario (opcional)
const usuarioSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    correo: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);


const Producto = mongoose.model('Producto', productoSchema);

// GET - Obtener todos los productos
app.get('/productos', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).send('Error al obtener productos');
    }
});

// POST - Agregar un nuevo producto
app.post('/productos', async (req, res) => {
    try {
        const { nombre, precio, descripcion } = req.body;
        const nuevoProducto = new Producto({ nombre, precio, descripcion });
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        console.error('Error al agregar producto:', error);
        res.status(500).send('Error al agregar producto');
    }
});

// PUT - Actualizar un producto por ID
app.put('/productos/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, precio, descripcion } = req.body;
    
    try {
        const updatedProduct = await Producto.findByIdAndUpdate(id, { nombre, precio, descripcion }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        res.status(200).json({ mensaje: 'Producto actualizado', producto: updatedProduct });
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({ mensaje: 'Error al actualizar el producto', error });
    }
});

// DELETE - Eliminar un producto por ID
app.delete('/productos/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const deletedProduct = await Producto.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        res.status(200).json({ mensaje: 'Producto eliminado' });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ mensaje: 'Error al eliminar el producto', error });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

