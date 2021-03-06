import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  codingChallangeApi: CodingChallangeApi;
}

export const APP_DI_CONFIG: AppConfig = {
  codingChallangeApi: environment.codingChallangeApi,
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class AppConfigModule { }

export interface CodingChallangeApi {
  baseUrl: string
  endpoints: {
      health: string;
      countries: string;
  }
}