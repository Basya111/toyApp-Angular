import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Toy } from 'src/app/models/toy.model';

@Component({
  selector: 'cart-details-preview',
  templateUrl: './cart-details-preview.component.html',
  styleUrls: ['./cart-details-preview.component.scss']
})
export class CartDetailsPreviewComponent implements OnInit {

  @Input() toy: Toy
  @Output() onRemoveToy = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
