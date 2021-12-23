import { Component, OnInit } from '@angular/core';
export interface table{
  sn:number;
  name: string;
  address: string;
  sales:number;
}
 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  table=[
    { sn:1, name:"Devraj", address:"Kathmandu",sales:5000},
    { sn:2, name:"Devraj", address:"Kathmandu",sales:5000},
    { sn:3, name:"Devraj", address:"Kathmandu",sales:5000},
    { sn:4, name:"Devraj", address:"Kathmandu",sales:5000},
    { sn:5, name:"Devraj", address:"Kathmandu",sales:5000},
    { sn:6, name:"Devraj", address:"Kathmandu",sales:5000},
    { sn:7, name:"Devraj", address:"Kathmandu",sales:5000},
    { sn:8, name:"Devraj", address:"Kathmandu",sales:5000},
    { sn:9, name:"Devraj", address:"Kathmandu",sales:5000},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  p:number=1;
}
