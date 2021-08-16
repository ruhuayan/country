import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCountriesAction } from './states/country.actions';
import { selectLoading } from './states/country.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loading$: Observable<boolean>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadCountriesAction());
    this.loading$ = this.store.select(selectLoading);
  }
}
