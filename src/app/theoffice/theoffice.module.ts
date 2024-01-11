import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TheOfficeComponent } from './pages/main-page.component';
import { ListOfficeComponent } from './components/list/list.component';
import { FormOfficeComponent } from './components/form/form.component';





@NgModule({
  declarations: [
    TheOfficeComponent,
    ListOfficeComponent,
    FormOfficeComponent
  ],
  exports:[
    TheOfficeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TheofficeModule { }
