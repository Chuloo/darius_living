import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SiteService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getVisitors() {
    return this.http.get('/api/visitors')
      .map(res => res.json());
  }
}