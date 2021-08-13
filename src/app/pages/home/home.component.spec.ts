import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const storeMock = {
    select: (...params) => {
      if (params.includes('regions')) {
        return of(["asia", "europe"]);
      } else if (params.includes('category') && params.length === 1) {
        return of(["asia", "europe"]);
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: Store, useValue: storeMock }],
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await fixture.whenStable();
    expect(component).toBeTruthy();

    const regionsEl = HTMLElement = fixture.nativeElement.getElementsByClassName('menu-bar')[0].innerHTML;
    console.log(regionsEl)
  });
});
