import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {animate, AnimationEvent, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('open', [
      state('true', style({ opacity: '1', top: '0'})),
      state('false', style({ opacity: '0', top: '-20px' })),
      transition('false => true', animate(100))
    ]),
    trigger('close', [
      state('true', style({ opacity: '1', top: '0' })),
      state('false', style({ opacity: '0', top: '20px' })),
      transition('true => false', animate(100))
    ]),
    trigger('openBackground', [
      state('true', style({ opacity: '0.4' })),
      state('false', style({ opacity: '0' })),
      transition('false => true', animate(50))
    ]),
    trigger('closeBackground', [
      state('true', style({ opacity: '0.4' })),
      state('false', style({ opacity: '0'})),
      transition('true => false', animate(100))
    ]),
  ],
})
export class ModalComponent implements OnInit {

  @Input()
  isOpen = false;

  @ViewChild('modalBody')
  modalBody!: ElementRef

  @Input()
  onTik = new EventEmitter();

  @Output()
  onClose = new EventEmitter<void>();

  @Input()
  width: string = '500px';
  private el: HTMLDivElement;


  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.el = this.element.nativeElement;
  }

  ngOnInit(): void {
    if(!this.isOpen){
      this.el.style.display = 'none';
    }
    this.onTik.subscribe(() => this.onTikEmit())
  }

  onTikEmit(){
    if(this.isOpen){
      this.close()
    } else {
      this.open()
    }
  }

  ngOnDestroy(): void {
    this.el.remove();
  }

  open(): void {
    this.el.style.display = 'flex';
    this.isOpen = true;
  }

  close(): void {
    this.isOpen = false;
  }

  onAnimationEvent(event: AnimationEvent) {
    console.log("=>(modal.component.ts:82) event", event);
    if(!this.isOpen){
      this.el.style.display = 'none';
      this.onClose.emit();
    }
  }

}
