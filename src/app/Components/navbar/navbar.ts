import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  public isDark: boolean = true;

  changeThemeIcon() {
    this.isDark = !this.isDark;
  }
}
