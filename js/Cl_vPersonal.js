export default class Cl_vPersonal{
  constructor(){
    this.inNombre =document.getElementById("personalForm_inNombre");
    this.inTipo = document.getElementById("personalForm_inTipo");
    this.inSueldo = document.getElementById("personalForm_inSueldo");
    this.btProcesar = document.getElementById("personalForm_btProcesar")
  }

  get nombre(){
    return this.inNombre;
  }

  get tipo(){
    return +this.inTipo.value;
  }

  get sueldo(){
    return +this.inSueldo.value;
  }
}