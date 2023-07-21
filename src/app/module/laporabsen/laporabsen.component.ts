import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-laporabsen',
  templateUrl: './laporabsen.component.html',
  styleUrls: ['./laporabsen.component.scss']
})
export class LaporabsenComponent {

  loading: boolean = true;

  clear(table: Table ) {
    table.clear();
}

visible: boolean = false;

showDialog() {
    this.visible = true;
}
  
index: number | undefined
 
  constructor() {
  }
  ngOnInit(): void{
    
      
  }
 


}
