import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userName: any;
  userEmail: any;
  userPhoneNum: any;
  userPP: any;
  userBio: any;
  userPpKaryawans: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  ngOnInit(): void {
    this.http.get('http://192.168.1.7:5000/users', { withCredentials: true }).subscribe(
      (res: any) => {
        const token = localStorage.getItem('token');
        if (token !== null) {
          const decodedToken = this.jwtHelper.decodeToken(token);
          this.userPP = decodedToken.foto;
          this.userName = decodedToken.name;
          this.userEmail = decodedToken.email;
          this.userPhoneNum = decodedToken.nomorhp;
          this.userBio = decodedToken.bio;

          // Call the second endpoint
          this.http.get('http://192.168.1.7:5000/karyawans', { withCredentials: true }).subscribe(
            (otherRes: any) => {
              const tokenKaryawans = localStorage.getItem('token')
              if(tokenKaryawans !== null){
                const decodedTokenKaryawans = this.jwtHelper.decodeToken(tokenKaryawans)
                this.userPpKaryawans = decodedTokenKaryawans.foto;

              }
              
            },
            (otherError) => {
              console.error('Error fetching data from second endpoint:', otherError);
            }
          );
        }
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
