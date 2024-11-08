import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import { testClientes } from "./backend/controllers/ClientesController.js"
import { testProducto } from "./backend/controllers/ProductosController.js"
import { testEmpleado } from "./backend/controllers/EmpleadosController.js"

dotenv.config()

mongoose.connect(process.env.url)
    .then(() => {
        console.log('conectado a mongo')
    })
    .catch((err) => {
        console.log('error al conectar a mongo', err)
    })

const app = express()
app.use(cors())

app.listen(4000, () => console.log('la aplicacion funciona'))

testClientes()
testProducto()
testEmpleado()