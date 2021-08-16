import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country';
import { Dictionary } from 'src/app/models/dictionary';
import { ActionTypes, getCountryAction } from 'src/app/states/country.actions';
import { getCountryDict, selectCountry } from 'src/app/states/country.selectors';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  country$: Observable<Country>;
  dict$: Observable<Dictionary>;
  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(({ id }) => {
      this.store.dispatch(getCountryAction({id}));
    });

    this.country$ = this.store.select(selectCountry);
    this.dict$ = this.store.select(getCountryDict);
  }
} 
