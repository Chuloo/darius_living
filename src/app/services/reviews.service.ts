import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReviewsService {

  constructor(private http: Http) { }

  getReviews(){
      return this.http.get('https://dariusliving.herokuapp.com/api/reviews')
      .map(res => res.json())
  }

  addReview(newReview){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://dariusliving.herokuapp.com/api/review', JSON.stringify(newReview), {headers: headers})
    .map(res=>res.json());
  }

  /*getTime(){
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() +':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();
                 return (date + '' + time);
  };*/

}
