import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent {
  @Input() image!: string;
  @Input() category!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
}