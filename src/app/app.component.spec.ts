import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionTypes } from './states/country.actions';
import { selectLoading } from './states/country.selectors';

describe('AppComponent', () => {
  let store: MockStore;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [provideMockStore({
        initialState: { state: { loading: false, entities: []} },
        selectors: [
          { selector: selectLoading, value: true },
        ],
      })],
      declarations: [
        AppComponent, HeaderComponent
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  it('should dispatch action LOAD_COUNTRIES and has loading Icon', async () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();

    expect(dispatchSpy).toHaveBeenCalledWith({type: ActionTypes.LOAD_COUNTRIES});

    await fixture.whenStable();
    const loadingIconEl = fixture.nativeElement.getElementsByClassName('fa-spinner')[0];
    expect(loadingIconEl).toBeTruthy();
  });
});
