import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  @Output() addReview = new EventEmitter()

  review = {
    name: '',
    txt: '',
    rate: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  onAddReview(){
    this.addReview.emit({...this.review})
  }

}
