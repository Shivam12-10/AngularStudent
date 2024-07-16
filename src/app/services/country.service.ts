import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private baseUrl = 'https://localhost:7177/api/Countries';


  PostCountry(formData: any) {
    debugger;
    return this._http.post("https://localhost:7177/api/Countries/", formData);
  }

  updateCountry(formData: any) {
    debugger;
    return this._http.put("https://localhost:7177/api/Countries/" + formData.id, formData);
  }

  constructor(private _http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    debugger;
    return this._http.get<Country[]>(this.baseUrl);
  }
  deleleCountry(id: any) {
    debugger;
    return this._http.delete("https://localhost:7177/api/Countries/" + id)

  }
  
}
