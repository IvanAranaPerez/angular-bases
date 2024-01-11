import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-theoffice-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListOfficeComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Dwight',
      jobPosition: 'Sales'
    }
  ];

  //onDeleteId = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void{
    if (!id) return;
    console.log({id})
    //TODO: Emitir el ID del personaje.
    this.onDelete.emit(id);
  }
}
