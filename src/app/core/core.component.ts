import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.sass']
})
export class CoreComponent implements OnInit {
  @HostBinding('class.indigo-pink') lightTheme = true;
  @HostBinding('class.indigo-pink-dark') darkTheme = false;
  theme = 'Light';

  toggleTheme(): void {
    if (this.theme === 'Light') {
      this.lightTheme = false;
      this.darkTheme = true;
      this.theme = 'Dark';
    } else {
      this.darkTheme = false;
      this.lightTheme = true;
      this.theme = 'Light';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
