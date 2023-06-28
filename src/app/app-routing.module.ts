import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'hexahr-home',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
