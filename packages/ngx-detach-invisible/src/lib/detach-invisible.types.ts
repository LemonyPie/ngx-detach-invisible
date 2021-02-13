import {ChangeDetectorRef, ElementRef} from "@angular/core";
import {DetachInvisibleService} from "./detach-invisible.service";

export interface IDetachInvisibleConfig {
  threshold: number
}

export interface DetachInvisibleProviders {
  elementRef: ElementRef;
  changeDetectorRef: ChangeDetectorRef;
  detachInvisibleService: DetachInvisibleService
}
