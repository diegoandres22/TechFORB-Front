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
  public putUser(id: number, user: object): Observable<object> {

    return this._http.put<object>(this.urlApi + `/user/edit/${id}`, user);

  }

  public postTransfer(transfer: object): Observable<object> {

    return this._http.post<object>(this.urlApi + "/transfer/post", transfer);

  }
  public getTransfer(): Observable<any> {

    return this._http.get<any>(this.urlApi + "/transfer/getall");

  }

}
