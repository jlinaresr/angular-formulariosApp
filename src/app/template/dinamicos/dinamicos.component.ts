import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  
  persona: Persona = {
    nombre: 'Julian',
    favoritos: [
      {
        id: 1,
        nombre: 'MH'
      },
      {
        id: 2,
        nombre: 'Zelda'
      }
    ]
  }

  nuevoJuego: string = '';

  guardar(){
    console.log('formulario posteado');
  }

  eliminar(index:number){
    this.persona.favoritos.splice(index, 1);
  }

  agregar(){
    console.log(this.nuevoJuego);
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };
    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

}
