import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from 'src/app/models/country';
// import { Dictionary } from 'src/app/models/dictionary';
// import { ActionTypes } from 'src/app/states/country.actions';
import { selectCountries, selectRegions } from 'src/app/states/country.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries$: Observable<Country[]>;
  regions$: Observable<string[]>;
  name: string;
  region = "Filter By Region";
  dropdownShow = false;
  private timeid: number;
  defaultImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.countries$ = this.store.select(selectCountries);
    this.regions$ = this.store.select(selectRegions);
  }

  onInput(query: string): void { 
    if (this.timeid) clearTimeout(this.timeid);
    this.timeid = window.setTimeout(() => {
      const region = this.region === "Filter By Region" ? "" : this.region;
      this.countries$ = this.countries$.pipe(
        map((countries: Country[]) => 
          countries.filter(c => new RegExp(this.name, "gi").test(c.name) && new RegExp(region, "gi").test(c.region))
        ),
      )
    }, 100);
  }
  onSelectRegion(region: string): void {
    this.region = region;
    this.dropdownShow = false;
  }
}
