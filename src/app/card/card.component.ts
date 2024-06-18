import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() icon!: string;
  @Input() name!: string;
  @Input() stats!: number;
  @Input() color!: string;
}
