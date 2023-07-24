import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  visible: boolean = false;

  showDialog(){
    this.visible = true;
  }
  
 

}
