import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { ReviewsComponent } from './reviews/reviews.component';
import {UserService} from './services/user.service';
import {ReviewsService} from './services/reviews.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NavComponent } from './nav/nav.component';
import { MapComponent } from './map/map.component';
import { RatesComponent } from './rates/rates.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';
import { AgmCoreModule } from '@agm/core';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';



const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'overview', component: OverviewComponent},
  {path:'reviews', component: ReviewsComponent},
  {path:'map', component: MapComponent},
  {path:'rates', component: RatesComponent},
  {path:'availability', component: AvailabilityComponent},
  {path:'contact', component: ContactComponent},
  {path:'book', component: BookComponent},
  {path:'admindariusliving54321', component: AdminComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'footer', component: FooterComponent},
  {path:'gallery', component: GalleryComponent}



]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    ReviewsComponent,
    NavComponent,
    MapComponent,
    RatesComponent,
    AvailabilityComponent,
    ContactComponent,
    BookComponent,
    AdminComponent,
    GalleryComponent,
    FooterComponent,
    GalleryComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBjsfJ_bPisR-4GiiLLkpii77_JgFF5ws4'
    })

  ],

  providers: [UserService, ReviewsService],

  
  bootstrap: [AppComponent]
})
export class AppModule { }
