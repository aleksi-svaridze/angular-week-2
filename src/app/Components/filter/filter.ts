import { Component, EventEmitter, Output } from '@angular/core';
import { FilterActiveCards } from '../../Types/Types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {
  inStock: FilterActiveCards = 'all';

  @Output('filter')
  filterEmitter: EventEmitter<FilterActiveCards> =
    new EventEmitter<FilterActiveCards>();

  changeFilterType(): void {
    this.filterEmitter.emit(this.inStock);
  }
}
