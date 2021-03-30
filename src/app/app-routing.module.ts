import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SingupComponent } from './pages/singup/singup.component';
import { ToyAppComponent } from './pages/toy-app/toy-app.component';
import { ToyDetailsComponent } from './pages/toy-details/toy-details.component';
import { ToyEditComponent } from './pages/toy-edit/toy-edit.component';
import { ToyResolverService } from './services/toy-resolver.service';

const routes: Routes = [
  {
    path: 'toy/edit/:id',
    component: ToyEditComponent,
    resolve: { toy: ToyResolverService }
  },
  {
    path: 'toy/edit',
    component: ToyEditComponent,
  },
  {
    path: 'toy/:id',
    component: ToyDetailsComponent,
    resolve: { toy: ToyResolverService }
  },
  {
    path: 'toy',
    component: ToyAppComponent
  },
  {
    path: 'singup',
    component: SingupComponent
  },
  {
    path: 'cart',
    component: CartDetailsComponent
  },
  {
  path: '',
  component: HomePageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
