import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzModule } from '../dbz.module';
import { Personaje } from '../interfaces/dbz.interface';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: Dbzservice){}

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar(){
    this.dbzService.agregarPersonajes(this.nuevo);
    if(this.nuevo.nombre.trim().length > 0){
      this.nuevo = {
        nombre: '',
        poder: 0
      }
    }
  }

  
}
