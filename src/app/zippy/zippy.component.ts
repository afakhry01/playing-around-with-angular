import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

@Input('title') title;
@Input('content') content;

isSelected:boolean = false;

onClick() {
  this.isSelected = !this.isSelected;
}

}
