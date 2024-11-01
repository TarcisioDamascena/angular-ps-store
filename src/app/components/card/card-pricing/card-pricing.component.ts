import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css',
})
export class CardPricingComponent {
  @Input()
  gameTitle: string = 'Undefined';
  @Input()
  gameType: string = 'Undefined';
  @Input()
  gamePrice: string = 'Undefined';
}
