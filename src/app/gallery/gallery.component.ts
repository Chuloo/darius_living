import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

caption: any;



  datasource;

  images;

  selectedImage;

  setSelectedImage(image) {
    this.selectedImage = image;
  }

  constructor() { 
    this.datasource = [
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1504171197/DSC_0999_p2i4oo.jpg", "caption": "Flat Number" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1504171200/shoprite_tqvsub.jpg", "caption":"The Mall" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1504171199/microwave_yhkbdm.jpg", "caption": "Microwave" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1504171199/juice_mixer_rqizf7.jpg", "caption": "Juice Mixer" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1504171196/kitchenette_c3jvcg.jpg", "caption": "Kitchenette" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1504139466/DSC_0994_nieqcj.jpg", "caption": "Access Control" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1504139486/DSC_0962_tytvap.jpg", "caption": "Bathroom" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1503084366/dariusliving/DSC_1006.jpg", "caption": "Parking Lot" }
      // { "url": "http://res.cloudinary.com/chuloo/image/upload/v1504171197/DSC_0999_p2i4oo.jpg" },
      // { "url": "http://res.cloudinary.com/chuloo/image/upload/v1504171197/DSC_0999_p2i4oo.jpg" },
      // { "url": "http://res.cloudinary.com/chuloo/image/upload/v1504171197/DSC_0999_p2i4oo.jpg" },
      // { "url": "http://res.cloudinary.com/chuloo/image/upload/v1504171197/DSC_0999_p2i4oo.jpg" }
    ];
  }

  ngOnInit() {
  }

}
