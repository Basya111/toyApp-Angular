import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Toy } from 'src/app/models/toy.model';
import { User } from 'src/app/models/user';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'toy-preview',
  templateUrl: './toy-preview.component.html',
  styleUrls: ['./toy-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToyPreviewComponent implements OnInit {

  @Input() toy: Toy
  @Input() user: User
  @Output() onAddToWishList = new EventEmitter<Toy>()
  @Output() onRemoveFromWishList = new EventEmitter<string>()

  constructor(public toastService: ToastService) { }

  isInWishList: boolean

  ngOnInit(): void {
    this.checkInWishList()
  }

  addToWishList(ev: MouseEvent) {
    ev.stopPropagation()
    if (!this.user) {
      this.showSignup()
    } else {
      this.onAddToWishList.emit(this.toy)
      this.isInWishList = !this.isInWishList
    }

  }

  removeFromWishList(ev: MouseEvent) {
    ev.stopPropagation()
    this.onRemoveFromWishList.emit(this.toy.id)
    this.isInWishList = !this.isInWishList
  }

  checkInWishList() {
    if (!this.user) {
      this.isInWishList = false
      return
    }
    const idx = this.user.wishList.findIndex(currToy => currToy.id === this.toy.id)
    if (idx !== -1) this.isInWishList = true
    else this.isInWishList = false

  }

  showSignup() {
    this.toastService.show('Please Signup', { classname: 'bg-primary text-light' });
  }






}
