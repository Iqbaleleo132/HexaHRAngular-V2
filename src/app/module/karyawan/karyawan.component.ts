import { Component,OnInit } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';

import { take } from 'rxjs';
import { Table } from 'primeng/table';
import { HttpClient } from '@angular/common/http';

interface Karyawan {
	id: number;
	foto: string;
	name: string;
	masa_kontrak:string;
}


@Component({
  selector: 'app-karyawan',
  templateUrl: './karyawan.component.html',
  
  styleUrls: ['./karyawan.component.scss']
})
export class KaryawanComponent implements OnInit {
  karyawan: Karyawan [] = [];
  loading: boolean = true;

  clear(table: Table ) {
    table.clear();
}

visible: boolean = false;

showDialog() {
    this.visible = true;
}
  
  index: number | undefined
  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    this.http
        .get<Karyawan[]>('http://192.168.1.29:5000/karyawans', { withCredentials: true })
        .subscribe(
            (res: Karyawan[]) => {
                this.karyawan = res;
                this.loading = true;
            },
            (error) => {
                console.error('Error fetching data:', error);
                this.loading = false;
            }
        );
}


  }





