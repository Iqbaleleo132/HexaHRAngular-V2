import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl = 'http://192.168.1.29:5000/users'

  GetAll() {
    return this.http.get(this.apiurl)
  }
  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code)
  }

  proceedlogin(inputdata:any){
    return this.http.post(this.apiurl,inputdata)

  }

  Updateuser(code:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+code, inputdata)
  }

}
