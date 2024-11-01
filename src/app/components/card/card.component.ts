import { Component, Input } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  gameCover: string = '';

  //card-label
  @Input()
  gameLabel: string = 'Undefined';

  //card-pricing
  @Input()
  gameTitle: string = 'Undefined';
  @Input()
  gameType: string = 'Undefined';
  @Input()
  gamePrice: string = 'Undefined';
}
