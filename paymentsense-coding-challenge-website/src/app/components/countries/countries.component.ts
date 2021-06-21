import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/Country';
import { CountriesApiService } from 'src/app/services/countries-api.service';
import { countriesGridOptions } from './grid/countriesGridOptions';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  gridOptions = countriesGridOptions;
  rowData: Observable<Country[]>;

  constructor(private countriesApiService: CountriesApiService) { }

  ngOnInit() {
    this.rowData = this.countriesApiService.getCountries();
  }
}
