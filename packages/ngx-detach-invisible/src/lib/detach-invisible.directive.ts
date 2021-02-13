import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  OnDestroy, OnInit
} from '@angular/core';
import {PROD_MODE, UnobserveSymbol} from './detach-invisible.const';
import {DetachInvisibleService} from "./detach-invisible.service";

@Directive({
  selector: '[detach-invisible]'
})
export class DetachInvisibleDirective implements OnInit, OnDestroy {
  constructor(
     private elementRef: ElementRef,
     private changeDetectorRef: ChangeDetectorRef,
     private detachInvisibleService: DetachInvisibleService
  ) {
  }

  [UnobserveSymbol]() {};

  public ngOnInit() {
    const unobserve = this.detachInvisibleService.observe(
      this.elementRef,
      this.changeDetectorRef
    );

    Reflect.defineProperty(
      this,
      UnobserveSymbol,
      {
        enumerable: false,
        writable: false,
        configurable: !PROD_MODE,
        value: unobserve
      }
    );
  }

  public ngOnDestroy() {
    this[UnobserveSymbol]();
  }
}
