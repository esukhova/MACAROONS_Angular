import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[btnBackground]'
})
export class BtnBackgroundDirective implements OnInit {

  constructor(private el: ElementRef,
              private rend: Renderer2) { }

  @Input() btnBackgroundDefaultBg: string = 'linear-gradient(90deg, rgb(113, 8, 30), rgb(215, 72, 92))';
  @Input() btnBackgroundFocusBg: string = 'linear-gradient(90deg, rgb(113, 8, 80), rgb(215, 72, 92))';

  @HostListener('mouseover')
  onMouseover() {
    this.changeBtnBg(this.btnBackgroundFocusBg);
  }

  @HostListener('mouseout')
  onMouseout() {
    this.changeBtnBg(this.btnBackgroundDefaultBg);
  }

  ngOnInit() {
    this.changeBtnBg(this.btnBackgroundDefaultBg);
  }

  changeBtnBg(background: string) {
    this.rend.setStyle(this.el.nativeElement, 'background', background);
  }
}
