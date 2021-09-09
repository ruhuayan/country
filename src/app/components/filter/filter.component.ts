import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

const defaultRegion = 'Filter By Region';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  region = '';
  dropdownShow = false;
  @Input('appDefaultRegion') defaultRegion: string;
  @Input('appRegions') regions: string[];
  @Output() appOnSelectRegion = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.region = this.defaultRegion ? '' : '';
  }
  onSelectRegion(region: string): void {
    this.region = region;
    if (this.region !== defaultRegion) {

    }
  }
}
