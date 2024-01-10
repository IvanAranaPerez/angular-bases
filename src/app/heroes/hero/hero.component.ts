import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'batman';
  public age: number = 21;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDesc():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'ironman';
  }

  changeAge():void{
    this.age = 34;
  }

  resetForm(): void{
    this.name = 'batman';
    this.age = 21;
  }
}
