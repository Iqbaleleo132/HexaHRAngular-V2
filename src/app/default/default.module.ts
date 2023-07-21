import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { ModuleModule } from '../module/module.module';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';



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
    HttpClientModule
  ]
})
export class DefaultModule { }
