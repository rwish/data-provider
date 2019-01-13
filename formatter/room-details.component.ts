import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { Room } from '../templates/room';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
 
  @Input() room: Room;

  constructor() {
    
   }

  public priceStChartOptions: any = {
    responsive: true,
    elements: {
      line: {
          tension: 0
      }
  },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        labelString: 'price'
      }],
      xAxes: [
        {
          labelString: 'timesteps'
        }
      ]
    }
  };

  public priceStChartLegend = true;
  public priceStChartType = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e); 
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  
  bookingLabels: Array<string> = ['booked', 'rejected'];
  bookingChartType = 'doughnut';

  ngOnInit() {
  }

}

@NgModule({
  imports: [
    BrowserModule,
    ChartsModule
  ],
  exports: [RoomDetailsComponent],
  declarations: [RoomDetailsComponent]


})
export class RoomDetailsModule { }
