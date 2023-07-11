import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { AprovalComponent } from './module/aproval/aproval.component';
import { JabatanComponent } from './module/jabatan/jabatan.component';
import { KaryawanComponent } from './module/karyawan/karyawan.component';
import { LaporabsenComponent } from './module/laporabsen/laporabsen.component';
import { LoginComponent } from './module/login/login.component';


const routes: Routes = [
  {
    path: 'hexahr-home',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'aproval',
        component: AprovalComponent
      },
      {
        path: 'jabatan',
        component: JabatanComponent
      },
      {
        path: 'karyawan',
        component: KaryawanComponent
      },
      {
        path: 'laporan',
        component: LaporabsenComponent
      },
    ]
  },
  {

  path: 'login',
  component: LoginComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
