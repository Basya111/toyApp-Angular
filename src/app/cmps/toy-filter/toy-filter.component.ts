import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FilterBy } from 'src/app/models/filter-by';

@Component({
  selector: 'toy-filter',
  templateUrl: './toy-filter.component.html',
  styleUrls: ['./toy-filter.component.scss']
})
export class ToyFilterComponent implements OnInit {

  @Input() filterBy$: Observable<FilterBy>
  @Output() onSetFilter = new EventEmitter<FilterBy>()

  constructor() { }

  filterBy: FilterBy
  subscription: Subscription

  ngOnInit(): void {
    this.subscription = this.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
