import { Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormOfficeComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    jobPosition: ''
  }

  addCharacter(): void{
    console.log(this.character);
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);

    this.character = {name:'', jobPosition:''};
  }
}
