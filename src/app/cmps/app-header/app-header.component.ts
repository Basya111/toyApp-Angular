import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Toy } from 'src/app/models/toy.model';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent implements OnInit {

  loggedInUser$: Observable<User>

  constructor(private userService: UserService, public toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser$ = this.userService.loggedInUser$    
  }

  onLogout(){
    console.log('logging out');
    this.userService.logout()
    this.router.navigateByUrl('/')
  }

  onRemoveToy(toyId: string){
    this.userService.removeFromWishList(toyId)
    
  }

  addToCart(toy: Toy){
    this.userService.addToCart(toy)
    this.userService.removeFromWishList(toy.id)
    this.showSuccess()
    
  }

  showSuccess() {
    this.toastService.show('Toy added to cart!', { classname: 'bg-dark text-light' });
  }

}
