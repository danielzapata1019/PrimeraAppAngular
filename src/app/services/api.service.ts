import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url_api = 'https://api.openbrewerydb.org/breweries';
  constructor(private _http: HttpClient) {}

  invocarApi() {
    return this._http.get(this.url_api);
  }
}
