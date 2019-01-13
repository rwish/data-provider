
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css']
})
export class TimingComponent implements OnInit {

  visible = false;
  epStart;
  epEnd;

  @Output() time: EventEmitter<Array<number>> = new EventEmitter<Array<number>>();

  toggle() {
    this.visible = !this.visible;
  }

  onNotify(timeRange: Array<number>) {
    this.epStart = timeRange[0]; 
    this.epEnd = timeRange[1]; 
    console.log(timeRange);

    console.log('start ' + this.epStart);
    console.log('end ' + this.epEnd);

    this.time.emit([this.epStart, this.epEnd]);
  }


  constructor() { }

  ngOnInit() {
  }

}
