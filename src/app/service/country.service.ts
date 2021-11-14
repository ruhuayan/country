import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';
import { Dictionary } from '../models/dictionary';
import { catchError, map } from 'rxjs/operators';

const baseURL = environment.baseURL;
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Country[]> {
    return this.http.get<any>(`${baseURL}/all`)
    .pipe(
        map(data => this.process(data)),
        // catchError((error: Response) => throwError(error))
      );
  }

  private process(data: any): Country[] {
    const countryList: Country[] = [],
      dict: Dictionary = {},
      regionDict: Dictionary = {};

    data.forEach((country: any) => {
      dict[country["cca3"]] = country["name"]['common'];
      if (country["region"].trim()) regionDict[country["region"]] = 1;
      const c: Country = {
        id: country["cca3"],
        name: country["name"]['common'],
        officialName: country["name"]['official'],
        population: country["population"],
        capital: country["capital"],
        region: country["region"],
        subregion: country["subregion"],
        flag: country["flags"]['png'],
        topLevelDomain: country["tld"],
        currencies: country["currencies"] ? Object.values(country["currencies"]).map(c => c['name']) : [],
        languages: country["languages"] ? Object.values(country["languages"]) : [],
        borders: country["borders"],
      };
      countryList.push(c);
    });
    return countryList.sort((c1: Country, c2: Country) => c1.name > c2.name ? 1 : -1);
  }
}
