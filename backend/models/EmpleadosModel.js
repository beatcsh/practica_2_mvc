import { model } from "mongoose"
import { GeneralSchema } from "./ClientesModel.js"

export const EmpleadosModelo = new model('empleados', GeneralSchema)