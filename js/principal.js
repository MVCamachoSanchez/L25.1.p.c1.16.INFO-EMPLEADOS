/** 6. INFO EMPLEADOS
 * En una empresa se tiene personal obrero y personal administrativo. 
 * La empresa necesita determinar cuál es el monto promedio que paga por cada tipo de 
 * personal. 
 * Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
 * el siguiente formato, informando que:
 * 
 * Juan (obrero) actualmente gana $100, 
 * Ana (obrero) gana $120, 
 * Lin (administrativo) gana $200,
 *  Mary (obrero) gana $50,
 *  Carlos (administrativo) gana $150
 * 
 * Salida:
 * Monto total pagado a obreros: $270
 * Promedio pagado a 3 obreros: $90
 * Monto total pagado a administrativos: $350
 * Promedio pagado a 2 administrativos: $175 */

import Cl_vEmpresa from "./Cl_vEmpresa.js";
import Cl_mEmpresa from "./Cl_mEmpresa.js";
import Cl_Controlador from "./Cl_Controlador.js";

export default class Cl_principal{
    constructor(){
        let vista = new Cl_vEmpresa();
        let modelo = new Cl_mEmpresa();
        let controlador = new Cl_Controlador(modelo, vista);
        vista.controlador = controlador;
    }
}