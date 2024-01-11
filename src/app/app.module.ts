import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { counterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { TheOfficeComponent } from './theoffice/pages/main-page.component';
import { TheofficeModule } from './theoffice/theoffice.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    counterModule,
    HeroesModule,
    AppRoutingModule,
    TheofficeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
