import { Component, signal, ViewEncapsulation } from '@angular/core';
import { Navbar } from './Components/navbar/navbar';
import { Filter } from './Components/filter/filter';
import { Main } from './Components/main/main';

@Component({
  selector: 'app-root',
  imports: [Navbar, Filter, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('week2');
}
