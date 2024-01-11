import { Character } from '../interfaces/character.interface';
import { TheOfficeService } from './../services/theoffice.service';
import { Component } from '@angular/core';
// import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-theoffice-main-page',
  templateUrl: './main-page.component.html'
})

export class TheOfficeComponent {
  constructor(private officeService: TheOfficeService){}

  get Character(): Character[]{
    return [...this.officeService.character];
  }

  onDeleteCharacter(id: string):void {
    this.officeService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
    this.officeService.addCharacter(character);
  }
}
