  import { HttpClient } from '@angular/common/http';
  import { Token } from '@angular/compiler';
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
  import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
  import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';




  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  export class LoginComponent implements OnInit {
    images = [347, 111,14].map((n) => `https://picsum.photos/id/${n}/900/500`);
    userdata: any;  
    public loginForm! : FormGroup
    constructor(private formBuilder: FormBuilder, private router: Router, private http:HttpClient, private jwtHelper: JwtHelperService){}


    
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: '',
        password: '',      
      }) 
    }

    

  proceedlogin(){
    return this.http.post('http://192.168.1.29:5000/Login',this.loginForm.getRawValue(), {withCredentials: true}).subscribe(
      (res: any) => {

        const token = res.accessToken;
        if(!this.jwtHelper.isTokenExpired(token)){
        AuthInterceptor.tokenmsk = res.accessToken
        const tokenAsString = JSON.stringify(token);
        this.router.navigate(['HexaHr'])
        localStorage.setItem('token', tokenAsString)
        alert('Login Successfully')
      }else {
        alert('token is expired')
      }
      },
    (error) => {
        // Error handling for failed login
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials.');
    }
    );
  }



  }
