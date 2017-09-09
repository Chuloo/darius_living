import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
lat: number = 6.464942;
  lng: number = 3.303171;
  constructor() { }

  ngOnInit() {
  }

}
