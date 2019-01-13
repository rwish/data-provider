import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OnlineUsersService {

  private _url: string = '';
  constructor (private http: Http) {}

  getOnlineUsers (propertyID: number, roomID: number) {
    this._url += '/users?property_id=' + propertyID + '&room_id=' + roomID;
    return this.http.get(this._url)
      .map((response: Response) => response.json());
  }

}
