import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ActionTypes, CountryAction } from './country.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Country } from '../models/country';
import { of } from 'rxjs';
import { CountryService } from '../service/country.service';

@Injectable()
export class CountryEffects {
  constructor(private actions$: Actions<CountryAction>, private countryService: CountryService) { }

  loadCountries$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.LOAD_COUNTRIES),
    mergeMap(() => this.countryService.getAll()
      .pipe(
        map((countries: Country[]) => ({ type: ActionTypes.LOAD_COUNTRIES_SUCCESS, payload: countries })),
        catchError(() => of({ type: ActionTypes.LOAD_COUNTRIES_FAIL }))
      ))
  )
  );
}