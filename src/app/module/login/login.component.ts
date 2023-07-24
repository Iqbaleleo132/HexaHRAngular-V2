import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/Auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  userdata: any;  
  public loginForm! : FormGroup
  constructor(private formBuilder: FormBuilder, private service:AuthService, private router: Router, private http:HttpClient){}


  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
      
     }) 
  }

  

 proceedlogin(): void{
  
  this.http.post('http://192.168.1.29:5000/Login',  this.loginForm.getRawValue(), {withCredentials: true}).subscribe(
    () => 
      this.router.navigate(['HexaHr'])
      
      
  );

  }
}
