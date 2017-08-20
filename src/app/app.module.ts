import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SiteService } from './site.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NavComponent } from './nav/nav.component';
import { MapComponent } from './map/map.component';
import { RatesComponent } from './rates/rates.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';



const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'overview', component: OverviewComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'reviews', component: ReviewsComponent},
  {path:'map', component: MapComponent},
  {path:'rates', component: RatesComponent},
  {path:'availability', component: AvailabilityComponent},
  {path:'contact', component: ContactComponent},
  {path:'book', component: BookComponent}


]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    GalleryComponent,
    ReviewsComponent,
    NavComponent,
    MapComponent,
    RatesComponent,
    AvailabilityComponent,
    ContactComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot()

  ],
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
