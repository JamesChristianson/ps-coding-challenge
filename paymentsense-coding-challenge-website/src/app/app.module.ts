import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentsenseCodingChallengeApiService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppConfigModule } from './configuration/app-config.module';
import { CountriesComponent } from './components/countries/countries.component';
import { AgGridModule } from 'ag-grid-angular';
import { FlagRendererComponent } from './components/countries/grid/flag-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    FlagRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    AppConfigModule,
    AgGridModule.withComponents([FlagRendererComponent])
  ],
  providers: [PaymentsenseCodingChallengeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
