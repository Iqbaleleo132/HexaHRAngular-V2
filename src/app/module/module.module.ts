import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { JabatanComponent } from './jabatan/jabatan.component';
import { KaryawanComponent } from './karyawan/karyawan.component';
import { AprovalComponent } from './aproval/aproval.component';
import { LaporabsenComponent } from './laporabsen/laporabsen.component';


@NgModule({
  declarations: [
    DashboardComponent,
    JabatanComponent,
    KaryawanComponent,
    AprovalComponent,
    LaporabsenComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ChartModule
  ]
})
export class ModuleModule {
    
 }
