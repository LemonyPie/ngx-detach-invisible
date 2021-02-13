import {ChangeDetectorRef, ElementRef, OnDestroy, OnInit} from "@angular/core";
import {PROD_MODE, UnobserveSymbol} from "./detach-invisible.const";
import {DetachInvisibleService} from "./detach-invisible.service";

const composeProvidersErrorMessage = (provider: string): string => `
  "${provider}" was not injected in class constructor.\n
  Please provide "DetachInvisibleService", "ElementRef", "ChangeDetectorRef"
`

/** @deprecated is a dirty hacky way to add DetachInvisibleDirective to a class which already extends another class */
export function DetachInvisible(): ClassDecorator {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  return (cmpType: any) => {
    class Decorator extends Object.getPrototypeOf(cmpType) implements OnInit, OnDestroy {
      // as this class stands in between on component and component's base class
      // and we don't know which providers component's superclass uses
      // we can't specify constructor, therefore it is required for component to inject there dependencies
      private elementRef: ElementRef | undefined;
      private changeDetectorRef: ChangeDetectorRef | undefined;
      private detachInvisibleService: DetachInvisibleService | undefined;

      [UnobserveSymbol]() { };

      /**
       * @throws { Error } if providers were not specified in constructor
       */
      public ngOnInit(): void | never {
        super.ngOnInit && super.ngOnInit();

        // TODO: check for all providers at once
        if (!this.detachInvisibleService) { throw new Error(composeProvidersErrorMessage('DetachInvisibleService')); }
        if (!this.elementRef) { throw new Error(composeProvidersErrorMessage("ElementRef")); }
        if (!this.changeDetectorRef) { throw new Error(composeProvidersErrorMessage("ChangeDetectorRef")); }

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
        super.ngOnDestroy && super.ngOnDestroy();

        this[UnobserveSymbol]();
      }
    }

    Object.setPrototypeOf(cmpType, Decorator);
    Object.setPrototypeOf(cmpType.prototype, Decorator.prototype);

    return cmpType;
  }
}
