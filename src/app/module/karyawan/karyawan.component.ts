import { Component,OnInit } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { KaryawanService } from 'src/app/services/Karyawan/karyawan.service';
import { take } from 'rxjs';

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
  karyawan:any
  constructor( private user:KaryawanService) {
  }
  ngOnInit(): void{
    this.user.getData()
    .pipe(take(1))
    .subscribe(karyawan => {
      console.log(karyawan)
      this.karyawan=karyawan
    })
      
  }


  }





