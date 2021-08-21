import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX',
    precio: 10,
    existencia: 10
  };

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido() : boolean {
    return this.miFormulario?.controls.producto?.touched &&
           this.miFormulario?.controls.producto?.invalid;
  }

  precioValido() : boolean {
    return this.miFormulario?.controls.precio?.touched && 
           this.miFormulario?.controls.precio?.value < 0;
  }

  /* guardar( miFormulario: NgForm ){
    console.log('submit hecho', miFormulario.value);
  } */

  guardar(){
    console.log('submit hecho', this.miFormulario.value);

    if(this.miFormulario.controls.precio.value < 0){
      console.log('no posteado');
      return;
    }

    //this.miFormulario.resetForm();

    // Otra forma de resetear con valor por defecto
    this.miFormulario.resetForm({
      producto: 'algo',
      precio: 0,
      existencia: 0
    });
  }

}
