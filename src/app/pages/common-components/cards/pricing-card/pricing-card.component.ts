import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss'
})
export class PricingCardComponent {
  @Input() title!: string;
  @Input() price!: number;
  @Input() users!: string;
  @Input() subtitle!: string;
  @Input() benefits!: string[];
}
