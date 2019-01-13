import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetBookingsService {

  private _url: string = '';
  constructor (private http: Http) {}

  getBookings (propertyID: number, roomID: number) {
    this._url += '/reservations?property_id=' + propertyID + '&room_id=' + roomID;
    return this.http.get(this._url)
      .map((response: Response) => response.json());
  }

}
