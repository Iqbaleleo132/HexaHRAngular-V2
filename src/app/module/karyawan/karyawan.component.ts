import { Component,OnInit } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { KaryawanService } from 'src/app/services/Karyawan/karyawan.service';
import { take } from 'rxjs';
import { Table } from 'primeng/table';

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

  loading: boolean = true;

  clear(table: Table ) {
    table.clear();
}

visible: boolean = false;

showDialog() {
    this.visible = true;
}
  
index: number | undefined
  karyawan:any
  constructor( private user:KaryawanService) {
  }
  ngOnInit(): void{
    this.user.getData()
      
  }
 


  }





