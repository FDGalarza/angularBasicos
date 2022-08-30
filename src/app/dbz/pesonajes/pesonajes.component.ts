import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-pesonajes',
  templateUrl: './pesonajes.component.html',
  
})
export class PesonajesComponent  {
  
  //@Input() personajes: Personaje[] = []
  get personajes(){
    return this.dbzService.personajes;
  }
  constructor(private dbzService: Dbzservice){
    
  }
}
