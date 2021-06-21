import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgGridModule } from 'ag-grid-angular';
import { AppConfigModule } from 'src/app/configuration/app-config.module';
import { CountriesApiService } from 'src/app/services/countries-api.service';

import { CountriesComponent } from './countries.component';
import { FlagRendererComponent } from './grid/flag-renderer.component';

describe('CountriesComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CountriesComponent,
        FlagRendererComponent
      ],
      imports: [
        BrowserModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FontAwesomeModule,
        AppConfigModule,
        AgGridModule.withComponents([FlagRendererComponent])
      ]
    })
    .compileComponents();
  }));

  it('should create countries component', () => {
    const fixture = TestBed.createComponent(CountriesComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should make a request for countries', () => {
    
    const countriesApiService: CountriesApiService = TestBed.get(CountriesApiService);
    const countriesApiServiceSpy = spyOn(countriesApiService, 'getCountries').and.callThrough();

    const fixture = TestBed.createComponent(CountriesComponent);
    const component = fixture.debugElement.componentInstance;
    component.ngOnInit();

    expect(countriesApiServiceSpy).toHaveBeenCalledTimes(1);
    
  });
});
