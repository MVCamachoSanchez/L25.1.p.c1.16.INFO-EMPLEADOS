export default class Cl_Controlador{
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarPersonal(){
        this.modelo.procesarPersonal(this.vista.procesarPersonal());
        this.vista.reportarPersonal(
            this.modelo.acmObreros,
            this.modelo.cntObreros,
            this.modelo.promedioObreros(),
            this.acmAdministrativos,
            this.cntAdministrativos,
            this.modelo.promedioAdministrativos()
        );
    }
}