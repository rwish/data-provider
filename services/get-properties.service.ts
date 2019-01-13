import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetPropertiesService {

  private _url: string = '';
  constructor (private http: Http) {}

  getProperties (ownerID: number) {
    this._url += '/properties?' + ownerID;
    return this.http.get(this._url)
      .map((response: Response) => response.json());
  }

}
