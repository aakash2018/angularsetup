import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor(private http: HttpClient) { }

  addCompany(companyData): Observable<any> {
    return this.http.post(environment.apiUrl + "/add", companyData);
  }

  companyList(): Observable<any> {
    return this.http.get(environment.apiUrl + "/list");
  }

}
