import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {ReviewsService} from '../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: User[];
  review: String;
  first_name: String;
  last_name: String;
   date_to;
  

  constructor(private reviewsService: ReviewsService) {
    this.date_to = new Date();
    this.reviewsService.getReviews()
    .subscribe(reviews =>{
      this.reviews = reviews.slice(-10).reverse();
      
    });
   }

   addReview(event){
    event.preventDefault();
    var newReview = {
      first_name: this.first_name,
      last_name: this.last_name,
      review: this.review,
      date_to: this.date_to
    }

    this.reviewsService.addReview(newReview)
    .subscribe(review =>{

      this.reviews.push(review);
      this.first_name ="";
      this.last_name ="";
      this.review ="";
      this.date_to ="";


    });
    
  }

  ngOnInit() {
  }

}
