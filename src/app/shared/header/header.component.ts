import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userPP: any;
  userName: any;
  userEmail: any;
  userPhoneNum: any;
  userBio: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService){}

  sidebarVisible: boolean = false;

  isMenuOpened: boolean = false;

  showDropdown: boolean = false;

  showNotifications: boolean = false;

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
  ngOnInit(): void {
    
    this.http.get('http://192.168.1.29:5000/users',{withCredentials: true}).subscribe(
      (res: any) => {
         const token = localStorage.getItem('token')
         if(token !== null){
          const decodedToken = this.jwtHelper.decodeToken(token);
          this.userPP = decodedToken.url;
          this.userName = decodedToken.name;
          this.userEmail = decodedToken.email;
          this.userPhoneNum = decodedToken.nomorhp;
          this.userBio = decodedToken.bio;
        
      }
  },
  (error) => {
      console.error('Error fetching user data:', error);
  }

  )



    
  }

}
