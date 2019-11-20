import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name="sumanth";
  age = 10;
  imgURL ="https://www.gstatic.com/webp/gallery/1.jpg";
  str;
  constructor() { }

  ngOnInit() {
  }
  clickEvent(event){
    this.str = JSON.stringify(event);
    console.log(event);
     
  }
  
}

 