import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://d2a2wjuuf1c30f.cloudfront.net/product_photos/29089691/murakami-blog_original.jpg';
  image3 = 'https://media.newyorker.com/photos/5f6299960fc96ad919ad25e7/master/pass/200928_r37098.jpg';

  constructor() { }

  ngOnInit() {
  }

}