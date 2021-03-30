import { Component, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BuyModalComponent implements OnInit {

  @Output() onClearCart = new EventEmitter()

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }
  
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
    this.onClearCart.emit()
    setTimeout(()=> {
      this.modalService.dismissAll()
    }, 5000)
  }

}

