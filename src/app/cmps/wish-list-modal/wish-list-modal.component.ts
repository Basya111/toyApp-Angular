import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'wish-list-modal',
  templateUrl: './wish-list-modal.component.html',
  styleUrls: ['./wish-list-modal.component.scss']
})
export class WishListModalComponent implements OnInit {

  @Input() user
  @Output() onRemoveToy = new EventEmitter()
  @Output() addToCart = new EventEmitter()


  closeResult = '';
  // wishListLength: number

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',  size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  removeToy(toyId: string){
    this.onRemoveToy.emit(toyId)
    
  }


  

}

