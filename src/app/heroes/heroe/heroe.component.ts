import { Component, enableProdMode } from '@angular/core';

@Component({
    selector    : 'app-heroe',
    templateUrl : 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'ironMan';
    edad  : number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cabiarEdad(): void{
        this.edad = 30;
    }


}