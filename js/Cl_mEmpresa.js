export default class Cl_mEmpresa{
    constructor(){
        this.acmObreros = 0;
        this.acmAdministrativo = 0;
        this.cntObreros = 0;
        this.cntAdministrativo = 0;
    }

    procesarPersonal(personal){
        //Acumular los trabajadores obreros
        if(personal.tipo == "obrero")
            {this.acmObreros += personal.sueldo;}

        //Acumular los trabajadores administrativos 
        if(personal.tipo == "administrativo")
            {this.acmAdministrativo += personal.sueldo;}

        //Contar los obreros 
        if(personal.tipo === "obrero"){
            this.cntObreros++;
        }

        //Contar los admnistrativo
        if(personal.tipo === "administrativo"){
            this.cntAdministrativo++;
        }

    }

    montoTotalObreros(){
        return this.acmObreros;
    }

    promedioObreros(){
        return this.acmObreros/this.cntObreros;
    }

    montoTotalAdministrativos(){
        return this.acmAdministrativo;
    }

    promedioAdministrativos(){
        return this.acmAdministrativo/this.cntAdministrativo;
    }
}