import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KaryawanService {

  message = '';
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://192.168.1.29:5000/karyawans', {withCredentials: true}).subscribe((res:any) =>{
      this.message = `Hi ${res.nama}`;
    },
    err => {
      this.message = 'you are not logged in'
    }
    )
  }

}
