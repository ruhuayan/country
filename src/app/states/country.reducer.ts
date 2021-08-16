import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Country } from '../models/country';
import { Dictionary } from '../models/dictionary';
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
  regions: string[];
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
  regions: [],
});

export const countryReducer = createReducer(
  initialState,
  on(setLoadingAction, (state, {loading}) => ({ ...state, loading})),
  on(loadCountriesSuccessAction, (state, { countries }) => {
    const countryList: Country[] = [],
      regionDict: Dictionary = {};

    countries.forEach((country) => {
      if (country['region'].trim()) {
        regionDict[country['region']] = 1;
      }
      const c: Country = {
        id: country['alpha3Code'],
        name: country['name'],
        nativeName: country['nativeName'],
        population: country['population'],
        capital: country['capital'],
        region: country['region'],
        subregion: country['subregion'],
        flag: country['flag'],
        topLevelDomain: country['topLevelDomain'],
        currencies: country['currencies'].map((c) => c['code']),
        languages: country['languages'].map((l) => l['name']),
        borders: country['borders'],
      };
      countryList.push(c);
    });
    
    return countryAdapter.addMany(countryList, {
      ...state,
      loading: false,
      loaded: true,
      error: '',
      regions: Object.keys(regionDict),
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
