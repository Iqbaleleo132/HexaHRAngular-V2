import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private builder:FormBuilder,private toast:ToastModule){

  }

  registerform=this.builder.group({
  id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
  name:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('(?=."[a-z])(?=."[A-Z])(?=."[0-9])(?=."[$@$!%?&])[A-Za-z\d$@$!%?&].{8,}')])),
  email:this.builder.control('',Validators.compose([Validators.required,Validators.email])  ),
  gender:this.builder.control('male'),
  role:this.builder.control(''),
  isactive:this.builder.control(false),
  });

  proceedregisteration(){
    if(this.registerform.valid){

    }else{

    }
  }

}
