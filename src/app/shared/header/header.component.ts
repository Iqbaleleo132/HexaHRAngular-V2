import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sidebarVisible: boolean = false;

  isMenuOpened: boolean = false;

  showDropdown: boolean = false;

  showNotifications: boolean = false;

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
  ngOnInit(): void {
    
    

    
  }

}
