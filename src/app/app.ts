import { Component, signal, ViewEncapsulation } from '@angular/core';
import { Navbar } from './Components/navbar/navbar';
import { Filter } from './Components/filter/filter';
import { Main } from './Components/main/main';

// interface Ibook {
//   title: string;
//   author: string;
//   price: number;
//   year: number;
//   quantity: number;
//   discount: number;
// }

@Component({
  selector: 'app-root',
  imports: [Navbar, Filter, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('week2');

  // book: Ibook = {
  //   title: 'Harry Potter',
  //   author: 'J. K. Rowling',
  //   price: 12.5,
  //   year: 1996,
  //   quantity: 0,
  //   discount: 0.3,
  // };

  // calculate(): number {
  //   return this.book.price * (1 - this.book.discount);
  // }
}
