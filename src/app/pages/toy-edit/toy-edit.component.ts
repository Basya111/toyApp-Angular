import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Toy } from 'src/app/models/toy.model';
import { ToyService } from 'src/app/services/toy.service';

@Component({
  selector: 'toy-edit',
  templateUrl: './toy-edit.component.html',
  styleUrls: ['./toy-edit.component.scss']
})
export class ToyEditComponent implements OnInit {

  constructor(private toyService: ToyService, private route: ActivatedRoute, private router: Router) { }

  toy: Toy
  subscription: Subscription

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      this.toy = data.toy || this.toyService.getEmptyToy()
    })
    console.log('toy', this.toy);
    
  }

  async onSaveToy(toyToSave: Toy){
    toyToSave.id = this.toy.id
    toyToSave.img = this.toy.img
    await this.toyService.save({...toyToSave}).toPromise()
    console.log('toyToSave', toyToSave);
    this.router.navigateByUrl('/toy')
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
