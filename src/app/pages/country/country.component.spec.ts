import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { Country } from 'src/app/models/country';
import { getCountryAction } from 'src/app/states/country.actions';
import {
  getCountryDict,
  selectCountry,
} from 'src/app/states/country.selectors';

import { CountryComponent } from './country.component';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;
  let store: MockStore;
  let dispatchSpy;

  const id = 'ARG';
  const name = 'Argentina';
  const argentina: Country = {
    id,
    name,
    nativeName: 'Argentina',
    population: 43590400,
    capital: 'Buenos Aires',
    topLevelDomain: ['.ar'],
    subregion: 'South America',
    flag: 'https://restcountries.eu/data/arg.svg',
    currencies: ['ARS'],
    region: 'Americas',
    languages: ['Spanish', 'Guaraní'],
    borders: ['BOL', 'BRA', 'CHL', 'PRY', 'URY'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CountryComponent],
      providers: [
        provideMockStore({
          initialState: { state: { entities: [] } },
          selectors: [
            { selector: selectCountry, value: argentina },
            { selector: getCountryDict, value: { ARG: 'Argentina' } },
          ],
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id }),
          },
        }
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and dispatch action GET_COUNTRY ', () => {
    expect(component).toBeTruthy();
    expect(dispatchSpy).toHaveBeenCalledWith(getCountryAction({id}));
  });

  it('should have Country name "Argentina"', () => {
    const countryName = fixture.nativeElement.querySelector('.country-name').innerText;
    expect(countryName).toBe(name);
  });
});
