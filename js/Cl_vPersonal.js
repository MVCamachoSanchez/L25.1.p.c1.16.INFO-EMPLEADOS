export default class Cl_vPersonal{
  constructor(){
    this.inNombre =document.getElementById("personalFrom_inNombre");
    this.inTipo = document.getElementsById("personalForm_inTipo");
    this.inSueldo = document.getElementById("personalForm_inSueldo");
    this.btprocesar = document.getElementsByName("personalForm_btProcesar")
  }

  get nombre(){
    return this.inNombre.value;
  }

  get tipo(){
    return this.inTipo.value;
  }

  get sueldo(){
    return this.inSueldo.value;
  }
}