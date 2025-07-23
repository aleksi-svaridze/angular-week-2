import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Test } from './Components/test/test';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Test],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('week2');
}
