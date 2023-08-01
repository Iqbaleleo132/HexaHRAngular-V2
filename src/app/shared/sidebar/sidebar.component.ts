import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private router: Router, private http: HttpClient){}

  sidebarVisible: boolean = false;

  isMenuOpened: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  logOut(){
    this.http.delete('http://192.168.1.29:5000/Logout',{withCredentials: true}).subscribe(
      () => {
        localStorage.removeItem('token')
        this.router.navigate(['login'])
      },
      (error) => {
        console.error('Logout Failed:', error);
        alert('Logout failed. please try again')
      }
    )
  }
  
}
