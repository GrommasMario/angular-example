import {Component, OnInit, Output, ViewChild, EventEmitter, Input, ElementRef, HostListener} from '@angular/core';
import {Game} from "../../models/Game";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  animations: [
    trigger('hoverOnInformation', [
      state('true', style({ borderRadius: '10px', width: '220px', height: '220px' })),
      state('false', style({ borderRadius: '50%',  width: '190px', height: '190px' })),
      transition('false => true', animate(100))
    ]),
    trigger('hoverOffInformation', [
      state('true', style({ borderRadius: '10px',  width: '220px', height: '220px'})),
      state('false', style({ borderRadius: '50%',  width: '190px', height: '190px' })),
      transition('true => false', animate(100))
    ]),
    trigger('hoverOnImage', [
      state('true', style({ opacity: '1' })),
      state('false', style({ opacity: '0' })),
      transition('false => true', animate(50))
    ]),
    trigger('hoverOffImage', [
      state('true', style({ opacity: '1' })),
      state('false', style({ opacity: '0'})),
      transition('true => false', animate(100))
    ]),
  ],
})
export class GameCardComponent implements OnInit {
  @Input()
  defaultEmptyImage = '';
  @Input()
  isButton: boolean = false;

  @Input()
  game: Game | null = null;

  hover = false;


  @Output()
  onFillByGame = new EventEmitter<Game>();

  @Output()
  onClearGame = new EventEmitter<Game>();

  constructor(public el: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover = false;
  }

  ngOnInit(): void {
  }

  onClickCard(){
    if(this.game !== null){
      this.toDeletePopUp();
    } else {
      this.toAddPopUp();
    }
  }

  toDeletePopUp(){
    this.onClearGame.emit(this.game!)
  }

  toAddPopUp(){
    this.onClearGame.emit(this.game!)
  }
}
