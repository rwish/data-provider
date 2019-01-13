import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetPriceVariationService {

  private _url: string = '';
  constructor (private http: Http) {}

  getPrices (propertyID: number, roomID: number, stTime: number, endTime: number) {
    this._url += '/prices?property_id=' + propertyID + '&room_id=' + roomID + '&timestamp_start=' + stTime + '&timestamp_end=' + endTime;
    return this.http.get(this._url)
      .map((response: Response) => response.json());
  }
}
