import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

import { ChartConfigService } from '../services/chart-config.service';


 // Mock Data
 const labels: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
 const lineOneData: number[] = [13, 16, 21, 28, 32, 34, 32, 31, 30, 26, 20, 14];
 const lineTwoData: number[] = [26, 29, 31, 24, 10, 3, 14, 16, 4, 5, 14, 23];

@Component({
  selector: 'app-line-chart-card',
  templateUrl: './line-chart-card.component.html',
  styleUrls: ['./line-chart-card.component.css']
})
export class LineChartCardComponent {
  chartConfig: any;
  constructor(private chartConfigService: ChartConfigService) { }

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart() {
    this.chartConfig = this.chartConfigService.getLineChartConfig(labels, lineOneData, lineTwoData);
    this.chart = new Chart("LineChart",this.chartConfig );
  }
}
