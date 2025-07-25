import { Component } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-main',
  imports: [Card],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
