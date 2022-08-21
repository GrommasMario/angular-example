import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isOpenSlide = true;
  gridTemplateRow: `${number}px ${number}fr` = '200px 1fr';

  constructor() { }

  setSlide(px: number){
    this.gridTemplateRow = `${px}px 1fr`;
  }

  toSlide(){
    this.isOpenSlide ? this.setSlide(80) : this.setSlide(200);
    this.isOpenSlide = !this.isOpenSlide;
  }

  ngOnInit(): void {
  }

}
