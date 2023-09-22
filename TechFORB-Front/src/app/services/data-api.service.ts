import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataAPIService {

  constructor(private _http:HttpClient) { }

  traerData(){
  }
}
