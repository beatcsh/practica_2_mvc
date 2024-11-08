import { Schema, model } from "mongoose";

export const GeneralSchema = new Schema([
    {
        nombre: {type: String, required: true}
    },
    {
        apepat: {type: String, required: true}
    },
    {
        edad: {type: Number, required: true}
    },
    {
        correo: {type: String, required: true}
    }
])

export const ClientesModel = new model('clientes', GeneralSchema)