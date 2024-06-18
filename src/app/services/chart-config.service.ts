import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartConfigService {

  constructor() { }

  getLineChartConfig(labels: number[], lineOneData: number[], lineTwoData: number[] ): any {
    return {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              data: lineOneData,
              borderColor: 'rgba(42,231,166,255)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 4, 
              pointRadius: 0,
            },
            {
  
              data: lineTwoData,
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgba(42,231,166,255)',
              borderWidth: 4,
              pointRadius: 0,
            }
          ]
        },
        options: {
          aspectRatio: 2.5,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.1)',
              }
            },
            x: {
              grid: {
                color: 'rgba(0, 0, 0, 0.1)',
              }
            }
          },
          plugins: {
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              bodyFont: {
                size: 14,
              },
              titleFont: {
                size: 16,
                weight: 'bold',
              }
            },
            legend: {
              display: false
            }
          }
        }
        
      };
  }
}
