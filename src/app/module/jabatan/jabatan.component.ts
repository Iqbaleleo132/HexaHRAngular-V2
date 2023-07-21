  import { Component, OnInit } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  @Component({
    selector: 'app-jabatan',
    templateUrl: './jabatan.component.html',
    styleUrls: ['./jabatan.component.scss']
  })
  export class JabatanComponent {
     visible: boolean = false;

  showDialog() {
      this.visible = true;
  }



  ngOnInit() {
      


  // Fungsi baru ke-3
  

  }
}