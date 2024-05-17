import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecieListComponent } from './especie-list/especie-list.component';
import { EspecieDetailComponent } from './especie-detail/especie-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EspecieListComponent, EspecieDetailComponent], exports: [EspecieListComponent]
})
export class EspecieModule { }
