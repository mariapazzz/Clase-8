import { Express } from "express";
import { Mysql } from "mysql";
import chaiHttp from  "chai-http";
chai.use(chaiHttp);
const app = express();
const PORT = 3000;
const request = supertest.agent(app);

app.use(express.json());

app.get('/crear-tabla',(req,res) => {
    const createTableQuery = `
    CREATE TABLE productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        precio DECIMAL(10, 2) NOT NULL,
        descripcion VARCHAR(255)
    )`;
    
    connection.query(createTableQuery, (err,results) => {
        if (err) {
        console.error('Error al crear la tabla', err);
        res.status(500).send('Error al crear la tabka');
        } else {
        console.log('Tabla creada exitosamente');
        res.send('Tabla creada exitosamente');
        }
        });
        });
    
        app.post('/agregar-producto',(req,res) => {
            const { nombre, precio, descripcion } = req.body;
            const insertQuery =
            `INSERT INTO productos (nombre, precio, descripcion)
            VALUES (?, ?, ?)
            `;
            
            connection.query(insertQuery, [nombre, precio, descripcion], (err,results) => {
            if (err) {
            console.error('Error al agregar producto:', err);
            } else {
            console.log('PRoducto agregado exitosamente');
            res.send('Producto agregado exitosamente');
            }
            });
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
                
                app.listen(PORT,() => {
                console.log(`Servidor Express escuchando en el puerto ${PORT}`);
                });
                
                export default app
                   

