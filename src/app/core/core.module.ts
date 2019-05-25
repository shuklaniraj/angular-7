import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ],
  providers: [],
  exports: [
    CoreComponent,
    MaterialModule
  ]
})
export class CoreModule { }
