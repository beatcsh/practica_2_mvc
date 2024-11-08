import { Schema, model } from "mongoose";

const ProductosSchema = new Schema([
    {
        nombre: {type: String, required: true}
    },
    {
        precio: {type: Number, required: true}
    },
    {
        categoria: {type: String, required: true}
    }
])

export const ProductosModelo = new model('productos', ProductosSchema)