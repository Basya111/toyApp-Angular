import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Toy } from 'src/app/models/toy.model';
import { User } from 'src/app/models/user';

@Component({
  selector: 'toy-list',
  templateUrl: './toy-list.component.html',
  styleUrls: ['./toy-list.component.scss']
})
export class ToyListComponent implements OnInit {

  @Input() toys: Toy[]
  @Input() user: User
  @Output() onAddToWishList = new EventEmitter<Toy>()
  @Output() onRemoveFromWishList = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
