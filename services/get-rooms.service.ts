import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetRoomsService {

  private _url: string = '';
  constructor (private http: Http) {}

  getRooms(propertyID: number) {
    this._url += '/rooms?property_id=' + propertyID;
    return this.http.get(this._url)
      .map((response: Response) => response.json());
  }

}
