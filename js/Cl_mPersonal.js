export default class Cl_mPersonal{
    constructor({nombre, tipo, sueldo}){
        this.nombre = nombre;
        this.tipo = tipo;
        this.sueldo = sueldo;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }

    set tipo(tipo) {
        this._tipo = +tipo;
        if (tipo !== 1 && tipo !== 2) this._tipo = 1;
      }
    get tipo(){
        return this._tipo;
    }

    set sueldo(sueldo){
        this._sueldo = +sueldo;
    }
    get sueldo(){
        return this._sueldo;
    }
}