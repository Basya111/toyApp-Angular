import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ToyAppComponent } from './pages/toy-app/toy-app.component';
import { ToyListComponent } from './cmps/toy-list/toy-list.component';
import { ToyPreviewComponent } from './cmps/toy-preview/toy-preview.component';
import { ToyDetailsComponent } from './pages/toy-details/toy-details.component';
import { ToyEditComponent } from './pages/toy-edit/toy-edit.component';
import { ToyFilterComponent } from './cmps/toy-filter/toy-filter.component';
import { FormsModule } from '@angular/forms';
import { AddReviewComponent } from './cmps/add-review/add-review.component';
import { ShowReviewComponent } from './cmps/show-review/show-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToyRateComponent } from './cmps/toy-rate/toy-rate.component';
import { SingupComponent } from './pages/singup/singup.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { CartDetailsPreviewComponent } from './cmps/cart-details-preview/cart-details-preview.component';
import { ShortTxtPipe } from './pipes/short-txt.pipe';
import { WishListModalComponent } from './cmps/wish-list-modal/wish-list-modal.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { ToastGlobalComponent } from './cmps/toast-global/toast-global.component';
import { ToastsComponent } from './cmps/toasts/toasts.component';
import { BuyModalComponent } from './cmps/buy-modal/buy-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomePageComponent,
    ToyAppComponent,
    ToyListComponent,
    ToyPreviewComponent,
    ToyDetailsComponent,
    ToyEditComponent,
    ToyFilterComponent,
    AddReviewComponent,
    ShowReviewComponent,
    ToyRateComponent,
    SingupComponent,
    CartDetailsComponent,
    CartDetailsPreviewComponent,
    ShortTxtPipe,
    WishListModalComponent,
    FooterComponent,
    ToastGlobalComponent,
    ToastsComponent,
    BuyModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
