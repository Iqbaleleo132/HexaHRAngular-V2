import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebarVisible: boolean = false;

  isMenuOpened: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
  
}
