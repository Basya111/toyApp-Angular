import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDetailsComponent implements OnInit {

  loggedInUser$: User
  totalPrice: number
  subscription: Subscription

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.loggedInUser$ = this.userService.loggedInUser$
    this.subscription = this.userService.loggedInUser$.subscribe(user => {
      this.loggedInUser$ = user
    })
    this.totalPrice = this.calculateCart()
  }

  onRemoveToy(toyId: string){
    this.userService.removeFromCart(toyId)
    this.totalPrice = this.calculateCart()
    
  }

  calculateCart(){
    let totalPrice = 0    
    this.loggedInUser$.cart.forEach(toy => {
      totalPrice += toy.price
    })
    return totalPrice
  }

  onClearCart(){
    this.userService.clearCart()
    this.totalPrice = this.calculateCart()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }



}
