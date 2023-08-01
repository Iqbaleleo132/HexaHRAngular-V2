import { Component, OnInit} from '@angular/core';
import { MenuItem} from 'primeng/api';
import { MessageService } from 'primeng/api';



interface City {
  name: string;
  code: string;
}

interface Jabatan{
  name: string;
  code: string;
}


@Component({
  selector: 'app-jabatan',
  templateUrl: './jabatan.component.html',
  styleUrls: ['./jabatan.component.scss'],
  providers: [ MessageService ]
})
export class JabatanComponent implements OnInit {
  visible: boolean = false;
  showDialog() {
      this.visible = true;
  }
  text: string | undefined;

  ingredient!: string;

  constructor(private messageService: MessageService) {}

  cities: City[] | undefined;
  jabatan: Jabatan[] | undefined;
  selectedCity: City | undefined;
  selectedJabatan: Jabatan | undefined;

  items: MenuItem[] | undefined;
    home: MenuItem | undefined;
   
  ngOnInit() {
      this.cities = [
          { name: 'Direksi', code: 'D' },
          { name: 'HRD', code: 'HRD' },
          { name: 'Programmer', code: 'P' },
          { name: 'IT Support', code: 'IT' },
          { name: 'Programmer', code: 'P' }
      ];

      this.jabatan = [
        { name: 'UI/UX', code: 'UI' },
        { name: 'Backend', code: 'BE' },
        { name: 'Frontend', code: 'FE' },
        { name: 'Include Data', code: 'ID' },
        { name: 'Frontend', code: 'FE' }
      ];
      this.items = [{ label: 'Master Data' }, {label:'Jabatan', routerLink:'/hexahr-home/jabatan'}];

        this.home = { icon: 'pi pi-home', routerLink: '/HexaHr' };
  }
  showDialog3() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }
  show() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Berhasil Diperbarui' });
      this.hideDialog();
    }
  cities3: City[] | undefined;

  selectedCity3: City | undefined;

onChangeFunction() {
  console.log('Nilai dropdown berubah:', this.selectedCity);
  // Lakukan tindakan atau pemrosesan lain sesuai kebutuhan Anda
}
onChangeFunctionJabatan() {
  console.log('Nilai dropdown berubah:', this.selectedJabatan);
  // Lakukan tindakan atau pemrosesan lain sesuai kebutuhan Anda
}
}


