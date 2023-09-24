import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
// import { HttpClientJsonpModule } from '@angular/common/http';

@Injectable()
export class DataAPIService {

  private urlApi = 'https://banco-399816.rj.r.appspot.com';

  constructor(private _http: HttpClient) { }

  public getUsers(): Observable<any> {

    return this._http.get<any>(this.urlApi + "/user/getall");

  }
  public postUser(user: object): Observable<object> {

    return this._http.post<object>(this.urlApi + "/user/post", user);

  }
}
