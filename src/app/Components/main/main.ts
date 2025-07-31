import { Component, Input } from '@angular/core';
import { Iextentions } from '../../Interfaces/Extensions.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  @Input()
  extensions!: Iextentions[];

  makeActive(item: Iextentions): void {
    item.isActive = !item.isActive;
  }
}
