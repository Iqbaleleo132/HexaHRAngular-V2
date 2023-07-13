import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/Auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor(private builder: FormBuilder, private toastr:ToastrService, private service:AuthService){

  }

  registerform=this.builder.group({
  id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
  name:this.builder.control('',Validators.required),
  password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('(?=."[a-z])(?=."[A-Z])(?=."[0-9])(?=."[$@$!%?&])[A-Za-z\d$@$!%?&].{8,}')])),
  email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
  role:this.builder.control(''),
  isactive:this.builder.control(false),
  });

  proceedregisteration(){
    if(this.registerform.valid){
      this.service.Proceedregister(this.registerform.value).subscribe(res=>{
        this.toastr.success('Hubungi Admin Untuk Aktivasi','Register Berhasil')
      });
    }else{
      this.toastr.warning('Tolong Masukan Data Yang Valid')
    }
  }

}