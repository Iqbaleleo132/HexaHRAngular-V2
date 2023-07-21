import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { Dialog, DialogModule } from 'primeng/dialog';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';




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
    NgbDropdownModule,
    CommonModule,
    RouterModule,
    DialogModule,
    SidebarModule,
    ButtonModule,
    MenuModule,
    BadgeModule,
    AvatarModule

  ]
})
export class SharedModule { }
