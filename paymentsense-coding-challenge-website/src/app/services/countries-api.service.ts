import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG, AppConfig } from '../configuration/app-config.module';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
  constructor(private httpClient: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) { }

  public getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.config.codingChallangeApi.baseUrl + this.config.codingChallangeApi.endpoints.countries);
  }
}

