import { Component } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { KaryawanService } from 'src/app/services/Karyawan/karyawan.service';

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
export class KaryawanComponent {
  karyawan:any
  constructor( private user:KaryawanService) {
    
    this.user.getData().subscribe(karyawan => {
      console.log(karyawan)
      this.karyawan=karyawan;
    })

    
  }


  }





