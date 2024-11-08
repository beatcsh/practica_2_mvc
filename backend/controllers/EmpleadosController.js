import { EmpleadosModelo } from "../models/EmpleadosModel.js"

EmpleadosModelo.create([
    {
        nombre: "Daniel",
        apepat: "Munoz",
        edad: 34,
        correo: "mayo@gmail.com",
    }
])

export const testEmpleado = () => {
    console.log('testEmpleado bien')
}