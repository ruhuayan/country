import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Country } from 'src/app/models/country';
import { selectCountries, selectRegions } from 'src/app/states/country.selectors';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;
  
  const regions: string[] = ['asia', 'europe'];
  const countryList: Country[] = [{
    id: 'ARG',
    name: 'Argentina',
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
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: { state: { entities: [] } },
          selectors: [
            { selector: selectCountries, value: countryList },
            { selector: selectRegions, value: regions },
          ],
        })
      ],
      declarations: [HomeComponent]
    })
      .compileComponents();
      store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have options of 2 regions on filter dropdown', async () => {
    await fixture.whenStable();
    const regionList = fixture.nativeElement.querySelectorAll('ul.menu-bar li');
    expect(regionList.length).toBe(regions.length)
  });

  it('should filter dropdown show after a click on input and choose a region from dropdownlist', async () => {
    spyOn(component, 'onSelectRegion');

    const elem = fixture.nativeElement;
    const filterInput = elem.querySelector('.search-filter .search-input');
    filterInput.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const dropdown = elem.querySelector('.search-filter .dropdown');
    expect(dropdown.classList).toContain('show');

    const region = elem.querySelector('.search-filter .region');
    region.click();

    expect(component.onSelectRegion).toHaveBeenCalled();
  });
});
