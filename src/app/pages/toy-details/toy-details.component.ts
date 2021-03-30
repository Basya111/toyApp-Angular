import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Toy } from 'src/app/models/toy.model';
import { User } from 'src/app/models/user';
import { ToyService } from 'src/app/services/toy.service';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'toy-details',
  templateUrl: './toy-details.component.html',
  styleUrls: ['./toy-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, 
    private toyService: ToyService, private userServie: UserService, public toastService: ToastService) { }

  toy: Toy
  loggedInUser$: User
  isAddReviewShown = false
  isInWishList: boolean
  subscription: Subscription

  ngOnInit(): void {
    this.loadToy()
  }

  loadToy(){
    this.subscription = this.userServie.loggedInUser$.subscribe(user => {
      this.loggedInUser$ = user
    })
    this.route.data.subscribe(data => {
      this.toy = data.toy
    })
    this.checkInWishList()
  }

  onBack(){
    this.router.navigateByUrl('/toy')
  }

  addReview(reviewToAdd){
    reviewToAdd.date = Date.now()
    this.toyService.addReview(this.toy.id, reviewToAdd)
    this.isAddReviewShown = !this.isAddReviewShown
    this.loadToy()
  }

  closeModal(ev: MouseEvent){
    ev.preventDefault()
    this.isAddReviewShown = !this.isAddReviewShown
  }
  
  onAddToCart(toy: Toy){
    try{
      this.userServie.addToCart(toy)
      this.showSuccess() 
    }
    catch{
      console.log('please signup');
      this.showSignup()
    }
  }

  onAddToWishList(toy: Toy){
    try{
      this.userServie.addToWishList(toy)
      this.isInWishList = !this.isInWishList
    }
    catch{
      console.log('please signup');
      this.showSignup()
    }
  }

  removeFromWishList(toyId: string){
    this.userServie.removeFromWishList(toyId)
    this.isInWishList = !this.isInWishList
  }

  checkInWishList(){
    if(!this.loggedInUser$) {
      this.isInWishList = false
      return
    }
    const idx = this.loggedInUser$.wishList.findIndex(currToy => currToy.id === this.toy.id)
    if (idx !== -1) this.isInWishList = true
    else this.isInWishList = false

  }

  showSuccess() {
    this.toastService.show('Toy added to cart!', { classname: 'bg-dark text-light' });
  }

  showSignup(){
    this.toastService.show('Please Signup', { classname: 'bg-primary text-light' });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
