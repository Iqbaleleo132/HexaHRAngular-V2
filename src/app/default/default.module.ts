import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { ModuleModule } from '../module/module.module';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    SharedModule,
    ModuleModule,
    RouterModule,
  ]
})
export class DefaultModule { }
