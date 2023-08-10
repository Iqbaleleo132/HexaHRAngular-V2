import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-aproval',
  templateUrl: './aproval.component.html',
  styleUrls: ['./aproval.component.scss'],
  providers: [ MessageService ]
})
export class AprovalComponent implements OnInit {
  visible: boolean = false;
  date: Date[] | undefined;
  showDialog() {
      this.visible = true;
  }

  constructor(private messageService: MessageService) {}

  cities!: City[];
  selectedCities!: City[];
  value!: string;
  ingredient!: string;
  
  items: MenuItem[] | undefined;
    home: MenuItem | undefined;
   
  ngOnInit() {

      this.items = [{ label: 'Master Data' }, {label:'Aproval Izin/Lembur', routerLink:'/hexahr-home/aproval'}];
      this.home = { icon: 'pi pi-home', routerLink: '/hexahr-home/dashboard' };

     
  }
  hideDialog() {
    this.visible = false;
  }
  show() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Request Berhasil Disetujui' });
      this.hideDialog();
    }
}