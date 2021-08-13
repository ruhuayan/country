import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { Country } from '../models/country';

import { CountryService } from './country.service';

describe('CountryService', () => {
  let service: CountryService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CountryService]
    });
    // service = TestBed.inject(CountryService);

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CountryService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve countries from the API via GET', (done: DoneFn) => {
    const expectedCountryList: Country[]= [{
      borders: ["BOL", "BRA", "CHL", "PRY", "URY"],
      capital: "Buenos Aires",
      currencies: ["ARS"],
      flag: "https://restcountries.eu/data/arg.svg",
      id: "ARG",
      languages: ["Spanish", "Guaraní"],
      name: "Argentina",
      nativeName: "Argentina",
      population: 43590400,
      region: "Americas",
      subregion: "South America",
      topLevelDomain: [".ar"]
    }];
    httpClientSpy.get.and.returnValue(of(expectedCountryList));

    service.getAll().subscribe(
      countries => {
        expect(countries).toEqual(expectedCountryList, 'expected countries');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorMsg = '404 Not Found';
    const errorResponse = new HttpErrorResponse({
      error: errorMsg,
      status: 404, statusText: 'Not Found'
    });
  
    httpClientSpy.get.and.returnValue(throwError(errorResponse));
  
    service.getAll().subscribe(
      _ => done.fail('expected an error, not country list'),
      error  => {
        expect(error.message).toContain(errorMsg);
        done();
      }
    );
  });
});
