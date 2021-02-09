import {
  ChangeDetectorRef,
  ElementRef,
  INJECTOR,
  ɵɵdirectiveInject as directiveInject,
} from '@angular/core';
import {DetachInvisibleService, UnobserveSymbol} from 'ngx-detach-invisible';

function decorateNgOnInit(
  ngOnInit: (() => void) | null | undefined
) {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  return function (this: any) {
    // Invoke the original `ngOnInit` if it exists
    ngOnInit && ngOnInit.call(this);

    const injector = directiveInject(INJECTOR);
    const detachInvisibleService = injector.get(DetachInvisibleService);
    const elementRef = injector.get(ElementRef);
    const changeDetectorRef = injector.get(ChangeDetectorRef);
    const unobserve = detachInvisibleService.observe(elementRef, changeDetectorRef);

    Reflect.defineProperty(
      this,
      UnobserveSymbol,
      {
        enumerable: false,
        writable: false,
        configurable: false,
        value: unobserve
      }
    );
  }
}

function decorateNgOnDestroy(
  ngOnDestroy: (() => void) | null | undefined
) {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  return function (this: any) {
    // Invoke the original `ngOnDestroy` if it exists
    ngOnDestroy && ngOnDestroy.call(this);

    if (!this[UnobserveSymbol]) {
      return;
    }

    this[UnobserveSymbol]();
  }
}

export function DetachInvisible(): ClassDecorator {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  return (cmpType: any) => {
    cmpType.prototype.ngOnInit = decorateNgOnInit(cmpType.prototype.ngOnInit);
    cmpType.prototype.ngOnDestroy = decorateNgOnDestroy(cmpType.prototype.ngOnDestroy);
  }
}
