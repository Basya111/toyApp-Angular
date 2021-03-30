import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { FilterBy } from '../models/filter-by';
import { Review } from '../models/review';
import { Toy } from '../models/toy.model';
import { storageService } from './async-storage.service';


const ENTITY = 'toy'

@Injectable({
  providedIn: 'root'
})
export class ToyService {

  constructor() { 
    const toys = JSON.parse(localStorage.getItem(ENTITY) || 'null')
    if (!toys || !toys.length) {
      localStorage.setItem(ENTITY, JSON.stringify(this.toyDB))
    }
  }

  private initialFilter = {
    term: '',
    minPrice: null,
    maxPrice: null
  }

  private _toys$: BehaviorSubject<Toy[]> = new BehaviorSubject(null)
  public toys$: Observable<Toy[]> = this._toys$.asObservable()

  private _filterBy$: BehaviorSubject<FilterBy> = new BehaviorSubject(this.initialFilter)
  public filterBy$: Observable<FilterBy> = this._filterBy$.asObservable()


  public async query(){
    const filterBy = this._filterBy$.getValue()
    const toys = (await storageService.query(ENTITY)) as Toy[]    
    const filteredToys = this._filterToys(toys, filterBy)
    this._toys$.next(filteredToys)
    // this._toys$.next(toys)
  }

  public setFilter(filterBy) {
    this._filterBy$.next(filterBy)
    this.query()
  }

  public getById(toyId: string): Observable<Toy>{
    return from(storageService.get(ENTITY, toyId) as Promise<Toy>)
  }

  public async remove(toyId: string){
    try{
      await storageService.remove(ENTITY, toyId)
      const toys = this._toys$.getValue()
      const toyIdx = toys.findIndex(toy => toy.id === toyId)
      toys.splice(toyIdx, 1)
      this._toys$.next(toys)
    }
    catch (err){
      console.log('Could not remove toy', toyId, err);
    }
  }

  public save(toy: Toy) {
    const method = toy.id ? 'put' : 'post'
    const prmSavedItem = storageService[method](ENTITY, toy)
    return from(prmSavedItem) as Observable<Toy>
  }

  public getEmptyToy():Toy{
    return {
      id: '',
      name: '',
      description: '',
      img: 'https://res.cloudinary.com/basimgs/image/upload/v1613999474/173873_ydztt2.jpg',
      price: null,
      inStock: true,
      reviews: []
    }
  }

  public async addReview(toyId: string, reviewToAdd: Review){
    console.log(reviewToAdd);
    
    try{
      const toys = this._toys$.getValue()
      if (!toys) throw Error('No toys in data') 
      const toyToUpdate = toys.find(toy => toy.id === toyId)
      const toyIdx= toys.findIndex(toy => toy.id === toyId)
      if(!toyToUpdate.reviews || !toyToUpdate.reviews.length) toyToUpdate.reviews = [reviewToAdd]
      else toyToUpdate.reviews = [...toyToUpdate.reviews, reviewToAdd]
      toys[toyIdx] = toyToUpdate
      await storageService.put(ENTITY, toyToUpdate)
    }
    catch (err){
      console.log('Could not add review', toyId, err);
    }
  }

  private _filterToys(toys: Toy[], filterBy: FilterBy) {
    return toys.filter(toy => {
      const termRegex = new RegExp(filterBy.term, 'ig')
      const minPrice = filterBy.minPrice || 0
      const maxPrice = filterBy.maxPrice || Number.MAX_SAFE_INTEGER
      const isStringMatched = termRegex.test(toy.name) || termRegex.test(toy.description)

      return isStringMatched && toy.price > minPrice && toy.price < maxPrice
    })
  }


  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  private toyDB = [
    {
      id: this._makeId(),
      name: 'Panda',
      img: 'https://www.ikea.com/mx/en/images/products/kramig-soft-toy-white-black__0162448_PE317642_S5.JPG',
      description: 'Dominate the trail in our FuelCore NITREL men\'s trail running shoes. This rugged, but lightweight shoe is off-road ready with an improved AT Tread outsole to help keep you grounded as you explore new paths. The gusseted tongue helps keep out debris, while Toe Protect reinforces the toe tip to help protect the toes. With a combination of speed, traction and performance, these men\'s trail running shoes are ready for your next rugged run.',
      price: 50,
      inStock: true,
      reviews: [{name: "Puki Ben David", txt: "my kids loved it!", rate: 5, date: 1616582196673}, {name: "Dana Bandana", txt: "Nice toy, a little bit expancive...", rate: 4, date: 1612583293673}]
    },
    {
      id: this._makeId(),
      name: 'Smile Bus ',
      img: 'https://res.cloudinary.com/basimgs/image/upload/v1613999474/GUEST_83d31a57-c225-4322-9105-05cdabd24ab4_iaxqwz.jpg',
      description: 'Fashion and Simple: Soft moderate thin breathable, anti-wrinkle, suitable for four seasons, bring a new look to your chair Multi Occasions: Spandex fabric chair slipcovers can be used for hotel, wedding, banquet, dinner, meeting, celebration, ceremony, and family dining room decoration etc Excellent Elasticity: Chair slipcovers are made of stretchable material, recovers quickly, secure fit with sewn-in elastic hem, unique stretch fabric conforms to your furnitures contours for a custom-look fit Elegant Home Decoration: These spandex fabric chair slipcovers help you create a clean foundation that complements any decorating style. For Machine wash separately in cold water, gentle cycle.',
      price: 100,
      inStock: false,
      reviews: [{name: "Shuki Smuki", txt: "My kids loved it!", rate: 4, date: 1615581196673}]
    },
    {
      id: this._makeId(),
      name: 'Horse',
      img: 'https://res.cloudinary.com/basimgs/image/upload/v1613999474/1231055502605_r7nr5w.jpg',
      description: 'Very high quality smooth print, we do not use cheap iron on transfers. All shirts are fully machine washable. Size chart is in the item gallery pictures.',
      price: 30,
      inStock: true, 
      reviews: [{name: "Momo Kapuka", txt: "My kids loved it!", rate: 4, date: 1615781196673}, {name: "Dana Bandana", txt: "A realy nice toy!!", rate: 5, date: 1613583253673}]
    },
    {
      id: this._makeId(),
      name: 'Buzz Buzz',
      img: 'https://res.cloudinary.com/basimgs/image/upload/v1613999474/173873_ydztt2.jpg',
      description: 'Get a handy way to play the classic property-trading game! Be the first collect 3 full property sets of different colors, and you’ll win the Monopoly Deal Card Game.',
      price: 7.99,
      inStock: true
    },
    {
      id: this._makeId(),
      name: 'Minnie Pingwin',
      img: 'https://res.cloudinary.com/basimgs/image/upload/v1613999473/images_ng6m00.jpg',
      description: 'disposable dinner napkins feel like linen in the hand,give you an elegant touch. And they\'re more convenience than linen napkins that are need to wash.',
      price: 19.99,
      inStock: false
    },
    {
      id: this._makeId(),
      name: 'Baby Yoda',
      img: 'https://images-na.ssl-images-amazon.com/images/I/31qygu2BJBL._AC_.jpg',
      description: 'Material: handmade., made of high-quality plush materials, maximum quality you can sense at first touch.\nEXTRA CUDDLY: the adorable figure with green skin, big ears and large eyes.',
      price: 19.99,
      inStock: true
    },
    {
      id: this._makeId(),
      name: 'Kitty Cat',
      img: 'https://res.cloudinary.com/basimgs/image/upload/v1613999474/GUEST_07893e6e-9c9b-4c6f-8bbd-ba027bea81ea_nalink.jpg',
      description: 'Made of vinyl PVC, which makes the stickers are totally waterproof, non-toxic and not easy to fade, durable and long lasting. Stickers look and feel good quality.',
      price: 6.99,
      inStock: false
    },
    {
      id: this._makeId(),
      name: 'Dinozaurs',
      img: 'https://res.cloudinary.com/basimgs/image/upload/v1613999474/335_screen_uovuvg.jpg',
      description: 'Understand the latest features of ES6 JavaScript and TypeScript. Build an Angular application from scratch using TypeScript and the Angular command-line interface',
      price: 22,
      inStock: false
    },
    {
      id: this._makeId(),
      name: 'Bunny',
      img: 'https://res.cloudinary.com/basimgs/image/upload/v1613999474/noodoll-rabbit-plush-toy-ricecarrot-2_15__f6q8fi.jpg',
      description: 'Algorithms and data structures are much more than abstract concepts. Mastering them enables you to write code that runs faster and more efficiently, which is particularly important for todays web and mobile apps.',
      price: 41.99,
      inStock: true
    }
  ]
}
