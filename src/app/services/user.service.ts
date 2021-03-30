import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Toy } from '../models/toy.model';
import { User } from '../models/user';
import { storageService } from './async-storage.service';

const ENTITY = 'user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private initialUser = JSON.parse(localStorage.getItem(ENTITY) || 'null')

  private _loggedInUser$: BehaviorSubject<User> = new BehaviorSubject(this.initialUser)
  public loggedInUser$: Observable<User> = this._loggedInUser$.asObservable()

  public signUp(username: string) {
    const user = {
      id: this._makeId(),
      username,
      cart: [],
      wishList: []
    }
    const loggedInUser = (storageService.singup(ENTITY, user)) as User
    this._loggedInUser$.next(loggedInUser)
  }

  public logout(){
    storageService.logout(ENTITY)
    this._loggedInUser$.next(null)    
  }

  public addToCart(toy: Toy){
    const user = this._loggedInUser$.getValue()
    if(!user) console.log('please login');
    user.cart = [...user.cart, toy]
    const loggedInUser = (storageService.updateEntity(ENTITY, user)) as User
    this._loggedInUser$.next(loggedInUser)
  }

  public removeFromCart(toyId: string){
    const user = this._loggedInUser$.getValue()
    const toyIdx = user.cart.findIndex(toy => toy.id === toyId)
    user.cart.splice(toyIdx, 1)
    const loggedInUser = (storageService.updateEntity(ENTITY, user)) as User
    this._loggedInUser$.next(loggedInUser)
  }


  public addToWishList(toy: Toy){
    const user = this._loggedInUser$.getValue()
    user.wishList = [...user.wishList, toy]
    const loggedInUser = (storageService.singup(ENTITY, user)) as User
    this._loggedInUser$.next(loggedInUser)
  }

  public removeFromWishList(toyId: string){
    const user = this._loggedInUser$.getValue()
    const toyIdx = user.wishList.findIndex(toy => toy.id === toyId)
    user.wishList.splice(toyIdx, 1)
    const loggedInUser = (storageService.updateEntity(ENTITY, user)) as User
    this._loggedInUser$.next(loggedInUser)
  }

  public clearCart(){
    const user = this._loggedInUser$.getValue()
    user.cart = []
    const loggedInUser = (storageService.updateEntity(ENTITY, user)) as User
    this._loggedInUser$.next(loggedInUser)
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }




}
