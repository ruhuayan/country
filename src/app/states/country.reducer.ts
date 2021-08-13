import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Country } from "../models/country";
import { Dictionary } from "../models/dictionary";
import { ActionTypes, CountryAction } from "./country.actions";


export interface CountryState extends EntityState<Country> {
  selectedCountryId: string | null;
  loading: boolean;
  loaded: boolean;
  error: string;
  regions: string[];
}

export const countryAdapter: EntityAdapter<Country> = createEntityAdapter<Country>();

const initialState: CountryState = countryAdapter.getInitialState({
  ids: [],
  entities: {},
  selectedCountryId: null,
  loading: false,
  loaded: false,
  error: "",
  regions: [],
});

export const countryReducer = (
  state: CountryState = initialState,
  action: CountryAction
): CountryState => {
  switch (action.type) {
    case ActionTypes.LOAD_COUNTRIES:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.LOAD_COUNTRIES_SUCCESS:

      const countryList: Country[] = [],
        regionDict: Dictionary = {};

      action.payload.forEach(country => {
        if (country["region"].trim()) {
          regionDict[country["region"]] = 1;
        }
        const c: Country = {
          id: country["alpha3Code"],
          name: country["name"],
          nativeName: country["nativeName"],
          population: country["population"],
          capital: country["capital"],
          region: country["region"],
          subregion: country["subregion"],
          flag: country["flag"],
          topLevelDomain: country["topLevelDomain"],
          currencies: country["currencies"].map(c => c["code"]),
          languages: country["languages"].map(l => l["name"]),
          borders: country["borders"],
        }
        countryList.push(c);
      });
      console.log(countryList[10])
      return countryAdapter.addMany(countryList, {
        ...state,
        loading: false,
        loaded: true,
        error: "",
        regions: Object.keys(regionDict)
      });

    case ActionTypes.LOAD_COUNTRIES_FAIL:
      return {
        ...state,
        error: "Fail to load country list",
        loading: false,
        loaded: false,
      };

    case ActionTypes.GET_COUNTRY:
      return  {
        ...state,
        selectedCountryId: action.payload
      }
      
    default:
      return state;
  }
};
