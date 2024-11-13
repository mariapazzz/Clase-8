import express from "express";
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
const port = 3000;

app.use(express.json());

const db_config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'phpmyadmin'
    }
    const db = mysql.createConnection(db_config);

    db.connect((err) => {
        if (err) {
        console.error('Error de conexión a la base de datos:', err);
        } else {
        console.log('Conexión exitosa a la base de datos');
        }
        });

        function createTableIfNotExists() {
            const createTableQuery = `
            CREATE
            CREATE TABLE IF NOT EXISTS videojuegos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(255) NOT NULL,
            genero VARCHAR(255) NOT NULL,
            plataforma VARCHAR(255) NOT NULL
            )
            `;
            
            db.query(createTableQuery, (err) => {
            if (err) {
            console.error('Error al crear la tabla de videojuegos:', err);
            } else {
            console.log('Tabla de videojuegos creada correctamente');
            }
            });
            }
            
            createTableIfNotExists();

            app.post('/videojuegos', (req, res) => {
                const { nombre, genero, plataforma } = req.body;
                const query = 'INSERT INTO videojuegos (nombre, genero, plataforma) VALUES (?, ?, ?)';
                
                db.query(query, [nombre, genero, plataforma], (err, result) => {
                if (err) {
                console.error('Error al crear un nuevo videojuego:', err);
                res.status(500).json({ error: 'Error al crear un nuevo videojuego' });
                } else {
                res.json({ id: result.insertId, nombre, genero, plataforma });
                }
                });
            });

            app.put('/videojuegos/:id', (req, res) => {
                const videojuegoId = req.params.id;
                const { nombre, genero, plataforma } = req.body;
            }),

            app.get('/videojuegos', (req, res) => {
                db.query('SELECT * FROM videojuegos', (err, results) => {
                if (err) {
                console.error('Error al obtener videojuegos:', err);
                res.status(500).json({ error: 'Error al obtener videojuegos' });
                } else {
                res.json(results);
                }
                });
                });

                app.delete('/videojuegos/:id', (req, res) => {
                    const  id  = req.params;
                    const query = 'DELETE FROM videojuegos WHERE id = ?';
                    
                    db.query(query, [id], (err, result) => {
                    if (err) {
                    console.error('Error al eliminar el videojuego:', err);
                    res.status(500).json({ error: 'Error al eliminar el videojuego' });
                    } else {
                    if (result.affectedRows > 0) {
                    res.json({ message: 'Videojuego eliminado correctamente' });
                    } else {
                    res.status(404).json({ error: 'Videojuego no encontrado' });
                    }
                    }
                    });
                    });


                app.listen(port, () => {
                    console.log(`Servidor escuchando en http://localhost:${port}`);
                }
            )
