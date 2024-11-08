import { ProductosModelo } from "../models/ProductosModel.js"

ProductosModelo.create([
    {
        nombre: "Laptop Negra",
        precio: 12000,
        categoria: "Tecnologia",
    }
])

export const testProducto = () => {
    console.log('testProducto bien')
}