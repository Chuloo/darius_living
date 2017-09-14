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
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1503084366/dariusliving/DSC_1006.jpg", "caption": "Parking Lot" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1505142654/lock_eewnql.jpg", "caption": "Sturdy Security Door" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1505142654/kitchen_qdo0kl.jpg", "caption": "Full Kitchen" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1505142716/DSC_0953_cfamoy.jpg", "caption": "Wardrobe" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1505142704/DSC_0927_x6sweu.jpg", "caption": "Exquisite Lighting" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1505142736/DSC_0891_ryot0m.jpg", "caption": "Glassware" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1505142737/DSC_0887_w30ta0.jpg", "caption": "Mini-Bar" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1505143546/pool_side_icumn1.jpg", "caption": "Pool Side" },
      { "url": "http://res.cloudinary.com/chuloo/image/upload/v1505143547/DSC_0889_eyvmoc.jpg", "caption": "Champagne" }
    ];
  }
  navigate(forward){
    var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
    if(index >= 0 && index < this.datasource.length){
       this.selectedImage = this.datasource[index];	
    }
 }

  ngOnInit() {
  }

}
