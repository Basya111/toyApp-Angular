import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Toy } from '../models/toy.model';
import { ToyService } from './toy.service';

@Injectable({
  providedIn: 'root'
})
export class ToyResolverService{

  constructor(private toyService: ToyService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Toy>{
    const { id } = route.params
    return this.toyService.getById(id)
  }
}
