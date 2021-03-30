import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterBy } from 'src/app/models/filter-by';
import { Toy } from 'src/app/models/toy.model';
import { User } from 'src/app/models/user';
import { ToyService } from 'src/app/services/toy.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'toy-app',
  templateUrl: './toy-app.component.html',
  styleUrls: ['./toy-app.component.scss']
})
export class ToyAppComponent implements OnInit {

  constructor(private toyService: ToyService, private userService: UserService) { }

  toys$: Observable<Toy[]>
  filterBy$: Observable<FilterBy>
  loggedInUser$: Observable<User>
  isLoading = true;

  ngOnInit(): void {
    this.toys$ = this.toyService.toys$
    this.filterBy$ = this.toyService.filterBy$
    this.loggedInUser$ = this.userService.loggedInUser$
    this.toyService.query()
    setTimeout(()=> {
      this.isLoading = false
    }, 1500)
  }

  onSetFilter(filterBy: FilterBy){
    this.toyService.setFilter(filterBy)
  }

  onAddToWishList(toy: Toy){
    this.userService.addToWishList(toy)
  }

  onRemoveFromWishList(toyId: string){
    this.userService.removeFromWishList(toyId)
  }




}
