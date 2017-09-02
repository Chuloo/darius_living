import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReviewsService {

  constructor(private http: Http) { }

  getReviews(){
      return this.http.get('http://localhost:3000/api/reviews')
      .map(res => res.json())
  }

  addReview(newReview){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/review', JSON.stringify(newReview), {headers: headers})
    .map(res=>res.json());
  }

}
