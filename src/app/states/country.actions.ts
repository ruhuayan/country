// import { createAction, props } from "@ngrx/store";
import { Country } from "../models/country";

export enum ActionTypes {
  LOAD_COUNTRIES = "LOAD_COUNTRIES",
  LOAD_COUNTRIES_SUCCESS = "LOAD_COUNTRIES_SUCCESS",
  LOAD_COUNTRIES_FAIL = "LOAD_COUNTRIES_FAIL",
  GET_COUNTRY = "GET_COUNTRY",
}

export type CountryAction =
  | { readonly type: ActionTypes.GET_COUNTRY; payload: string }
  | { readonly type: ActionTypes.LOAD_COUNTRIES }
  | { readonly type: ActionTypes.LOAD_COUNTRIES_SUCCESS; payload: Country[] }
  | { readonly type: ActionTypes.LOAD_COUNTRIES_FAIL };