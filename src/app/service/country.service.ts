import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';
// import { Dictionary } from '../models/dictionary';
// import { catchError, map } from 'rxjs/operators';

const baseURL = environment.baseURL;
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Country[]> {
    return this.http.get<any>(`${baseURL}/all`);
    // .pipe(
    //     map(data => this.process(data)),
    //     catchError((error: Response) => throwError(error))
    //   );
  }

  // private process(data: any): Country[] {
  //   const countryList: Country[] = [],
  //     dict: Dictionary = {},
  //     regionDict: Dictionary = {};

  //   data.forEach((country: any) => {
  //     dict[country["alpha3Code"]] = country["name"];
  //     if (country["region"].trim()) regionDict[country["region"]] = 1;
  //     const c: Country = {
  //       alpha3Code: country["alpha3Code"],
  //       name: country["name"],
  //       nativeName: country["nativeName"],
  //       population: country["population"],
  //       capital: country["capital"],
  //       region: country["region"],
  //       subregion: country["subregion"],
  //       flag: country["flag"],
  //       topLevelDomain: country["topLevelDomain"],
  //       currencies: country["currencies"].map((c: Dictionary) => c["code"]),
  //       languages: country["languages"].map((l: Dictionary) => l["name"]),
  //       borders: country["borders"],
  //     };
  //     countryList.push(c);
  //   });
  //   return countryList;
  // }
}
