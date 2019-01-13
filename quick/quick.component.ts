import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quick',
  templateUrl: './quick.component.html',
  styleUrls: ['./quick.component.css']
})
export class QuickComponent implements OnInit {

  @Output() timeRange: EventEmitter<Array<number>> = new EventEmitter<Array<number>>();

  date: Date;

  now: Date;

  start: number;
  end: number;

  reduction: number;

  visible = false;

  toggle() {
    this.visible = !this.visible;
  }

  @Input() disp: string = "Last 30 minutes";

  constructor() { }

  ngOnInit() { }  

  setTimestamps(d1: Date, d2: Date) {
    this.start = Math.floor(d1.getTime() / 1000);
    this.end = Math.floor(d2.getTime() / 1000);
  }

  sendTimestamps() {
    this.timeRange.emit([this.start, this.end]);
  }

  today(disp: string) {
    this.disp = disp;
    this.now = new Date();
    // var prev = new Date ( Math.floor(this.now.getTime() /  (1000 * 60 * 60 * 24)) * (1000 * 60 * 60 * 24));

    var prev = new Date(this. now);
    prev.setHours(0,0,0,0);

    console.log("now : " + this.now.toISOString());
    console.log("prev : " + prev.toISOString());

    this.setTimestamps(this.now, prev);
    this.sendTimestamps();
  }

thisWeek(disp: string) {
  this.disp = disp;
  this.now = new Date();

  var prev = new Date(this.now);
  prev.setDate(prev.getDate() - prev.getDay());
  prev.setHours(0,0,0,0);

  console.log("now : " + this.now.toISOString());
  console.log("prev : " + prev.toISOString());

  this.setTimestamps(this.now, prev);
  this.sendTimestamps();
}

thisMonth (disp: string) {
  this.disp = disp;
  this.now = new Date();

  var prev = new Date(this.now);
  prev.setDate(1);
  prev.setHours(0,0,0,0);

  console.log("now : " + this.now.toISOString());
  console.log("prev : " + prev.toISOString());

  this.setTimestamps(this.now, prev);
  this.sendTimestamps();
}

thisYear (disp: string) {
  this.disp = disp;
  this.now = new Date();

  var prev = new Date(this.now);
  prev.setMonth(0);
  prev.setDate(1);
  prev.setHours(0,0,0,0);

  console.log("now : " + this.now.toISOString());
  console.log("prev : " + prev.toISOString());

  this.setTimestamps(this.now, prev);
  this.sendTimestamps();
}

earlierDays (disp: string, reduction: number) {
   this.disp = disp;
   this.reduction = reduction;
  this.now = new Date();

  var prev = new Date(this.now);
  prev.setDate(prev.getDate() - this.reduction);
  prev.setHours(0,0,0,0);

  this.now.setDate(prev.getDate() + 1);

  console.log("now : " + this.now.toISOString());
  console.log("prev : " + prev.toISOString());

  this.setTimestamps(this.now, prev);
  this.sendTimestamps();
}

lastMinutes (disp: string, reduction: number) {
  this.disp = disp;
  this.reduction = reduction;

  this.now = new Date();
  var prev = new Date(this.now);
  prev.setMinutes(prev.getMinutes() - this.reduction)

  this.setTimestamps(this.now, prev);
  this.sendTimestamps();
}

lastHours (disp: string, reduction: number) {
  this.disp = disp;
  this.reduction = reduction;

  this.now = new Date();
  var prev = new Date(this.now);
  prev.setHours(prev.getHours() - this.reduction)

  this.setTimestamps(this.now, prev);
  this.sendTimestamps();
}

lastDays (disp: string, reduction: number) {
  this.disp = disp;
  this.reduction = reduction;

  this.now = new Date();
  var prev = new Date(this.now);
  prev.setDate(prev.getDate() - this.reduction)

  this.setTimestamps(this.now, prev);
  this.sendTimestamps();
}

lastMonths (disp: string, reduction: number) {
  this.disp = disp;
  this.reduction = reduction;

  this.now = new Date();
  var prev = new Date(this.now);
  prev.setMonth(prev.getMonth() - this.reduction)

  this.setTimestamps(this.now, prev);
  this.sendTimestamps();
}

lastYears (disp: string, reduction: number) {
  this.disp = disp;
  this.reduction = reduction;
  
  this.now = new Date();
  var prev = new Date(this.now);
  prev.setFullYear(prev.getFullYear() - this.reduction)

  this.setTimestamps(this.now, prev);
  this.sendTimestamps();
}

}
