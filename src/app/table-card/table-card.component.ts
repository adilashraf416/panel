import { Component } from '@angular/core';
import { ITask } from '../interfaces/task.interface';


// Mock Data
const TASK_DATA: ITask[] = [
  {taskId: 'TASK001', taskName: 'Sample task Name', cost: 'EUR 1200.00'},
  {taskId: 'TASK002', taskName: 'Sample task Name', cost: 'EUR 1200.00'},
  {taskId: 'TASK003', taskName: 'Sample task Name', cost: 'EUR 1200.00'},
  {taskId: 'TASK004', taskName: 'Sample task Name', cost: 'EUR 1200.00'},
];

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrl: './table-card.component.css'
})
export class TableCardComponent {
  displayedColumns: string[] = ['taskId', 'taskName', 'cost'];
  dataSource = TASK_DATA;
}
