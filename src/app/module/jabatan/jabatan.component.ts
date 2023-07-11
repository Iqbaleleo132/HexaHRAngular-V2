  import { Component, OnInit } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  @Component({
    selector: 'app-jabatan',
    templateUrl: './jabatan.component.html',
    styleUrls: ['./jabatan.component.scss']
  })
  export class JabatanComponent {
    data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const backendUrl = 'http://192.168.1.29:5000/jabatans'; // Ganti <alamat-ip-backend> dengan alamat IP backend dan sesuaikan dengan endpoint yang sesuai

    this.http.get<any[]>(backendUrl)
      .subscribe(response => {
        console.log(response)
        this.data = response;
    });
  }
}