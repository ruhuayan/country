import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CountryComponent
      }
    ])
  ]
})
export class CountryModule { }
