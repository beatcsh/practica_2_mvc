import { ClientesModel } from "../models/ClientesModel.js"

ClientesModel.create([
    {
        nombre: "Edwin",
        apepat: "Sedano",
        edad: 21,
        correo: "edwin@gmail.com",
    }
])

export const testClientes = () => {
    console.log('testClientes bien')
}