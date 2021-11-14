import { createFeatureSelector, createSelector } from '@ngrx/store';
import { countryAdapter, CountryState } from './country.reducer';
import { Dictionary } from '../models/dictionary';

const getCountryFeatureState = createFeatureSelector<CountryState>('state');

const { selectAll } = countryAdapter.getSelectors();

export const selectCountries = createSelector(
  getCountryFeatureState,
  selectAll
);

export const selectLoading = createSelector(
  (state) => state['state'],
  (state: CountryState) => state.loading
);

export const selectLoaded = createSelector(
  (state) => state['state'],
  (state: CountryState) => state.loaded
);

export const selectRegions = createSelector(
  getCountryFeatureState,
  (state: CountryState) => {
    const regionDict: Dictionary = Object.values(state.entities).reduce(
      (acc, curr) => ({ ...acc, [curr.region]: 1 }),
      {}
    );
    return Object.keys(regionDict);
  }
);

export const getSelectedCountryId = createSelector(
  getCountryFeatureState,
  (state: CountryState) => state.selectedCountryId
);

export const selectCountry = createSelector(
  getCountryFeatureState,
  // selectEntities,
  // getSelectedCountryId,
  // (entities, id) => entities[id]
  (state) => state.entities[state.selectedCountryId]
);

export const getCountryDict = createSelector(
  getCountryFeatureState,
  (state: CountryState) =>
    Object.keys(state.entities).reduce(
      (acc, curr) => ({ ...acc, [curr]: state.entities[curr].name }),
      {}
    )
);
