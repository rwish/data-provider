import { Component, OnInit, ViewChild } from '@angular/core';
import { GetBookingsService } from '../services/get-bookings.service';
import { GetRoomsService } from '../services/get-rooms.service';
import { OnlineUsersService } from '../services/online-users.service';
import { GetPropertiesService } from '../services/get-properties.service';
import { GetPriceVariationService } from '../services/get-price-variation.service';

import { Property } from '../templates/property';
import { Room } from '../templates/room';
import { RoomDetailsComponent } from '../room-details/room-details.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  availableProperties: Array<Property> = [];
  
  // demo data - start
  properties: Property;
  // demo data - end
 
  start: number;
  end: number;

  constructor(/*
      private bookings: GetBookingsService,
      private oUsers: OnlineUsersService,
      private roomsAv: GetRoomsService,
      private getProp: GetPropertiesService,
      private getPrice: GetPriceVariationService */
      )   {  }

  ngOnInit() {

    /* this.getProp.getProperties(1)
      .subscribe(resProperties => this.availableProperties = resProperties); */

    this.propertyDemo();
    
  }

  onNotify(num: Array<number>):void {
    this.start = num[0]; 
    this.end = num[1]; 
    console.log(num);

    console.log('start ' + this.start);
    console.log('end ' + this.end);
  }

  /*getPropertyDetails(proID: number, index: number) {
    this.roomsAv.getRooms(proID)
      .subscribe(resRooms => this.availableProperties[index].existingRooms = resRooms);

    var i: number;
    for (i = 0; i < this.availableProperties[index].existingRooms.length; i++) {
      this.oUsers.getOnlineUsers(this.availableProperties[index].propID, this.availableProperties[index].existingRooms[i].roomID)
        .subscribe(resUsers => this.availableProperties[index].existingRooms[i].onlineUserCount = resUsers);

      this.bookings.getBookings(this.availableProperties[index].propID, this.availableProperties[index].existingRooms[i].roomID)
        .subscribe(resBookings => this.availableProperties[index].existingRooms[i].booked = resBookings);

        this.getPrice.getPrices(this.availableProperties[index].propID, this.availableProperties[index].existingRooms[i].roomID, this.start, this.end)
        .subscribe(resPrices => this.availableProperties[index].existingRooms[i].priceStChartData = resPrices);
    }
  } */


  // mock data
  propertyDemo() {

    // properties
    var ola: Property = {
      propID : 296,
      propName : "Ola Hikkaduwa",
      existingRooms : []
    }


    // rooms
    var olaLuxury : Room = {
      roomID: 10,
      roomName: 'Ola Luxury',
      onlineUserCount: 5,
      booked: [5, 3],
      priceStChartData: [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Buyer'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Seller'}
      ],
      priceStChartLabels: [1, 2, 3, 4, 5, 6, 7]
    }

    var olaSuite : Room = {
      roomID: 11,
      roomName: 'Ola Suite',
      onlineUserCount: 3,
      booked: [8, 2],
      priceStChartData: [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Buyer'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Seller'}
      ],
      priceStChartLabels: [1, 2, 3, 4, 5, 6, 7]
    }

    var olaDeluxe : Room = {
      roomID: 13,
      roomName: 'Ola Deluxe',
      onlineUserCount: 7,
      booked: [2, 5],
      priceStChartData: [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Buyer'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Seller'}
      ],
      priceStChartLabels: [1, 2, 3, 4, 5, 6, 7]
    }

    var rooms: Array<Room> = [olaLuxury, olaSuite, olaDeluxe];

    ola.existingRooms = rooms;

    this.properties = ola;
  }

}
