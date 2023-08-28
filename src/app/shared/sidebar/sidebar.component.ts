import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private router: Router, private http: HttpClient, private jwtHelper:JwtHelperService){}

  sidebarVisible: boolean = false;

  isMenuOpened: boolean = false;

  isAdmin: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  ngOnInit() {
    const logToken = localStorage.getItem('token');
    if(logToken !== null && !this.jwtHelper.isTokenExpired(logToken)) {
      // Assuming you have a way to determine admin status, for example, based on roles in the token
      const decodedToken = this.jwtHelper.decodeToken(logToken);
      this.isAdmin = decodedToken.role === 'admin'; // Adjust the role property accordingly
    }
  }
  

  logOut() {
    const logToken = localStorage.getItem('token');
    if (logToken !== null && !this.jwtHelper.isTokenExpired(logToken)) {
      this.http.delete('http://192.168.1.7:5000/logout', { withCredentials: true }).subscribe(
        () => {
          localStorage.removeItem('token');
          this.router.navigate(['login']);
        },
        (error) => {
          console.error('Logout Failed', error);
          alert('Logout failed, Please try again');
        }
      );
    }
  }
  
}
