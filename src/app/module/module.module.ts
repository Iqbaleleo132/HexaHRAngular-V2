import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { JabatanComponent } from './jabatan/jabatan.component';
import { KaryawanComponent } from './karyawan/karyawan.component';
import { AprovalComponent } from './aproval/aproval.component';
import { LaporabsenComponent } from './laporabsen/laporabsen.component';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ScrollerModule } from 'primeng/scroller';
import { BadgeModule } from 'primeng/badge';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DecimalPipe, NgFor } from '@angular/common';

@NgModule({
  declarations: [
    DashboardComponent,
    JabatanComponent,
    KaryawanComponent,
    AprovalComponent,
    LaporabsenComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    CardModule,
    ChartModule,
    DividerModule,
    TabViewModule,
    ButtonModule,
    ScrollerModule,
    BadgeModule,
    PaginatorModule,
    TableModule,
    DecimalPipe,
    NgFor
  ]
})
export class ModuleModule {
    
 }
