import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  chart: any;
  constructor() { }

  ngOnInit(): void {
    this.chart = document.getElementById('adminChart');
    Chart.register(...registerables);
    this.loadChart();
  }
  loadChart(): void {
    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [
          {
            data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70],
            label: "Series 1",
            backgroundColor: '#007bff',
            tension: 0.1,
            borderColor: '#007bff',
          }
        ],
        labels: [
          '17th', '18th', '19th', '20th', '21th', '22th', '23th', '24th', '25th', '26th'
        ]
      },
      options: {
        responsive:true,
        maintainAspectRatio:true,
        scales: {
          y: {
            beginAtZero: true,
            display:true,
          },
        },
      },
    });
  }
}
