import Cl_mPersonal from "./Cl_mPersonal.js";
import Cl_vPersonal from "./Cl_vPersonal.js";

export default class Cl_vEmpresa{
    constructor(){
        this.controlador = null;
        this.lblMontoTotalObreros = document.getElementById("mainForm_lblMontoTotalObreros");
        this.lblCantidadObreros = document.getElementById("mainForm_lblCantidadObreros");
        this.lblPromedioObreros = document.getElementById("mainForm_lblPromedioObreros");        
        this.lblMontoTotalAdministrativos = document.getElementById("mainForm_lblMontoTotalAdministrativos");
        this.lblCantidadAdministrativos = document.getElementById("mainForm_lblCantidadAdministrativos");
        this.lblPromedioAdministrativos = document.getElementById("mainForm_lblPromedioAdministrativos");
        this.vPersonal = new Cl_vPersonal();
        this.vPersonal.btProcesar.onclick = () =>
            this.controlador.procesarPersonal();
    }

    procesarPersonal(){
        this.mPersonal = new Cl_mPersonal({
            nombre : this.vPersonal.nombre,
            tipo: this.vPersonal.tipo,
            sueldo: this.vPersonal.sueldo,
        })
        return this.mPersonal;
    }

    reportarPersonal(montoTotalObreros, cantidadObreros, 
        promedioObreros, montoTotalAdministrativos, 
        cantidadAdministrativos, promedioAdministrativos){
            
            this.lblMontoTotalObreros.innerHTML =   montoTotalObreros,
            this.lblCantidadObreros.innerHTML = cantidadObreros;
            this.lblPromedioObreros.innerHTML = promedioObreros;
            this.lblMontoTotalAdministrativos.innerHTML = montoTotalAdministrativos;
            this.lblCantidadAdministrativos.innerHTML = cantidadAdministrativos;
            this.lblPromedioAdministrativos.innerHTML = promedioAdministrativos;
    }
}