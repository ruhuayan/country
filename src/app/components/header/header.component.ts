import { Component, OnInit } from '@angular/core';
import { Mode } from 'src/app/models/mode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  theme = Mode.LIGHT;
  constructor() { }

  ngOnInit(): void {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme && savedTheme === Mode.DARK) {
      this.theme = savedTheme;
      document.body.setAttribute("data-theme", this.theme);
    }
  }

  toggleTheme(): void {
    this.theme = this.theme === Mode.DARK ? Mode.LIGHT : Mode.DARK;
    document.body.setAttribute("data-theme", this.theme);
    window.localStorage.setItem("theme", this.theme);
  }
}
