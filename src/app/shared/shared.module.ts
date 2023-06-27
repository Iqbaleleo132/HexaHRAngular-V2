import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Dialog, DialogModule } from 'primeng/dialog';




@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DialogModule,
    SidebarModule,
    ButtonModule
  ]
})
export class SharedModule { }
