import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ModuleModule } from './module/module.module';
import { DefaultModule } from './default/default.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Card, CardModule } from 'primeng/card';
import { JabatanComponent } from './jabatan/jabatan.component';
import { KaryawanComponent } from './karyawan/karyawan.component';
import { AprovalComponent } from './aproval/aproval.component';
import { LaporabsensiComponent } from './laporabsensi/laporabsensi.component';

@NgModule({
  declarations: [
    AppComponent,
    JabatanComponent,
    KaryawanComponent,
    AprovalComponent,
    LaporabsensiComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ModuleModule,
    DefaultModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
