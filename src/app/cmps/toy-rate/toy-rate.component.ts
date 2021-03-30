import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toy-rate',
  templateUrl: './toy-rate.component.html',
  styleUrls: ['./toy-rate.component.scss']
})
export class ToyRateComponent implements OnInit {

  @Input() currentRate: number

  constructor() { }

  ngOnInit(): void {
  }

}

