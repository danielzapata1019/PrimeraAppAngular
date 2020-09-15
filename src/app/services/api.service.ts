import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cerveceria } from 'src/app/model/interfaces/Cerveceria'
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url_api = 'https://api.openbrewerydb.org/breweries';
  constructor(private _http: HttpClient) {}

  invocarApi(): Observable<Cerveceria[]> {
    return this._http.get<Cerveceria[]>(this.url_api);
  }
}
