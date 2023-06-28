import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ChartModule
  ]
})
export class ModuleModule {
    
 }
