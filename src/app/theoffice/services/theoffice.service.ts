//?El o los servicios son los encargados de manejar la logica de negocio.
import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class TheOfficeService {

  public character: Character[] = [
    {
      id: uuid(),
      name: 'Pam',
      jobPosition:'Receptionist'
    },
    {
      id: uuid(),
      name: 'Angela',
      jobPosition: 'Counter'
    },
    {
      id: uuid(),
      name: 'Michael Scott',
      jobPosition: 'Reg. Manager'
    }
  ];

  addCharacter(character: Character):void{
    const newCharacter: Character ={ id: uuid(), ...character}; //?el spread toma todas las propiedades de character a la vez.

    this.character.push(newCharacter);
  }

  onDeleteCharacterById(id:string){
    this.character = this.character.filter( character => character.id !== id);
  }


  constructor() { }

}
