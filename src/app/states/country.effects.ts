import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {
  ActionTypes,
  loadCountriesFailAction,
  loadCountriesSuccessAction,
  setLoadingAction,
} from './country.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Country } from '../models/country';
import { of } from 'rxjs';
import { CountryService } from '../service/country.service';
import { Store } from '@ngrx/store';

@Injectable()
export class CountryEffects {
  constructor(
    private store: Store,
    private actions$: Actions,
    private countryService: CountryService
  ) {}

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.LOAD_COUNTRIES),
      tap(() => this.store.dispatch(setLoadingAction({ loading: true }))),
      mergeMap(() =>
        this.countryService.getAll().pipe(
          map((countries: Country[]) =>
            loadCountriesSuccessAction({ countries })
          ),
          catchError(() => of(loadCountriesFailAction()))
        )
      )
    )
  );
}
