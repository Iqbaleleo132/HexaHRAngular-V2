import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  option: any;
  data: any;

  options: any;

  items!: string[];


  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      this.items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);

      this.data = {
          labels: ['Dikeluarkan', 'Resign', 'Tetap','izin','kontrak'],
          datasets: [
              {
                  data: [300, 50, 100, 37, 65],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-100')]
              }
          ]
      };

      this.options = {
          cutout: '60%',
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          }
      };
  }
}