import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../configuration/app-config.module';

@Injectable({
  providedIn: 'root'
})
export class PaymentsenseCodingChallengeApiService {
  constructor(private httpClient: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {}

  public getHealth(): Observable<string> {
    return this.httpClient.get(this.config.codingChallangeApi.baseUrl + this.config.codingChallangeApi.endpoints.health, { responseType: 'text' });
  }
}
