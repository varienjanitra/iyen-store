import { Component, Input, input } from '@angular/core';
import { Item } from '../../../data/item';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { TruncatePipe } from '../../../utils/pipes/truncate.pipe';

@Component({
  selector: 'istore-item-search-card',
  imports: [
    MatButtonModule,
    MatCardModule,
    CurrencyPipe,
    TruncatePipe
  ],
  templateUrl: './item-search-card.component.html',
  styleUrl: './item-search-card.component.scss'
})
export class ItemSearchCardComponent {
  item = input<Item>();

}
