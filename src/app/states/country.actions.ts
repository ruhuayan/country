import { createAction, props } from "@ngrx/store";

export enum ActionTypes {
  LOAD_COUNTRIES = "LOAD_COUNTRIES",
  LOAD_COUNTRIES_SUCCESS = "LOAD_COUNTRIES_SUCCESS",
  LOAD_COUNTRIES_FAIL = "LOAD_COUNTRIES_FAIL",
  GET_COUNTRY = "GET_COUNTRY",
  SET_LOADING = 'SET_LOADING',
}

export const getCountryAction = createAction(ActionTypes.GET_COUNTRY, props<{ id }>());

export const setLoadingAction = createAction(ActionTypes.SET_LOADING, props<{ loading }>());

export const loadCountriesAction = createAction(ActionTypes.LOAD_COUNTRIES);

export const loadCountriesSuccessAction = createAction(ActionTypes.LOAD_COUNTRIES_SUCCESS, props<{ countries }>());

export const loadCountriesFailAction = createAction(ActionTypes.LOAD_COUNTRIES_FAIL);