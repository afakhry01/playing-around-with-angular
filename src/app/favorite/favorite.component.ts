import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isActive: boolean = false;
  myClasses = {
    fas : this.isActive,
    far : !this.isActive
  }
  onClick() {
    this.isActive = !this.isActive;
  }

  constructor() { }

  ngOnInit() {
  }

}
