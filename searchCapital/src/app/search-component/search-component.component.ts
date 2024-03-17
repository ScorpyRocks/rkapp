import { Component } from '@angular/core';
import * as countries from '../../assets/country-by-capital-city.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
})
export class SearchComponentComponent {
  data: any = countries;
  url: string = '/assets/country-by-capital-city.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.data = res;
    });
  }
}
