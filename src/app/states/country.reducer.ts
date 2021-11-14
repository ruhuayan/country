import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Country } from '../models/country';
import {
  getCountryAction,
  loadCountriesFailAction,
  loadCountriesSuccessAction,
  setLoadingAction,
} from './country.actions';

export interface CountryState extends EntityState<Country> {
  selectedCountryId: string | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const countryAdapter: EntityAdapter<Country> =
  createEntityAdapter<Country>();

const initialState: CountryState = countryAdapter.getInitialState({
  ids: [],
  entities: {},
  selectedCountryId: null,
  loading: false,
  loaded: false,
  error: '',
});

export const countryReducer = createReducer(
  initialState,
  on(setLoadingAction, (state, {loading}) => ({ ...state, loading})),
  on(loadCountriesSuccessAction, (state, { countries }) => {
    return countryAdapter.addMany(countries, {
      ...state,
      loading: false,
      loaded: true,
      error: '',
    });
  }),
  on(loadCountriesFailAction, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    error: 'Fail to load country list',
  })),
  on(getCountryAction, (state, { id }) => ({ ...state, selectedCountryId: id }))
);
