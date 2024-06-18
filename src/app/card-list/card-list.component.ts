import { Component } from '@angular/core';
import { ICard } from '../interfaces/card.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  // MOCK DATA
   cards: ICard[] = [
    { icon: 'tasks', name: 'Tasks', stats: 120, color: '#87b2e4' },
    { icon: 'stores', name: 'Stores', stats: 90, color: '#6fc6a6' },
    { icon: 'users', name: 'Users', stats: 600, color: '#eb8eaf' },
    { icon: 'services', name: 'Services', stats: 15, color: '#f1b33b' }
  ];
}
