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

  newExtensions: Iextentions[] = this.extensions;

  makeActive(item: Iextentions): void {
    item.isActive = !item.isActive;
  }

  removeExtension(id: number) {
    console.log(id);
    this.newExtensions = this.extensions.filter(
      (itemId: Iextentions) => itemId.id !== id
    );
    this.extensions = this.newExtensions;
    return this.extensions;
  }
}
