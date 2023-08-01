import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  userdata: any;  
  public loginForm! : FormGroup
  constructor(private formBuilder: FormBuilder, private router: Router, private http:HttpClient){}


  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',      
     }) 
  }

  

 proceedlogin(){
  return this.http.post('http://192.168.1.29:5000/Login',this.loginForm.getRawValue(), {withCredentials: true}).subscribe(
    (res: any) => {
      AuthInterceptor.tokenmsk = res.accessToken
      const token = res.accessToken;
      const tokenAsString = JSON.stringify(token);
      this.router.navigate(['HexaHr'])
      localStorage.setItem('token', tokenAsString)
      alert('Login Successfully')
    },
  (error) => {
      // Error handling for failed login
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
  }
  );
}



}
